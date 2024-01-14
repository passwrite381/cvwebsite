<?php

namespace Controller;

include(__DIR__ . '/../Traits/ApiResponseFormatter.php');
include(__DIR__ . '/../Models/Profile.php');

use Models\Profile;
use Traits\ApiResponseFormatter;

class ProfileController
{
    // Memakai TRAIT yang sudah dibuat
    use ApiResponseFormatter;

    public function index()
    {
        $productModel = new Profile();
        $response = $productModel->findAll();
        return $this->apiResponse(200, "success", $response);
    }

    public function insertImage()
    {

        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }


        $productModel = new Profile();
        $response = $productModel->createData([
            "gambarlogo" => $inputData['gambarlogo'],
        ]);

        return $this->apiResponse(200, "success", $response);
    }

    public function updateImage($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }
        $hobiModel = new Profile();
        $response = $hobiModel->updateData([
            "gambarlogo" => $inputData['gambarlogo']
        ], $id);

        // Berikan respons API
        return $this->apiResponse(200, "success", $response);
    }
}
