import React from 'react';
import { SelectedTipContext } from '../contexts/SelectedTipContext';
function ButtonToggle({ id, title, onClick }) {
    const selectedTip = React.useContext(SelectedTipContext);

    return (
        <button
            className={
                selectedTip === id
                    ? `main__input-area_tip-selection-btn main__input-area_tip-selection-btn-selected`
                    : `main__input-area_tip-selection-btn`
            }
            type="button"
            onClick={onClick}
        >
            {title}%
        </button>
    );
}
export default ButtonToggle;
