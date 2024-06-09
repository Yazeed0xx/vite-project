import "./Prog.css"
function Programers(props) {
  return (
    <>
    <div className="card">

        <ul className="card1">

     <li>{props.name}</li>
      <li>{props.ProLang}</li>
      <li>{props.exp}</li>
    <li>{props.company}</li>
    </ul>

      
    </div>

      </>

  )
}

export default Programers
