function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('erro, verifique os dados')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'bebe h.jpg')
            } else if(idade<21){
                img.setAttribute('src', 'jovem homem.jpg')
            } else if(idade<50){
                img.setAttribute('src', 'adulto h.jpg')
            } else{
                img.setAttribute('src', 'idoso h.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'bebe m.jpg')
            } else if(idade<21){
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if(idade<50){
                img.setAttribute('src', 'adulto m.jpg')
            } else{
                img.setAttribute('src', 'idoso m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        document.getElementById("foto").style.borderRadius = "10000px"
        img.style.width = '300px';
        img.style.height = '300px';
    }
}