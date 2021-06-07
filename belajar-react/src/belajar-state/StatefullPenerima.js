import React from 'react'

class StatefullPenerima extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="StatefullPenerima">
                <h1>{this.props.name}</h1>
                <button onClick={this.props.gantiNama}>Ganti</button>
            </div>
        )
    }
}

export default StatefullPenerima