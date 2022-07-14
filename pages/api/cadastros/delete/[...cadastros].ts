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

  if (req.method === 'DELETE') {

    if (session) {

      await dm.deleteOne("cadastros", {_id: req.query.cadastros[0]});
      res.status(200).json({ msg: 'Deletado com sucesso' });

    } else {

      res.status(400).json({ msg: 'Não deletado' });

    }
  }


  //res.status(200).json({ msg: 'John Doe' })
}
