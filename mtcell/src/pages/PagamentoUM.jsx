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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado');
  };

  return (
    <div className="page">
      <h1 class="titR">Página de Reserva</h1>

      {/* Caixa do Formulário */}
      <div className="form-container">
        <h2 class="titRdois">Preencha suas informações</h2>
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