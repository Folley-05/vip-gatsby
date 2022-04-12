import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';

import './form.css'

function Form() {
    // const { t } = useTranslation();
    const [state, setState] = useState({ name: "", email: "", message: "", subject: "" })
    const [load, setLoad] = useState(false)
    const handleChange = (target) => {
        setState({ ...state, [target.name]: target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("start submit")
        setLoad(true)
        const form = new FormData();
        form.append("email", state.email)
        form.append("message", state.message);
        form.append("name", state.name);
        form.append("subject", state.subject);
        console.log(document.querySelector("#form"))
        // return

        const data = new URLSearchParams(new FormData(document.querySelector("#form")));
        console.log("the data")
        fetch("https://www.ipermedia.net/mail.php", {
            "method": "POST",
            "headers": {
                // "Content-Type": "multipart/form-data; boundary=---011000010111000001101001"
            },
            "body": data
        })
            .then(response => response.json())
            .then(rep => {
                if (rep)
                    toast.success('message envoye !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                else
                    toast.error('message non envoye !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
            })
            .catch(err => {
                toast.error("impossible d'envoyer le message !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
        setLoad(false)
        return false
    }
    // console.log(state)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="form">
                <form id='form' onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Nom *</label>
                        <input type="text" value={state.name} placeholder="Votre Nom" name="name" required id="name" className="ipp" onChange={e => handleChange(e.target)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Courriel *</label>
                        <input type="email" value={state.email} placeholder="Votre Courriel" name="email" required id="email" className="ipp" onChange={e => handleChange(e.target)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Sujet *</label>
                        <input type="text" value={state.subject} placeholder="Sujet du mail" name="subject" required id="subject" className="ipp" onChange={e => handleChange(e.target)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Message *</label>
                        <textarea value={state.message} name="message" required id="" cols="30" rows="3" onChange={e => handleChange(e.target)} />
                    </div>
                    <div className="form-group">
                        <button type="submit">
                            {load ? (<ReactLoading type="spin" color="#ffffff" width="35px" height="235x"
                            />) : "Envoyer"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
