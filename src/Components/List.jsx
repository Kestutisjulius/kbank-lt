import { useContext } from "react";
import DataContext from "./DataContext";
import ListLine from "./ListLine";

function List() {

    const { accounts } = useContext(DataContext);

    return (
        <div className="col-12">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Accounts</h2>
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