import React, { useState, useEffect, useCallback } from "react";
import "../Form/Form.css";
import { UseTg } from "../../hooks/UseTg";

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('');

  const onChangeCountry = (el) => {
    setCountry(el.target.value);
  }

  const onChangeStreet = (el) => {
    setStreet(el.target.value);
  }

  const onChangeSubject = (el) => {
    setSubject(el.target.value);
  }

  const { tg } = UseTg();

  useEffect(() => {
    if (tg) {
      tg.MainButton.setParams({
        text: "Send data"
      });
    }
  }, [tg]);

  useEffect(() => {
    if (tg) {
      if (!country || !street) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  }, [country, street, tg]);

  const onSendData = useCallback(() => {
    const data = {
      country,
      street, 
      subject,
    };
    if (tg) {
      tg.sendData(JSON.stringify(data));
    }
  }, [country, street, subject, tg]);

  useEffect(() => {
    if (tg) {
      tg.onEvent('mainButtonClicked', onSendData);
      return () => {
        tg.offEvent('mainButtonClicked', onSendData);
      };
    }
  }, [onSendData, tg]);

  return (
    <div className={"form"}>
      <h3>Input your data:</h3>
      <input 
        className={"input"} 
        type="text" 
        placeholder="Country"
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
  );
}

export default Form;
