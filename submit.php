
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Set your email address
    $to = "herabeatzbusiness@gmail.com";

    // Subject of the email
    $subject = "New Contact Form Submission";

    // Email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Message:\n$message";

    // Additional headers
    $headers = "From: $name <$to>";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        // If the email is sent successfully, you can redirect the user to a thank-you page
        header("Location: thank-you.html");
        exit();
    } else {
        // If there is an error, you can redirect the user to an error page
        header("Location: error.html");
        exit();
    }
}
?>