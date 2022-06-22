import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function Edit() {

    const { modalAccount, setModalAccount, setEditAccount } = useContext(DataContext);

     const [fullName, setFullName] = useState('');
     const [creditCard, setCreditCard] = useState('');

    const close = () => {
        setModalAccount(null);
    }

    useEffect(() => {
        if (null === modalAccount) return;
        setFullName(modalAccount.full_name);
        setCreditCard(modalAccount.credit_Card);
    }, [modalAccount])

    const edit = () => {
        setEditAccount({fullName, creditCard, id:modalAccount.id});
        setModalAccount(null);
    }

    if (null === modalAccount) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit</h2>
                        <button type="button" className="close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Firs name</label>
                                    <input type="text" className="form-control" value={fullName} onChange={event => setFullName(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter some nice animal (like DONKEY)</small>
                                </div>  
                                <div className="form-group">
                                    <label>Animal weight</label>
                                    <input type="text" className="form-control" value={creditCard} onChange={event => setCreditCard(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter DONKEY's weight</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={edit}>Save changes</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;