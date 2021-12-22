import createTask from "../api/methods/createTask";
import getBalance from "../api/methods/getBalance";
import getTaskResult from "../api/methods/getTaskResult";

module.exports = class CapMonster {
	clientKey: string;
	constructor(clientKey: string) {
		this.clientKey = clientKey;
	}

	async createTask(
		captchaType:
			| "ImageToTextTask"
			| "NoCaptchaTaskProxyless"
			| "NoCaptchaTask"
			| "RecaptchaV3TaskProxyless"
			| "FunCaptchaTask"
			| "FunCaptchaTaskProxyless"
			| "HCaptchaTask"
			| "HCaptchaTaskProxyless"
			| "GeeTestTask"
			| "GeeTestTaskProxyless"
	) {
		return await createTask({
	clientKey: this.clientKey, captchaType: captchaType});
	}
};
