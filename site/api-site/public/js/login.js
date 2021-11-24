let progress = document.getElementById("progressbar");
  let totalheight = document.body.scrollHeight - window.innerHeight;
  window.innerHeight;



  const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

function cadastrar() {

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var telefoneVar = telefone_input.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || telefoneVar == "") {

        window.alert("Preencha todos os campos para prosseguir!");
        if (nomeVar == "") {
            console.log('nome está em branco')
        }
        if (emailVar == "") {
            console.log('email está em branco')
        }
        if (senhaVar == "") {
            console.log('senha está em branco')
        }
        if (telefoneVar == "") {
            console.log('confirmacaoSenha está em branco')
        }
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

   
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            telefoneServer: telefoneVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado");
            Modal.close();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function entrar() {

    var emailVar = email_input1.value;
    var senhaVar = senha_input1.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "./sobre.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            alert("Houve erro ao entrar")

            resposta.text().then(texto => {
                console.error(texto);
                
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}