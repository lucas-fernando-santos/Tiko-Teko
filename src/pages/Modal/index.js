import React from 'react';
import './style.css'
import xis from '../../assets/cruz.svg'
import bolinha from '../../assets/logobola.svg'
import report from  '../../assets/cv.svg'
import setaB from '../../assets/setaB.svg'
import muted from '../../assets/muted.svg'
import like from  '../../assets/like.svg'
import share from '../../assets/compartilhar.svg'
import coment from '../../assets/comentar.svg'
import somImg  from '../../assets/music.svg'
import playOn from '../../assets/play.svg'
import video2 from '../../assets/videos/WhatsApp Video 2022-12-22 at 12.22.42.mp4'
import video1 from '../../assets/videos/WhatsApp Video 2022-12-22 at 12.22.43.mp4'
import { useState } from 'react';

const videos = [video1, video2]
const Modal = (params) => {
  const [play,setPlay] = useState(false)
  const [contagem,setContagem] = useState(0)
  const [indice, setIndice]= useState(0)
  const handleClose = params.handleClose
  const likes = () => {
    setContagem(contagem + 1)
  }
  const [rolando,setRolando] = (video1)
  
  const handleNext = () => {
   
    if (videos.length > indice) {
      setIndice(indice+1)
    }
  }


  return (
    <>
    <div className="modal">
      <div className="cont1">
        <button className='play' onClick={()=>setPlay(true)}>
        {play ===true?<></>:
          <img width={80} src={playOn}/>
        }
          </button>
        <div className="headerModal">
          <div>
          <button className='xis' onClick={handleClose}><img src={xis} /></button>
        <button className='bolinha' ><img src={bolinha}/></button></div>
        <button className='report
        '><img src={report}/> Report</button>
        <button className='setaB' onClick={handleNext}><img src={setaB}/></button> 
        {indice > 0 &&
        <button className='setaA' onClick={()=> setIndice(indice-1)}><img src={setaB}/></button> }
        
        </div>
        <video autoPlay play="true" playsinline="true" tabindex="2" mediatype="video" src={videos[indice]}></video>
      </div>
      <div className="cont2">
      <div className="perfilModal">
        <div className="imagin"><img className='pf1' src="https://pps.whatsapp.net/v/t61.24694-24/317034458_5591620260893421_6329145082213494981_n.jpg?ccb=11-4&oh=01_AdRnDNDRqp59XPe7diuIvtoM6WQGj-upipv4cjD2osteYg&oe=63A97686"/>
        <div className="textPF">
          <div><h3>Negros no Topo</h3></div>
          <div>@negros no topo</div>
        </div>
      <button className='seguin'>seguir</button>
      </div>
      </div>
      <div className="textL">
      <div className="textPF">
          <div>Salve nossa cultura, salve nossa essência, SALVE NOSSA HISTÓRIA!!✊🏾 . . . . . . . <strong> #pretosnotopo #pretasnotopo #negroslindos #negraslindas #culturanegra #black #fypシ #foryou </strong>
</div>
          <div className='centralImg'> <img className='notaM' src='https://svgsilh.com/svg/763193.svg'/>    <strong>  som original - negros no topo</strong></div>
        </div></div>
        <div className="compartilhament">
          <div className="conter1">
             <button onClick={likes}><img  width={30} src={like}/></button><span>{contagem}</span>
              <button><img width={30} src={coment}/></button> <span>0</span></div>
          <div className="conter2">
            <img src={share} alt="" />
        </div>
          </div>
        <div className="coments">
          <span>Sem Comentarios</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Modal;