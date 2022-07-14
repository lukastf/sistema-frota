
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeNumeroOS, setNumeroOS } from './reduxSlices/numeroOSSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

import { numberMask } from '../../masks'
import { ReactNode } from 'react'

const NumeroOS: NextPage = (props:any) => {

    const [numeroOSState, setNumeroOSState] = useState("");

    const changeNumeroOS = (e:any) => {

        let val = e.target.value;

        val = numberMask(val);

        setNumeroOSState(val);
        storeNumeroOS.dispatch(setNumeroOS(val));
    }

    const resetNumeroOS = () => {

        setNumeroOSState("");
        storeNumeroOS.dispatch(setNumeroOS(""));
    }

    props.props.resetNumeroOS = resetNumeroOS;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setNumeroOSState(storeNumeroOS.getState().numeroOS);
    }

    return(
        <Form.Group as={Col} controlId="numeroOS">
            <Form.Label>Numero OS</Form.Label>
            <Form.Control type="text" value={numeroOSState} onChange={changeNumeroOS}/>
        </Form.Group>
    )
}

export default NumeroOS