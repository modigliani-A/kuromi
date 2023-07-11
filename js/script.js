var images = [
    "img/k1.png",
    "img/k2.png",
    "img/k3.png",
    "img/k4.png",
    "img/k5.png"
]; // Agrega aquí las URL de las imágenes que deseas mostrar

var currentIndex = 0;
var imgElement = document.getElementById("image");;
var btn = document.getElementById("btn");
var contador = 0;

btn.onclick = showImage;
imgElement.onclick = showBtn;

function showImage() {
    document.getElementById("image").style.display="block";
    btn.style.display="none";
}

function showBtn() {
    imgElement.style.display="none";
    btn.style.display="block";
    contador++;
    if(contador%2!=0){
        btn.innerText = "te amo";
    }else{
        btn.innerText = "hola tini";
    }
}

function changeImage() {
    imgElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeImage, 200);
}

window.onload = function() {
    changeImage();
}