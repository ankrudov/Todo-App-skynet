import React,{Component} from 'react';
import TodoList from './ListComponent';


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
        this.deleteItem = this.deleteItem.bind(this)
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
    }


    //save data to local storage
    saveStateToLocalStorage= ()=>{
        localStorage.setItem('state',JSON.stringify(this.state));
    }

    //fetch data from local storage
    getStateFromLocalStorage = ()=> {
        let data = localStorage.getItem('state');
        if(data !==undefined){
            this.setState(JSON.parse(data));
        }
    }

    //fetch data from local storage
    componentDidMount(){
        this.getStateFromLocalStorage();
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
        if(newItem.text !== ""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }

    }

    deleteItem(key){
        const filteredItems = this.state.items.filter(item=> item.key!==key);
        this.setState({
            items:filteredItems     
        })
    }

   
    render(){
        return(
            <div>
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input 
                        type="text" 
                        className="todo-input"
                        placeholder="Enter Text" 
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}/>
                        <button type="submit">Add</button>
                        <button onClick={this.saveStateToLocalStorage}>Save Data</button>
                    </form>
                </header>
                <TodoList
                items={this.state.items}
                deleteItem={this.deleteItem}/>
            </div>

        );
    }
}

export default Submit;