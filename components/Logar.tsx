import type { NextPage } from 'next'
import { signIn } from 'next-auth/client'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Logar: NextPage = () => {

  const [didMount, setDidMount] = useState(false);
  const [loginError, setLoginError] = useState(<p style={{color: 'red'}}></p>);

  if (!didMount) {

    if (typeof window != "undefined") {

      setDidMount(true);

      let url_string = window.location.href
      let url = new URL(url_string);
      let loginError = url.searchParams.get("loginError");
      
      if (loginError) {
        setLoginError(<p style={{color: 'red'}}> 
        Erro ao efetuar o login verifique se os campos estão corretos
        </p>);
      }
    }
  }

  const entrar = async (event:any) => {

    event.preventDefault()

    signIn('credentials', {
      username: event.target.usuario.value,
      password: event.target.senha.value
    })
  }

    return(
    <Container fluid>
      <Row className="justify-content-center" style={{backgroundColor: '#eee'}}>
        <Col xs={12} md={4}>
          <Form onSubmit={entrar} 
          style={{
            marginTop: '10rem', 
            padding: '1rem',
            borderStyle: 'solid',
            borderColor : '#003366',
            borderRadius: '0.7rem',
            backgroundColor: 'white'
          }}>
    
            <h1 style={{
              textAlign:'center',
              color: '#003366',
              textDecoration: 'underline'
            }}>
              LOGIN
            </h1>
            <Form.Group className="mb-3" controlId="usuario">
              <Form.Label>Usuário</Form.Label>
              <Form.Control size="lg" type="text" /*placeholder="Usuário"*/ />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control size="lg" type="password" /*placeholder="Senha"*/ />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Mantenha-me logado" />
            </Form.Group>

            {loginError}

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" style={{backgroundColor: "#003366"}}>
                Logar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    )
}
  
export default Logar