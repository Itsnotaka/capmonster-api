import got from "got";
import { errorCode } from "../../utilis/constant";
const getTaskResult = async (query: { clientKey: string; taskId: number }) => {
	try {
		let response = await got.post(
			"https://api.capmonster.cloud/getTaskResult",
			{
				json: {
					clientKey: query.clientKey,
					taskId: query.taskId,
				},
			}
		);
		if (response.statusCode == 200) {
			let data: {
				errorId: 0 | 1;
				errorCode: string;
				status: string;
				solution: {};
			} = JSON.parse(response.body);
			if (data.errorId == 0 && data.status == "ready") {
				return data.solution;
			} else if (data.errorId == 0 && data.status == "processing") {
				await getTaskResult(query);
			} else if (data.errorId == 1) {
				throw new Error(errorCode[data.errorCode]);
			}
		}
	} catch (err) {
        throw new Error("Something went wrong" + err);
    }
};

export default getTaskResult;
