import express from "express";

const host = "0.0.0.0";
const porta = 3000;
var listaUsuarios = [];
const server = express();

server.use(express.urlencoded({extended: true}));



server.get("/cadastroUsuario", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Inscrição - Torneio Tekken</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>

<body class="bg-dark">

<div class="d-flex justify-content-center align-items-center vh-100">
    <form method="POST" action="/adicionarUsuario" 
        class="needs-validation border border-danger rounded p-4 shadow-lg bg-secondary w-50" novalidate>

        <h2 class="text-center mb-4 text-white font-weight-bold text-uppercase">
            Inscrição - Torneio de Tekken
        </h2>

        <div class="form-group">
            <label class="text-white">Nome Completo</label>
            <input type="text" class="form-control" name="nome" required>
            <div class="invalid-feedback">Informe seu nome completo.</div>
        </div>

        <div class="form-group">
            <label class="text-white">CPF</label>
            <input type="text" class="form-control" name="cpf" required>
            <div class="invalid-feedback">Informe seu CPF.</div>
        </div>

        <div class="form-group">
            <label class="text-white">E-mail</label>
            <input type="text" class="form-control" name="email" required>
            <div class="invalid-feedback">Informe seu e-mail.</div>
        </div>

        <div class="form-group">
            <label class="text-white">Nickname / Gamertag</label>
            <input type="text" class="form-control" name="nickname" required>
            <div class="invalid-feedback">Informe seu nickname.</div>
        </div>

        <div class="form-group">
            <label class="text-white">Telefone para Contato</label>
            <input type="text" class="form-control" name="telefone" required>
            <div class="invalid-feedback">Informe um telefone válido.</div>
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" required>
            <label class="form-check-label text-white">Concordo com as regras do torneio</label>
            <div class="invalid-feedback">É necessário aceitar as regras.</div>
        </div>

        <button class="btn btn-danger btn-lg btn-block text-uppercase font-weight-bold" type="submit">
            Confirmar Inscrição
        </button>

    </form>
</div>

    <script>
        (function() {
        'use strict';
        window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
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

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
    `);
});


server.post("/adicionarUsuario", (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const nickname = req.body.nickname;
    const telefone = req.body.telefone; 
    listaUsuarios.push({nome, cpf, email, nickname, telefone});
    res.redirect("/listarUsuarios");
});

server.get("/listarUsuarios", (req, res) =>{
    let conteudo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Competidores</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>

<body class="bg-dark text-white">

    <div class="container mt-5">
        <h1 class="text-center mb-4 p-3 bg-danger border rounded shadow">
            🔥 Lista de Competidores do Torneio de Tekken 🔥
        </h1>

        <div class="table-responsive border rounded shadow">
            <table class="table table-dark table-striped table-bordered table-hover text-center">
                <thead class="bg-danger">
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Nickname</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (let i = 0; i < listaUsuarios.length; i++) {
        conteudo += `
                    <tr>
                        <td>${listaUsuarios[i].nome}</td>
                        <td>${listaUsuarios[i].cpf}</td>
                        <td>${listaUsuarios[i].email}</td>
                        <td>${listaUsuarios[i].nickname}</td>
                        <td>${listaUsuarios[i].telefone}</td>
                    </tr>
        `;
    }

    conteudo += `
                </tbody>
            </table>
        </div>

        <div class="text-center mt-4">
            <a class="btn btn-danger btn-lg shadow" href="/">Voltar</a>
        </div>

    </div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
    `;

    res.send(conteudo);
});

server.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`)
    });