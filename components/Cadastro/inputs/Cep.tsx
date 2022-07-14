
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCep, setCep } from './reduxSlices/cepSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { cepMask } from '../../masks'

const Cep: NextPage = (props:any) => {

    const [cepState, setCepState] = useState("");

    const changeCep = (e:any) => {

        let val = cepMask(e.target.value);

        setCepState(val);
        storeCep.dispatch(setCep(val));
    }

    const resetCep = () => {

        setCepState("");
        storeCep.dispatch(setCep(""));
    }

    props.props.resetCep = resetCep;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCepState(storeCep.getState().cep);
    }

    return(
        <Form.Group as={Col} controlId="cep">
            <Form.Label>Cep</Form.Label>
            <Form.Control type="text" value={cepState} onChange={changeCep}/>
        </Form.Group>
    )
}

export default Cep