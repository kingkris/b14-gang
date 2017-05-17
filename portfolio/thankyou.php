<?php include "header.php"; ?>


  <h1>Thank you</h1>

  <div class="form-wrap">
  <p>Welcome Mr/Mrs <?php echo $_POST['kgName']; ?>, Your email id is <?php echo $_POST['kgEmail']; ?></p>
    
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
