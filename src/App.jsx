import Profesora from './assets/img/Profesora.png';
import './App.css';
import Fasor from './components/Fasor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Profesora} className="Profesora" alt="Profesora" />
        <p>Bienvenidos a FASOR</p>
        <div className="container">
        <Fasor title="¿Quién Soy?" description="Mi nombre es Sor Junny Londoño Rivera, soy estudiante de la Tecnología en Análisis y Desarrollo de Software del Sena, regional Quindío, estoy caminando en la iniciativa de crear un Software Educativo que permita la transversalidad de los procesos académicos de las Instituciones Educativas, de carácter privado o público, del contexto local y nacional." />
        <Fasor title="¿Qué Ofrezco?" description="Este sistema en su primera fase, permite hacer una lectura generalizada de los servicios que se brindan y se deben garantizar desde su primera instancia, ya cuando se agenden las asesorías, se dará a los clientes una información a groso modo, la cual estará sujeta a los cambios o transformaciones que se requieran según el sistema Educativo o modalidad implementada." />
        <Fasor title="Servicio1- Matrícula" description="El objetivo final del proceso de matrícula es matricular alumnos tanto antiguos como nuevos en el sistema educativo, ya que esto permite la ampliación de la cobertura de la educación como respuesta a la necesidad de educación de la población."/>
        <Fasor title="Servicio2" description="Las bases de datos proporcionan un nuevo acceso y tratamiento a los grandes volúmenes de información que se están generando. Las actividades con bases de datos agilizan y desarrollan los procesos cognitivos en los alumnos." />
        <Fasor  title="Servicio3" description="El Decreto 230, establece que las instituciones deberán entregar a los padres de familia, cuatro veces en el año, un informe escrito conciso y claro del rendimiento de sus hijos, acompañado de la descripción de las fortalezas y de recomendaciones."/>
        <Fasor  title="¿Cómo me Contactas'" description="Celular:350-644-83-82,E-mail:fasoracademico2023@gmail.com,
        Facebook:fasoracademico2023"/>
        </div>
     </header>
     <section>
     <button>Continuar</button>
     </section>
    </div>  
  );   
}

export default App
