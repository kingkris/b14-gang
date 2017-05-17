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
<ul class="nu-list">
<?php for ($i=0; $i < 10; $i++) { ?>
  <li><?php echo $i ?></li>
<?php } ?>
</ul>
<?php 
  $min=1;
  $max=10;
  $random = mt_rand($min,$max);
?>

<ul class="nu-list">
<?php for ($i=$min; $i <= $max; $i++) : ?>
  <li 
    <?php 
      if($i == $random): 
        echo 'class="active"'; 
      endif; 
    ?>
  ><?php echo $i ?></li>
<?php endfor; ?>
</ul>

<?php 
  $shoppingList= array("Tomato", "Beans", "Coffee", "Eggs", "Onions", "Sugar", "Rice");
    echo '<ul class="shopping-list">';
    foreach ($shoppingList as $item) :
      echo '<li>';
      echo '<img src="https://api.fnkr.net/testimg/150x200/00CED1/FFF/?text=' . $item .'">';
      echo $item;
      echo '</li>';
    endforeach;
    echo '</ul>';
?>

<h2>My Shopping list starts with  <?php echo $shoppingList[0] ?></h2>

<div class="form-wrap">
  <form action="thankyou.php" method="post">
    <input type="text" name="kgName" placeholder="Enter your name">
    <input type="text" name="kgEmail" placeholder="Enter your Email">
    <input type="text" name="kgCity" placeholder="Enter your City">
    <input type="submit">
  </form>
</div>

<style>
  .shopping-list,
  .nu-list{
    list-style-type: none;
    padding: 30px;
    background-color: #FC86FF;
    border-radius: 10px;
  }
  .shopping-list:after,
  .nu-list:after{
    content: "";
    clear: both;
    display: block;
  }
  .nu-list li{
    float: left;
    width: 50px;
    height: 40px;
    border-radius: 25% 50% 0;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    margin: 10px;
  }
  .shopping-list li{
    float: left;
    width: 150px;
    padding: 10px;
    border-radius: 5%;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    margin: 10px;
  }
  .shopping-list li img{
    width: 100%;
  }
  .nu-list li.active{
    background-color: #1700C7;
    color:#FFF;
  }
  .form-wrap{
    padding: 30px;
    margin: 20px auto 100px;
    background-color: #FFF;
    border-radius: 20px;
  }
</style>





<?php include "footer.php"; ?>
