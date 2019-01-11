import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state ={
            unFilteredArray: ['Batcomputer', 'computer', 'Batcave', 'cave', 'car', 'Batmobile', 'man', 'Batman'],
            userInput: '',
            filteredArray: []
        }
    }

    onChange(e){
        this.setState({userInput: e.target.value})
    }
    onClick(input){
        let oldArr = this.state.unFilteredArray
        let newArr = []
        for(let i=0;i<oldArr.length;i++){
            if(oldArr[i].includes(input)){
                newArr.push(oldArr[i])
            }
        }
        this.setState({filteredArray: newArr})
    }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{
                    JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input 
                    className='inputLine'
                    placeholder='Best mammal here'
                    onChange={(e) => this.onChange(e)}
                    />
                <button 
                    className='confirmationButton'
                    onClick={() => this.onClick(this.state.userInput)}
                    >What's better than that normal crap
                </button>
                <span className='resultsBox filterStringRB'>
                    {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterString