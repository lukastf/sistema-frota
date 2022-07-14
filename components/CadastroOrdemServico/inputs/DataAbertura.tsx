
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeDataAbertura, setDataAbertura } from './reduxSlices/dataAberturaSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

import { dataMask } from '../../masks'

const DataAbertura: NextPage = (props:any) => {

    const [dataAberturaState, setDataAberturaState] = useState("");

    const changeDataAbertura = (e:any) => {

        let val = e.target.value;

        val = dataMask(val);

        setDataAberturaState(val);
        storeDataAbertura.dispatch(setDataAbertura(val));
    }

    const resetDataAbertura = () => {

        setDataAberturaState("");
        storeDataAbertura.dispatch(setDataAbertura(""));
    }

    props.props.resetDataAbertura = resetDataAbertura;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setDataAberturaState(storeDataAbertura.getState().dataAbertura);
    }

    return(
        <Form.Group as={Col} controlId="dataAbertura">
            <Form.Label>Data da Abertura</Form.Label>
            <Form.Control maxLength={10} type="text" value={dataAberturaState} onChange={changeDataAbertura}/>
        </Form.Group>
    )
}

export default DataAbertura