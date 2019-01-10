import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super()
            this.state = {
                unFilteredArray: [{firstName: "Bob", lastName: 'Parr', alias: 'Mr Incredible'},     {firstName: 'Helen', lastName: 'Parr', alias: 'Elastigirl'}, {firstName: 'Violet', lastName: 'Parr', parents: 'Bob and Helen'}, {firstName: 'Dash', lastName: 'Parr', topSpeed: 'REDACTED', parents: 'Bob and Helen'}, {firstName: 'Jack-Jack', lastName: 'Parr', parents: 'Bob and Helen'}],

                userInput: '',
                filteredArray: []
            }
        
    }
    onChange(e){
        this.setState({userInput: e.target.value})
    }
    onClick(input){
        console.log(input)
        let oldArr = this.state.unFilteredArray
        let newArr = []
        console.log(oldArr)
        for(let i=0;i<oldArr.length;i++){
            if(oldArr[i].hasOwnProperty(input)){
                newArr.push(oldArr[i])
            }
        }
        this.setState({filteredArray: newArr})
    }


    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>
                    {JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input 
                    className='inputLine'
                    placeholder='Input Property Here'
                    onChange={(e) => this.onChange(e)}
                />
                <button 
                    className='confirmationButton'
                    onClick={() => this.onClick(this.state.userInput)}
                    >Get rid o that crap
                </button>
                <span className='resultsBox filterObjectRB'>
                    {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterObject