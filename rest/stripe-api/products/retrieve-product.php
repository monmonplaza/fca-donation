<?php
    try {        
        include_once("../../../common/package.php");
        include_once("../../config.php");
        include_once("../functions.php");  

        // GET SOURCE OBJECT
        $body = file_get_contents('php://input');
        checkSourceData($body);        	

        // DECODE BODY
        $data = json_decode($body);
        $product = $data->product;
            
        $url = "https://api.stripe.com/v1/products/{$product}";
        $result = fetchData($url, $payload, "GET");
        echo $result;
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
