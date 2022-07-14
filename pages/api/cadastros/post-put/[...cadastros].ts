// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client"
import dm from '../../../../DirectMongo'

type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const session = await getSession({ req });

  if (req.method === 'POST') {


    if (session) {

      delete req.body._id;

      await dm.postOne("cadastros", req.body);
      res.status(200).json({ msg: 'Cadastrado com sucesso' });

    } else {

      res.status(400).json({ msg: 'Não cadastrado' });

    }
  }

  if (req.method === 'PUT') {


    if (session) {

      await dm.putOne("cadastros", req.body);
      res.status(200).json({ msg: 'Alterado com sucesso' });

    } else {

      res.status(400).json({ msg: 'Não alterado' });

    }
  }


  //res.status(200).json({ msg: 'John Doe' })
}
