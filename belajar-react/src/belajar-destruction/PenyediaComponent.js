import React from 'react'
import PenerimaStateless from './PenerimaStateless'

class PenyediaComponent extends React.Component{
    constructor(props){
        super(props)
        this.sayHello = this.sayHello.bind(this)
    }
    sayHello(inputName){
        alert(`Hello ${inputName}`)
    }
    render(){
        return(
            <div>
                <PenerimaStateless name="ilman teguh prasetya" hero="superman" sayHello={this.sayHello}/>
            </div>
        )
    }
}

export default PenyediaComponent