import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Welcome! Next.js Project👋' }));
  }
}
