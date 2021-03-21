function somar() {
    var numero1 = window.document.getElementById('c1')
    var numero2 = window.document.getElementById('c2')
    var resultado = window.document.getElementById('resultado')
    var continha1 = Number(numero1.value)
    var continha2 = Number(numero2.value)
    var soma = continha1 * continha2
    resultado.innerHTML = `O resultado é ${soma} `
}