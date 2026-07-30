<?php
declare( strict_types=1 );

namespace Portfolio;

/**
 * A single contact-form submission, and its own persistence logic
 * (simple Active Record style — fine at this scale).
 */
final class ContactMessage {

	/** @var string */
	public $name;

	/** @var string */
	public $email;

	/** @var string */
	public $message;

	/** @var string */
	public $ipAddress;

	public function __construct( string $name, string $email, string $message, string $ipAddress = '' ) {
		$this->name      = $name;
		$this->email     = $email;
		$this->message   = $message;
		$this->ipAddress = $ipAddress;
	}

	/**
	 * Insert this message into the contact_messages table.
	 *
	 * @return int Inserted row ID.
	 */
	public function save(): int {
		$stmt = Database::connection()->prepare(
			'INSERT INTO contact_messages (name, email, message, ip_address, created_at)
			 VALUES (:name, :email, :message, :ip_address, NOW())'
		);

		$stmt->execute(
			array(
				'name'       => $this->name,
				'email'      => $this->email,
				'message'    => $this->message,
				'ip_address' => $this->ipAddress,
			)
		);

		return (int) Database::connection()->lastInsertId();
	}

	/**
	 * Fetch the most recent messages — handy for a future admin view.
	 *
	 * @return array<int, array<string, mixed>>
	 */
	public static function recent( int $limit = 50 ): array {
		$stmt = Database::connection()->prepare(
			'SELECT id, name, email, message, created_at
			 FROM contact_messages
			 ORDER BY created_at DESC
			 LIMIT :limit'
		);
		$stmt->bindValue( ':limit', $limit, \PDO::PARAM_INT );
		$stmt->execute();

		return $stmt->fetchAll();
	}
}
