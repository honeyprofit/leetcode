<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ObjectObject</title>
  </head>
  <body>
    <div id="output">result</div>
    <script>
      const person = {
        name: "Harry",
        age: 40,
      };

      //   document.getElementById("output").innerText = person;
      document.getElementById("output").innerText = JSON.stringify(person);
    </script>
  </body>
</html>
