<?php 
  
  use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	require '../PHPMailer/PHPMailer.php';
	require '../PHPMailer/SMTP.php';
	require '../PHPMailer/Exception.php';

  require '../acc-config.php';
	
	function sendEmail($email, $name, $password) {
      $mail = new PHPMailer(true);
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
      $mail->Port = 587;
      $mail->SMTPSecure = "tls";
      $mail->SMTPAuth = true;		
      $mail->Username =  USERNAME; // if gmail use your gmail email
      $mail->Password = PASSWORD; // if gmail use your email password
      $mail->Subject = SUBJECT_RESET_PASSWORD;
      $mail->setFrom(USERNAME, FROM);
      $mail->isHTML(true);
      $mail->Body = '<div style="background-color: #680c3f; height: 100vh;">
        <div id="container" style="
            width: 100%;
        padding: 15vh 0;
        width: 100%;">
      
          <table  style="background-color: #fff; border: none; border-collapse: collapse; margin: auto" cellpadding="0" cellspacing="0">
            <tr style="text-align: center; background: #ddd">
              <td>
                <img
                  style="padding: 40px 0"
                  src="https://frontlinebusiness.com.ph/wp-content/themes/fbs-twenty/img/logo/logo-fbs.png"
                  alt="Frontline Business Solutions Inc. Logo"
                />
              </td>
            </tr>
            <tr style="display: block; width: 80%; margin: 0 auto">
              <td>
                <p style="text-align: left; margin-bottom: 10px; margin-top: 40px;">Hi <strong>' . $name . '!</p>
                <p style="text-align: left; margin-bottom: 40px">
                  Below are your account details in FBS Human Resource Information System.
                </p>
              </td>
            </tr>
            <tr style="display: block; width: 80%; margin: 0 auto">
              <td>
                <p style="text-align: left; margin-bottom: 5px">
                  <span
                  style="
                    text-align: left;
                    text-decoration: none;
                    color: #ad397f;
                    font-weight: bold;
                    margin-bottom: 10px;
                  "
                  >Name: </span> 
                  <span>' . $name . '</span>
                </p>
      
                <p style="text-align: left; margin-bottom: 5px">
                  <span
                  style="
                    text-align: left;
                    text-decoration: none;
                    color: #ad397f;
                    font-weight: bold;
                    margin-bottom: 10px;
                  "
                  >Email: </span> 
                  <span>' . $email . '</span>
                </p>
               
                <p style="text-align: left; margin-bottom: 40px">
                  <span
                  style="
                    text-align: left;
                    text-decoration: none;
                    color: #ad397f;
                    font-weight: bold;
                    margin-bottom: 10px;
                  "
                  >Default Password: </span> 
                  <span>' . $password . '</span>
                </p>
              </td>
            </tr>      
            
            <tr style="display: block; width: 80%; margin: 0 auto">
              <td>
                <p style="text-align: left; margin-bottom: 10px">
                  To continue using your account, click on Login button and use the default password.
                </p>
              </td>
            </tr>
            <tr style="display: block; width: 80%; margin: 0 auto">
              <td style="display: block">
                <a
                  style="
                    display: block;
                    text-transform: uppercase;
                    background-color: #680c3f;
                    color: #fff;
                    font-weight: unset;
                    text-align: center;
                    padding: 10px 20px;
                    margin-top: 20px;
                    margin-bottom: 60px;
                    border-radius: 5px;
                    text-decoration: none;
                  "
                  href="#"
                  >LOGIN</a
                >
              </td>
            </tr>
          </table>
          <p style="color: rgb(187, 187, 187); font-size: 14px; text-align: center; padding: 20px">&copy; 2021 | Frontline Business Solutions</p>
        </div>
        
      </div>';
        // // $mail->addAddress('patrick.reyes@frontlinebusiness.com.ph');
      $mail->addAddress($email);
      
      if($mail->Send()){
          return "Success sending email.";
      }else {
          return "Failed sending email.";
      }
  }
