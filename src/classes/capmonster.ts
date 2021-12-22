import createTask from "../api/methods/createTask";
import getBalance from "../api/methods/getBalance";
import getTaskResult from "../api/methods/getTaskResult";

class CapMonster {
	clientKey: string;
	constructor(clientKey: string) {
		this.clientKey = clientKey;
	}

	async getBalance() {
		return await getBalance({ clientKey: this.clientKey });
	}

	async getTaskResult(taskId: number) {
		return await getTaskResult({ clientKey: this.clientKey, taskId: taskId });
	}
		
};

export default CapMonster
