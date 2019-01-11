import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    onChange1(e){
        this.setState({number1: e.target.value})
    }
    onChange2(e){
        this.setState({number2: e.target.value})
    }
    onClick(){
        let num1 = parseInt((this.state.number1), 10)
        let num2 = parseInt((this.state.number2), 10)
        this.setState({sum: num1+num2})
    }


    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input 
                    className='inputLine'
                    placeholder='Number 1'
                    onChange={(e) => this.onChange1(e)}
                />
                <input 
                    className='inputLine'
                    placeholder='Number 2'
                    onChange={(e) => this.onChange2(e)}
                />
                <button 
                    className='confirmationButton'
                    onClick={() => this.onClick(this.state.userInput)}
                    >Is this crap a palindrome??
                </button>
                <span className='resultsBox'>
                    {JSON.stringify(this.state.sum)}
                </span>
            </div>
        )
    }
}

export default Sum