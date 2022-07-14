
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeDataAtendimento, setDataAtendimento } from './reduxSlices/dataAtendimentoSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

import { dataMask } from '../../masks'

const DataAtendimento: NextPage = (props:any) => {

    const [dataAtendimentoState, setDataAtendimentoState] = useState("");

    const changeDataAtendimento = (e:any) => {

        let val = e.target.value;

        val = dataMask(val);

        setDataAtendimentoState(val);
        storeDataAtendimento.dispatch(setDataAtendimento(val));
    }

    const resetDataAtendimento = () => {

        setDataAtendimentoState("");
        storeDataAtendimento.dispatch(setDataAtendimento(""));
    }

    props.props.resetDataAtendimento = resetDataAtendimento;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setDataAtendimento(storeDataAtendimento.getState().dataAtendimento);
    }

    return(
        <Form.Group as={Col} controlId="dataAtendimento">
            <Form.Label>Data do Atendimento</Form.Label>
            <Form.Control maxLength={10} type="text" value={dataAtendimentoState} onChange={changeDataAtendimento}/>
        </Form.Group>
    )
}

export default DataAtendimento