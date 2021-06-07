import React,{Component} from 'react'
import StatelessComponent from './StatelessComponent'
import PenyediaProp from './belajar-component/penyedia-prop'
import PemberiState from './belajar-state/PemberiState'
import PenyediaComponent from './belajar-destruction/PenyediaComponent'
class App extends Component{
  render(){
    return(
      <div className="App">
        <PenyediaProp/>
      </div>
    )
  }
}

export default App