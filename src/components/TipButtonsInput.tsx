import React, { FC } from 'react';
import '../components/TipCalc.css';
//Components
import TipButton from '../components/TipButton.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form } from 'react-bootstrap';

type TipButtonsInputProps = {
    CalculateTotalSum: (value: number) => void;
}

const TipButtonsInput: FC<TipButtonsInputProps> = ({ CalculateTotalSum }) => {
    return (
        <Container className='p-0'>
            <Form.Label className='fs-6 cs-fc'>Select Tip %</Form.Label>
            <Container className='mb-4 cs-flex p-0'>
                <TipButton 
                    value={5} 
                    CalculateTotalSum={CalculateTotalSum} />
                <TipButton 
                    value={10} 
                    CalculateTotalSum={CalculateTotalSum} />
                <TipButton 
                    value={15} 
                    CalculateTotalSum={CalculateTotalSum} />
                <TipButton 
                    value={25} 
                    CalculateTotalSum={CalculateTotalSum} />
                <TipButton 
                    value={50} 
                    CalculateTotalSum={CalculateTotalSum} />
                <Form.Control
                    placeholder='Custom'
                    type='number'
                    min={0}
                    onKeyDown={(e) => {
                        if (e.key === '.') {
                            e.preventDefault();
                        }
                    }}
                    onChange={(value) => CalculateTotalSum(parseInt(value.target.value))}
                    className='cs-bg cs-flex-el cs-ph-fc-2 cs-fw-7 border-0 text-end fw-bold cs-fc fs-5 shadow-none'
                    />
            </Container>
        </Container>
    );
}

export default TipButtonsInput;