
import type { NextPage } from 'next'

//import { useSelector, useDispatch } from 'react-redux'
import { storeCnpj, setCnpj } from './reduxSlices/cnpjSlice'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

import { cnpjMask } from '../../masks'
import { ReactNode } from 'react'

/*interface Iprops {
    children?: ReactNode,
    resetCnpj: Function
}*/

const Cnpj: NextPage = (props:any) => {

    //props = {...props};

    //props = props.props;

    //let cnpj = [storeCnpj.getState().cnpj];
    //const dispatch = useDispatch();

    const [cnpjState, setCnpjState] = useState("");

    //const getCnpj = () => {
        //return storeCnpj.getState().cnpj
    //}

    const changeCnpj = (e:any) => {

        //console.log(storeCnpj.getState().cnpj);

        let val = e.target.value;

        val = cnpjMask(val);

        setCnpjState(val);
        storeCnpj.dispatch(setCnpj(val));
    }

    const resetCnpj = () => {

        setCnpjState("");
        storeCnpj.dispatch(setCnpj(""));
    }

    props.props.resetCnpj = resetCnpj;

    const [didMount, setDidMount] = useState(false);
    if (!didMount) {

        setDidMount(true);
        setCnpjState(storeCnpj.getState().cnpj);
    }

    return(
        <Form.Group as={Col} controlId="cnpj">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control type="text" value={cnpjState} onChange={changeCnpj}/>
        </Form.Group>
    )
}

export default Cnpj