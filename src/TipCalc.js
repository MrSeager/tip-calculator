import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './components/TipCalc.css';
//Components
import TipButton from './components/TipButton.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const TipCalc = () => {
  return (
    <Container fluid className='cs-h d-flex flex-column align-items-center justify-content-center'>
        <h1 className='cs-fc display-6 fw-light text-uppercase mb-5'>Spli<br />tter</h1>
        <Container className='bg-white rounded p-3 cs-w'>
            <Row className='p-2'>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label className='fs-6 cs-fc'>Bill</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className='fs-5 cs-fc border-0 cs-bg'>$</InputGroup.Text>
                                <Form.Control
                                    placeholder='0'
                                    type='number'
                                    className='cs-bg border-0 text-end cs-fc fs-5'
                                    />
                            </InputGroup>
                        </Form.Group>
                        <Form.Label className='fs-6 cs-fc'>Select Tip %</Form.Label>
                        <Container>
                            <Row className='mb-2'>
                                <Col className='ps-0 pe-1'>
                                    <TipButton value={5} />
                                </Col>
                                <Col className='px-1'>
                                    <TipButton value={10} />
                                </Col>
                                <Col className='ps-1 pe-0'>
                                    <TipButton value={15} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='ps-0 pe-1'>
                                    <TipButton value={25} />
                                </Col>
                                <Col className='px-1'>
                                    <TipButton value={50} />
                                </Col>
                                <Col className='ps-1 pe-0'></Col>
                            </Row>
                        </Container>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </Container>
  );
}

export default TipCalc;