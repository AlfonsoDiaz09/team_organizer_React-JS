import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lora",
      puesto: "Instructor",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura Latam",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Dario",
      puesto: "Dev. FullStack",
      favorito: false,
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Dario",
      puesto: "Dev. FullStack",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gesión",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      favorito: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lora",
      puesto: "Instructor",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      favorito: false,
    },
])

  //Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gesión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  //Ternario -> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador")
    console.log(colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador")
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color
  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  //Dar like a colaborador
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito
      }

      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  

  return (
    <div>
      <Header />

      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {equipos.map((equipo) =>{
          return (<Equipo 
            datos={equipo} 
            key={equipo.titulo} 
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />)
      })}

      <Footer />
    </div>
  );
}

export default App;
