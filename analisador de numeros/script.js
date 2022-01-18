let val = []
let num = document.getElementById('txtnum')
let tab = document.getElementById('txttab')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}


function adiciona(){
    if(isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = num.value
        tab.appendChild(item)
        res.innerHTML=``
    } else{
        window.alert('valor invalido ou ja encontrado')
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if(val.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        res.innerHTML = ''
        let tamanho = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
    
            for(let pos in val){
                soma += val[pos]
                if (val[pos] > maior)
                    maior = val[pos]
                if (val[pos] < menor)
                    menor = val[pos]
            }

            
            for(i=0; i>=val.length; i++){
                soma += val[i]
            }
        
        
        res.innerHTML += `Temos ${tamanho} numeros cadastrados<br>`
        res.innerHTML += `O maior valor informado foi ${maior}<br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br>`
        res.innerHTML += `A soma dos valores foi ${soma}<br>`
        res.innerHTML += `A média dos valores é ${media}<br>`   
    }    
}