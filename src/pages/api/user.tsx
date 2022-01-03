import { Contexts } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Contexts.User>) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      id: "1",
      name: 'Jesse Cash',
      image: "images/jesse-cash.png"
    }));
  }
}
