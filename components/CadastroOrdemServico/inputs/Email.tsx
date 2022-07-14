
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeEmail, setEmail } from './reduxSlices/emailSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Email: NextPage = (props:any) => {

    const [emailState, setEmailState] = useState("");

    const changeEmail = (e:any) => {

        let val = e.target.value;

        setEmailState(val);
        storeEmail.dispatch(setEmail(val));
    }

    const resetEmail = () => {

        setEmailState("");
        storeEmail.dispatch(setEmail(""));
    }

    props.props.resetEmail = resetEmail;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setEmailState(storeEmail.getState().email);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={emailState} onChange={changeEmail}/>
            </Form.Group>
        </Col>
    )
}

export default Email