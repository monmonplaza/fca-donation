<?php
    try {        
        include_once("../../../common/package.php");
        include_once("../../config.php");
        include_once("../functions.php");  

        // GET SOURCE OBJECT
        $body = file_get_contents('php://input');
        // checkSourceData($body);        	

        // DECODE BODY
        $data = json_decode($body);
        $before = $data->before;
        
        $payload = "limit=25&ending_before={$before}";

        $url = "https://api.stripe.com/v1/products";
        $result = fetchData($url, $payload, "GET");
        echo $result;
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
