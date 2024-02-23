const button = document.getElementById("butang");
const gambar = document.getElementById("lopaTidur");

const userTekan = document.createElement("h1");
//set attribute
userTekan.textContent = "Lopa: You fool, I was eating my wet food in my dream, now you shall pay the price for waking me up!";
userTekan.id = "tertekan";
userTekan.style.color = "red";

button.addEventListener("click",function(){
    
    gambar.src = "bangun.jpg";
    document.getElementsByClassName('isi')[0].insertBefore(userTekan,button);
});