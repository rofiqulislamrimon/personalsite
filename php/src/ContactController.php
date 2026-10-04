<?php
declare( strict_types=1 );

namespace Portfolio;

use Throwable;

final class ContactController {

	/**
	 * @param array<string, mixed> $post
	 */
	public function handle( array $post ): void {
		header( 'Content-Type: application/json; charset=utf-8' );

		if ( 'POST' !== ( $_SERVER['REQUEST_METHOD'] ?? '' ) ) {
			$this->respond( 405, array( 'ok' => false, 'error' => 'Method not allowed.' ) );
		}

		// Honeypot: bots fill every field, real visitors never see this one.
		if ( ! empty( $post['company'] ) ) {
			$this->respond( 200, array( 'ok' => true ) );
		}

		$name    = trim( (string) ( $post['name'] ?? '' ) );
		$email   = trim( (string) ( $post['email'] ?? '' ) );
		$message = trim( (string) ( $post['message'] ?? '' ) );

		$errors = Validator::validateContact( $name, $email, $message );

		if ( ! empty( $errors ) ) {
			$this->respond( 422, array( 'ok' => false, 'error' => $errors[0] ) );
		}

		$safeName = (string) preg_replace( '/[\r\n]+/', ' ', $name );
		$ip       = (string) ( $_SERVER['REMOTE_ADDR'] ?? '' );

		$contact = new ContactMessage( $safeName, $email, $message, $ip );

		// Persisting and emailing are independent: a message must survive
		// either a broken mail() or a failed DB write.
		$saved = false;

		try {
			$contact->save();
			$saved = true;
		} catch ( Throwable $e ) {
			error_log( 'Contact save failed: ' . $e->getMessage() );
		}

		$mailed = Mailer::send( $contact );

		if ( ! $mailed && ! $saved ) {
			$this->respond( 500, array( 'ok' => false, 'error' => 'Could not send message.' ) );
		}

		$this->respond(
			200,
			array(
				'ok'      => true,
				'saved'   => $saved,
				'mailed'  => $mailed,
			)
		);
	}

	/**
	 * @param array<string, mixed> $payload
	 */
	private function respond( int $status, array $payload ): void {
		http_response_code( $status );
		echo json_encode( $payload );
		exit;
	}
}
