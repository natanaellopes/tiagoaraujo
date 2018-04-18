<?php

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$birth = filter_input(INPUT_POST, 'birth', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

$html = "Contato enviado pelo site" . "\n";
$html .= "Nome: $name" . "\n";
$html .= "Email: $email" . "\n";
$html .= "Nascimento: $birth" . "\n";
$html .= "Mensagem: $message" . "\n";
$html .= "\n";
$html .= "Enviado em " . date('Y-m-d H:i:s');

mail('contato@tdadvogados.com.br', 'Contato enviado pelo site', $html);
