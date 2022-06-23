import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Top from './Components/Top';
import Edit from './Components/Edit';
import Create from './Components/Create';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState([]);
  const [createAccount, setCreateAccount] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState([]);
  const [editAccount, setEditAccount] = useState(null);

  const [modalAccount, setModalAccount] = useState(null);
  const [modalCreateAccount, setModalCreateAccount] = useState(null);

  useEffect(() => {
    axios.get('http://kbankas.lt/api/work')
      .then(res => setAccounts(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    axios.get('http://kbankas.lt/user/' + account.id)
      .then(res => account(res.data));
  }, [account]);

  useEffect(() => {
    if (null === createAccount) return;
    console.log(createAccount);
    axios.post('http://kbankas.lt/api/create', createAccount)
      .then(_ => setLastUpdate(Date.now()));
  }, [createAccount]);

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
        accounts, 
        setAccount, 
        setDeleteAccount, 
        modalAccount, 
        modalCreateAccount,
        setModalAccount, 
        setModalCreateAccount,
        setEditAccount, 
        setCreateAccount
        }
      }>
      <div className="container">
        <div className="row">
          <Top/>
          <List/>
          <Create/>
        </div>
      </div>
      <Edit/>
        </DataContext.Provider>
  );
}

export default App;
