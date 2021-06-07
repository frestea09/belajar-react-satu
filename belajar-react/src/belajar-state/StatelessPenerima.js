import React from 'react'

const StatelessPenerima = (props)=>{
    return(
        <div className="StatelessPenerima">
            <h1>{props.name}</h1>
            <button onClick={props.gantiNama}>Ganti</button>
        </div>
    )
}
export default StatelessPenerima