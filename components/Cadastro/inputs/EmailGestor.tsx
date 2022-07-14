
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeEmailGestor, setEmailGestor } from './reduxSlices/emailGestorSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const EmailGestor: NextPage = (props:any) => {

    const [emailGestorState, setEmailGestorState] = useState("");

    const changeEmailGestor = (e:any) => {

        let val = e.target.value;

        setEmailGestorState(val);
        storeEmailGestor.dispatch(setEmailGestor(val));
    }

    const resetEmailGestor = () => {

        setEmailGestorState("");
        storeEmailGestor.dispatch(setEmailGestor(""));
    }

    props.props.resetEmailGestor = resetEmailGestor;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setEmailGestorState(storeEmailGestor.getState().emailGestor);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="emailGestor">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={emailGestorState} onChange={changeEmailGestor}/>
            </Form.Group>
        </Col>
    )
}

export default EmailGestor