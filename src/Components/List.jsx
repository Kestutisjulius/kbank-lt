import { useContext } from "react";
import DataContext from "./DataContext";
import ListLine from "./ListLine";

function List() {

    const { accounts, setModalAccount } = useContext(DataContext);

    const create = () => {
        setModalAccount(1);
    }

    return (
        <div className="col-12">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Accounts</h2>
                    <button type="button" className="btn btn-outline-success mr-3" onClick={create}>create</button>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            accounts.map(a => <ListLine  key={a.id} account={a}></ListLine>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default List;