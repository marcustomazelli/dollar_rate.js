let dollar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert('usd-to-brl')
})

brlInput.addEventListener('keyup' , ()=>{
    convert('brl-to-usd')
})

usdInput.addEventListener('blur', ()=>{
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', ()=>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert('usd-to-brl')

//funções
function formatCurrency(value){

    let fixedValue = fixValue(value) //ajustar o valor 

    let options = {
        useGrouping : false,
        minimumFractionDigits: 2   
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)   // utilizar função de formatar

    return formatter.format(fixedValue)
   
    // retorna o valor formatado
}

function fixValue(value){
    let fixedValue = value.replace(',' , '.') //vai trocar onde tem virgula para ponto
    let floatValue = parseFloat(fixedValue)
    
    if(floatValue == NaN)[
        floatValue = 0
    ]
    return floatValue
}

function convert(type){
    if(type == 'usd-to-brl'){
        let fixedValue = fixValue(usdInput.value)//ajustar o valor
        
        let result = fixedValue * dollar //converter o valor
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)//mostra no campo de real
    } 
    if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlInput.value) //ajustar o valor
        
        let result = fixedValue / dollar//converter o valor
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)//mostra no campo de dolar
    }
}
