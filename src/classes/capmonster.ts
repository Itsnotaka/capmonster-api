import createTask from '../api/methods/createTask';
import getBalance from '../api/methods/getBalance';
import getTaskResult from '../api/methods/getTaskResult';

class CapMonster {
	clientKey: string;
	constructor(clientKey: string) {
		this.clientKey = clientKey;
	}

	async createTask(
		type:
		| 'FunCaptchaTask'
		| 'FunCaptchaTaskProxyless'
		| 'GeeTestTask'
		| 'GeeTestTaskProxyless'
		| 'HCaptchaTask'
		| 'HCaptchaTaskProxyless'
		| 'ImageToTextTask'
		| 'NoCaptchaTask'
		| 'NoCaptchaTaskProxyless'
		| 'RecaptchaV3TaskProxyless'
	) {
		return createTask({clientKey: this.clientKey, captchaType: type});
	}

	async getBalance() {
		return getBalance({clientKey: this.clientKey});
	}

	async getTaskResult(taskId: number) {
		return getTaskResult({clientKey: this.clientKey, taskId});
	}
}

export default CapMonster;
