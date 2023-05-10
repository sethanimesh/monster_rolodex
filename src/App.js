// import { Component } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
 
const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredmonsters, setFilteredMonsters] = useState(monsters);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>setMonsters(users));
  }, [])

  useEffect(()=>{
    const NewFilteredmonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilteredMonsters(NewFilteredmonsters);
  }, [monsters, searchField])

  const OnSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
  }

  const OnTitleChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString); 
  }


  return (
    <div className="App"> 
      <h1 className='app-title'>{title}</h1>
    <SearchBox OnSearchHandler={OnSearchChange} placeholder='Search Monster' className='search-box'/>
    <br/>
    <SearchBox OnSearchHandler={OnTitleChange} placeholder='set title' className='title-search-box'/>
    <CardList monsters={filteredmonsters}/>
    </div>
  )
};

// class App extends Component{

//   constructor(){
//     super();
//     this.state={
//       monsters: [],
//       originalmonsters: [],
//     }
//     console.log('constructor');
//   }
//   componentDidMount(){
//     console.log('Mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users)=>
//     this.setState(
//       ()=>{
//         return{monsters:users,
//               originalmonsters: users,}
//       }
//     ))
//     }
//   OnSearchChange=(event)=>{
//     const OnSearchField = event.target.value.toLocaleLowerCase();
//     const filteredmonsters = this.state.originalmonsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(OnSearchField);
//     })
//     this.setState(()=>{
//       return{
//         monsters:filteredmonsters,
//       }
//     })
//   }
//   render(){
//     console.log('render');

//     const {monsters} = this.state;
//     const {OnSearchChange} = this;
//   return (
//     <div className="App"> 
//       <h1 className='app-title'>Monsters Rolodex</h1>
//     <SearchBox OnSearchHandler={OnSearchChange} placeholder='Search Monster' className='search-box'/>
//     <CardList monsters={this.state.monsters}/>
//     </div>
//   );
// }}


export default App;