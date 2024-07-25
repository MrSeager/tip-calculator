import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './components/TipCalc.css';
//Components
import ButtonsPanel from './components/ButtonsPanel.tsx';
import DisplayPanel from './components/DisplayPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const TipCalc = () => {
    const [tipSum, setTipSum] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    const formattedTipSum = tipSum.toFixed(2);
    const formattedTotalSum = totalSum.toFixed(2);

    AOS.init({
        mobile: false
    });

    return (
        <Container fluid className='cs-h d-flex flex-column align-items-center justify-content-center p-0'>
            <h1 data-aos="zoom-in-down" className='cs-fc display-6 fw-light text-uppercase mb-5'>Spli<br />tter</h1>
            <Container fluid data-aos="zoom-in-up" className='bg-white cs-br p-3 cs-w'>
                <Row className='py-2 px-3'>
                    <Col xs={12} lg={6} className='mb-lg-0 mb-4'>
                        <ButtonsPanel
                            tipSum={tipSum}
                            setTipSum={setTipSum}
                            setTotalSum={setTotalSum} />
                    </Col>
                    <Col xs={12} lg={6} className='cs-bg-2 cs-br-2'>
                        <DisplayPanel 
                            totalSum={totalSum} 
                            formattedTipSum={formattedTipSum} 
                            formattedTotalSum={formattedTotalSum}
                            setTipSum={setTipSum}
                            setTotalSum={setTotalSum} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TipCalc;