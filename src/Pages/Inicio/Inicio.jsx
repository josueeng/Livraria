import React from 'react'
import Header from '../../Components/Header/Header'
import banner from '../../assets/Banner.png'
import './Inicio.scss'
import Motivos from '../../Components/Motivos/Motivos'
import Footer from '../../Components/Footer/Footer'
export default function Inicio() {
  return (
    <>
      <Header />
      <div className='container'>
      <img className='ImgBan' src={banner} alt="" />
      <div className='texto'>
      VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO

      </div> 
      </div>
      <Motivos />
      <Footer />
    </>
  )
}
