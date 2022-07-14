
import type { NextPage } from 'next'
import Link from 'next/link'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { signIn, signOut, useSession } from 'next-auth/client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faSearch, faUser, faScrewdriver } from '@fortawesome/free-solid-svg-icons'

const Menu: NextPage = () => {

    return(
        <>
        <Container fluid>
            <Row /*className="justify-content-center"*/>
                <Col xs={12} style={{backgroundColor: '#d7d7d7'}}>
                    <h1 style={{color: '#003366'}}>Sistema de Frotas</h1>
                </Col>
                <Col md={1}>
                    <h5 style={{color: '#003366', marginTop: '1rem'}}>MENUS</h5>
                </Col>
                <Col md={11}>
                    <hr style={{
                        height: '0.2rem',
                        color: "#003366",
                        opacity: '1',
                        marginTop: '1.7rem'
                    }}></hr>
                </Col>
                <Col xs={{offset: 6}} md={{ offset: 10 }}>
                    <Button onClick={() => signOut()} variant="danger">
                        Sair da Conta
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={{  span:1, offset: 1}}>
                    <Link href="/cadastro">
                        <div style={{
                            width: "5rem",
                            height: "10rem",
                            borderStyle: "solid",
                            borderRadius: "1.5rem",
                            cursor: "pointer"
                        }}  /*className="justify-content-center"*/>
                            <FontAwesomeIcon icon={faAddressBook} style={{
                                fontSize: "3rem",
                                marginLeft: "1rem",
                                marginTop: "1rem"
                            }} />
                            <p style={{textAlign: "center"}}>Cadastro de clientes</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={4} md={1}>
                    <Link href="/clientes">
                        <div style={{
                            width: "5rem",
                            height: "10rem",
                            borderStyle: "solid",
                            borderRadius: "1.5rem",
                            cursor: "pointer"
                        }}  /*className="justify-content-center"*/>
                            <FontAwesomeIcon icon={faUser} style={{
                                fontSize: "3rem",
                                marginLeft: "1rem",
                                marginTop: "1rem"
                            }} />
                            <p style={{textAlign: "center"}}>Clientes</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={4} md={1}>
                    <Link href="/ordem-servico">
                        <div style={{
                            width: "5rem",
                            height: "10rem",
                            borderStyle: "solid",
                            borderRadius: "1.5rem",
                            cursor: "pointer"
                        }}  /*className="justify-content-center"*/>
                            <FontAwesomeIcon icon={faScrewdriver} style={{
                                fontSize: "3rem",
                                marginLeft: "1rem",
                                marginTop: "1rem"
                            }} />
                            <p style={{textAlign: "center"}}>Ordem de Serviço</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Menu