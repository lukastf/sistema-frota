
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCelularGestor, setCelularGestor } from './reduxSlices/celularGestorSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const CelularGestor: NextPage = (props:any) => {

    const [celularGestorState, setCelularGestorState] = useState("");

    const changeCelularGestor = (e:any) => {

        let val = e.target.value;

        setCelularGestorState(val);
        storeCelularGestor.dispatch(setCelularGestor(val));
    }

    const resetCelularGestor = () => {

        setCelularGestorState("");
        storeCelularGestor.dispatch(setCelularGestor(""));
    }

    props.props.resetCelularGestor = resetCelularGestor;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCelularGestorState(storeCelularGestor.getState().celularGestor);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="celularGestor">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" value={celularGestorState} onChange={changeCelularGestor}/>
            </Form.Group>
        </Col>
    )
}

export default CelularGestor