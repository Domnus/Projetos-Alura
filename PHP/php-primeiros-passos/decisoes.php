<?php

$idade = 20;
$nome = 'Bento';

echo "Você só pode entrar se tiver mais de 18 anos." . PHP_EOL;

if ($idade >= 18 && $nome == 'Bento')
{
	echo "Você tem $idade anos." . PHP_EOL;
	echo 'Você pode entrar.';
}