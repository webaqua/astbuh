<?php
$name = $_POST['name1'];
$phone = $_POST['phone1'];
$mess = $_POST['mess'];
$message = "Имя: $name, <br> Телефон: $phone, <br> Сообщение: $mess";
$to = 'zhalgas_ys@mail.ru';
$from = "astbuhgalter.kz";
$subject = "Заявка с сайта astbuhgalter.kz";
$headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n";
if (mail($to, $subject, $message, $headers)) {
	echo('');
}
?>
<div>
	Заявка успешно отправлена.<br>Вы будете перенаправлены назад
</div>
<script>
	setTimeout(function () {
		window.history.back();
	},2000);//
</script>
