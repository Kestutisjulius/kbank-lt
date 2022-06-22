import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Top from './Components/Top';
import Edit from './Components/Edit';

function App() {

  
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [accounts, setAccounts] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState([]);
  const [editAccount, setEditAccount] = useState(null);

  const [modalAccount, setModalAccount] = useState(1);

  useEffect(() => {
    axios.get('http://kbankas.lt/api/work')
      .then(res => setAccounts(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    if(null === deleteAccount) return;
    axios.delete('http://kbankas.lt/api/deleteUser/' + deleteAccount.id)
      .then(_ => setLastUpdate(Date.now()));
  }, [deleteAccount]);

  useEffect(() =>{
    if (null === editAccount) return;
    axios.put('http://kbankas.lt/api/work/' + editAccount.id, editAccount)
    .then(_ => setLastUpdate(Date.now()));
  },[editAccount]);
 
  return (

    <DataContext.Provider value={
        {
        accounts, setDeleteAccount, modalAccount, setModalAccount, setEditAccount
        }
      }>
      <div className="container">
        <div className="row">
          <Top/>
          <List></List>
        </div>
      </div>
      <Edit/>
        </DataContext.Provider>
  );
}

export default App;
