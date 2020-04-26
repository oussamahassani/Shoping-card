<?php

$servername = "localhost";
$username = "root";
$password = "pass";
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$nom= $_POST["nom"];
$prenom=  $_POST["prenom"];
$email = $_POST["email"];
$motdepass =$_POST["motdepasse"];
$sql = "INSERT INTO user (nom,prenom,email,motpass)
VALUES ('$nom', '$prenom', '$email','$motdepass')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    $resulta="true";
    header('location: index.html?resulta=true');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    $resulta="false";
    header('location: index.html?resulta=false');
}

$conn->close();
?>
<script> var reuseltarequete = <?php echo json_encode($resulta) ?>;
window.location.replace("index.html");</script>