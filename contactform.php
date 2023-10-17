<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $messsage = $_POST['message'];

    $mailTo = "jellevandenbroek@casema.nl";

    $headers = "From: ".$mailFrom;
    $txt = "You have reveived an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.html?mailsend");
}