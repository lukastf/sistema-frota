
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeNomeGestor, setNomeGestor } from './reduxSlices/nomeGestorSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const NomeGestor: NextPage = (props:any) => {

    const [nomeGestorState, setNomeGestorState] = useState("");

    const changeNomeGestor = (e:any) => {

        let val = e.target.value;

        setNomeGestorState(val);
        storeNomeGestor.dispatch(setNomeGestor(val));
    }

    const resetNomeGestor = () => {

        setNomeGestorState("");
        storeNomeGestor.dispatch(setNomeGestor(""));
    }

    props.props.resetNomeGestor = resetNomeGestor;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setNomeGestorState(storeNomeGestor.getState().nomeGestor);
    }

    return(
        <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" value={nomeGestorState} onChange={changeNomeGestor}/>
        </Form.Group>
    )
}

export default NomeGestor