
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeNumero, setNumero } from './reduxSlices/numeroSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Numero: NextPage = (props:any) => {

    const [numeroState, setNumeroState] = useState("");

    const changeNumero = (e:any) => {

        let val = e.target.value;

        setNumeroState(val);
        storeNumero.dispatch(setNumero(val));
    }

    const resetNumero = () => {

        setNumeroState("");
        storeNumero.dispatch(setNumero(""));
    }

    props.props.resetNumero = resetNumero;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setNumeroState(storeNumero.getState().numero);
    }

    return(
        <Col md={2}>
            <Form.Group controlId="numero">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="text" value={numeroState} onChange={changeNumero}/>
            </Form.Group>
        </Col>
    )
}

export default Numero