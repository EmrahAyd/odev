let zeno = 0
let az = document.querySelector("#az")
let art = document.querySelector("#art")
let zen =document.querySelector("#zen")
function aa(){


    let az = document.querySelector("#az")
    let art = document.querySelector("#art")
    az.innerHTML="Arttır"
    art.innerHTML="Azalt"
}

function aaa(){
    let az = document.querySelector("#az")
    let art = document.querySelector("#art")
    az.innerHTML="Azalt"
    art.innerHTML="Arttır"
}

            function aza(){
       zeno +=1 
       zen.innerHTML=`${zeno}`
    }
        function arta(){
        zeno +=1 
        zen.innerHTML=`${zeno}`
        }

az.addEventListener("mouseover", aa)
az.addEventListener("click",aza)
art.addEventListener("click",arta)
art.addEventListener("mouseover", aaa)
zen.innerHTML=`${zeno}`

///////artır - azalt/////////

var hi = prompt("Kullanıcı adını giriniz <<")
function yar(x){document.getElementById("insidecol").innerHTML += x ;
document.querySelector("#insidecol").setAttribute("class", "text-danger");

}

if (hi.length>0){
    yar(hi)
}

else {
    hi = "Gizemli"
    yar(hi);
}


function anlik() {
var date = new Date();
var saat=date.getHours();
var dakika=date.getMinutes();
var saniye=date.getSeconds();
document.querySelector("#tar").innerHTML= (saat+":"+dakika+":"+saniye);
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(anlik, 1000); 

var lorke = 'lorem'
console.log(`merhaba ${lorke}`)