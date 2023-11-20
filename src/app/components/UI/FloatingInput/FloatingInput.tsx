import React from 'react';
import './FloatingInput.scss'
export default () => {

    return (
        <div className="input-container">
            <input type="text" id="myInput" className="custom-input" required/>
            <label htmlFor="myInput" className="custom-label">Введите текст</label>
        </div>
    );
}

