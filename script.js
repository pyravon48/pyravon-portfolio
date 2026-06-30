const text = "Programmer • Web Developer • Video Editor";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = typeWriter;