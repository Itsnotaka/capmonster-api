import got from "got";
import { errorCode } from "../../utilis/constant";
const getBalance = async (query: { clientKey: string }) => {
	try {
		let response = await got.post(
			"https://api.capmonster.cloud/getBalance",
			{
				json: {
					clientKey: query.clientKey,
				},
			}
		);
		if (response.statusCode == 200) {
			let data: {
				errorId: 0 | 1;
				errorCode: string;
				balance: number;
			} = JSON.parse(response.body);
			if (data.errorId == 0) {
				return data.balance;
			} else if (data.errorId == 1) {
				throw new Error(errorCode[data.errorCode]);
			}
		}
	} catch (err) {
        throw new Error("Something went wrong" + err);
    }
};

export default getBalance;
