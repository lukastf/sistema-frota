
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCnpj, setCnpj } from './reduxSlices/cnpjSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Cnpj: NextPage = (props:any) => {

    const [cnpjState, setCnpjState] = useState("");

    const changeNomeFantasia = (e:any) => {

        let val = e.target.value;

        setCnpjState(val);
        storeCnpj.dispatch(setCnpj(val));
    }

    const resetNomeFantasia = () => {

        setCnpjState("");
        storeCnpj.dispatch(setCnpj(""));
    }

    props.props.resetNomeFantasia = resetNomeFantasia;
    props.props.cnpj = cnpjState
    props.props.setCnpj = setCnpjState

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCnpjState(storeCnpj.getState().cnpj);
    }

    return(
        <Form.Group className="mb-3" controlId="nomeFantasia">
            <Form.Label>Cnpj</Form.Label>
            <Form.Control type="text" value={cnpjState} onChange={changeNomeFantasia}/>
        </Form.Group>
    )
}

export default Cnpj