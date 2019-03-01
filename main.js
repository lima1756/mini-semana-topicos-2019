// Obtenemos el valor de la decisión actual, lo obtenemos aqui para obtenerlo solo una vez en vez de dos veces
let decisionActual = document.getElementById("nombre_decision").value;

// Obtenemos los urls
var url1 = document.getElementById("url1").value;
var url2 = document.getElementById("url2").value;

// Obtenemos el id opc1 y le creamos una funcion onclick
document.getElementById("opc1").onclick= function(){
    // Obtenemos el texto que esta en el id txt1
    let decisionTomada = document.getElementById("txt1").innerHTML;
    // escribimos en la base de datos, usamos el callback para redirigir la página
    write(decisionActual, decisionTomada, function(){window.location.href = url1})
};

document.getElementById("opc2").onclick = function(){
    let decisionTomada = document.getElementById("txt2").innerHTML;
    write(decisionActual, decisionTomada, function(){window.location.href = url2})
};