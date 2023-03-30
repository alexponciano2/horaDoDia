
function carregar(){
    let msg = window.document.getElementById('msg') //------- LINKOU AO TEXTO
    let img = window.document.getElementById('imagem') //---- LINKOU À IMAGEM  
    let data = new Date() //--------------------------------- INSTANCIOU A DATA
    let hora = data.getHours() //---------------------------- PEGOU A HORA DO SISTEMA

    msg.innerHTML = `Agora são ${hora} horas` //------------- TROCOU O TEXTO USANDO JS

    if(hora >= 0 && hora < 12){ //--------------------------- DE 0h A 11:59h
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#5e99d1'
    }else if(hora >= 12 && hora < 18){ //-------------------- DE 12h A 17:59h
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#c4894d'
    }else if(hora >= 18 && hora <= 24){ //------------------- DE 18h A 24h
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#3a3f3d'
    }else{ //------------------------------------------------ ACIMA DE 24h
        msg.innerHTML = 'Hora Inválida!'
        img.src = 'imagens/errado2.png'
        document.body.style.background = 'black'
    }
}