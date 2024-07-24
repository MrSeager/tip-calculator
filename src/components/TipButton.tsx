import React, {FC} from 'react';
import '../components/TipCalc.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

type TipButtonProps = {
    value: number;
    CalculateTotalSum: (value: number) => void;
}

const TipButton: FC<TipButtonProps> = ({ value, CalculateTotalSum }) => {
    return (
        <Button 
            onClick={() => CalculateTotalSum(value)}
            className='w-100 cs-flex-el cs-fw-7 cs-btn border-0 fs-5'>{value}%</Button>
    );
}

export default TipButton;