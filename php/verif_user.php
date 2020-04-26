
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
$PASSWORD= $_POST["email"];
$LOGIN=  $_POST["motdepass"];

			$req1=mysqli_query($conn,"select * from user where  login='$LOGIN' and password='$PASSWORD'"); 

			// on cherche si login et password correspondent � ceux  que dans la base de donn�es  
  
				if($result1=mysqli_fetch_array($req1))

				{
					
						 

						  $prenom=$result1['nom ']." ".$result1['prenom'];
                         
						

							  header('location: index.php');

							   ?>

                     <script type="text/javascript">
                         var nomuser = <?php echo json_encode($resulta) ?>;
                         document.location.href="index.php?nom="+nomuser;

                     </script>

											 <?php

					echo "vrai";

						

				}else
				{

					echo "faux";

	header('location: index.html?erreur=1');

	?>

   <script type="text/javascript">

 document.location.href="index.html?erreur=1";

</script>

 <?php

	}?>