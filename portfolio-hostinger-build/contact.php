<?php
/**
 * Contact form handler.
 *
 * Deploy this file at the site root (same folder as index.html after
 * `next build`) so the frontend's fetch('/contact.php') resolves correctly
 * on Hostinger shared hosting.
 *
 * Update RECIPIENT_EMAIL below before deploying.
 */

declare( strict_types=1 );

const RECIPIENT_EMAIL = 'mdrofiqulislam01516@gmail.com';
const SITE_NAME        = 'rofiqul.dev';

header( 'Content-Type: application/json; charset=utf-8' );

function respond( int $status, array $payload ): void {
	http_response_code( $status );
	echo json_encode( $payload );
	exit;
}

if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
	respond( 405, array( 'ok' => false, 'error' => 'Method not allowed.' ) );
}

// Honeypot: bots tend to fill every field, humans never see this one.
if ( ! empty( $_POST['company'] ) ) {
	respond( 200, array( 'ok' => true ) ); // pretend success, drop silently
}

$name    = trim( (string) ( $_POST['name'] ?? '' ) );
$email   = trim( (string) ( $_POST['email'] ?? '' ) );
$message = trim( (string) ( $_POST['message'] ?? '' ) );

if ( $name === '' || $email === '' || $message === '' ) {
	respond( 422, array( 'ok' => false, 'error' => 'All fields are required.' ) );
}

if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
	respond( 422, array( 'ok' => false, 'error' => 'Invalid email address.' ) );
}

if ( mb_strlen( $message ) > 5000 ) {
	respond( 422, array( 'ok' => false, 'error' => 'Message is too long.' ) );
}

// Strip header-injection attempts from the display name.
$safe_name = preg_replace( '/[\r\n]+/', ' ', $name );

$subject = sprintf( '[%s] New message from %s', SITE_NAME, $safe_name );

$body  = "Name: {$safe_name}\n";
$body .= "Email: {$email}\n\n";
$body .= "Message:\n{$message}\n";

// Envelope sender stays on your own domain; Reply-To is the visitor's
// address so you can hit "reply" directly.
$headers   = array();
$headers[] = 'From: ' . SITE_NAME . ' <no-reply@' . preg_replace( '/^www\./', '', (string) ( $_SERVER['HTTP_HOST'] ?? 'localhost' ) ) . '>';
$headers[] = 'Reply-To: ' . $safe_name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=utf-8';

$sent = @mail( RECIPIENT_EMAIL, $subject, $body, implode( "\r\n", $headers ) );

if ( ! $sent ) {
	respond( 500, array( 'ok' => false, 'error' => 'Could not send message.' ) );
}

respond( 200, array( 'ok' => true ) );
