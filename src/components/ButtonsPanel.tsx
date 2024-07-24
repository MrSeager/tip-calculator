import React, { useState, FC } from 'react';
import '../components/TipCalc.css';
//Components
import TipButton from '../components/TipButton.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, InputGroup, Image } from 'react-bootstrap';
//Images
import ImgDollar from '../images/icon-dollar.svg';
import ImgPerson from '../images/icon-person.svg';

type ButtonsPanelProps = {
    setTipSum: (tipSum: number) => void;
    setTotalSum: (totalSum: number) => void;
}

const ButtonsPanel: FC<ButtonsPanelProps> = ({ setTipSum, setTotalSum }) => {
    const [bill, setBill] = useState<number>(0);
    const [peopleNumber, setPeopleNumber] = useState<number>(0);

    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBill(parseFloat(event.target.value));
    };

    const handlePeopleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPeopleNumber(parseInt(event.target.value));
    };

    const CalculateTotalSum = (value: number) => {
        setTipSum(((bill / 100) * value) / peopleNumber);
        setTotalSum((bill + ((bill / 100) * value)) / peopleNumber);
    }

    return (
        <Form>
            <Form.Group className='mb-4'>
                <Form.Label className='fs-6 cs-fc'>Bill</Form.Label>
                <InputGroup>
                    <InputGroup.Text className='fs-5 cs-fc border-0 cs-bg'>
                        <Image fluid src={ImgDollar} alt='dollar icon' />
                    </InputGroup.Text>
                    <Form.Control
                        placeholder='0'
                        type='number'
                        min={0}
                        onKeyDown={(e) => {
                            if (e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                        onChange={handleBillChange}
                        className='cs-bg cs-fw-7 cs-ph-fc shadow-none border-0 text-end cs-fc fs-5'
                        />
                </InputGroup>
            </Form.Group>
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
            <Form.Group>
                <Form.Label className='fs-6 cs-fc'>Number of People</Form.Label>
                <InputGroup>
                    <InputGroup.Text className='fs-5 cs-fc border-0 cs-bg'>
                        <Image fluid src={ImgPerson} alt='person icon' />
                    </InputGroup.Text>
                    <Form.Control
                        placeholder='0'
                        type='number'
                        min={0}
                        onKeyDown={(e) => {
                            if (e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                        onChange={handlePeopleNumberChange}
                        className='cs-bg cs-fw-7 cs-ph-fc shadow-none border-0 text-end cs-fc fs-5'
                        />
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default ButtonsPanel;