
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeTelefone, setTelefone } from './reduxSlices/telefoneSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Telefone: NextPage = (props:any) => {

    const [telefoneState, setTelefoneState] = useState("");

    const changeTelefone = (e:any) => {

        let val = e.target.value;

        setTelefoneState(val);
        storeTelefone.dispatch(setTelefone(val));
    }

    const resetTelefone = () => {

        setTelefoneState("");
        storeTelefone.dispatch(setTelefone(""));
    }

    props.props.resetTelefone = resetTelefone;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setTelefoneState(storeTelefone.getState().telefone);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" value={telefoneState} onChange={changeTelefone}/>
            </Form.Group>
        </Col>
    )
}

export default Telefone