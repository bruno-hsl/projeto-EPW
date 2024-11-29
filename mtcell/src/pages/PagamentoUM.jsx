import React, { useState } from 'react';
import '../styles/pagamento.css';

function PagamentoUM() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataReserva: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Alterar a URL para apontar para o servidor back-end que está rodando na porta 3000
      const response = await fetch('http://localhost:3000/pagamentoUM', { // URL corrigida
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          data_buscar_produto: formData.dataReserva // Enviando o nome correto do campo
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      const data = await response.json();
      alert('Formulário enviado com sucesso!'); // Mensagem de sucesso
      console.log('Usuário criado:', data); // Exibe o usuário retornado
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className="page">
      <h1 className="titR">Página de Reserva</h1>

      {/* Caixa do Formulário */}
      <div className="form-container">
        <h2 className="titRdois">Preencha suas informações</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataReserva">Data para Buscar Produto:</label>
            <input
              type="date"
              id="dataReserva"
              name="dataReserva"
              value={formData.dataReserva}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PagamentoUM;
