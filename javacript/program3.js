function getelements()
{
    var mye = document.getElementById('two');
    console.log(mye);
    mye.innerHTML = "<hr> <ul> <li> mylist</li></ul>";

}


// var myelement = document.getElementById('two');
// var myelement = document.getElementsByClassName('one');
// var myelement = document.getElementsByTagName("section");
// var myelement = document.querySelector("p,section,h1,ul,.one,#two");
var myelement = document.querySelectorAll("p,section,h1,ul,.one,#two");

myelement[0].addEventListener("click",getelements);

console.log(myelement);
console.log(typeof(myelement));

