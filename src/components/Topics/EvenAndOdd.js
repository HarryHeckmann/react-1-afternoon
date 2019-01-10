import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()
            this.state ={
                evenArray: [],
                oddArray: [],
                userInput: '',
                // split: this.state.userInput.split('')
            }
    }

    onChange(e){
        this.setState({userInput: e.target.value})
    }
    onClick(array){
        let eArray = []
        let oArray = []
        let arr = array.split('')
        // console.log(arr)
        for(let i=0;i<arr.length;i++){
            if(arr[i] % 2 === 0){
                eArray.push(+arr[i])
            }
            else {
                oArray.push(+arr[i])
            }
        }
        eArray.join(',')
        oArray.join(',')
        this.setState({evenArray: eArray, oddArray: oArray})

        console.log(eArray, oArray)
    }
    // turn str into arr
// turn input into number

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                    className='inputLine'
                    placeholder='Enter String Here'
                    onChange={(e) => this.onChange(e)}
                />
                <button 
                    className='confirmationButton'
                    onClick={() => this.onClick(this.state.userInput)}
                    >Gimme My Arrays
                </button>
                <span 
                    className='resultsBox'>Odd: {JSON.stringify(this.state.oddArray)}</span>
                <span className='resultsBox'>Even: {JSON.stringify(this.state.evenArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd