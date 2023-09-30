import {useState} from 'react';
import './MiOrg.css';

const MiOrg = (props) => {
    //Estado - Hooks (Funcionalidades que nos ayudan a trabajar con el comportamiento de React) 
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento ", mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return (
        <section className="org-section">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
    );
}

export default MiOrg;