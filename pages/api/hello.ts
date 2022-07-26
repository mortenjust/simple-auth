import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { AuthOptions } from "./auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await unstable_getServerSession(req, res, AuthOptions)

  if(session) { 
    res.json({ status: "Authorized"})
  } else { 
    res.json({ status: "Not authorized"})
  }

  res.end()

}
