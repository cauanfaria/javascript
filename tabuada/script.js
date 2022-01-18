function gerar(){
    let tab = document.getElementById('txtnum')
    let t = Number(tab.value)
    let res = document.getElementById('res')
    res.innerHTML=''
    
    for(var i=1; i<=10; i++){
        let resultado = t * i 
        res.innerHTML += `${t} x ${i} = ${resultado}<br>`
    }
}