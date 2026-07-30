<?php
declare( strict_types=1 );

namespace Portfolio;

/**
 * Central configuration.
 *
 * The defaults below are safe placeholders meant to be committed to git.
 * Real credentials go in php/config.local.php instead — copy
 * config.local.php.example to config.local.php, fill it in, and it will
 * be picked up automatically. config.local.php is gitignored, so your
 * real DB password never ends up in the repo.
 */
final class Config {

	/** @var array<string, string> */
	private static $values = array();

	private static $loaded = false;

	public static function load(): void {
		self::$values = array(
			'db_host'         => 'localhost',
			'db_name'         => 'your_database_name',
			'db_user'         => 'your_database_user',
			'db_pass'         => 'your_database_password',
			'db_charset'      => 'utf8mb4',
			'recipient_email' => 'mdrofiqulislam01516@gmail.com',
			'site_name'       => 'rofiqul.dev',
		);

		$local = __DIR__ . '/../config.local.php';

		if ( is_file( $local ) ) {
			$overrides = require $local;

			if ( is_array( $overrides ) ) {
				self::$values = array_merge( self::$values, $overrides );
			}
		}

		self::$loaded = true;
	}

	public static function get( string $key ): string {
		if ( ! self::$loaded ) {
			self::load();
		}

		return self::$values[ $key ] ?? '';
	}
}
