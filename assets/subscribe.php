<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rhemsbeauty03@gmail.com";  // Replace with your email address
    $subject = "New Subscriber";
    $email = filter_var($_POST["email_address"], FILTER_SANITIZE_EMAIL);

    // Check if the email address is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "New subscriber: $email";
        mail($to, $subject, $message);
        echo json_encode(["success" => true, "message" => "Subscription successful!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email address!"]);
    }
} else {
    header("Location: /");  // Redirect to your homepage if someone tries to access subscribe.php directly
    exit();
}
?>
