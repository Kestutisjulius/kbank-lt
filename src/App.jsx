import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Top from './Components/Top';

function App() {

  
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [accounts, setAccounts] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState([]);

  useEffect(() => {
    axios.get('http://kbankas.lt/api/work')
      .then(res => setAccounts(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    if(null === deleteAccount) return;
    axios.delete('http://kbankas.lt/api/deleteUser/' + deleteAccount.id)
      .then(_ => setLastUpdate(Date.now()));
  }, [deleteAccount]);
 
  return (

    <DataContext.Provider value={
        {
        accounts, setDeleteAccount
        }
      }>
      <div className="container">
        <div className="row">
          <Top/>
          <List></List>
        </div>
      </div>
        </DataContext.Provider>
  );
}

export default App;
