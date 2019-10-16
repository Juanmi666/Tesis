var botones = document.getElementsByTagName("button"),
    iframe = document.getElementById("capa"),
    sizeBotones = botones.length;
 
for (i = 0; i < sizeBotones; i++){
    botones[i].addEventListener("click", function(){
        iframe.src = this.getAttribute("data-link");
    }, false);
}