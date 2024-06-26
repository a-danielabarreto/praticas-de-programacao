function calcular(operacao) {
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    
    let resultado
    switch(operacao) {
        case "+": 
            resultado = somar(n1, n2)
            break

        case "-":
            resultado = subtrair(n1, n2)
            break
        
        case "*":
            resultado = multiplicar(n1, n2)
            break

        case "/":
            resultado = dividir(n1, n2)
            break
    }
    
    document.getElementById("resultado").innerHTML = "O resultado é " + resultado
}

function somar(n1, n2) {
    return Number(n1) + Number(n2)
}

function subtrair(n1, n2) {
    return n1 - n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

function dividir(n1, n2) {
    if (n2 == 0) {
        console.error("Não é possível dividir número por zero")
        return null
    } else {
        return n1 / n2
    }  
}

// Outra forma de encontrar

const somaExpressao = function(n1, n2) {
    return n1 + n2
}

// Outra forma de encontrar

const somaArrow = (n1, n2) => {
    return n1 * n2 * 2
}

// ou

/* 

const somaArrow = (n1, n2) => (
    n1 * n2 * 2
)

*/
   


console.log(somaArrow(10, 2))