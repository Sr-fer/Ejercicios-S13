var explicacion = document.getElementById("explicacion")
var textoExplicacion = explicacion.innerHTML
explicacion.innerHTML = textoExplicacion + "Te damos la bienvenida al curso"

document.getElementsByClassName("standard")[0].style.width = "800px"
document.getElementsByClassName("standard")[1].style.width = "1000px"

var horario = document.getElementById("horario")
horario.style.borderStyle = "solid"
horario.style.borderColor = "black"
horario.style.Color = "red"

var cuarta_hora = document.getElementById("cuartaHora")
cuarta_hora.style.background = "green"

document.getElementsByClassName("asignaturas")[0].setAttribute("style","display: grid; justify-content:center")
document.getElementsByClassName("asignaturas")[1].setAttribute("style","display: grid; justify-content:center")


var bienvenida = document.getElementById("bienvenida")
bienvenida.style.textDecoration = "underline"
bienvenida.style.textDecorationColor = "red"
bienvenida.style.textAlign = "center"
bienvenida.style.fontFamily = "Verdana"

var horario_clase = document.getElementById("horario")
horario_clase.style.fontFamily = "Impact,Charcoal,sans-serif"

document.getElementById("dias").style.background = "red"
document.getElementById("primeraHora").style.background = "blue"
document.getElementById("segundaHora").style.background = "brown"
document.getElementById("terceraHora").style.background = "purple"
document.getElementById("quintaHora").style.background = "violet"
document.getElementById("sextaHora").style.background = "yellow"
document.getElementById("septimaHora").style.background = "gray"
document.getElementById("octavaHora").style.background = "cyan"

var cambios = document.write(" Los horarios son provisionales, están dispuestos a cambios")


var asignaturas_aniadida_1 = document.createElement("li")
var asignaturas_aniadida_2 = document.createElement("li")
var asignaturas_aniadida_3 = document.createElement("li")
asignaturas_a_aniadir_1 = document.createTextNode("Diseño de interfaces web")
asignaturas_a_aniadir_2 = document.createTextNode("Despliegue de aplicaciones web")
asignaturas_a_aniadir_3 = document.createTextNode("Formación en centros de trabajo")
asignaturas_aniadida_1.appendChild(asignaturas_a_aniadir_1)
asignaturas_aniadida_2.appendChild(asignaturas_a_aniadir_2)
asignaturas_aniadida_3.appendChild(asignaturas_a_aniadir_3)
document.getElementById("segundo").appendChild(asignaturas_aniadida_1)
document.getElementById("segundo").appendChild(asignaturas_aniadida_2)
document.getElementById("segundo").appendChild(asignaturas_aniadida_3)
