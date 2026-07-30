<?php
declare( strict_types=1 );

namespace Portfolio;

use PDO;
use PDOException;

/**
 * Thin wrapper around a single shared PDO connection to MySQL.
 */
final class Database {

	/** @var PDO|null */
	private static $connection = null;

	public static function connection(): PDO {
		if ( self::$connection instanceof PDO ) {
			return self::$connection;
		}

		$dsn = sprintf(
			'mysql:host=%s;dbname=%s;charset=%s',
			Config::get( 'db_host' ),
			Config::get( 'db_name' ),
			Config::get( 'db_charset' )
		);

		try {
			self::$connection = new PDO(
				$dsn,
				Config::get( 'db_user' ),
				Config::get( 'db_pass' ),
				array(
					PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
					PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
					PDO::ATTR_EMULATE_PREPARES   => false,
				)
			);
		} catch ( PDOException $e ) {
			// Never leak DSN/credentials to the client.
			error_log( 'Database connection failed: ' . $e->getMessage() );
			throw new PDOException( 'Database connection failed.' );
		}

		return self::$connection;
	}
}
