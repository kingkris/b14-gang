<?php include "header.php"; ?>


  <h1>Home page</h1>
<?php 
  echo "<p>Hello world! This is HTML5 Boilerplate.</p>";
  $markup = "<strong>Whatever you want</strong>";
  echo "This is a string " . $markup . " some other content";

  $x = 10;
?>

<ul>
  <li>this is a <?php echo $markup ?></li>
  <?php if($x>5) {
      echo "<li>";
      echo $x;
      echo "</li>";
    } 
  ?>
</ul>
<ul>
<?php 
  for ($i=0; $i < 10; $i++) { 
?>
    <li><?php echo $i ?></li>
<?php
  }
?>
</ul>


<?php include "footer.php"; ?>
