import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './components/TipCalc.css';
//Components
import TipButton from './components/TipButton.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, InputGroup, Image, Button } from 'react-bootstrap';
//Images
import ImgDollar from './images/icon-dollar.svg';
import ImgPerson from './images/icon-person.svg';

const TipCalc = () => {
    const [totalSum, setTotalSum] = useState(0.00);

    const formattedTotalSum = totalSum.toFixed(2);

    return (
        <Container fluid className='cs-h d-flex flex-column align-items-center justify-content-center p-0'>
            <h1 className='cs-fc display-6 fw-light text-uppercase mb-5'>Spli<br />tter</h1>
            <Container fluid className='bg-white rounded p-3 cs-w'>
                <Row className='py-2 px-3'>
                    <Col xs={12} lg={6} className='mb-lg-0 mb-4'>
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
                                        className='cs-bg cs-fw-7 cs-ph-fc shadow-none border-0 text-end cs-fc fs-5'
                                        />
                                </InputGroup>
                            </Form.Group>
                            <Form.Label className='fs-6 cs-fc'>Select Tip %</Form.Label>
                            <Container className='mb-4 cs-flex p-0'>
                                <TipButton value={5} />
                                <TipButton value={10} />
                                <TipButton value={15} />
                                <TipButton value={25} />
                                <TipButton value={50} />
                                <Form.Control
                                    placeholder='Custom'
                                    type='number'
                                    min={0}
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
                                        className='cs-bg cs-fw-7 cs-ph-fc shadow-none border-0 text-end cs-fc fs-5'
                                        />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6} className='cs-bg-2 rounded d-flex flex-column justify-content-top'>
                        <Row className='py-2 px-3 align-items-center'>
                            <Col className=''>
                                <h2 className='text-white m-0 h5'>Tip Amount</h2>
                                <h3 className='cs-fc-2 h6'>/ person</h3>
                            </Col>
                            <Col className=''>
                                <h4 className='display-4 cs-fc-2 cs-fw-7'>${formattedTotalSum}</h4>
                            </Col>
                        </Row>
                        <Row className='py-2 px-3 align-items-center'>
                            <Col className=''>
                                <h2 className='text-white m-0 h5'>Total</h2>
                                <h3 className='cs-fc-2 h6'>/ person</h3>
                            </Col>
                            <Col className=''>
                                <h4 className='display-4 cs-fc-2 cs-fw-7'>${}0.00</h4>
                            </Col>
                        </Row>
                        <Button disabled={totalSum === 0} className='w-100 mt-auto mb-4 p-2 text-uppercase cs-fw-7 cs-btn-2 border-0'>Reset</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TipCalc;