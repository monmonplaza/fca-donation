<?php
    try {        
        include_once("../../../common/package.php");
        include_once("../../config.php");
        include_once("../functions.php");  

         // GET SOURCE OBJECT
         $body = file_get_contents('php://input');
        //  checkSourceData($body);        	
 
         // DECODE BODY
         $data = json_decode($body);
         $product = $data->product;
         $photo = $data->photo;
         $name = $data->name;
         $stay = $data->stay;
         $statement_descriptor = "FTC Sponsorship";
         $story = addslashes($data->story);
         $images = $data->images[0];
         $classification = $data->classification;
         $birthday = $data->birthday;

    

        $payload = "name={$name}&description={$story}"; 
        //$payload .=  "&statement_descriptor={$statement_descriptor}";
        $payload .=  "&metadata[class]={$classification}";
        $payload .=  "&metadata[birthday]={$birthday}";
        $payload .=  "&metadata[stay]={$stay}";
        $payload .=  "&metadata[photo]={$photo}";
        
        // $payload =  "name=Danica V&description=FTC Sponsorship&images[0]=https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/danica-villasenor.jpg";      
        // $payload .=  "&metadata[class]=prod_COhKY6I016V8Sr";
        // $payload .=  "&metadata[prod2]=prod_F3UDRrE7r3oeRa";

        $url = "https://api.stripe.com/v1/products";
        $result = fetchData($url, $payload, "POST");
        echo $result;

        // echo json_encode(
        //     array(
        //         "status" => $data, 
        //     )
        // );
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
