
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeInscEstadual, setInscEstadual } from './reduxSlices/inscEstadualSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const InscEstadual: NextPage = (props:any) => {

    const [inscEstadualState, setInscEstadualState] = useState("");

    const changeInscEstadual = (e:any) => {

        let val = e.target.value;

        setInscEstadualState(val);
        storeInscEstadual.dispatch(setInscEstadual(val));
    }

    const resetInscEstadual = () => {

        setInscEstadualState("");
        storeInscEstadual.dispatch(setInscEstadual(""));
    }

    props.props.resetInscEstadual = resetInscEstadual;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setInscEstadualState(storeInscEstadual.getState().inscEstadual);
    }

    return(
        <Form.Group as={Col} controlId="inscEstadual">
            <Form.Label>Insc. Estadual</Form.Label>
            <Form.Control type="text" value={inscEstadualState} onChange={changeInscEstadual}/>
        </Form.Group>
    )
}

export default InscEstadual