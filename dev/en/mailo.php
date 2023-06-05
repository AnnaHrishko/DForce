<?php
// include '../../../wp-load.php';
$config = array(
	"admin_names" => array(
		"a.bakhtalovskyi@dforce.com.ua" 
	));
$email = trim(htmlspecialchars($_POST["email"]));
$idea = trim(htmlspecialchars($_POST["idea"]));

$page_url = $_SERVER['HTTP_REFERER'];


//Geolocation data
$browser_info = $_SERVER['HTTP_USER_AGENT'];
$user_ip = $_SERVER['REMOTE_ADDR'];
$date = new DateTime();
$uk_datetime = $date->format('Y-m-d H:i:s');
        
$geo = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$_SERVER['REMOTE_ADDR']));
$geo_country = $geo['geoplugin_countryName'];
$geo_region = $geo['geoplugin_region'];
$geo_city = $geo['geoplugin_city'];
$geo_currency = $geo['geoplugin_currencyCode'];
$geo_rate = $geo['geoplugin_currencyConverter'] . ' to 1 USD';

$message = "
New message from the website from $email
  Email: $email
  Idea: $idea
  
  We have captured the following geolocation data:

	- Page URL: $page_url <br/>
	- Date and Time (UK): $uk_datetime <br/>
	- Location IP Address: $user_ip <br/>
	- Country: $geo_country <br/>
	- Region: $geo_region <br/>
	- City: $geo_city <br/>
	- Currency: $geo_currency <br/>
	- Exchange rate: $geo_rate <br/>
	- Browser/Device/OS: $browser_info <br/>

";

$subject = "new_Contact";
// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';

// Additional headers
$headers[] = 'From: <info@dforce.com.ua>';
$to = implode(", ", $config["admin_names"]);
	mail($to, $subject, $message)
?>