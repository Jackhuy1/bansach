<?php
$conn=mysqli_connect("tamld.mysql.database.azure.com","tamld","Cepimt@456789","bansach");
// Check connection
if ($conn->connect_error)
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $conn->set_charset("utf8")
?>
