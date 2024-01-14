<?php

namespace Routes;

include(__DIR__ . '/../Controller/ProfileController.php');

use Controller\ProfileController;

class ProfileRoutes
{
    public function handle($method, $path)
    {

        if ($method === 'GET' && $path === '/api/images') {
            $controller = new ProfileController();
            echo $controller->index();
        }


        if ($method === 'POST' && $path === '/api/addImage') {
            $controller = new ProfileController();
            echo $controller->insertImage();
        }

        if ($method === 'PUT' && strpos($path, '/api/gambar/update') === 0) {

            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProfileController();
            echo $controller->updateImage($id);
        }
    }
}
