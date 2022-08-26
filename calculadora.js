function passar(tecla){
    tela = document.getElementById("tela")
    if (tecla == '='){
        tela.innerHTML = eval(tela.innerHTML.trim())  
    return 
    }
    else if (tecla == 'C'){
        tela.innerHTML = " "
    return
    }
    tela.innerHTML += tecla 
} 