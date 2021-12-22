<?php
    
    try{
        include_once("../../config/acc-config.php"); 
       
        Response::sendResponse(true, "Access granted", STRIPE_SK, USERNAME);
        exit();
  
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase of system-code error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }
