import axios from "axios"
import { NextPage } from "next"
import { useState } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { serverUrl } from "../config"
import Link from 'next/link'

import { storeCelular, setCelular } from './Cadastro/inputs/reduxSlices/celularSlice'
import { storeCelularGestor, setCelularGestor } from './Cadastro/inputs/reduxSlices/celularGestorSlice'
import { storeCep, setCep } from './Cadastro/inputs/reduxSlices/cepSlice'
import { storeCidade, setCidade } from './Cadastro/inputs/reduxSlices/cidadeSlice'
import { storeCnpj, setCnpj } from './Cadastro/inputs/reduxSlices/cnpjSlice'
import { storeComplemento, setComplemento } from './Cadastro/inputs/reduxSlices/complementoSlice'
import { storeEmail, setEmail } from './Cadastro/inputs/reduxSlices/emailSlice'
import { storeEmailGestor, setEmailGestor } from './Cadastro/inputs/reduxSlices/emailGestorSlice'
import { storeEndereco, setEndereco } from './Cadastro/inputs/reduxSlices/enderecoSlice'
import { storeEstado, setEstado } from './Cadastro/inputs/reduxSlices/estadoSlice'
import { storeInscEstadual, setInscEstadual } from './Cadastro/inputs/reduxSlices/inscEstadualSlice'
import { storeNomeFantasia, setNomeFantasia } from './Cadastro/inputs/reduxSlices/nomeFantasiaSlice'
import { storeNomeGestor, setNomeGestor } from './Cadastro/inputs/reduxSlices/nomeGestorSlice'
import { storeNumero, setNumero } from './Cadastro/inputs/reduxSlices/numeroSlice'
import { storeRazaoSocial, setRazaoSocial } from './Cadastro/inputs/reduxSlices/razaoSocialSlice'
import { storeTelefone, setTelefone } from './Cadastro/inputs/reduxSlices/telefoneSlice'
import { storeTelefoneGestor, setTelefoneGestor } from './Cadastro/inputs/reduxSlices/telefoneGestorSlice'
import { storeId, setId } from './Cadastro/inputs/reduxSlices/idSlice'

import Pagination from './Pagination'

const ListarCadastros: NextPage = () => {

    const [didMount, setDidMount] = useState(false);
    const [pages, setPages] = useState([]);
    const [renderCadastros, setRenderCadastros] = useState([<></>]);
    const [searchProp, setSearchProp] = useState("cnpj");

    type Cadastro = {
        _id: string
        celular: string,
        celularGestor: string,
        cep: string,
        cidade: string,
        cnpj: string,
        complemento: string,
        email: string,
        emailGestor: string,
        endereco: string,
        estado: string,
        inscEstadual: string,
        nomeFantasia: string,
        nomeGestor: string,
        numero: string,
        razaoSocial: string,
        telefone: string,
        telefoneGestor: string
    }

    const editarBtn = (cadastro:Cadastro) => {

        storeId.dispatch(setId(cadastro._id));
        storeCelular.dispatch(setCelular(cadastro.celular));
        storeCelularGestor.dispatch(setCelularGestor(cadastro.celularGestor));
        storeCep.dispatch(setCep(cadastro.cep));
        storeCidade.dispatch(setCidade(cadastro.cidade));
        storeCnpj.dispatch(setCnpj(cadastro.cnpj));
        storeComplemento.dispatch(setComplemento(cadastro.complemento));
        storeEmail.dispatch(setEmail(cadastro.email));
        storeEmailGestor.dispatch(setEmailGestor(cadastro.emailGestor));
        storeEndereco.dispatch(setEndereco(cadastro.endereco));
        storeEstado.dispatch(setEstado(cadastro.estado));
        storeInscEstadual.dispatch(setInscEstadual(cadastro.inscEstadual));
        storeNomeFantasia.dispatch(setNomeFantasia(cadastro.nomeFantasia));
        storeNomeGestor.dispatch(setNomeGestor(cadastro.nomeGestor));
        storeNumero.dispatch(setNumero(cadastro.numero));
        storeRazaoSocial.dispatch(setRazaoSocial(cadastro.razaoSocial));
        storeTelefone.dispatch(setTelefone(cadastro.telefone));
        storeTelefoneGestor.dispatch(setTelefoneGestor(cadastro.telefoneGestor));
    }

    const mountCadastros = (cadastros:any) => {

        let temp = [];

        for (let i = 0; i < cadastros.length; i++) {
            
            temp.push(
            <Col xs={6} md={3} key={i}>
                <Card style={{ marginTop: "3rem" }}>
                    <Card.Body>
                        <Card.Title>{cadastros[i].nomeFantasia}</Card.Title>
                            <Card.Text>
                                {cadastros[i].cnpj}
                            </Card.Text>
                            <Card.Text>
                                {cadastros[i].nomeGestor}
                            </Card.Text>
                            <Card.Text>
                                {cadastros[i].cidade}
                            </Card.Text>
                            <Card.Text>
                                {cadastros[i].estado}
                            </Card.Text>
                        <Link href="/cadastro">
                            <Button style={{backgroundColor: '#003366'}} 
                            onClick={()=>{editarBtn(cadastros[i])}}
                            className="mx-3"
                            variant="primary" size="sm">
                                Editar
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            );
        }

        setRenderCadastros(temp);

    }

    const getCadastros = async(page = 0) => {

        console.log("penis")
        console.log(page)

        const cadastros = await axios.get(serverUrl + "/api/cadastros/get/20/" + page);

        setPages(cadastros.data.pages);
        mountCadastros(cadastros.data.cadastros)

        console.log(cadastros);
    }

    if (!didMount) {

        setDidMount(true);
        getCadastros();
    }

    const pesquisar = async (e:any) => {

        let val = e.target.value;

        const result = await axios.get(serverUrl + '/api/cadastros/get/20/0/searchProp/'+ searchProp +'/search/' + val);

        

        setPages(result.data.pages);
        mountCadastros(result.data.cadastros);

        if (val == "") getCadastros();
    }

    const mudarSearchProp = (e:any) => {

        let val = e.target.value;

        setSearchProp(val);
    }

    return(
        <Container fluid>
            <Row>
                <Col style={{marginTop: "4rem"}}>
                    <Pagination {...{pages: pages, get: getCadastros}} />
                </Col>
            </Row>
            <Row>
                <Col md={4} style={{marginTop: "4rem"}}>

                    <Form.Select style={{marginBottom: "3rem"}} aria-label="Default select example"
                    onChange={mudarSearchProp} value={searchProp}>

                        {/*<option value="">Tipo da pesquisa ( Todos )</option>*/}
                        <option value="cnpj">CNPJ</option>
                        <option value="inscEstadual">Insc. Estadual</option>
                        <option value="razaoSocial">Razão Social</option>
                        <option value="nomeFantasia">Nome Fantasia</option>
                        <option value="endereco">Endereço</option>
                        <option value="numero">Numero</option>
                        <option value="complemento">Complemento</option>
                        <option value="cep">Cep</option>
                        <option value="cidade">Cidade</option>
                        <option value="estado">Estado</option>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                        <option value="celular">Celular</option>
                        <option value="nomeGestor">Nome do Gestor</option>
                        <option value="emailGestor">Email do Gestor</option>
                        <option value="telefoneGestor">Telefone do Gestor</option>
                        <option value="celularGestor">Celular do Gestor</option>
                    </Form.Select>

                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Pesquisar"
                        aria-label="Pesquisar"
                        aria-describedby="basic-addon2"
                        onChange={pesquisar}
                        />
                        <InputGroup.Text id="basic-addon2">
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                    </InputGroup>

                    {/*<Form.Control type="text" placeholder="Pesquisar" />*/}

                </Col>
            </Row>
            <Row /*className="justify-content-center"*/ style={{marginBottom: "5rem"}}>
                {renderCadastros}
            </Row>
        </Container>
    )
}

export default ListarCadastros