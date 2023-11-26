 
            <script>
                alert("wecome to our webpage");
            </script>
            <p>Click the button to display a confirm box.</p>

            <button onclick="myFunction()">Click here</button>
            
            <p id="demo"></p>
            
             <script>
                function myFunction() {
              let text;
  if (confirm("Allow the notification") == true) {
    text = "You pressed OK!";
  } else {
    text = "You cancelled!";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

<script>
    function myFunction() {
     let person = prompt("Please enter your name", "Name");
      if (person != null) {
          document.getElementById("demo").innerHTML =
          "Hello " + person + "! what you want to taste?";
           }
                   }
</script>
