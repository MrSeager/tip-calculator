import React, { FC } from 'react';
import '../components/TipCalc.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, InputGroup, Image } from 'react-bootstrap';
//Images
import ImgDollar from '../images/icon-dollar.svg';

type BillInputProps = {
    bill: number;
    errorBill: boolean;
    handleBillChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BillInput: FC<BillInputProps> = ({ bill, errorBill, handleBillChange }) => {
    return (
        <Form.Group className='mb-4'>
                <Container className='p-0 d-flex flex-row justify-content-between'>
                    <Form.Label className='fs-6 cs-fc'>Bill</Form.Label>
                    {errorBill === true ? (
                        <Form.Label className='fs-6 text-danger'>Can't be zero</Form.Label>
                    ) : null}
                </Container>
                <InputGroup className={`${errorBill && 'cs-outline'}`}>
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
                        value={bill}
                        className='cs-bg cs-fw-7 cs-ph-fc shadow-none border-0 text-end cs-fc fs-5'
                        />
                </InputGroup>
            </Form.Group>
    )
}

export default BillInput;