import got from 'got';
import {errorCode} from '../../utilis/constant';
import {
	FunCaptchaTask,
	FunCaptchaTaskProxyless,
	GeeTestTask,
	GeeTestTaskProxyless,
	HCaptchaTask,
	HCaptchaTaskProxyless,
	ImageToTextTask,
	NoCaptchaTask,
	NoCaptchaTaskProxyless,
	RecaptchaV3TaskProxyless,
} from './captcha-type';

type CaptchaType =
	| ImageToTextTask
	| NoCaptchaTaskProxyless
	| NoCaptchaTask
	| RecaptchaV3TaskProxyless
	| FunCaptchaTask
	| FunCaptchaTaskProxyless
	| HCaptchaTask
	| HCaptchaTaskProxyless
	| GeeTestTask
	| GeeTestTaskProxyless;

const createTask = async (query: {clientKey: string; captchaType: CaptchaType}) => {
	const response = await got.post('https://api.capmonster.cloud/createTask', {
		json: {
			clientKey: query.clientKey,
			task: {
				...[query.captchaType],
			},
		},
	});
	if (response.statusCode === 200) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const data: {errorId: number; errorCode: string; taskId: number} = JSON.parse(response.body);
		if (data.errorId === 0) {
			return data.taskId;
		}

		if (data.errorId === 1) {
			throw new Error(errorCode[data.errorCode]);
		}
	}
};

export default createTask;
