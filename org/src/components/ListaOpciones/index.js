import './ListaOpciones.css'

const ListaOpciones = (props) => {
    /*
    Metodo map -> arreglo.map((equipo, index) => {
        return (<option></option>)
    })
    */
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gesión",
    ]

    const manejarCambio = (e) => {
        console.log("Cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {equipos.map((equipo, index) => {
                    return (<option key={index}>{equipo}</option>)
                })}
            </select>
        </div>
    );
}

export default ListaOpciones;