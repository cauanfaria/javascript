function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#ffcd80'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.jpeg'
        document.body.style.background = '#FF8866'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = '#2e4482'
    }
}