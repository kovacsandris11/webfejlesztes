document.addEventListener("DOMContentLoaded", function() {
    let v=false;

    document.getElementById("mybutton").addEventListener("click", function(){
        if(v===false){
            document.getElementById("lenyilo").style.display="flex";
            document.getElementById("mybutton").style.borderBottom="0";
            v=true;
        }
        else{
            document.getElementById("lenyilo").style.display="none";
            document.getElementById("mybutton").style.borderBottom="1px solid white";
            v=false;
        }
    });

    /*document.getElementById("myform").addEventListener("submit", function(e){
        if(document.getElementById("urnev").value==""){
            e.preventDefault();
            document.getElementById("hibanev").innerHTML=" Hiányos adat!"
        }
        else{
            document.getElementById("hibanev").innerHTML=""
        }
        if(document.getElementById("urszul").value==""){
            e.preventDefault();
            document.getElementById("hibaszul").innerHTML=" Hiányos adat!"
        }
        else{
            document.getElementById("hibaszul").innerHTML=""
        }
        if(document.getElementById("uremail").value==""){
            e.preventDefault();
            document.getElementById("hibaemail").innerHTML=" Hiányos adat!"
        }
        else{
            document.getElementById("hibaemail").innerHTML=""
        }
        if(document.getElementById("elfogad").checked==false){
            e.preventDefault();
            document.getElementById("nincselfogadva").style.display="flex"
        }
        else{
            document.getElementById("nincselfogadva").style.display="none"
        }
    })*/ 
    

});


if (sessionStorage.getItem("v") === null) {
    sessionStorage.setItem("v", "false");
}

function valaszt(){
    if(sessionStorage.getItem("v")==="true"){
        birnyelv();
    }
    else{
        magynyelv();
    }
}

document.getElementById("bnyelv").addEventListener("click", function(e){
    e.preventDefault();
    birnyelv();
})

document.getElementById("mnyelv").addEventListener("click", function(e){
    e.preventDefault()
    magynyelv()
})
function birnyelv(){
    sessionStorage.setItem("v", "true")
    document.body.style.fontFamily="aube";
    document.body.style.fontSize="8px";

    document.getElementById("bnyelvkep").style.display="none";
    document.getElementById("mnyelvkep").style.display="inline";

    document.getElementsByClassName("menu")[0].style.fontSize="2vh";
    document.getElementsByClassName("menu")[1].style.fontSize="2vh";
    document.getElementsByClassName("menu")[2].style.fontSize="2vh";
    document.getElementsByClassName("menu")[3].style.fontSize="2vh";

    document.getElementsByClassName("cim")[0].style.fontSize="2.2vh";
    document.getElementsByClassName("cim")[1].style.fontSize="2.2vh";

    document.getElementById("lenyilo").style.fontSize="1vh";

    document.getElementById("mybutton").style.fontFamily="aube";
    document.getElementById("mybutton").style.fontSize="4px";
    document.getElementById("submit").style.fontFamily="aube";
    document.getElementById("submit").style.fontSize="8px";

    
    }

function magynyelv(){
    sessionStorage.setItem("v", "false")
    document.body.style.fontFamily="sans-serif";
    document.body.style.fontSize="medium";


    document.getElementById("bnyelvkep").style.display="inline";
    document.getElementById("mnyelvkep").style.display="none";


    document.getElementsByClassName("menu")[0].style.fontSize="3vh";
    document.getElementsByClassName("menu")[1].style.fontSize="3vh";
    document.getElementsByClassName("menu")[2].style.fontSize="3vh";
    document.getElementsByClassName("menu")[3].style.fontSize="3vh";

    document.getElementsByClassName("cim")[0].style.fontSize="4vh";
    document.getElementsByClassName("cim")[1].style.fontSize="4vh";

    document.getElementById("lenyilo").style.fontSize="2vh";

    document.getElementById("mybutton").style.fontFamily="sans-serif";
    document.getElementById("mybutton").style.fontSize="14px";
    document.getElementById("submit").style.fontFamily="sans-serif";
    document.getElementById("submit").style.fontSize="14px";

    
    }


