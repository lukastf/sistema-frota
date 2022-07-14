
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCelular, setCelular } from './reduxSlices/celularSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Celular: NextPage = (props:any) => {

    const [celularState, setCelularState] = useState("");

    const changeCelular = (e:any) => {

        let val = e.target.value;

        setCelularState(val);
        storeCelular.dispatch(setCelular(val));
    }

    const resetCelular = () => {

        setCelularState("");
        storeCelular.dispatch(setCelular(""));
    }

    props.props.resetCelular = resetCelular;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCelularState(storeCelular.getState().celular);
    }

    return(
        <Col md={8}>
            <Form.Group className="mb-3" controlId="celular">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" value={celularState} onChange={changeCelular} />
            </Form.Group>
        </Col>
    )
}

export default Celular