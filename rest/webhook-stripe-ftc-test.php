<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';
	require 'PHPMailer/Exception.php';

	require 'stripe-api/vendor/autoload.php';

	$payload = @file_get_contents('php://input');
	$event = null;

	try {
	    $event = \Stripe\Event::constructFrom(
	        json_decode($payload, true)
	    );
		file_put_contents( 'event.log', $event);
		// echo json_encode(array("Event" => $event->data));
	} catch(\UnexpectedValueException $e) {
	    // Invalid payload
	    echo json_encode(array("Error" => $e));
	    //http_response_code(400);
	    exit();
	}

	

	// Handle the event
	switch ($event->type) {
	    case 'invoice.payment_succeeded':
          $child = $event->data->object->lines->data[0]->plan->nickname;
          $amount = $event->data->object->lines->data[0]->plan->amount;
          $email = $event->data->object->customer_email;
          sendEmailSponsor($child, $amount, $email);
	        break;
      case 'checkout.session.completed':
          $designation = $event->data->object->metadata->desc;
          $amount = $event->data->object->amount_total;
          $email = $event->data->object->customer_details->email;
          sendEmailOneTimeDonation($designation, $amount, $email);
        //   file_put_contents( 'check.log', $event->data->object->display_items[0]->amount);
	        break;
	    // ... handle other event types
	    default:
	        // Unexpected event type
	        //http_response_code(400);
	        //exit();
	        file_put_contents( 'hook-error.log', $event);
	        exit();
	}
	
	http_response_code(200);
	
	function sendEmailSponsor($child, $amount, $email) {
		$mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		$mail->Port = 587;
		$mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;		
		$mail->Username = "patrick.reyes@frontlinebusiness.com.ph"; // if gmail use your gmail email
		$mail->Password = "ottm0324"; // if gmail use your email password
		$mail->Subject = "FTC Donation";
		$mail->setFrom('patrick.reyes@frontlinebusiness.com.ph', 'FTC Admin');
		$mail->isHTML(true);
		/*$mail->Body = '<h2>Donation Summary</h2>
						<p><strong>Email:</strong> ' . $email . '</p>
						<p><strong>Name:</strong> ' . $name. '</p>
						<p><strong>Amount:</strong> $' . $amount / 100 . '</p>
					';*/
		$mail->Body = '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mobile Newsletter</title>
  </head>
  <body>
    <div style="max-width: 600px; margin: 0 auto">
      <div
        style="
          border: 1px solid #e0e0e0;
          -webkit-box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          -moz-box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          border-radius: 10px;
          margin: 20px 0;
        "
      >
        <div
          style="
            padding: 30px 0;
            background-color: #3f9cd1;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
          "
        ></div>
        <div style="padding: 20px">
          <div style="margin-bottom: 20px; text-align: center">
            <a href="https://www.thefrontline.asia" target="_blank">
              <img
                style="width: 40%"
                src="https://facethechildren.org/app/images/logo_blue_new.png"
                alt=""
            /></a>
          </div>
          <h1
            style="
              margin-bottom: 20px;
              font-family: sans-serif;
              font-size: 32px;
              text-align: center;
            "
          >
            <span style="color: #3f9cd1">Sponsorship</span>
            Summary
          </h1>
          <p
            style="
              text-align: center;
              margin-bottom: 20px;
              font-size: 16px;
              font-weight: bold;
              font-family: sans-serif;
            "
          >
            Thank You for Sponsoring.
          </p>
          <div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px"
                  >Child:</span
                >
                ' . $child . '
              </p>
            </div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px"
                  >Frequency:</span
                >
                Monthly
              </p>
            </div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px">Amount: </span>$' . $amount / 100 . '
              </p>
            </div>
          
         
          </div>
          <p
            style="
              text-align: center;
              font-family: sans-serif;
              margin: 0;
              font-size: 14px;
            "
          >
            Copyright ' . date("Y") . ' Face the Children.
          </p>
          <p
            style="
              text-align: center;
              font-family: sans-serif;
              margin: 0;
              margin-bottom: 20px;
              font-size: 14px;
            "
          >
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>';
		$mail->addAddress('patrick.reyes@frontlinebusiness.com.ph');
		$mail->addAddress($email);
		
		if($mail->Send()){
			// echo json_encode(array("mailed" => "Success sending email."));
			return "Success sending email.";
		}else {
			return "Failed sending email.";
		}
	}

  function sendEmailOneTimeDonation($designation, $amount, $email) {
		$mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		$mail->Port = 587;
		$mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;		
		$mail->Username = "patrick.reyes@frontlinebusiness.com.ph"; // if gmail use your gmail email
		$mail->Password = "ottm0324"; // if gmail use your email password
		$mail->Subject = "FTC Donation";
		$mail->setFrom('patrick.reyes@frontlinebusiness.com.ph', 'FTC Admin');
		$mail->isHTML(true);
		/*$mail->Body = '<h2>Donation Summary</h2>
						<p><strong>Email:</strong> ' . $email . '</p>
						<p><strong>Name:</strong> ' . $name. '</p>
						<p><strong>Amount:</strong> $' . $amount / 100 . '</p>
					';*/
		$mail->Body = '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mobile Newsletter</title>
  </head>
  <body>
    <div style="max-width: 600px; margin: 0 auto">
      <div
        style="
          border: 1px solid #e0e0e0;
          -webkit-box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          -moz-box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          box-shadow: 0px 0px 8px 0px rgba(224, 224, 224, 1);
          border-radius: 10px;
          margin: 20px 0;
        "
      >
        <div
          style="
            padding: 30px 0;
            background-color: #3f9cd1;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
          "
        ></div>
        <div style="padding: 20px">
          <div style="margin-bottom: 20px; text-align: center">
            <a href="https://www.thefrontline.asia" target="_blank">
              <img
                style="width: 40%"
                src="https://facethechildren.org/app/images/logo_blue_new.png"
                alt=""
            /></a>
          </div>
          <h1
            style="
              margin-bottom: 20px;
              font-family: sans-serif;
              font-size: 32px;
              text-align: center;
            "
          >
            <span style="color: #3f9cd1">Donation</span>
            Summary
          </h1>
          <p
            style="
              text-align: center;
              margin-bottom: 20px;
              font-size: 16px;
              font-weight: bold;
              font-family: sans-serif;
            "
          >
            Thank You for Donating.
          </p>
          <div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px"
                  >Designation:</span
                >
                ' . $designation . '
              </p>
            </div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px"
                  >Frequency:</span
                >
                One-time
              </p>
            </div>
            <div style="margin-bottom: 5px">
              <p
                style="
                  text-align: center;
                  font-size: 16px;
                  font-family: sans-serif;
                  margin: 0;
                "
              >
                <span style="font-weight: bold; font-size: 16px">Amount: </span>$' . $amount / 100 . '
              </p>
            </div>
          
         
          </div>
          <p
            style="
              text-align: center;
              font-family: sans-serif;
              margin: 0;
              font-size: 14px;
            "
          >
            Copyright ' . date("Y") . ' Face the Children.
          </p>
          <p
            style="
              text-align: center;
              font-family: sans-serif;
              margin: 0;
              margin-bottom: 20px;
              font-size: 14px;
            "
          >
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>';
		$mail->addAddress('patrick.reyes@frontlinebusiness.com.ph');
		$mail->addAddress($email);
		
		if($mail->Send()){
			// echo json_encode(array("mailed" => "Success sending email."));
			return "Success sending email.";
		}else {
			return "Failed sending email.";
		}
	}