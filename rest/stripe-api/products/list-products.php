<?php
    try {        
        include_once("../../config/acc-config.php"); 
        include_once("../stripe-functions.php");  

        // GET SOURCE OBJECT
        $body = file_get_contents('php://input');
        // checkSourceData($body);        	

        // DECODE BODY
        $data = json_decode($body);

        $payload = "limit=25";
            
        $url = "https://api.stripe.com/v1/products";
        $result = fetchData($url, $payload, "GET");
        echo $result;
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
