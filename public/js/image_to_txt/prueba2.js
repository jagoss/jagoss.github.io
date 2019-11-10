const texto= "El parpadeo es el cierre y apertura rápida de los párpados. Es una función esencial del ojo que ayuda a difundir a través de las lágrimas y eliminar los irritantes de la superficie de la córnea y la conjuntiva. La velocidad del parpadeo puede verse afectada por elementos como la fatiga, lesiones en los ojos, los medicamentos y la enfermedad. La tasa del parpadeo se determina por el centro \"intermitente\", pero también puede verse afectada por estímulos externos. Cuando un humano o animal elige parpadear un solo ojo como una señal a otro en un entorno social (una forma de lenguaje corporal), es conocido como un guiño. Sin embargo, algunos animales (por ejemplo, las tortugas y hámsteres) parpadean los ojos de forma independiente uno del otro.";
const textoVec =texto.split(" ");
var i= 0;
var j = textoVec.length
function convertir() {

if (i<j){
    document.getElementById("myParagraph").innerHTML=textoVec[i];
    i++;
    window.setTimeout( convertir, 150);
}


}
i=0