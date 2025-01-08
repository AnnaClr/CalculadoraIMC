document.getElementById("imcForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
    const imcImage = document.querySelector('.imc_img'); // Seleciona a imagem principal

    if (weight > 0 && height > 0) {
        const imc = (weight / (height / 100) ** 2).toFixed(2)

        let mensagem = `Seu IMC é ${imc}. `;
        if (imc < 18.5) {
            mensagem += "Você está <strong>Abaixo do Peso.</strong>";
            imcImage.src = './assets/img/magreza.png'; // Troca a imagem para abaixo do peso
        } else if (imc >= 18.5 && imc < 24.9) {
            mensagem += "Você está com <strong>Peso Normal.</strong>";
            imcImage.src = './assets/img/peso-normal.png'; // Troca a imagem para peso normal
        } else if (imc >= 24.9 && imc < 29.9) {
            mensagem += "Você está <strong>Acima do Peso.</strong>";
            imcImage.src = './assets/img/sobrepeso.png'; // Troca a imagem para sobrepeso
        } else if (imc >= 29.9 && imc < 34.9) {
            mensagem += "Você está com <strong>Obesidade 1.</strong>";
            imcImage.src = './assets/img/obesidade-1.png'; // Troca a imagem para obesidade 1
        } else {
            mensagem += "Você está com <strong>Obesidade 2.</strong>";
            imcImage.src = './assets/img/obesidade-2.png'; // Troca a imagem para obesidade 2
        }

        result.innerHTML = mensagem;
    
    } else {
        result.textContent = "Por favor, insira valores válidos para peso e altura.";
    }
});
