<?php
// توابع کمکی
function sanitize($data) {
  return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name    = sanitize($_POST["name"]);
  $email   = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
  $subject = sanitize($_POST["subject"]);
  $message = sanitize($_POST["message"]);

  if ($email) {
    $to      = "info@yourdomain.com";
    $headers = "From: {$email}\r\nReply-To: {$email}";
    $body    = "نام: {$name}\nموضوع: {$subject}\n\n{$message}";
    if (mail($to, $subject, $body, $headers)) {
      echo "پیام شما با موفقیت ارسال شد.";
    } else {
      echo "خطا در ارسال پیام.";
    }
  } else {
    echo "لطفاً یک ایمیل معتبر وارد کنید.";
  }
}
?>
