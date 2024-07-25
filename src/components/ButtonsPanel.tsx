import React, { useState, FC, useEffect } from 'react';
import '../components/TipCalc.css';
//Components
import BillInput from './BillInput.tsx';
import TipButtonsInput from './TipButtonsInput.tsx';
import PeopleNumberInput from './PeopleNumberInput.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';

type ButtonsPanelProps = {
    setTipSum: (tipSum: number) => void;
    setTotalSum: (totalSum: number) => void;
}

const ButtonsPanel: FC<ButtonsPanelProps> = ({ setTipSum, setTotalSum }) => {
    const [bill, setBill] = useState<number>(NaN);
    const [peopleNumber, setPeopleNumber] = useState<number>(NaN);
    const [errorBill, setErrorBill] = useState<boolean>(false);
    const [errorNumbPeople, setErrorNumbPeople] = useState<boolean>(false);
    const [value, setValue] = useState<number>(NaN);

    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBill(parseFloat(event.target.value));
    };

    const handlePeopleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPeopleNumber(parseInt(event.target.value));
    };

    const CalculateTotalSum = (value: number) => {
        setValue(value);

        if (errorBill === false && errorNumbPeople === false) {
            setTipSum(((bill / 100) * value) / peopleNumber);
            setTotalSum((bill + ((bill / 100) * value)) / peopleNumber);
        }
    }

    useEffect (() => {
        if (!isNaN(value)) {
            if (bill === 0 || isNaN(bill)) {
                setErrorBill(true);
            } else {
                setErrorBill(false);
            }

            if (peopleNumber === 0 || isNaN(peopleNumber)) {
                setErrorNumbPeople(true);
            } else {
                setErrorNumbPeople(false);
            }
        }
    }, [bill, peopleNumber, value]);

    return (
        <Form>
            <BillInput bill={bill} errorBill={errorBill} handleBillChange={handleBillChange} />
            <TipButtonsInput CalculateTotalSum={CalculateTotalSum} />
            <PeopleNumberInput errorNumbPeople={errorNumbPeople} handlePeopleNumberChange={handlePeopleNumberChange} />
        </Form>
    );
}

export default ButtonsPanel;