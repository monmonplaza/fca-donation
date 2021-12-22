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
         $key = $data->key;
         $product = $data->product;
         $customer = $data->customer;
         $amount = $data->amount;
         $startDate = $data->startDate;
         $endDate = $data->endDate;
         $manualDonation = "{$startDate}.{$endDate}.{$amount}_stop.{$customer}_stop";
        //  $manualDonation = "{$startDate}.{$endDate}.{$amount}.{$customer}";

        $payload = "metadata[{$key}]={$manualDonation}"; 
        // $payload .= "metadata[stop{$key}]={$manualDonation}"; 
            
        $url = "https://api.stripe.com/v1/products/{$product}";
        $result = fetchData($url, $payload, "POST");
        echo $result;
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
