
var allinput;
let alldiv;
let allselect;
var mydata = ["about sep month","about oct month","about aug month!"];
console.log(mydata);
function loadallobject()
{
    alldiv = document.querySelectorAll("div");
    allinput = document.querySelectorAll("input");
    allselect = document.querySelectorAll("select");
    console.log(allinput);
    console.log(alldiv);

    allinput[0].addEventListener("input",()=>{
        var jcolor = document.getElementById("mycolor");
        var a = allinput[0].value;
        alldiv[2].style.backgroundColor=a;
        alldiv[3].style.backgroundColor=a+"50";
        // jcolor.innerText = "color code:"+a;
         jcolor.innerText = `color code name: ${a}`;

    });

 

    allselect[0].addEventListener("change",()=>{
        let a = allselect[0].value;
        console.log(a);
        const mytext = document.querySelectorAll("p");
            if(a=="sep")
            {
                mytext[0].innerHTML=mydata[0];
            }
            else if(a=="aug")
            {
                mytext[0].innerHTML=mydata[2];
            }
            else if(a=="oct")
            {
                mytext[0].innerHTML=mydata[1];
            }
            else
            {
                mytext[0].innerHTML=`this is not vaid`;
            }
    })



}

loadallobject();