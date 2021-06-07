import React from 'react'

const PenerimaStateless = (props)=>{
    const {name,hero,sayHello} = props
    return(
        <div className="PenerimaStateless">
            <h3>{name}</h3>
            <h3>{hero}</h3>
            <button onClick={()=>sayHello('ilman')}>Say Hello</button>
        </div>
    )
}

export default PenerimaStateless