
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeEndereco, setEndereco } from './reduxSlices/enderecoSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Endereco: NextPage = (props:any) => {

    const [enderecoState, setEnderecoState] = useState("");

    const changeEndereco = (e:any) => {

        let val = e.target.value;

        setEnderecoState(val);
        storeEndereco.dispatch(setEndereco(val));
    }

    const resetEndereco = () => {

        setEnderecoState("");
        storeEndereco.dispatch(setEndereco(""));
    }

    props.props.resetEndereco = resetEndereco;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setEnderecoState(storeEndereco.getState().endereco);
    }

    return(
        <Col md={10}>
            <Form.Group controlId="endereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" value={enderecoState} onChange={changeEndereco}/>
            </Form.Group>
        </Col>
    )
}

export default Endereco