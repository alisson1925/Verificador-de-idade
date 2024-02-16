function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

    else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsexo[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotocriancaM.png')
            }

            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemM.png')
            }

            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotohomem.png')
            }

            else{
                //idoso
                img.setAttribute('src', 'fotovelho.png')
            }
        }

        else if (fsexo[1].checked){
            genero = 'Mulher'
    
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotocriancaF.png')
            }

            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemF.png')
            }

            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotoMulher.png')
            }

            else{
                //idoso
                img.setAttribute('src', 'fotovelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

