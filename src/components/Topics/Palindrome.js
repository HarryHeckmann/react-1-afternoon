import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state ={
            userInput: '',
            palindrome: ''
        }
    }

    onChange(e){
        this.setState({userInput: e.target.value})
    }
    onClick(input){
        let output = ''
        let string = input.split('')
        let reversed = string.reverse()
        console.log(reversed)
        let combined = reversed.join('')
        console.log(combined)
        combined === input ? output = "IT'S A PALINDROME BOIIIIII" : output = "gee what a lame non-palindromic word"

        this.setState({palindrome: output})
    }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input 
                    className='inputLine'
                    placeholder='Enter String Here'
                    onChange={(e) => this.onChange(e)}
                    />
                <button 
                    className='confirmationButton'
                    onClick={() => this.onClick(this.state.userInput)}
                    >Is this crap a palindrome??
                </button>
                <span className='resultsBox'>
                    {JSON.stringify(this.state.palindrome)}
                </span>
            </div>
        )
    }
}

export default Palindrome