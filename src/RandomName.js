import React, {Component} from 'react';
import './RandomName.css';

class RandomName extends Component{

    constructor(){
        super()
        this.state = {
            person: null,
            equals: false,
            selectedGender: 'male',
            gender: null
        }
    }

    generateName = async () =>{
           
        // console.log(this.state.equals)
        // console.log("Selected gender is " + this.state.selectedGender)
        // console.log("CUrrent gender is " + this.state.gender); 
        
        const url = 'https://randomuser.me/api/';
        while(true){
            const result = await fetch(url)
            const data = await result.json()
            this.setState({
                person: data.results[0].name.first,
                toggle:false,
                gender: data.results[0].gender
            }, ()=>{
                console.log("AFTERSETSTATE: Selected gender is " + this.state.selectedGender)
                console.log("AFTERSETSTATE: Current gender is " + this.state.gender);   
                
            })
            if(this.state.gender === this.state.selectedGender){break;}  }
              
            
    }

    handleGender = (event) =>{
        this.setState({
            selectedGender: event.target.value
        }, ()=>{
            console.log("Selected gender is " + this.state.selectedGender)
            console.log(typeof this.state.selectedGender)
        })
    }

    componentDidUpdate(){
        if(this.state.selectedGender === this.state.gender && !this.state.equals){
            this.setState({
                equals:true
            }, ()=>{
                console.log("GENDERS ARE THE SAME!")
            })
        }
        else if(this.state.selectedGender !== this.state.gender && this.state.equals){
            this.setState({
                equals:false
            }, ()=>{
                console.log("GENDERS ARE NOT THE SAME!")
            })
        } 
    }

    render(){
        return(
            <div>

                <h1>RANDOM NAME GENERATOR!</h1>
                <h2>Can't think of a name to use for your baby/story characters? Fret not, we have just the tool for you!</h2>
                <p>Select Gender</p>
                <select   onChange = {this.handleGender}>
                    <option value="" selected></option>
                    <option value = "male">Male</option>
                    <option value = "female">Female</option>
                </select>

                <p class = "generatedName">{this.state.equals ? this.state.person: null}</p>
                <button onClick = {this.generateName} >Click to generate new name!</button>
            </div>
        )
    };
}

export default RandomName;