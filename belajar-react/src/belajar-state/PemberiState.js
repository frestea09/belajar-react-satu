import React,{Component} from 'react'
import StatelessPenerima from './StatelessPenerima'
import StatefullPenerima from './StatefullPenerima'

class PemberiState extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "ilman teguh prasetya",
            bilangan : 0
        }
        this.gantiNama = this.gantiNama.bind(this)
        this.tambah = this.tambah.bind(this)
    }
    tambah(){
        this.setState(
            (prevState)=>({bilangan : prevState.bilangan + 1})
        )
    }
    gantiNama(){
        this.setState(
            {
                name : "Nama sudah di ganti"
            }
        )
    }
    render(){
        return(
            <div className="PemberiState">
                <StatelessPenerima name={this.state.name} gantiNama={this.gantiNama}/>
                <StatelessPenerima name={this.state.bilangan} gantiNama={this.tambah}/>
                <StatefullPenerima name={this.state.name} gantiNama={this.gantiNama}/>
            </div>
        )
    }
}

export default PemberiState