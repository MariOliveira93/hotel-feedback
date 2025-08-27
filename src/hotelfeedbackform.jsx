// src/hotelfeedbackform.jsx

import { useState } from "react";

export default function HotelFeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    hotelStay: "",
    reasons: {
      location: false,
      price: false,
      previousExperience: false,
      other: false,
    },
    // Altere o valor inicial para uma string vazia
    service: "",
    food: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        reasons: {
          ...prev.reasons,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedReasons = Object.keys(formData.reasons).filter(
      (key) => formData.reasons[key]
    );

    const finalFormData = {
      ...formData,
      reasons: selectedReasons,
    };

    console.log("Dados enviados:", finalFormData);
  };

  return (
    <div>
      <header>
        <h1 className="titulo-com-emoji">Pesquisa de satisfação</h1>
        <h2>Pousada Pavão 🦚</h2>
        <p>
          Obrigado por se hospedar conosco. Por favor, deixe seu relato sobre sua
          recente estadia.
        </p>
      </header>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informações pessoais</legend>
              <label htmlFor="full-name">Nome (obrigatório):</label>
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="Ex. José Silva"
                required
                size="20"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="email">E-mail (obrigatório):</label>
              <input
                placeholder="seu@email.com"
                required
                id="email"
                type="email"
                name="email"
                size="20"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="age">Idade (opcional):</label>
              <input
                type="number"
                name="age"
                id="age"
                min="3"
                max="100"
                value={formData.age}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <legend>Foi sua primeira hospedagem?</legend>
              <label htmlFor="yes-option">Sim</label>
              <input
                id="yes-option"
                type="radio"
                name="hotelStay"
                value="yes"
                checked={formData.hotelStay === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="no-option">Não</label>
              <input
                id="no-option"
                type="radio"
                name="hotelStay"
                value="no"
                checked={formData.hotelStay === "no"}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <legend>
                Por que você escolheu a nossa pousada? (Marque todas as opções
                necessárias)
              </legend>
              <div className="checkbox-item">
                <label>
                  <input
                    type="checkbox"
                    name="location"
                    checked={formData.reasons.location}
                    onChange={handleChange}
                  />
                  Localização
                </label>
              </div>

              <div className="checkbox-item">
                <label>
                  <input
                    type="checkbox"
                    name="price"
                    checked={formData.reasons.price}
                    onChange={handleChange}
                  />
                  Preço acessível
                </label>
              </div>

              <div className="checkbox-item">
                <label>
                  <input
                    type="checkbox"
                    name="previousExperience"
                    checked={formData.reasons.previousExperience}
                    onChange={handleChange}
                  />
                  Atendimento/experiência anterior
                </label>
              </div>

              <div className="checkbox-item">
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    checked={formData.reasons.other}
                    onChange={handleChange}
                  />
                  Outros
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Avaliações</legend>
              <label htmlFor="service">Como foram os serviços?</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              >
                {/* Adicione a nova opção com disabled e selected */}
                <option value="" disabled selected>
                  Escolha uma das opções
                </option>
                <option value="poor">Ruim</option>
                <option value="satisfactory">Satisfatório</option>
                <option value="good">Bom</option>
                <option value="very-good">Muito bom</option>
                <option value="excellent">Excelente</option>
              </select>

              <label htmlFor="food">Como estava o café da manhã?</label>
              <select
                name="food"
                id="food"
                value={formData.food}
                onChange={handleChange}
              >
                {/* Adicione a nova opção com disabled e selected */}
                <option value="" disabled selected>
                  Escolha uma das opções
                </option>
                <option value="poor">Ruim</option>
                <option value="satisfactory">Satisfatório</option>
                <option value="good">Bom</option>
                <option value="very-good">Muito bom</option>
                <option value="excellent">Excelente</option>
              </select>
            </fieldset>

            <label htmlFor="comments">Comentários</label>
            <textarea
              cols="30"
              rows="10"
              name="comments"
              id="comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}