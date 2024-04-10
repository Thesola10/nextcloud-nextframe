<?php

declare(strict_types=1);

namespace OCA\NextFrame\Controller;

use OCA\NextFrame\Db\Client;
use OCA\NextFrame\Db\ClientMapper;
use OCA\NextFrame\Db\AncestorUri;
use OCA\NextFrame\Db\AncestorUriMapper;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\Security\ISecureRandom;

class SettingsController extends Controller
{
    private $clientMapper;
    private $secureRandom;
    private $ancestorMapper;

    public const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    public function __construct(string $appName
                                , IRequest $request
                                , ClientMapper $clientMapper
                                , ISecureRandom $secureRandom
                                , AncestorUriMapper $ancestorMapper)
    {
        parent::__construct($appName, $request);
        $this->secureRandom = $secureRandom;
        $this->clientMapper = $clientMapper;
        $this->ancestorMapper = $ancestorMapper;
    }

    public function addClient( string $name
                             , string $ancestorUri): JSONResponse
    {
        if (filter_var($ancestorUri, FILTER_VALIDATE_URL) === false) {
            return new JSONResponse([ 'message' => "The ancestor URL needs to be a full URL. For example: https://example.com/"]
                                   , Http::STATUS_BAD_REQUEST);
        }

        $client = new Client();
        $client->setName($name);
        $client->setClientId($this->secureRandom->generate(64, self::validChars));
        $client = $this->clientMapper->insert($client);

        $ancestor = new AncestorUri();
        $ancestor->setClientId($client->getId());
        $ancestor->setAncestorUri($ancestorUri);
        $ancestor = $this->ancestorMapper->insert($ancestor);

        $ancestorUris = $this->ancestorMapper->findByClient($client->getId());
        $resultAncestors = [];
        foreach ($ancestorUris as $uri) {
            $resultAncestors[] = [
                'id' => $uri->getId(),
                'client_id' => $uri->getClientId(),
                'ancestor_uri' => $uri->getAncestorUri(),
            ];
        }

        $result = [
            'id' => $client->getId(),
            'name' => $client->getName(),
            'ancestorUri' => $resultAncestors,
            'clientId' => $client->getClientId(),
        ];
        return new JSONResponse($result);
    }

    public function deleteClient(int $id): JSONResponse
    {
        $client = $this->clientMapper->find($id);
        $ancestorUris = $this->ancestorMapper->findByClient($id);
        foreach ($ancestorUris as $uri) {
            $this->ancestorMapper->delete($uri);
        }
        $this->clientMapper->delete($client);
        return new JSONResponse([]);
    }

    public function addAncestorUri(int $id, string $ancestorUri): JSONResponse
    {
        $ancestor = new AncestorUri();
        $ancestor->setClientId($id);
        $ancestor->setAncestorUri($ancestorUri);
        $ancestor = $this->ancestorMapper->insert($ancestor);

        $clients = $this->clientMapper->getClients();

        $result = [];

        foreach ($clients as $client) {
            $ancestorUris = $this->ancestorMapper->findByClient($client->getId());
            $resultAncestors = [];
            foreach($ancestorUris as $uri) {
                $resultAncestors[] = [
                    'id' => $uri->getId(),
                    'client_id' => $uri->getClientId(),
                    'ancestor_uri' => $uri->getAncestorUri(),
                ];
            }
            $result[] = [
                'id' => $client->getId(),
                'name' => $client->getName(),
                'ancestorUri' => $resultAncestors,
                'clientId' => $client->getClientId(),
            ];
        }
        return new JSONResponse($result);
    }

    public function deleteAncestorUri(int $id): JSONResponse
    {
        $ancestor = $this->ancestorMapper->find($id);
        $this->ancestorMapper->delete($ancestor);

        $clients = $this->clientMapper->getClients();

        $result = [];

        foreach ($clients as $client) {
            $ancestorUris = $this->ancestorMapper->findByClient($client->getId());
            $resultAncestors = [];
            foreach($ancestorUris as $uri) {
                $resultAncestors[] = [
                    'id' => $uri->getId(),
                    'client_id' => $uri->getClientId(),
                    'ancestor_uri' => $uri->getAncestorUri(),
                ];
            }
            $result[] = [
                'id' => $client->getId(),
                'name' => $client->getName(),
                'ancestorUri' => $resultAncestors,
                'clientId' => $client->getClientId(),
            ];
        }
        return new JSONResponse($result);
    }
}
