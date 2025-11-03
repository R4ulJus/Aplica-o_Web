import express from "express";

const host = "0.0.0.0";
const porta = 3000;
var listaUsuarios = [];
const server = express();

//Menu Usuário
server.get("/", (req, res) => {
   res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Web</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        </head>
    <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Cadastro
                        </a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="/cadastroUsuario">Usuario</a>
                        </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Sair</a>
                    </li>
                    </ul>
                </div>
            </nav>
   

    </body>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    </html>
    `);
});

server.get("/cadastroUsuario", (req, res) => {
    res.send(`
          <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Web</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        </head>
<body>


<div class="d-flex justify-content-center align-items-center vh-100">
    <form method="POST" action="/adicionarUsuario" class="needs-validation border rounded p-4 shadow bg-white w-50" novalidate>
        <h2 class="text-center mb-4">Cadastro de Usuários</h2>

        <div class="form-group">
            <label>Nome</label>
            <input type="text" class="form-control" placeholder="Nome" required>
            <div class="invalid-feedback">Informe o nome.</div>
        </div>

        <div class="form-group">
            <label>Sobrenome</label>
            <input type="text" class="form-control" placeholder="Sobrenome" required>
            <div class="invalid-feedback">Informe o sobrenome.</div>
        </div>

        <div class="form-group">
            <label>Cidade</label>
            <input type="text" class="form-control" required>
            <div class="invalid-feedback">Informe a cidade.</div>
        </div>

        <div class="form-group">
            <label>Estado</label>
            <select class="custom-select" required>
                <option value="" selected disabled>Escolha...</option>
                <option>SP</option>
                <option>RJ</option>
                <option>MG</option>
            </select>
            <div class="invalid-feedback">Escolha um estado.</div>
        </div>

        <div class="form-group">
            <label>CEP</label>
            <input type="text" class="form-control" required>
            <div class="invalid-feedback">Informe o CEP.</div>
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" required>
            <label class="form-check-label">Concordo com os termos</label>
            <div class="invalid-feedback">Aceite antes de enviar.</div>
        </div>
        <button class="btn btn-primary btn-block" type="submit">Cadastrar</button>
    </form>
</div>

    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
        })();
    </script>
</body>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    </html>
        `);
});

server.post("/adicionarUsuario", (req, res) => {
    console.log("Usuario Cadastrado");
    listaUsuarios.push();
});

server.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`)
    });