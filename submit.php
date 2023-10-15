<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $message = strip_tags(trim($_POST["message"]));

    $recipient = "herabeatzbusiness@gmail.com"; // replace with your email
    $subject = "New contact form submission from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$recipient>";

    mail($recipient, $subject, $email_content, $headers);

    header("Location: index.html"); // replace with your page URL
    exit;
}
?>


<?php
echo "PHP is working!";
?>

