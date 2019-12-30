<?php
// echo "<h2>PHP is Fun!</h2>";
// echo "Hello world!<br>";
if (isset($_POST['submit'])){
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $country=$_POST['country'];
    $mailFrom=$_POST['email'];
    $message=$_POST['message'];

    $mailTo="karacraw4d@gmail.com";
    $headers="From: ".$mailFrom;
    $txt="You have received an email from".$firstname.".\n\n".$message;

    $txt="Rishabh told me you guys did not volunteer to switch even if you were available. Please work Rishabh's Saturday shift-Becca";

    mail($mailTo, $country, $txt, $headers);
    header("Location: index.php?mailsend");
}
?>
