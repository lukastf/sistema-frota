
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeTelefoneGestor, setTelefoneGestor } from './reduxSlices/telefoneGestorSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const TelefoneGestor: NextPage = (props:any) => {

    const [telefoneGestorState, setTelefoneGestorState] = useState("");

    const changeTelefoneGestor = (e:any) => {

        let val = e.target.value;

        setTelefoneGestorState(val);
        storeTelefoneGestor.dispatch(setTelefoneGestor(val));
    }

    const resetTelefoneGestor = () => {

        setTelefoneGestorState("");
        storeTelefoneGestor.dispatch(setTelefoneGestor(""));
    }

    props.props.resetTelefoneGestor = resetTelefoneGestor;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setTelefoneGestorState(storeTelefoneGestor.getState().telefoneGestor);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="telefoneGestor">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" value={telefoneGestorState} onChange={changeTelefoneGestor}/>
            </Form.Group>
        </Col>
    )
}

export default TelefoneGestor