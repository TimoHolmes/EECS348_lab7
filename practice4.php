<!DOCTYPE html>
<html>

<head>
    <title>Multiplication Table</title>
</head>

<body>
    <h1>Multiplication Table Generator</h1>

<?php

echo "<table border=\"1\">";
$val = $_POST["size"] ?? 0;

for ($i = 1; $i <= $val; $i++) {
    echo('<tr>');
    
    for ($j = 1; $j <= $val; $j++) {
        echo('<td>' . $j * $i . '</td>'); 
    }

    echo('</tr>');
}

echo("</table>");
?>