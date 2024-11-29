// Importação do pacote express
const express = require('express');
// Importação do modelo Usuario, que representa a tabela de usuários no banco de dados
const UsuarioModel = require('../models/usuario'); 
// Criação do roteador do Express para definir as rotas da API
const router = express.Router();


// Criação de nova reserva
router.post('/pagamentoUM', async (req, res) => {
  try {
    // O método 'create' do Sequelize é usado para criar um novo usuário no banco de dados.
    // O corpo da requisição (req.body) contém os dados que serão armazenados.
    const { nome, email, data_buscar_produto } = req.body; // Desestruturando os dados enviados pelo cliente
    
    // Criando o usuário no banco de dados
    const usuario = await UsuarioModel.create({
      nome: nome,
      email: email,
      data_buscar_produto: new Date(data_buscar_produto), // Certifique-se de que a data é passada corretamente
    });
    
    // Retorno de um status HTTP 201 (Created) junto com o usuário criado em formato JSON.
    res.status(201).json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        data_buscar_produto: usuario.data_buscar_produto,
      });
  } catch (error) {
    // Em caso de erro, retornamos um status HTTP 500 (Internal Server Error) e a mensagem de erro
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar', error });
  }
});


// Exporta o roteador para ser usado no arquivo principal do servidor
module.exports = router;
