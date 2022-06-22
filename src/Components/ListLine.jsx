import { useContext } from "react";
import DataContext from "./DataContext";

function ListLine({ account }) {

    const {setDeleteAccount, setModalAccount} = useContext(DataContext);

    const remove = () => {
        setDeleteAccount(account);
    }


    const edit = () => {
        setModalAccount(account);
    }

    return (
        <li className="list-group-item">
            <div className="one-account">
                <div className="one-account__content">
                    <b>{account.first_name}</b>
                    <span>Acc. Nr: {account.credit_card}</span>
                </div>

                <div className="one-animal__buttons">

                {/* <button className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    Button 82
                </span>
                </button> */}


                    <button type="button" className="btn btn-outline-success mr-3" onClick={edit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={remove}>Delete</button>
                </div>
            </div>

        </li>
    );
}

export default ListLine;