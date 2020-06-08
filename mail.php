<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['firstName'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Мат & Глянец";
$body = "
<div style='background-color: #e9e9e9; padding: 20px;'>
  <div style='border-bottom: 3px solid #58EDB9;'>
    <h2 style='font-size: 20px;'>Новая запись на бесплатный замер</h2>
  </div>
  <br><br>
  <b>Имя клиента:</b> $name<br>
  <b>Телефон клиента:</b>
  <a href='tel:$phone'style='text-decoration: none; color: #000;'>$phone</a>
  <br><br>
</div>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'henryshaw217'; // Логин на почте
    $mail->Password   = '92930709mother'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('henryshaw217@yandex.ru', 'ShawThemes'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('henryshaw217@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>
