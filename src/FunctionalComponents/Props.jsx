import React from "react";
class Props extends React.Component{
    super()
   constructor(){
    state = {
        name : 'haritha',
        sal :20000
    };
    this.update.bind(this)
}
}
 
        
    
    render(){
        return(
            <>
                <h1>name: {this.state.name}</h1>
                <h2>salary:{this.state.sal}</h2>
                <button onClick={this.upadate()}>update</button>
            </>
        )
    }
    update() {
        let sal = this.setState({sal:sal+10})
    }

export default Props;