
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeRazaoSocial, setRazaoSocial } from './reduxSlices/razaoSocialSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const RazaoSocial: NextPage = (props:any) => {

    const [razaoSocialState, setRazaoSocialState] = useState("");

    const changeRazaoSocial = (e:any) => {

        let val = e.target.value;

        setRazaoSocialState(val);
        storeRazaoSocial.dispatch(setRazaoSocial(val));
    }

    const resetRazaoSocial = () => {

        setRazaoSocialState("");
        storeRazaoSocial.dispatch(setRazaoSocial(""));
    }

    props.props.resetRazaoSocial = resetRazaoSocial;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setRazaoSocialState(storeRazaoSocial.getState().razaoSocial);
    }

    return(
        <Form.Group className="mb-3" controlId="razaoSocial">
            <Form.Label>Razão Social</Form.Label>
            <Form.Control type="text" value={razaoSocialState} onChange={changeRazaoSocial}/>
        </Form.Group>
    )
}

export default RazaoSocial