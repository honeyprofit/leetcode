<!doctype html>
<!-- <html>
  <body>
    <form action="form.php" method="post"> //form.php?title=PHP&description=PHP+is...
      <p><input type="text" name="title" placeholder="Title"></p>
      <p><textarea name="description"></textarea></p>
      <p><input type="submit"></p>
    </form>
  </body>
</html> -->



<?php
// echo "<p>title :".&_GET['title']."</P>";
// echo "<p>description :".&_GET['description']."</P>";

file_put_contents('data/'.$_POST['title'], $_POST['description']);
?>
