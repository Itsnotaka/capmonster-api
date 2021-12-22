import got from 'got';
import {errorCode} from '../../utilis/constant';
const getBalance = async (query: {clientKey: string}) => {
	try {
		const response = await got.post('https://api.capmonster.cloud/getBalance', {
			json: {
				clientKey: query.clientKey,
			},
		});
		if (response.statusCode === 200) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const data: {
				errorId: 0 | 1;
				errorCode: string;
				balance: number;
			} = JSON.parse(response.body);
			if (data.errorId === 0) {
				return data.balance;
			}

			if (data.errorId === 1) {
				throw new Error(errorCode[data.errorCode]);
			}
		}
	// eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
	} catch (err) {
		throw new Error(err);
	}
};

export default getBalance;
