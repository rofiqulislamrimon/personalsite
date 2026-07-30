<?php
declare( strict_types=1 );

/**
 * Minimal autoloader — maps the Portfolio\* namespace to php/src/*.php.
 * No Composer required, so this runs on plain Hostinger shared hosting
 * with zero setup.
 */
spl_autoload_register(
	function ( string $class ): void {
		$prefix = 'Portfolio\\';

		if ( 0 !== strncmp( $prefix, $class, strlen( $prefix ) ) ) {
			return;
		}

		$relative = substr( $class, strlen( $prefix ) );
		$file     = __DIR__ . '/src/' . str_replace( '\\', '/', $relative ) . '.php';

		if ( is_file( $file ) ) {
			require $file;
		}
	}
);
