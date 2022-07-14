
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeEstado, setEstado } from './reduxSlices/estadoSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Estado: NextPage = (props:any) => {

    const [estadoState, setEstadoState] = useState("");

    const changeEstado = (e:any) => {

        let val = e.target.value;

        setEstadoState(val);
        storeEstado.dispatch(setEstado(val));
    }

    const resetEstado = () => {

        setEstadoState("");
        storeEstado.dispatch(setEstado(""));
    }

    props.props.resetEstado = resetEstado;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setEstadoState(storeEstado.getState().estado);
    }

    return(
        <Form.Group as={Col} controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" value={estadoState} onChange={changeEstado}/>
        </Form.Group>
    )
}

export default Estado