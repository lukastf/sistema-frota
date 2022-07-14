
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeNomeFantasia, setNomeFantasia } from './reduxSlices/nomeFantasiaSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const NomeFantasia: NextPage = (props:any) => {

    const [nomeFantasiaState, setNomeFantasiaState] = useState("");

    const changeNomeFantasia = (e:any) => {

        let val = e.target.value;

        setNomeFantasiaState(val);
        storeNomeFantasia.dispatch(setNomeFantasia(val));
    }

    const resetNomeFantasia = () => {

        setNomeFantasiaState("");
        storeNomeFantasia.dispatch(setNomeFantasia(""));
    }

    props.props.resetNomeFantasia = resetNomeFantasia;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setNomeFantasiaState(storeNomeFantasia.getState().nomeFantasia);
    }

    return(
        <Form.Group className="mb-3" controlId="nomeFantasia">
            <Form.Label>Nome Fantasia</Form.Label>
            <Form.Control type="text" value={nomeFantasiaState} onChange={changeNomeFantasia}/>
        </Form.Group>
    )
}

export default NomeFantasia