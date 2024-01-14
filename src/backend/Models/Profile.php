<?php

namespace Models;

include(__DIR__ . '/../Config/DatabaseConfig.php');

use Config\DatabaseConfig;
use mysqli;

class Profile extends DatabaseConfig
{
    public $conn;


    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function findAll()
    {
        $sql = "SELECT id, gambar FROM db_cvweb";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }


    public function createData($data)
    {
        $query = "INSERT INTO db_cvweb gambar) VALUES (?, ?)";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param(
            "sssi",
            $data['gambar'],
            $data['deskripsi'],
        );

        $stmt->execute();
        $this->conn->close();
    }

    // Proses update data dengan id
    public function updateData($data, $id)
    {

        $gambar = $data['gambar'];
        $deskripsi = $data['deskripsi'];

        $query = "
            UPDATE hobi
            SET
                gambar = ?,
                deskripsi = ?
            WHERE
                id = ?
        ";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssii", $gambar, $deskripsi, $id);
        $stmt->execute();
        $stmt->close();
        $this->conn->close();
    }
}
