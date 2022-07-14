
import type { NextPage } from 'next'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import Link from 'next/link'
import { ReactChild, ReactNode, useState } from 'react'
import Cnpj from './inputs/Cnpj'
import InscEstadual from './inputs/InscEstadual'
import RazaoSocial from './inputs/RazaoSocial'
import NomeFantasia from './inputs/NomeFantasia'
import Endereco from './inputs/Endereco'
import Numero from './inputs/Numero'
import Complemento from './inputs/Complemento'
import Cep from './inputs/Cep'
import Cidade from './inputs/Cidade'
import Estado from './inputs/Estado'
import Email from './inputs/Email'
import Telefone from './inputs/Telefone'
import Celular from './inputs/Celular'
import NomeGestor from './inputs/NomeGestor'
import EmailGestor from './inputs/EmailGestor'
import TelefoneGestor from './inputs/TelefoneGestor'
import CelularGestor from './inputs/CelularGestor'

import { storeCnpj } from './inputs/reduxSlices/cnpjSlice'
import { storeInscEstadual } from './inputs/reduxSlices/inscEstadualSlice'
import { storeRazaoSocial } from './inputs/reduxSlices/razaoSocialSlice'
import { storeNomeFantasia } from './inputs/reduxSlices/nomeFantasiaSlice'
import { storeEndereco } from './inputs/reduxSlices/enderecoSlice'
import { storeNumero } from './inputs/reduxSlices/numeroSlice'
import { storeComplemento } from './inputs/reduxSlices/complementoSlice'
import { storeCep } from './inputs/reduxSlices/cepSlice'
import { storeCidade } from './inputs/reduxSlices/cidadeSlice'
import { storeEstado } from './inputs/reduxSlices/estadoSlice'
import { storeEmail } from './inputs/reduxSlices/emailSlice'
import { storeTelefone } from './inputs/reduxSlices/telefoneSlice'
import { storeCelular } from './inputs/reduxSlices/celularSlice'
import { storeNomeGestor } from './inputs/reduxSlices/nomeGestorSlice'
import { storeEmailGestor } from './inputs/reduxSlices/emailGestorSlice'
import { storeTelefoneGestor } from './inputs/reduxSlices/telefoneGestorSlice'
import { storeCelularGestor } from './inputs/reduxSlices/celularGestorSlice'
import { storeId, setId } from './inputs/reduxSlices/idSlice'

import axios from 'axios'
import { serverUrl } from '../../config'

const Cadastro: NextPage = () => {

    const [msg, setMsg] = useState(<p style={{color: "white"}}></p>);

    const msgResponse = (response:any) => {

        if (response.status == 200)
        setMsg(<p style={{color: "green"}}>{response.data.msg}</p>);

        else
        setMsg(<p style={{color: "red"}}>{response.data.msg}</p>);

        setTimeout(()=>{ 
            setMsg(<p style={{color: "white"}}></p>);
        }, 6000);
    }

    let props:any = {

        resetCnpj: ()=>{},
        resetInscEstadual: ()=>{},
        resetRazaoSocial: ()=>{},
        resetNomeFantasia: ()=>{},
        resetEndereco: ()=>{},
        resetNumero:()=>{},
        resetComplemento:()=>{},
        resetCep:()=>{},
        resetCidade:()=>{},
        resetEstado:()=>{},
        resetEmail:()=>{},
        resetTelefone:()=>{},
        resetCelular:()=>{},

        resetNomeGestor:()=>{},
        resetEmailGestor:()=>{},
        resetTelefoneGestor:()=>{},
        resetCelularGestor:()=>{}
    }

    props = {props}

    const resetarForm = () => {

        storeId.dispatch(setId(""));
        props.props.resetCnpj();
        props.props.resetInscEstadual();
        props.props.resetRazaoSocial();
        props.props.resetNomeFantasia();
        props.props.resetEndereco();
        props.props.resetNumero();
        props.props.resetComplemento();
        props.props.resetCep();
        props.props.resetCidade();
        props.props.resetEstado();
        props.props.resetEmail();
        props.props.resetTelefone();
        props.props.resetCelular();

        props.props.resetNomeGestor();
        props.props.resetEmailGestor();
        props.props.resetTelefoneGestor();
        props.props.resetCelularGestor();
    }


    const salvar = () => {

        let obj = {

            _id: storeId.getState().id,
            cnpj: storeCnpj.getState().cnpj,
            inscEstadual: storeInscEstadual.getState().inscEstadual,
            razaoSocial: storeRazaoSocial.getState().razaoSocial,
            nomeFantasia: storeNomeFantasia.getState().nomeFantasia,
            endereco: storeEndereco.getState().endereco,
            numero: storeNumero.getState().numero,
            complemento: storeComplemento.getState().complemento,
            cep: storeCep.getState().cep,
            cidade: storeCidade.getState().cidade,
            estado: storeEstado.getState().estado,
            email: storeEmail.getState().email,
            telefone: storeTelefone.getState().telefone,
            celular: storeCelular.getState().celular,

            nomeGestor: storeNomeGestor.getState().nomeGestor,
            emailGestor: storeEmailGestor.getState().emailGestor,
            telefoneGestor: storeTelefoneGestor.getState().telefoneGestor,
            celularGestor: storeCelularGestor.getState().celularGestor
        }

        let method = axios.post;

        if (obj._id != "") {
            method = axios.put;
        }

        method(serverUrl + '/api/cadastros/post-put/'+obj.cnpj, obj).then((response) => {

            //console.log(response);

            if (obj._id == "") resetarForm();

            msgResponse(response);

        }).catch((error) => {
            console.log(error);
        });

        

        //storeCnpj.dispatch(setCnpj(""));

        //console.log(obj);
    }

    const deletar = () => {
    
        //let obj = {
        //    _id: storeId.getState().id
        //}

        axios.delete(serverUrl + '/api/cadastros/delete/'+storeId.getState().id).then((response) => {

            //console.log(response);

            resetarForm();
            msgResponse(response);

            /*if (response.status == 200)
            setMsg(<p style={{color: "green"}}>{response.data.msg}</p>);

            else
            setMsg(<p style={{color: "red"}}>{response.data.msg}</p>);

            setTimeout(()=>{ 
                setMsg(<p style={{color: "white"}}></p>);
            }, 6000);*/

        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <>
        <Container fluid>
            <Row /*className="justify-content-center"*/>
                <Col xs={12} style={{backgroundColor: '#d7d7d7'}}>
                    <h1 style={{color: '#003366'}}>Sistema de Frotas</h1>
                </Col>
                <Col md={1}>
                    <h5 style={{color: '#003366', marginTop: '1rem'}}>CADASTRO</h5>
                </Col>
                <Col md={11}>
                    <hr style={{
                        height: '0.2rem',
                        color: "#003366",
                        opacity: '1',
                        marginTop: '1.7rem'
                    }}></hr>
                </Col>
            </Row>
            <Row>
                <Col md={{  span:5, offset: 1}}>
                    <h5 style={{color: '#003366', marginTop: '1rem'}}>Empresa</h5>
                    <Form>
                        <Row className="mb-3">
                            <Cnpj {...props}/>
                            <InscEstadual {...props}/>
                        </Row>

                        <RazaoSocial {...props}/>
                        <NomeFantasia {...props}/>

                        <Row className="mb-3">
                            <Endereco {...props}/>
                            <Numero {...props}/>
                        </Row>

                        <Row className="mb-3">

                            <Complemento {...props}/>
                            <Cep {...props}/>
                        </Row>

                        <Row className="mb-3">
                            <Cidade {...props}/>
                            <Estado {...props}/>
                        </Row>

                        <Email {...props}/>
                        <Telefone {...props}/>
                        <Celular {...props}/>
                    </Form>
                </Col>
                <Col md={{  span:5, offset: 1}}>
                    <h5 style={{color: '#003366', marginTop: '1rem'}}>Gestor</h5>
                    <Form>
                        <NomeGestor {...props}/>
                        <EmailGestor {...props}/>
                        <TelefoneGestor {...props}/>
                        <CelularGestor {...props}/>
                    </Form>

                    <div style={{marginTop: "10rem", marginBottom: "10rem"}}>
                        {msg}
                        {/*<h5 style={{color: '#003366', marginTop: '5rem', marginBottom: '5rem'}}>Salvar</h5>*/}
                        <Button style={{backgroundColor: '#003366'}} 
                        className="mx-3"
                        variant="primary" size="sm"
                        onClick={salvar}
                        >
                            Salvar
                        </Button>

                        <Button style={{backgroundColor: '#003366'}} 
                        className="mx-3"
                        variant="primary" size="sm"
                        onClick={deletar}
                        >
                            Excluir
                        </Button>

                        <Link href="/">
                            <Button style={{backgroundColor: '#003366'}} 
                            className="mx-3"
                            variant="primary" size="sm"
                            onClick={resetarForm}
                            >
                                Voltar
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Cadastro