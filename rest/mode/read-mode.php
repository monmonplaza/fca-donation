<?php
    try{
        include_once("../common/package.php");
        include_once("Mode.php");
        include_once("functions-mode.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        // checkInputData($data);    
        $connection = checkConnection();
        $mode = new Mode($connection);
        // $mode->app_id = filter_var($data["appId"], FILTER_SANITIZE_STRING);   
       
        $result = checkRead($mode);
        $data = getResultData($result);
        Response::sendResponse(true, "Mode data found.", $data);
        exit();
   
  
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase of system-code error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }