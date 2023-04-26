import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import UserList from './UserList/UserList'

function App() {

  const [listOfUSer,setListOfUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then(result => { setListOfUser(result.data); setIsLoading(false);})
    }
    fetchItems();
  },[]);




  return (
    <div className="App container">
      <h1>List of Users Fetched Using JSONplaceholder API</h1>

      <div className="row">
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} />
      </div>

    </div>
  );
}

export default App;