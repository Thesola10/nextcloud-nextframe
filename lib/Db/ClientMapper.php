<?php

namespace OCA\NextFrame\Db;

// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\AppFramework\Db\QBMapper;

class ClientMapper extends QBMapper {
    public function __construct(IDBConnection $db) {
        parent::__construct($db, 'nextframe_clients');
    }

    public function find(int $id) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from($this->tableName)
           ->where(
               $qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT))
           );

        return $this->findEntity($qb);
    }

    public function findByToken(string $clientId) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from($this->tableName)
           ->where(
               $qb->expr()->eq('client_id', $qb->createNamedParameter($clientId, IQueryBuilder::PARAM_STR))
           );

        return $this->findEntity($qb);
    }

    public function getClients(): array {
        $qb = $this->db->getQueryBuilder();
        $qb->select('*')->from($this->tableName);

        return $this->findEntities($qb);
    }
}
