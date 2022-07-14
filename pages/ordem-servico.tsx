import type { NextPage } from 'next'
import OrdemServico from '../components/OrdemServico'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import {Session} from 'next-auth'
import { useState } from 'react'
import ListarCadastros from '../components/ListarCadastros'

const C: NextPage = () => {

    const [session, setSession] = useState<Session | null>();

    const getSessionFunction = async () => {
      const s = await getSession();
      setSession(s);
    }

    const [didMount, setDidMount] = useState(false);

    if (!didMount) {

      setDidMount(true);
      getSessionFunction();
    }
  
    return (
    <>
      {!session && <>
        <h3>Você não tem acesso a essa página</h3>
      </>}
      {session && <>
        <OrdemServico />
        
      </>}
    </>
    )
  }
  
  export default C