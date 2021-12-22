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
         $meta = $data->metadata;
         $product = $data->product;
         $customer = $data->customer;
         $startDate = $data->startDate;
         $endDate = $data->endDate;
         $amount = $data->amount * 100;
         $manualDonation = "{$startDate}_{$endDate}_{$amount}_{$customer}";
        //  $name = $data->name;
        //  $statement_descriptor = "FTC Sponsorship";
        //  $story = $data->story;
        //  $images = $data->images[0];
        //  $classification = $data->classification;
        //  $birthday = $data->birthday;

        $payload = "metadata[amount5]={$manualDonation}"; 
        // $payload .=  "&statement_descriptor={$statement_descriptor}";
        // $payload .=  "&metadata[class]={$classification}";
        // $payload .=  "&metadata[birthday]={$birthday}";

        // $payload = "name={$name}&description={$description}&images[0]={$images}"; 
        // $payload =  "name=Child 3&description=My child 3&images[0]=https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/child2.jpg";      
        // $payload .=  "&metadata[prod1]=prod_FP9i1lLlkxSdfp";
        // $payload .=  "&metadata[prod2]=prod_EymrDUKg3wQyhC";
        // $payload .=  "&metadata[prod3]=prod_E88EnyGW9fsPWo";
        // $payload .=  "&metadata[prod4]=prod_DgVqia7gveId8J";
        // $payload .=  "&metadata[prod5]=prod_DSEk1RHqfXIOqO";
        // $payload .=  "&metadata[prod6]=prod_D7Ct7MZUIRql8q";
        // $payload .=  "&metadata[prod7]=prod_FaFkkxbyOagO2g";
            
        $url = "https://api.stripe.com/v1/products/{$product}";
        $result = fetchData($url, $payload, "POST");
        echo $result;
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
