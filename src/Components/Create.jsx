import { useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";

function Create(){

    const { modalCreateAccount, setModalCreateAccount, setCreateAccount } = useContext(DataContext);

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
        setModalCreateAccount(null);
    }

    useEffect(() => {
        if (null === modalCreateAccount) return;
        set_first_name(modalCreateAccount.first_name);
        set_last_name(modalCreateAccount.last_name);
        set_email(modalCreateAccount.email);
        set_gender(modalCreateAccount.gender);
        set_ip_address(modalCreateAccount.ip_address);
        set_credit_card(modalCreateAccount.credit_card);
        set_currency(modalCreateAccount.currency);
        set_currency_code(modalCreateAccount.currency_code);
        set_money(modalCreateAccount.money);
        set_avatar(modalCreateAccount.avatar);
    }, [modalCreateAccount])

    const create = () => {
        setCreateAccount({first_name, last_name, money, gender, currency_code, currency, credit_card, ip_address, email, avatar});
        set_first_name('');
        set_last_name('');
        set_email('');
        set_gender('');
        set_ip_address('');
        set_credit_card('');
        set_currency('');
        set_money('');
        set_avatar("https://robohash.org/adipiscitotamveniam.png?size=50x50&set=set1");
       // setModalCreateAccount(null);
    }
    if (null === modalCreateAccount) {return null;}

    return (
        <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Create</h2>
                    <button type="button" className="close" onClick={close}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="card">
                        <div className="card-body">
                            <img src={avatar} alt="image_broken" />
                            <div className="form-group">
                                <label>Firs name</label>
                                <input type="text" className="form-control" value={first_name}  onChange={event => set_first_name(event.target.value)}/>
                                <small className="form-text text-muted">Please enter some nice first Name (like MONKEY)</small>
                            </div> 
                            <div className="form-group">
                                <label>ip_Address</label>
                                <input type="text" className="form-control"  value={ip_address} onChange={event => set_ip_address(event.target.value)}/>
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
                            <div className="form-group">
                                <label>Money in €</label>
                                <input type="text" className="form-control" value={money} onChange={event => set_money(event.target.value)}/>
                                <small className="form-text text-muted">Please enter Money to BANK</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-success" onClick={create}>Save</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Create;