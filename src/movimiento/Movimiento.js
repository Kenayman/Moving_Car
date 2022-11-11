import React,{useState} from 'react';
import "./App.css";
import piso from '../movimiento/Img_02.png'
import bg from '../movimiento/paisaje-al-atardecer-lago-nubes-cielo-rojo-siluetas-colinas-arboles-costa_107791-4670.webp'
import carro from '../movimiento/carr.png'

const Movimiento = () => {
    const [iniciar,setInicio] = useState(false)
    return (
    <div>
    <img src={bg} className='bg' alt="" />
    <img src={piso} className={iniciar ? `logo` : null} alt="" />
    <img src={piso} className='logo2' alt="" />
    <img src={carro} className={iniciar ? `car` : null} alt="" />
    <button  onClick={()=>{
        setInicio(inicio=> !inicio);
        //

    }}>{iniciar ? 'DETENER' : 'INICIAR'}</button>
    </div>
    )
}
export {Movimiento};


