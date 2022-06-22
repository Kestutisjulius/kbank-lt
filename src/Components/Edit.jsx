import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function Edit() {

    const { modalAccount, setModalAccount, setEditAccount } = useContext(DataContext);

     const [first_name, set_first_name] = useState('');
     const [last_name, set_last_name] = useState('');
     const [email, set_email] = useState('');
     const [gender, set_gender] = useState('');
     const [ip_address, set_ip_address] = useState('');
     const [credit_card, set_credit_card] = useState('');
     const [currency, set_currency] = useState('');
     const [currency_code, set_currency_code] = useState('');
     const [money, set_money] = useState('');
     const [avatar, set_avatar] = useState('');


    const close = () => {
        setModalAccount(null);
    }

    useEffect(() => {
        if (null === modalAccount) return;
        set_first_name(modalAccount.first_name);
        set_last_name(modalAccount.last_name);
        set_email(modalAccount.email);
        set_gender(modalAccount.gender);
        set_ip_address(modalAccount.ip_address);
        set_credit_card(modalAccount.credit_card);
        set_currency(modalAccount.currency);
        set_currency_code(modalAccount.currency_code);
        set_money(modalAccount.money);
        set_avatar(modalAccount.avatar);
    }, [modalAccount])

    const edit = () => {
        setEditAccount({first_name, last_name, money, gender, currency_code, currency, credit_card, ip_address, email,avatar, id: modalAccount.id});
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
                                <img src={avatar} alt="image_broken" />
                                <div className="form-group">
                                    <label>Firs name</label>
                                    <input type="text" className="form-control" value={first_name} onChange={event => set_first_name(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter some nice first Name (like MONKEY)</small>
                                </div> 
                                <div className="form-group">
                                    <label>ip_Address</label>
                                    <input type="text" className="form-control" value={ip_address} onChange={event => set_ip_address(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter some nice IP address (like 1.1.1.1)</small>
                                </div> 
                                <div className="form-group">
                                    <label>email</label>
                                    <input type="text" className="form-control" value={email} onChange={event => set_email(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter some nice EMAIL (like DONKEY@gmail)</small>
                                </div>  
                                <div className="form-group">
                                    <label>Credit Card</label>
                                    <input type="text" className="form-control" value={credit_card} onChange={event => set_credit_card(event.target.value)}/>
                                    <small className="form-text text-muted">Please enter Credit Card NUMBER</small>
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