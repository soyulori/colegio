import "./Fasor.css";

function Fasor({title="Título por defecto", description="description por defecto"}){
    return(
    <div className="Fasor">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    );
}
export default Fasor;