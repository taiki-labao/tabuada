function tabuada() {
    let numero = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab') 

    if (numero.value.length == 0) {
        window.alert('Aguardando número ser digitado')
    } else {
       /* res.innerHTML = `A Tabuada de ${numero.value} é : <br><br>`*/
        tab.innerHTML = ''
        let numero_tabuada = Number(numero.value)
        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${numero_tabuada} x ${c} = ${numero_tabuada*c}`
            tab.appendChild(item)
        }
    }
}