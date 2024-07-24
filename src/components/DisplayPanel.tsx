import React, { useState, FC } from 'react';
import '../components/TipCalc.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

type DisplayPanelProps = {
    totalSum: number;
    formattedTipSum: number;
    formattedTotalSum: number;
    setTipSum: (tipSum: number) => void;
    setTotalSum: (totalSum: number) => void;
}

const DisplayPanel: FC<DisplayPanelProps> = ({ totalSum, formattedTipSum, formattedTotalSum, setTipSum, setTotalSum }) => {
    const handleReset = () => {
        setTipSum(0);
        setTotalSum(0);
    };
    
    return (
        <Container fluid className='d-flex flex-column justify-content-top h-100'>
            <Row className='py-2 px-3 align-items-center'>
                <Col className=''>
                    <h2 className='text-white m-0 h5'>Tip Amount</h2>
                    <h3 className='cs-fc-2 h6'>/ person</h3>
                </Col>
                <Col className=''>
                    <h4 className='display-5 cs-fc-2 cs-fw-7 text-end'>${!isNaN(formattedTipSum) ? formattedTipSum : '0.00'}</h4>
                </Col>
            </Row>
            <Row className='py-2 px-3 align-items-center'>
                <Col className=''>
                    <h2 className='text-white m-0 h5'>Total</h2>
                    <h3 className='cs-fc-2 h6'>/ person</h3>
                </Col>
                <Col className=''>
                    <h4 className='display-5 cs-fc-2 cs-fw-7 text-end'>${!isNaN(formattedTotalSum) ? formattedTotalSum : '0.00'}</h4>
                </Col>
            </Row>
            <Button 
                disabled={totalSum === 0} 
                onClick={handleReset}
                className='w-100 mt-auto mb-4 p-2 text-uppercase cs-fw-7 cs-btn-2 border-0'>Reset</Button>
        </Container>
    );
};

export default DisplayPanel;