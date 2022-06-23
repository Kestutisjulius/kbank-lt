import { useContext,useState } from "react";
import DataContext from "./DataContext";

function Top(){

  const { accounts, setAccount , setModalAccount} = useContext(DataContext);
  const [ccNum, setCcNum] = useState('');

  const find = () =>{
    for (let i = 0; i < accounts.length; i++){
      if(ccNum === accounts[i].credit_card){
        setAccount(accounts[i]);
        setModalAccount(accounts[i]);
      }
    }
  }

    return(
        <div className="input-group mb-3 mt-4">
        <input type="text" className="form-control" placeholder="Credit Card Number" aria-label="Credit Card Number" aria-describedby="button-addon2" value = {ccNum ?? ''} onChange={event => setCcNum(event.target.value)}/>
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={find}>Find</button>
        </div>
      </div>
    )
}
export default Top;

