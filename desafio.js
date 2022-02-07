
let numero = 0
let listaNumeros = []

// Montando a lista de números
function adicionarNumero() {

    numero = document.querySelector('#numero').value
    listaNumeros.push(numero)

    limpaInput()
}

// Ordenando a lista de números
function ordenar() {

    listaNumeros = converterArray(listaNumeros)
    listaNumeros = removerCaracteresRepetidos(listaNumeros)
    
    for(let i = 0; i < listaNumeros.length; i++) {
        for(let j = 0; j < listaNumeros.length; j++) {
            if(listaNumeros[i] < listaNumeros[j]) {
                let valor = listaNumeros[i]
                listaNumeros[i] = listaNumeros[j]
                listaNumeros[j] = valor
            }
        }
    }
    
    exibeResultado(listaNumeros)
    listaNumerosVazia()
}

function validarSudoku() {

    let matriz = "[" + document.querySelector("#matriz_sudoku").value + "]"
    
    for (let i = 0; i < 9; i++) {
        let row = new Set()
            col = new Set()
            box = new Set()
    
        for (let j = 0; j < 9; j++) {
          let _row = matriz[i][j]
          let _col = matriz[j][i]
          let _box = matriz[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
          
          if (_row != '.') {
            if (row.has(_row)) return false;
            row.add(_row)
            document.querySelector("#resultado_sudoku").value = "Matriz Inválida"
          }
          if (_col != '.') {
            if (col.has(_col)) return false
            col.add(_col)
            document.querySelector("#resultado_sudoku").value = "Matriz Inválida"
          }
          
          if (_box != '.') {
            if (box.has(_box)) return false
            box.add(_box)
            document.querySelector("#resultado_sudoku").value = "Matriz Inválida"
          } 
        }
    }
    document.querySelector("#resultado_sudoku").value = "Matriz Válida"
    return true
    

  
}

//Conversor de Array de String para Array de Inteiros
function converterArray(lista) {

    return lista.map(Number)
}

//Responsável por remover caracteres repetidos
function removerCaracteresRepetidos(lista) {

    return [...new Set(lista)]
}

// Limpa o valor da Lista de Numeros
function listaNumerosVazia () {
    
    listaNumeros = []

    return listaNumeros
}

// Exibe o resultado na tela
function exibeResultado(resultado) {

    document.querySelector('#resultado_ordenacao').value = resultado
}

// Limpa os dados de Input
function limpaInput() {

    document.querySelector('#numero').value = ''
}