
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCidade, setCidade } from './reduxSlices/cidadeSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Cidade: NextPage = (props:any) => {

    const [cidadeState, setCidadeState] = useState("");

    const changeCidade = (e:any) => {

        let val = e.target.value;

        setCidadeState(val);
        storeCidade.dispatch(setCidade(val));
    }

    const resetCidade = () => {

        setCidadeState("");
        storeCidade.dispatch(setCidade(""));
    }

    props.props.resetCidade = resetCidade;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCidadeState(storeCidade.getState().cidade);
    }

    return(
        <Form.Group as={Col} controlId="cidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" value={cidadeState} onChange={changeCidade}/>
        </Form.Group>
    )
}

export default Cidade