const change = document.getElementById("translateButton")
function change_data(){
    if (document.getElementsByTagName('div')[2].innerHTML=='MOSCOW GU MVD'){
        document.getElementsByTagName('div')[2].innerHTML='ГУ МВД ПО Г. МОСКВЕ'
        document.getElementsByTagName('div')[3].innerHTML='Бобрышева'
        document.getElementsByTagName('div')[4].innerHTML='Мария'
        document.getElementsByTagName('div')[5].innerHTML='Алексеевна'
        document.getElementsByTagName('div')[6].innerHTML='Жен'
        document.getElementsByTagName('div')[7].innerHTML='Москва'
        document.getElementsByTagName('div')[8].innerHTML='17.02.2005'
    return
    }
    if (document.getElementsByTagName('div')[2].innerHTML=='ГУ МВД ПО Г. МОСКВЕ'){
    document.getElementsByTagName('div')[2].innerHTML='MOSCOW GU MVD'
    document.getElementsByTagName('div')[3].innerHTML='Bobrysheva'
    document.getElementsByTagName('div')[4].innerHTML='Maria'
    document.getElementsByTagName('div')[5].innerHTML='Alekseevna'
    document.getElementsByTagName('div')[6].innerHTML='Fem'
    document.getElementsByTagName('div')[7].innerHTML='Moscow'
    document.getElementsByTagName('div')[8].innerHTML='17.02.2005'
    
    return
    }
}

change.addEventListener("click", change_data)


