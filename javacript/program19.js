
var mydatabase = [];
function submituser()
{
    var user = document.querySelectorAll("input,select,textarea");
    console.log(user);

    if(user[0].value=="" ||user[1].value=="" || user[2].value=="" || user[3].value=="" || user[4].value=="" || user[5].value=="")
    {
        alert("please fill");
    }
    else
    {

    mydatabase.push({
        username:user[0].value,
        phoneno:user[1].value,
        course:user[2].value,
        dob:user[3].value,
        comments:user[4].value,
        profiles:user[5].value
    });
    console.log(mydatabase);
}

}



function disp()
{

    var modifydata = mydatabase.map((a)=>{
        // return a.username 
        return `
            <p>${a.username}</p>
            <p>${a.dob}</p>
            <p>${a.phoneno}</p>
        `
    });
    console.log(modifydata);
    var jdiv = document.getElementById("one").innerHTML = modifydata;

}