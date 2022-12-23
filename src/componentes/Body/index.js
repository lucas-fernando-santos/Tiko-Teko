import React from 'react'
import { useState } from 'react'; 

import Header from '../Header'
import Modal from '../../pages/Modal'
import HomeOff from '../../assets/casanormal.svg'
import SeguindoOff from '../../assets/seguindo.svg' 
import liveOff from '../../assets/live.svg'
import like from '../../assets/like.svg'
import comentarios from '../../assets/comentar.svg'
import compartilhar from '../../assets/compartilhar.svg'
import video2 from '../../assets/videos/WhatsApp Video 2022-12-22 at 12.22.42.mp4'
import video1 from '../../assets/videos/WhatsApp Video 2022-12-22 at 12.22.43.mp4'

import './style.css'

const Body = () => {
    const [coments,setComents] = useState(0)
    const [modal,setModal] = useState(false)
    const [contagem,setContagem] = useState(0)


  const comenta = () => {
    setComents(coments + 1)
  }
  const likes = () => {
    setContagem(contagem + 1)
  }
  
    return (
   <>
   {modal ?<Modal handleClose={()=> setModal(false)}/>:(

  
   
   <div className="geral">
    <Header/>
     <div className="main">
      <div className="container">
      <ul id='ul1'>
        <li className='lizinho'><img src={HomeOff}/> <span>Para Você</span> </li>
        <li className='lizinho'><img src={SeguindoOff}/> <span>Seguindo</span> </li>
        <li className='lizinho'><img src={liveOff}/> <span>Live</span> </li>
        <br />
        <li><span id='spn'></span></li>
      </ul>
      <ul  id='ul2'>
        <li><span>Faça login para seguir criadores, curtir vídeos <br />
           e ver comentários.</span></li>
        <li><button>Entrar</button></li>
      </ul>
      </div>
      </div>
      <div className="containerCard">
        <div className="headerCard">
        <button className='bSeguin'>+</button>
          <div><img className='perfilImg' src='https://pps.whatsapp.net/v/t61.24694-24/317034458_5591620260893421_6329145082213494981_n.jpg?ccb=11-4&oh=01_AdRnDNDRqp59XPe7diuIvtoM6WQGj-upipv4cjD2osteYg&oe=63A97686'/></div>
          <div className='text'><p><strong>Negros no Topo</strong>  @negros no topo</p><br />
          <p>Fogo nos racistas</p></div>
          <div className='bzin'><button>seguir</button></div>
        </div>
        <div className="mainCard">
            <div className="video">
            <video onClick={()=> setModal(true)} class="" playsinline="true" x5-playsinline="true" controls loop webkit-playsinline="true" tabindex="2" mediatype="video" src={video1}></video>              <div className="incons">
                  <button onClick={likes}><img src={like}/></button>
                    <span>{contagem}</span>
                    <button onClick={comenta}><img src={comentarios}/></button>
                    <span>{coments}</span>
                    <button><img src={compartilhar}/></button>
                    <br />
              </div>
          </div>  
        </div>
        <div className="headerCard1">
        <button className='bSeguin'>+</button>
          <div><img className='perfilImg' src='https://pps.whatsapp.net/v/t61.24694-24/317034458_5591620260893421_6329145082213494981_n.jpg?ccb=11-4&oh=01_AdRnDNDRqp59XPe7diuIvtoM6WQGj-upipv4cjD2osteYg&oe=63A97686'/></div>
          <div className='text'><p><strong>Negros no Topo</strong>  @negros no topo</p><br />
          <p>Fogo nos racistas</p></div>
          <div className='bzin'><button>seguir</button></div>
        </div>
          <div className="mainCard">
            <div className="video">
            <video class="" autoPlay controlsList='noremoteplayback' controls playsinline="true" x5-playsinline="true" webkit-playsinline="true" tabindex="2" mediatype="video" src={video2}></video>    <div className="incons">
                  <button onClick={likes}><img src={like}/></button>
                    <span>{contagem}</span>
                    <button onClick={comenta}><img src={comentarios}/></button>
                    <span>{coments}</span>
                    <button><img src={compartilhar}/></button>
                    <br />
                    </div>
            </div>
          </div>
      </div>
      </div>
      )}
      </>
  )
}

export default Body