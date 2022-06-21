import { useContext } from "react";
import DataContext from "./DataContext";

function ListLine({ account }) {

    const {setDeleteAccount} = useContext(DataContext); //, setModalAccount

    const remove = () => {
        setDeleteAccount(account);
    }

    // const edit = () => {
    //     setModalAnimal(animal);
    // }

    return (
        <li className="list-group-item">
            <div className="one-account">
                <div className="one-account__content">
                    <b>{account.first_name}</b>
                    <span>Acc. Nr: {account.credit_card}</span>
                </div>

                <div className="one-animal__buttons">
                    {/* <button type="button" className="btn btn-outline-success mr-3" onClick={edit}>Edit</button> */}
                    <button type="button" className="btn btn-outline-danger" onClick={remove}>Delete</button>
                </div>
            </div>

        </li>
    );
}

export default ListLine;