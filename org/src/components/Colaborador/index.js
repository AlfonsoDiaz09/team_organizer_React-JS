import './Colaborador.css'
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, favorito} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    return (
        <div className="colaborador">
            <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {favorito ? <AiFillHeart color='red' size={30} onClick={() => like(id)} /> : <AiOutlineHeart size={30} onClick={() => like(id)} />}
            </div>
        </div>
    );
}

export default Colaborador;