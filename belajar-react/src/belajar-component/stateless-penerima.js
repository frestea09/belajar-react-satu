import React from 'react';

const StatelessPenerima = (props) =>{
    return(
        <div>
            <h1>Stateless Component</h1>
            <p>Human Name : {props.name} & Heroes Name : {props.heroname}</p>
        </div>
    )
}
export default StatelessPenerima;