document.getElementById("SG_plus").onclick = function () {
    document.getElementById("SG_plus").style.display = 'none'
    document.getElementById("SG_minus").style.display = 'inline'
    document.getElementById("SG_p").style.display = 'block'
}

document.getElementById("ADNG_plus").onclick = function () {
    document.getElementById("ADNG_plus").style.display = 'none'
    document.getElementById("ADNG_minus").style.display = 'inline'
    document.getElementById("ADNG_p").style.display = 'block'
}

document.getElementById("RMI_plus").onclick = function () {
    document.getElementById("RMI_plus").style.display = 'none'
    document.getElementById("RMI_minus").style.display = 'inline'
    document.getElementById("RMI_p").style.display = 'block'
}

document.getElementById("SG_minus").onclick = function () {
    document.getElementById("SG_plus").style.display = 'inline'
    document.getElementById("SG_minus").style.display = 'none'
    document.getElementById("SG_p").style.display = 'none'
}

document.getElementById("ADNG_minus").onclick = function () {
    document.getElementById("ADNG_plus").style.display = 'inline'
    document.getElementById("ADNG_minus").style.display = 'none'
    document.getElementById("ADNG_p").style.display = 'none'
}

document.getElementById("RMI_minus").onclick = function () {
    document.getElementById("RMI_plus").style.display = 'inline'
    document.getElementById("RMI_minus").style.display = 'none'
    document.getElementById("RMI_p").style.display = 'none'
}
