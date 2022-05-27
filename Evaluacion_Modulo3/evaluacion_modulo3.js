var colorClick;
var colorGanador;

let colors=["rgb(240, 14, 128)","rgb(200, 50, 128)","rgb(60, 200, 220)","rgb(150, 30, 128)","rgb(160, 14, 128)","rgb(200, 180, 70)"];
function generarColor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let color="rgb("+ r +", " + g +", " + b +")"
    return color 
}


function escogerColores(){
    colors=[] //arreglo vacio
    for(i=0; i<cuadrados.length; i++){
        let c=generarColor()
        colors.push(c)
    }
}
var cuadrados=document.querySelectorAll(".square");
escogerColores()
colorGanador=colors[Math.floor(Math.random()*colors.length)]


console.log(cuadrados);
function asignarColores(){
    for(i=0; i<colors.length; i++){
        cuadrados[i].style="background-color:"+ colors[i]
        cuadrados[i].addEventListener("click",function(e){
            colorClick=e.target.style.backgroundColor;
            console.log(colorClick)
            if (colorClick ==colorGanador){
                console.log("¡Correcto!")
                document.getElementById("message").innerHTML = "¡Correcto!";
                let h1 = document.querySelector("h1").style.color=colorClick;
            }
            else{
                console.log("¡Intentalo Nuevamente!");
                document.getElementById("message").innerHTML = "¡Inténtalo de nuevo!";
                e.target.style.backgroundColor ="#232323"
                
            }
        });
    }
}


asignarColores();


function changeColors(numero){
    let colors = Math.floor(Math.random()*numero);
    colorGanador.innerText=colors[colors];
};


function randomColor(){
    let rgb = "rgb("+Math.floor(Math.random()*256)+", " + Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
    return rgb;
};

function random(){
    colors = [];
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    return colors;
};


function generateRandomColors(){
    random();
    var facil = document.querySelector("#easy").style.display="grid";
    var facil = document.querySelector("#easy");
    facil.addEventListener("click", function(){
        cuadradosColor(colors);
        changeColors(2.49);
        reset(2.49);
        cuadros[3].style.visibility = "hidden";
        cuadros[4].style.visibility = "hidden";
        cuadros[5].style.visibility = "hidden";
        document.querySelector("#message").innerText='';
        document.querySelector("h1").style.color='white';
    });


    var dificil = document.querySelector("#hardMode").style.display="grid";
    var dificil = document.querySelector("#hardMode");
    dificil.addEventListener("click", function(){
        cuadradosColor(colors);
        changeColors(5.49);
        reset(5.49);
        cuadros[3].style.visibility = "visible";
        cuadros[4].style.visibility = "visible";
        cuadros[5].style.visibility = "visible";
        document.querySelector("#message").innerText='';
        document.querySelector("h1").style.color='white';
    });
};
generateRandomColors();


function reset(num){
    btn.style.display="flex";
    btn.addEventListener('click', function(){
        btn.innerText='Nuevos Colores';
        let message = document.querySelector("message").innerText='';
        let h1= document.querySelector('h1').style.color='white';
        var x = rdm();
        cuadradosColor(x);
        changeColors(num);
    });
};


//click  para los cuadrados (agregar evento click a los cuadrados)

var clickedColor = document.querySelectorAll("div");
console.log(clickedColor);
    

//cambiar de color a los cuadrados

var pickedColor=document.querySelector("#colorDisplay");
function pickColor(){
    for(i=0; i< colors[3]; i++);
    Math.floor(Math.random(colors)*256);


}

//Math.floor(Math.random()*256);

//background-color: blue;

//var pickedColor=Document.querySelector.colors[3]("#colorDisplay");
//var clikedColor;

//dar click al boton para cambiar de color

/*function correctoInco(clikedColor){
    for (i=0;){

    }
}*/



/*Blue	#0000FF	(0,0,255)
 brown	#A52A2A	(165,42,42)
 beige	#F5F5DC	(245,245,220)
 dark magenta	#8B008B	(139,0,139)
 maroon	#800000	(128,0,0)
 green yellow	#ADFF2F	(173,255,47)
 */