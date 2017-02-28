<?php 
if (!empty($_POST['name']) AND !empty($_POST['email'])){
  
  $headers = 'From: bridrova.com\r\n'.
             'Reply-To: stas_savchenko2012@inbox.ru\r\n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новое сообщение';

  $letter = 'Данные сообщения:\r\n';
  $letter .='Имя: '.$_POST['name'].'\r\n';
  $letter .='Email: '.$_POST['email'].'\r\n';
  $letter .='Телефон: '.$_POST['phone'].'\r\n';
  
  if (mail('stas_savchenko2012@inbox.ru', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}