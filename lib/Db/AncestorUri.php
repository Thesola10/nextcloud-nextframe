<?php

namespace OCA\NextFrame\Db;

use OCP\AppFramework\Db\Entity;

/**
 * @method int getId()
 * @method string getClientId()
 * @method void setClientId(int $identifier)
 * @method string getAncestorUri()
 * @method void setAncestorUri(string $ancestorUri)
 */
class AncestorUri extends Entity {
    public int $id;
    protected string $clientId;
    protected string $ancestorUri;

    public function __construct() {
        $this->addType('id', 'int');
        $this->addType('client_id', 'int');
        $this->addType('ancestor_uri', 'string');
    }
}
