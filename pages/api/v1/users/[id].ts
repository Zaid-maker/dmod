import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
	const {
		query: { id },
		body,
		headers,
		method,
	} = req

	switch (method) {
		case 'GET':
			res.status(200).json({ id })
			break;

		case 'POST':
			// Create/Update data in database
			break;

		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}