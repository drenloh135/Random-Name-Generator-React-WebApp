import React,{Component} from 'react';

class Level extends Component{
    constructor(props){
        super(props);
        this.state = {
            level:0,
            form:0,
            images: [
                "https://pbs.twimg.com/media/D6WRPrPW4AAG6wi.png",
                "https://i.pinimg.com/originals/22/43/0c/22430c84016ea58231fbfc6a64238ca2.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0buUjvsDx-SQVqSMpmHQLqoyhcwmoxhcyA&usqp=CAU"
              ]
        } 
        }
    
    
    changeForm = ()=>{
        this.setState(
            {form:this.state.form + 1}, ()=>{
                this.props.callback(this.state.form)
            }
        )
    }
    //Since setState is asynchronous, we need to perform callback in this manner, so that console.log and callback runs AFTER setstate
    Increment = ()=>{
        this.setState (
            {level:this.state.level + 1}, ()=>
                {this.props.callback(this.state.form)
                    console.log(this.state.level)
                    if(this.state.level === 16){
                        this.changeForm()}
                    if(this.state.level === 36){
                        this.changeForm()}
                }
        )

        
    }

    Decrement = ()=>{
        this.setState (
            {level:this.state.level - 1}, ()=>
            {console.log(this.state.level)
                this.props.callback(this.state.level)})
    }

    render(){
        return(
            
            <div className = "LevelBody">
                <img src = {this.state.images[this.state.form]} style = {{height: 250}}/>
                <p>Level: {this.state.level}</p>
                <p>Evolved form: {this.state.form}</p>
                <button onClick = {this.Increment}>Level up</button>
                <button onClick = {this.Decrement}>Decrement</button>
                
            </div>
        )
    }
}

export default Level;