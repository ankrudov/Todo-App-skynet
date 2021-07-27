import React,{Component} from 'react';


class Submit extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(entry){
        this.setState({
            currentItem:{
                text:entry.target.value,
                key:Date.now()
            }
        })
    }

    addItem(entry){
        entry.preventDefault();
        //adding a new item
        const newItem = this.state.currentItem;
        console.log(newItem);

    }
    render(){
        return(
            <header>
                <form inline id="to-do-form">
                    <input 
                    type="text" 
                    placeholder="Enter Text" 
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                </form>
            </header>
        );
    }
}

export default Submit;