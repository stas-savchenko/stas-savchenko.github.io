<?php 
if (!empty($_POST['name']) AND !empty($_POST['phone'])){
  
  $headers = "From: bridrova.com\r\n".
             'Reply-To: ibudakva@gmail.com, stas_savchenko2012@inbox.ru\r\n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = "Сообщение с bridrova.com";

  $letter = "Данные заявки:\r\n";
  $letter .="Имя: ".$_POST['name']."\r\n";
  $letter .="Email: ".$_POST['email']."\r\n";
  $letter .="Телефон: ".$_POST['phone']."\r\n";
  
  if (mail('ibudakva@gmail.com', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}