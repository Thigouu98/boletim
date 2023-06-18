  let bt = document.getElementById("save")//botao salvar
        let input = document.querySelectorAll("input.notas")//array com os inputs de todos os bimestres
        let media = document.querySelectorAll("input.media")//array com os inputs das medias dos bimestres
        let final = document.getElementById("mediafinal")
        let resultado = document.getElementById("resultado")
        let nome = document.getElementById("nome")//input do nome do aluno
        let mat = document.getElementById("matricula")//input da matricula
        let turma = document.getElementById("turma")//input da turma
        let atencao = document.getElementById("atencaoh")//informações de erro



        var aluno = new Array()
        //CLICK BOTAO //
        bt.addEventListener("click", function calculo(e) { //evento de click 
            e.preventDefault()
            //CABECARIO VAZIO //
            if (nome.value == "") { //se o campo nome estiver vazio escreva na tela
                atencao.innerHTML = ""
                atencao.innerText = "Preencha o Nome do Aluno"
                nome.focus()
            }
            else if (mat.value == "") {
                atencao.innerHTML = ""
                atencao.innerText = "Preencha a Matrícula"
                mat.focus()
            }
            else if (turma.value == "") {
                atencao.innerHTML = ""
                atencao.innerText = "Preencha a Turma"
                turma.focus()
            }

            else if (input[0].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[0].focus()
            }
            else if (input[1].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[1].focus()
            }
            else if (input[2].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[2].focus()
            }
            else if (input[3].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[3].focus()
            }
            else if (input[4].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[4].focus()
            }
            else if (input[5].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[5].focus()
            }
            else if (input[6].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[6].focus()
            }
            else if (input[7].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[7].focus()
            }
            else if (input[8].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[8].focus()
            }
            else if (input[9].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[9].focus()
            }
            else if (input[10].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[10].focus()
            }
            else if (input[11].value == "") {
                resultado.innerHTML = ""
                atencao.innerText = "Preencha o Todas as Notas"
                input[11].focus()
            }

            else {

                atencao.innerHTML = ""
                //grava os valores do cabecario na array //
                aluno["Aluno"] = nome.value
                aluno["Matricula"] = mat.value
                aluno["Turma"] = turma.value

                //Captura das notas de cada bimestre//
                aluno["BIM1"] = new Array()
                aluno["BIM2"] = new Array()
                aluno["BIM3"] = new Array()
                aluno["BIM4"] = new Array()

                for (let e = 0; e < 4; e++) {

                    for (let i = 0; i < 3; i++) {
                        aluno.BIM1[i] = Number(input[i].value.replace(',', '.'))//Convertido para numero e substituido virgula por ponto
                        aluno.BIM2[i] = Number(input[i + 3].value.replace(',', '.'))
                        aluno.BIM3[i] = Number(input[i + 6].value.replace(',', '.'))
                        aluno.BIM4[i] = Number(input[i + 9].value.replace(',', '.'))
                    }
                }


                // CALCULO DA MEDIA POR BIM //
                //BIM1//
                let soma = 0
                for (let i = 0; i < 3; i++) {//laço de repetição para percorrer o array por 0 1 2 e calcular a media
                    soma += Number(aluno.BIM1[i])//definido como numero e acrecenta na variavel
                }
                result = soma / 3 //divide por tres
                media[0].value = result.toFixed(2)//duas casa decimais */

                //BIM2//
                soma = 0
                for (let i = 0; i < 3; i++) {//laço de repetição para percorrer o array por 0 1 2 e calcular a media
                    soma += Number(aluno.BIM2[i])//definido como numero e acrecenta na variavel
                }
                result = soma / 3 //divide por tres
                media[1].value = result.toFixed(2)//duas casa decimais */

                //BIM3//
                soma = 0
                for (let i = 0; i < 3; i++) {//laço de repetição para percorrer o array por 0 1 2 e calcular a media
                    soma += Number(aluno.BIM3[i])//definido como numero e acrecenta na variavel
                }
                result = soma / 3 //divide por tres
                media[2].value = result.toFixed(2)//duas casa decimais */

                //BIM4//
                soma = 0
                for (let i = 0; i < 3; i++) {//laço de repetição para percorrer o array por 0 1 2 e calcular a media
                    soma += Number(aluno.BIM4[i])//definido como numero e acrecenta na variavel
                }
                result = soma / 3 //divide por tres
                media[3].value = result.toFixed(2)//duas casa decimais */

                // CALCULO DA MEDIA FINAL //
                let m = 0
                for (i = 0; i < 4; i++) {//laço de repetição para calcular a media das medias
                    m += Number(media[i].value)
                }
                notafinal = m / 4
                final.value = notafinal.toFixed(2)

                // SE APROVADO REPROVADO OU RECUPERAÇÃO //
                if (notafinal < 4) {
                    resultado.innerHTML = "REPROVADO"//condicional para escrever na div se foi aprov, reprov, ou recup. e mudar a cor para cada situação
                    resultado.style.color = "red"
                }
                else if (notafinal >= 4 && notafinal < 6) {
                    resultado.innerHTML = "RECUPERAÇÃO"
                    resultado.style.color = "orange"
                }
                else if (notafinal >= 6) {
                    resultado.innerHTML = "APROVADO"
                    resultado.style.color = "green"
                }



                console.log(aluno)
                atencao.innerText = "Dados Gravados Com Sucesso"


            }




        })