<?php

    function checkConnection() {
        $db = new Database();
        $connection = $db->getConnection();
        if($connection == null) {
            Response::sendResponse(false, "Database connection error.", $connection);
            exit();
        }
        return $connection;
    }

    function checkInputData($data) {
        if(empty($data)) {
            Response::sendResponse("Forbidden", "The page is not accessible.", []);
            exit();
        }
    }

    function checkRead($object) {
        $result = $object->readMode();
        if($result->num_rows == 0) {
            Response::sendResponse(false, "No records found.", []);
            exit();
        }
        return $result;
    }

    function checkUpdate($object) {
        $result = $object->update();
        if(!$result) {
            Response::sendResponse(false, "Please check your sql query.", []);
            exit();
        }
        return $result;
    }

    function getResultData($result) {
        $data = [];
        while($row = $result->fetch_assoc()) {
            extract($row);
            $list = [
                "app_id" => $app_id,        
                "app_mode" => $app_mode,  
                "app_datetime" => $app_datetime,               
            ];
            array_push($data, $list);
        }
        return $data;
    }