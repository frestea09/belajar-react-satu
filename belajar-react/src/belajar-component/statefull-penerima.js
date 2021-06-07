import React,{Component} from 'react'

class StateFullPenerima extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="StateFullPenerima">
                <h1>Component Statefull</h1>
                <p>human name {this.props.name} & hero name is {this.props.heroname}</p>
            </div>
        )
    }
}

export default StateFullPenerima