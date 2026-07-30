<?php
declare( strict_types=1 );

namespace Portfolio;

final class Mailer {

	public static function send( ContactMessage $message ): bool {
		$subject = sprintf( '[%s] New message from %s', Config::get( 'site_name' ), $message->name );

		$body  = "Name: {$message->name}\n";
		$body .= "Email: {$message->email}\n\n";
		$body .= "Message:\n{$message->message}\n";

		$headers   = array();
		$headers[] = 'From: ' . Config::get( 'site_name' ) . ' <no-reply@' . self::hostDomain() . '>';
		$headers[] = 'Reply-To: ' . $message->name . ' <' . $message->email . '>';
		$headers[] = 'Content-Type: text/plain; charset=utf-8';

		return (bool) @mail( Config::get( 'recipient_email' ), $subject, $body, implode( "\r\n", $headers ) );
	}

	private static function hostDomain(): string {
		$host = (string) ( $_SERVER['HTTP_HOST'] ?? 'localhost' );

		return preg_replace( '/^www\./', '', $host );
	}
}
