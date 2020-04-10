import React,{Component} from 'react';
import axios from 'axios';
export class Main extends Component{

    handleOnClick(){
        axios.get("http://localhost:7777").then((resp) => {
            console.log(resp);
        })

    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleOnClick}>Click to call</button>
            </div>
        )
    }

}