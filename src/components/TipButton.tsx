import React, {FC} from 'react';
import '../components/TipCalc.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

type TipButtonProps = {
    value: number,
}

const TipButton: FC<TipButtonProps> = ({ value }) => {
    return (
        <Button className='w-100 cs-btn border-0'>{value}%</Button>
    );
}

export default TipButton;