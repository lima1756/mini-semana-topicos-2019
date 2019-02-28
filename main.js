let decisionActual = document.getElementById("nombre_decision").value;
document.getElementById("opc1").onclick= function(){
    let decisionTomada = document.getElementById("txt1").innerHTML;
    write(decisionActual, decisionTomada, function(){window.location.href = "#"})
};

document.getElementById("opc2").onclick = function(){
    let decisionTomada = document.getElementById("txt2").innerHTML;
    write(decisionActual, decisionTomada, function(){window.location.href = "02.html"})
};