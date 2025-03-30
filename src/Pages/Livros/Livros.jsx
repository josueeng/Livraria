import React, { useEffect, useState } from 'react';
import './Livros.scss';

import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('https://bookregisterapi.onrender.com/livros');
        if (response.ok) {
          const data = await response.json();
          setLivros(data);
        } else {
          alert('Erro ao buscar os livros.');
        }
      } catch (error) {
        alert('Erro ao conectar com a API.');
      }
    };

    fetchLivros();
  }, []);

  return (
    <>
      <Header />
      <div className="ContPrinc">
        {livros.length > 0 ? (
          livros.map((livro) => (
            <div key={livro.id} className="ContLi">
              <img src={livro.image_url} alt={livro.titulo} />
              <div className="LivroDet">
                <p className="TextLiv">{livro.titulo}</p>
                <p className="TextLiv">{livro.autor}</p>
                <p className="TextLiv">{livro.categoria}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="TextLiv">Nenhum livro encontrado.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
