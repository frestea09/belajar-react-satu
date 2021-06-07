import React,{useState} from 'react'
import StateFullPenerima from './statefull-penerima'
import StatelessPenerima from './stateless-penerima'
const PenyediaProp = ()=>{
    const intialCount = 0;
    const [bilangan,setBilangan] = useState(intialCount);
    const incrementBilangan = () =>{
        setBilangan("hello")
    }
    return(
        <div>
            <StateFullPenerima name="klark" heroname = "superman"/>
            <StateFullPenerima name="wyne" heroname = "batman"/>
            <StateFullPenerima name="diana" heroname = "diana"/>
            <StatelessPenerima name="diana" heroname = "diana"/>
            <h3>Bilangan : {bilangan}</h3>
            <button onClick={incrementBilangan}>Tambah</button>
        </div>
    )
}

export default PenyediaProp