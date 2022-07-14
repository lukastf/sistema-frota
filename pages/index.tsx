import type { NextPage } from 'next'

/*import { signIn } from 'next-auth/client'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'*/

import Logar from '../components/Logar'
import Menu from '../components/Menu'

import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import { useState } from 'react'

import { Session } from 'next-auth'
import ListarCadastros from '../components/ListarCadastros'

const Home: NextPage = () => {

  const [session, setSession] = useState<Session | null>();

  const getSessionFunction = async () => {
    const s = await getSession();
    setSession(s);
    /* ... */
  }

  //const [ session, loading ] = useSession();
  //const session = getSession();

  const [didMount, setDidMount] = useState(false);

  if (!didMount) {

    setDidMount(true);
    getSessionFunction();
  }

  return (
  <>
    {!session && <>
      <Logar />
    </>}
    {session && <>
      <Menu />
    </>}
  </>
  )
}

export default Home
