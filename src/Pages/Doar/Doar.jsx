import React, { useState } from "react";
import "./Doar.scss";

//importação de componentes
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

//importação de imagens
import livro from "../../assets/livro.png";

export default function Doar() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://bookregisterapi.onrender.com/doar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.Mensagem || "Livro cadastrado com sucesso!");
        setFormData({
          titulo: "",
          categoria: "",
          autor: "",
          image_url: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.erro || "Erro ao cadastrar o livro.");
      }
    } catch (error) {
      alert("Erro ao conectar com a API.");
    }
  };

  return (
    <>
      <Header />
      <div className="cont-prin">
        <p className="text-prin">
          Por favor, Preencha o formulário com suas informações e as informações
          do Livro
        </p>
        <div className="form-livros">
          <div className="form-title">
            <img src={livro} alt="" />
            <p className="title">Informações do Livro</p>
          </div>
          <div className="inputs">
            <input
              className="input-text"
              type="text"
              name="titulo"
              placeholder="Nome do Livro"
              value={formData.titulo}
              onChange={handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="categoria"
              placeholder="Categoria do Livro"
              value={formData.categoria}
              onChange={handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="autor"
              placeholder="Autor do Livro"
              value={formData.autor}
              onChange={handleChange}
            />
            <input
              className="input-text"
              type="text"
              name="image_url"
              placeholder="Link da imagem do Livro"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>
          <button className="bot-doar" onClick={handleSubmit}>
            Doar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
