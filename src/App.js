import React,{Component} from 'react';
import {CardList} from './components/card-list/Card-list.component'
import { Searchbox } from './components/search-box/Search-box.components'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
    };
    
  }

  handleChange =(e) => {
    this.setState({searchField:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user=>this.setState({monsters:user}))
  }


  render() {
    const {monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Searchbox 
        placeHolder='Search Monster'
        handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
                
       
      </div>
    )
  }


}

export default App;
