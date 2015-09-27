<?

$msg .="$_POST[message]";

$to = "nicholas.nieves@ymail.com";

$subject = "";

$mailheaders = "from:$_POST[name] <$_POST[email]>\n";

$mailheaders .="Reply-To: $_POST[email]\n";

mail($to, $subject, $msg, $mailheaders);

?>
