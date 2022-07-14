
import type { NextPage } from 'next'
import Link from 'next/link'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Clientes: NextPage = () => {

    return(
        <>
        <Container fluid>
            <Row /*className="justify-content-center"*/>
                <Col xs={12} style={{backgroundColor: '#d7d7d7'}}>
                    <h1 style={{color: '#003366'}}>Sistema de Frotas</h1>
                </Col>
                <Col md={1}>
                    <h5 style={{color: '#003366', marginTop: '1rem'}}>CLIENTES</h5>
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
                    <Link href="/">
                        <Button style={{backgroundColor: '#003366'}} 
                        className="mx-3"
                        variant="primary" size="sm"
                        >
                            Voltar
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Clientes