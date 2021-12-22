<?php
    try {
        include_once("../common/package.php");
        include_once("Mode.php");
        include_once("functions-mode.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $mode = new Mode($connection);
        $mode->app_mode = filter_var($data["mode"], FILTER_SANITIZE_STRING);
        $mode->app_id = filter_var($data["appId"], FILTER_SANITIZE_STRING);
        $mode->app_datetime = date("Y-m-d H:i:s");             
       
        $result = checkUpdate($mode);
       
        Response::sendResponse(true, "Mode successfuly updated.", $result);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  