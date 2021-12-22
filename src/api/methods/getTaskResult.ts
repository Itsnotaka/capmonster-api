import got from 'got';
import {errorCode} from '../../utilis/constant';
const getTaskResult = async (query: {clientKey: string; taskId: number}) => {
	try {
		const response = await got.post('https://api.capmonster.cloud/getTaskResult', {
			json: {
				clientKey: query.clientKey,
				taskId: query.taskId,
			},
		});
		if (response.statusCode === 200) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const data: {
				errorId: 0 | 1;
				errorCode: string;
				status: string;
				solution: Record<string, unknown>;
			} = JSON.parse(response.body);
			if (data.errorId === 0 && data.status === 'ready') {
				return data.solution;
			}

			if (data.errorId === 0 && data.status === 'processing') {
				await getTaskResult(query);
			} else if (data.errorId === 1) {
				throw new Error(errorCode[data.errorCode]);
			}
		}
	// eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
	} catch (err) {
		throw new Error(err);
	}
};

export default getTaskResult;
