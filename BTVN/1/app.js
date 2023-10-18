//Hover Function
  var div = document.querySelector(".name");
  var p = document.querySelector(".About");

  p.addEventListener("mouseenter", function(){
    div.style.display = "block";
  });

 /* Add an event listener to the p tag */
    p.addEventListener("mouseleave", function() {
  /* Hide the div */
    div.style.display = "none";
  });
  
  document.querySelector("Hobbies").addEventListener("mouseover", function() {
    this.style.transform = "font-size: larger";
  });
  
  document.querySelector("Hobbies").addEventListener("mouseout", function() {
    this.style.transform = "font-size: large";
  });

  document.querySelector("Edu").addEventListener("mouseover", function() {
    this.style.transform = "font-size: larger";
  });
  
  document.querySelector("Edu").addEventListener("mouseout", function() {
    this.style.transform = "font-size: large";
  });

  document.querySelector("Awards").addEventListener("mouseover", function() {
    this.style.transform = "font-size: larger";
  });
  
  document.querySelector("Awards").addEventListener("mouseout", function() {
    this.style.transform = "font-size: large";
  });

