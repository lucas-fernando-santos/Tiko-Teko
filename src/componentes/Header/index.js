import React from 'react'
import './style.css';
import logo from '../../assets/logo.svg'
import buscar from '../../assets/buscar.svg'
import cruz from '../../assets/cruz.svg'
import tres from '../../assets/trespontos.svg'

const index = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="Headcontainer">
          <div className="box1">

            <img height="42" width="118" src={logo} />
            <div className="search">
              <input type="search" placeholder='Pesquisar contas e vídeos'/>
              <span></span>
              <div className="buscar">
                <button><img src={buscar} /></button>
              </div>
            </div>
            <div className="buttons">
              <button id='b1'> <img src={cruz} /> Carregar</button>
              <button id='b2'>entrar</button>
              <img src={tres} alt="" id='tres' />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index