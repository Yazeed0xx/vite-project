import './Companies.css'
import Pr from "./Programers"
import Ser from "./Services"

function Companies(props) {
  return (
    <>
    <div className='comp'>
        <h1>{props.compname}</h1>
        <Ser 
        num = {props.num1}
        year = {props.year1}
        serv = {props.serv1}
        work = {props.work1} />
        <Pr
        name = {props.name1}
        ProLang = {props.ProLang1}
        exp = {props.exp1}
        company= {props.company1}
        />
        


        


        
      
    </div>
    </>
  )
}

export default Companies
