//Unit 4 Portfolio with Object
// Class 1 
    // use JavaScript to create a simple object representation of your portfolio
// Class 2
    // create a data representation of your portfolio using nested objects
    // learn to access properties of an object using dot and bracket notation
    // use jquery to update your portfolio html (make sure to add appropriate class to your HTML
// Class 3
    // add like buttons to your html and like property to your object
    // add new properties, modify, and delete properties an object
    // update existing properties of an object
    // add a click handler to update the like counter when buton is clicked

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


// Create your potrfolio object representation below







// Use Jquery to update your HTML using your object. Don't forget the Document Ready function. 







// Add your click handler below to update your like counters when the like buttons are clicked. 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}