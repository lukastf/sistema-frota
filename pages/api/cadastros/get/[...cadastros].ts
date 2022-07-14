// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dm from '../../../../DirectMongo'

type Data = {
  pages: any,
  cadastros: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {

    let itensPage = parseInt(req.query.cadastros[0]);
    let page = parseInt(req.query.cadastros[1]);

    let params:any = {
      itensPage: itensPage,
      page: page
    };

    if (typeof req.query.cadastros[2] != "undefined") {

      let isKey = true;
      let key = "";

      for (let i = 2; i < req.query.cadastros.length; i++) {

        if (isKey) {
          key = req.query.cadastros[i];
        } else {
          params[key] = req.query.cadastros[i];
          if(params[key] == 'true') params[key] = true;
          if(params[key] == 'false') params[key] = false;
        }

        isKey = !isKey;
      }
    }

    const pages = await dm.getManyPagination("cadastros", params);
    if (!pages) { res.status(200).json({ pages: [], cadastros: [] }); return; }

    if (typeof req.query.cadastros[1] == "undefined") params.pageId = pages[0];
    else params.pageId = pages[page];
    
    params.itensPage = itensPage;

    const cadastros = await dm.getMany("cadastros", params);

    res.status(200).json({ pages: pages, cadastros: cadastros });
    return;
  }
}
