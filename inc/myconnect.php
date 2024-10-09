<?php
$conn=mysqli_connect("gawain-database.c3eks20smog5.ap-southeast-1.rds.amazonaws.com","admin","Tailu3881","bansach");
// Check connection
if ($conn->connect_error)
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $conn->set_charset("utf8")
?>
