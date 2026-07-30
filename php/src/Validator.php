<?php
declare( strict_types=1 );

namespace Portfolio;

final class Validator {

	/**
	 * @return string[] List of error messages; empty array means valid.
	 */
	public static function validateContact( string $name, string $email, string $message ): array {
		$errors = array();

		if ( '' === $name || '' === $email || '' === $message ) {
			$errors[] = 'All fields are required.';
		}

		if ( '' !== $email && ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
			$errors[] = 'Invalid email address.';
		}

		if ( mb_strlen( $message ) > 5000 ) {
			$errors[] = 'Message is too long.';
		}

		if ( mb_strlen( $name ) > 255 ) {
			$errors[] = 'Name is too long.';
		}

		return $errors;
	}
}
