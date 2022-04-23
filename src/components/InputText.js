import React from 'react';
import { SelectedTipContext } from '../contexts/SelectedTipContext';
function InputText({ title, inputType, value, onChange, onFocus, onFocusOut }) {
    const selectedTip = React.useContext(SelectedTipContext);
    return (
        <>
            <span className={`main__input-span main__input-span_type_${inputType}`}>{title}</span>
            <input
                type="number"
                className={`main__input main__input_type_${inputType}`}
                placeholder={inputType === 'tip' ? 'Custom' : '0'}
                value={selectedTip && inputType === 'tip' ? '' : value}
                onChange={onChange}
                onFocus={onFocus}
                onFocusOut={onFocusOut}
            ></input>
        </>
    );
}

export default InputText;
