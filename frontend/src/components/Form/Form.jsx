import React, { useState } from "react";
import "../Form/Form.css";
import { UseTg } from "../../hooks/UseTg";

const Form = () => {

    const [country, setCoutry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');

    const onChangeCountry = (el) => {
        setCoutry(el.target.value);
    }

    const onChangeStreet = (el) => {
        setStreet(el.target.value)
    }

    const onChangeSubject = (el) => {
        setSubject(el.target.value)
    }

    const {tg} = UseTg();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Send data"
        })
    }, [])

    useEffect(() => {
        if(!country || !street){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street]) 


    return(
        <div className={"form"}>
            <h3>Input your data:</h3>
            <input 
            className={"input"} 
            type="text" 
            placeholder="Coutry"
            value={country}
            onChange={onChangeCountry}
            />
            <input 
            className={"input"} 
            type="text" 
            placeholder="Street"
            value={street}
            onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Individual</option>
                <option value={"legal"}>Legal entity</option>
            </select>
        </div>
    )
}

export default Form;