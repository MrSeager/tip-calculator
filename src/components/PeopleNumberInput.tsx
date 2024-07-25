import React, { FC } from 'react';
import '../components/TipCalc.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, InputGroup, Image } from 'react-bootstrap';
//Images
import ImgPerson from '../images/icon-person.svg';

type PeopleNumberInputProps = {
    errorNumbPeople: boolean;
    handlePeopleNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PeopleNumberInput: FC<PeopleNumberInputProps> = ({ errorNumbPeople, handlePeopleNumberChange }) => {
    return (
        <Form.Group>
            <Container className='p-0 d-flex flex-row justify-content-between'>
                <Form.Label className='fs-6 cs-fc'>Number of People</Form.Label>
                {errorNumbPeople === true && (
                    <Form.Label className='fs-6 text-danger'>Can't be zero</Form.Label>
                )}
            </Container>
            <InputGroup className={`${errorNumbPeople && 'cs-outline'}`}>
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
    );
}

export default PeopleNumberInput;