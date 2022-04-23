import InputText from './InputText';
import ButtonToggle from './ButtonToggle';
import ResultRow from './ResultRow';
import Button from './Button';
//import { SelecredTipContext } from './../contexts/SelectedTipContext';
import { SelectedTipContext } from '../contexts/SelectedTipContext';
import React from 'react';
function App() {
    const tipsOptions = [
        {
            id: 1,
            value: 5,
        },
        {
            id: 2,
            value: 10,
        },
        {
            id: 3,
            value: 15,
        },
        {
            id: 4,
            value: 25,
        },
        {
            id: 5,
            value: 50,
        },
    ];
    const [bill, setBill] = React.useState('');
    const [numberOfPeople, setNumberOfPeople] = React.useState('');
    const [tip, setTip] = React.useState('Custom');
    const [resTipForPerson, setResTipForPerson] = React.useState(0);
    const [resTotalForPerson, setResTotalForPerson] = React.useState(0);

    const [selectedTip, setSelectedTip] = React.useState('');
    //
    //
    function handleBillChange(e) {
        setBill(e.target.value);
    }
    function handleNumberOfPeopleChange(e) {
        setNumberOfPeople(e.target.value);
    }
    function handleTipChange(e) {
        setTip(e.target.value);
    }
    function handleReset() {
        setBill('');
        setTip('');
        setNumberOfPeople('');
        setSelectedTip(null);
    }

    React.useEffect(() => {
        setResTipForPerson(((bill * parseInt(tip, 10)) / 100 / numberOfPeople).toFixed(2));
        setResTotalForPerson(
            ((bill * (100 + parseInt(tip, 10))) / 100 / numberOfPeople).toFixed(2)
        );
    }, [bill, numberOfPeople, tip]);
    React.useEffect(() => {
        setResTipForPerson(0);
        setResTotalForPerson(0);
    }, []);

    return (
        <SelectedTipContext.Provider value={selectedTip}>
            <div className="page">
                <a className="logo" href="#"></a>
                <div className="main">
                    <div className="main__inputs-area">
                        <InputText
                            title="Bill"
                            inputType="bill"
                            onChange={handleBillChange}
                            value={bill}
                        />
                        <span className={`main__input-span`}>Select tip %</span>
                        <div className="main__inputs-area_tip-selection">
                            {tipsOptions.map((tip) => (
                                <ButtonToggle
                                    key={tip.id}
                                    id={tip.id}
                                    title={tip.value}
                                    onClick={() => {
                                        setSelectedTip(tip.id);
                                        setTip(tip.value);
                                    }}
                                />
                            ))}
                            <InputText
                                title=""
                                inputType="tip"
                                onChange={handleTipChange}
                                onFocus={() => setSelectedTip(null)}
                                value={tip}
                            />
                        </div>
                        <InputText
                            title="Number of People"
                            inputType="people"
                            onChange={handleNumberOfPeopleChange}
                            value={numberOfPeople}
                        />
                    </div>
                    <div className="main__result-area">
                        <ResultRow title="Tip amount" value={resTipForPerson} />
                        <ResultRow title="Total" value={resTotalForPerson} />
                        <Button title="Reset" onClick={handleReset} />
                    </div>
                </div>
            </div>
        </SelectedTipContext.Provider>
    );
}

export default App;
