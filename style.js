function mostrarAlerta() {
    alert("Esta función se está desarrollando");
}

function alertaaa(){
    alert("Esta grupo muscular se encuentra en investigación, pronto se añadirá contenido");    
}


function calcularIMC() {
    // 1. Capturamos los valores de los inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validación básica
    if (!peso || !alturaCm) {
        resultadoDiv.innerHTML = "Por favor, completa ambos campos.";
        return;
    }

    // 3. Fórmula del IMC: peso / (altura_m * altura_m)
    const alturaM = alturaCm / 100;
    const imc = (peso / (alturaM * alturaM)).toFixed(1);

    // 4. Lógica de clasificación
    let mensaje = "";
    if (imc < 18.5) mensaje = "Bajo peso";
    else if (imc < 24.9) mensaje = "Peso normal";
    else if (imc < 29.9) mensaje = "Sobrepeso";
    else if (imc < 34.9) mensaje = "Obesidad grado I";
    else if (imc < 39.9) mensaje = "Obesidad grado II";
    else mensaje = "Obesidad grado III"

    // 5. Mostrar el resultado en pantalla
    resultadoDiv.innerHTML = `<h3>Tu IMC es: ${imc}</h3><p>Clasificación: ${mensaje}</p>`;
}
