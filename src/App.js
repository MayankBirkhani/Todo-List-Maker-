import React from 'react';
import logo from './logo.png';
import './App.css';

// App  becoz index.js is wating for an export named as App

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]

    }
  }

  addItem(todoValue){
    if(todoValue !==""){
      const newItem={
        id: Date.now(),
        value: todoValue,
        isDone:false
      };
      //copying data to  the list array created inside constructor
      const list=[...this.state.list];  //... means appending all the values to the list
      list.push(newItem);

      //how to update above list to the state created inside constructor
      //in react we always use setState method to update state
      this.setState({
        list,
        newItem:""
      });     
    }
  }

  deleteItem(id){
    const list=[...this.state.list];  //bringing list item here
    const updatedlist=list.filter(item=> item.id !== id); //it omit the item whose id is matched
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return(
        <div>
            <img src={logo} width="100" height="100" className="logo" />
            <h1 className="app-title"> My ToDo App </h1>
            <div className="container">
              
              <br/>
                <input  
                  type="text" 
                  className="input-text"  
                  placeholder="Write a todo" 
                  required
                  value={this.state.newItem}  //we are updating value here, reason to update newItem in updateItem
                  onChange={e =>this.updateInput(e.target.value)}
                />
                <button 
                  className="add-btn"
                  onClick={()=> this.addItem(this.state.newItem)}
                  disabled={!this.state.newItem.length}
                >
                  Add Todo
                </button>
                <div className="list">
                  <ul>
                    {this.state.list.map(item => {
                      return(
                        <li key={item.id}>
                          <input 
                            type="checkbox" 
                            name="idDone"
                            checked={item.isDone}
                            onChange={() => {}}
                          />
                          {item.value}
                          <button 
                            className="btn"
                            onClick={ () => this.deleteItem(item.id) }  
                          >
                            Delete
                          </button>
                        </li>);
                    })}
                        {/*<li>
                            <input type="checkbox" name="" id="" />
                              Practice Coding
                            <button className="btn"> Delete </button>
                          </li>     */}
                  </ul>
                </div>
            </div>
        </div>
    );
      
  }

}
export default App;

