var product=document.getElementById("psection")
var search=document.getElementById("search2")
var plist=product.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var svalue=event.target.value.toLowerCase()

    for(i=0;i<plist.length;i++){
var pname=plist[i].querySelector("p").textContent

if (pname.toLowerCase().indexOf(svalue)<0)
    {
        plist[i].style.display="none"
    }
    else
    {
         plist[i].style.display="block"
    }
    }
}
)
var butup=document.getElementById("sideicons")
var but1=document.getElementById("bar")
var but2=document.getElementById("goin")
function comein(){
    butup.style.left="0";
    but2.style.display="block";
}

function comout()
{
    butup.style.left="-60%";
    but2.style.display="none"
}
