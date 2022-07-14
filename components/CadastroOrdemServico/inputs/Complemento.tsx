
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeComplemento, setComplemento } from './reduxSlices/complementoSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Complemento: NextPage = (props:any) => {

    const [complementoState, setComplementoState] = useState("");

    const changeComplemento = (e:any) => {

        let val = e.target.value;

        setComplementoState(val);
        storeComplemento.dispatch(setComplemento(val));
    }

    const resetComplemento = () => {

        setComplementoState("");
        storeComplemento.dispatch(setComplemento(""));
    }

    props.props.resetComplemento = resetComplemento;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setComplementoState(storeComplemento.getState().complemento);
    }

    return(
        <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" value={complementoState} onChange={changeComplemento}/>
        </Form.Group>
    )
}

export default Complemento