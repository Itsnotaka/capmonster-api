import got from "got";
import { errorCode } from "../../utilis/constant";

interface CreateTask extends CaptchaType {
	clientKey: string;
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
		| "GeeTestTaskProxyless";
}
//define conditional types when a captcha type is selected
type CaptchaType = {
	ImageToTextTask: {
		captchaBody: string;
		CapMonsterModule?: string;
	};
	NoCaptchaTaskProxyless: {
		websiteURL: string;
		websiteKey: string;
		recaptchaDataSValue?: string;
		userAgent?: string;
		cookies?: string;
	};
	NoCaptchaTask: {
		websiteURL: string;
		websiteKey: string;
		recaptchaDataSValue?: string;
		proxyType: string;
		proxyAddress: string;
		proxyPort: number;
		proxyLogin?: string;
		proxyPassword?: string;
		userAgent?: string;
		cookies?: string;
	};
	RecaptchaV3TaskProxyless: {
		websiteURL: string;
		websiteKey: string;
		minScore: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;
		pageAction?: string;
	};
	FunCaptchaTask: {
		websiteURL: string;
		funcaptchaApiJSSubdomain?: string;
		websiteKey: number;
		data?: string;
		proxyType: string;
		proxyAddress: string;
		proxyPort: number;
		proxyLogin?: string;
		proxyPassword?: string;
		userAgent?: string;
		cookies?: string;
	};
	FunCaptchaTaskProxyless: {
		websiteURL: string;
		funcaptchaApiJSSubdomain?: string;
		websiteKey: number;
		data?: string;
		userAgent?: string;
		cookies?: string;
	};
	HCaptchaTask: {
		websiteURL: string;
		websiteKey: string;
		isInvisible?: string;
		data?: boolean;
		proxyType: string;
		proxyAddress: string;
		proxyPort: number;
		proxyLogin?: string;
		proxyPassword?: string;
		userAgent?: string;
		cookies?: string;
	};
	HCaptchaTaskProxyless: {
		websiteURL: string;
		websiteKey: string;
		isInvisible?: string;
		data?: boolean;
		userAgent?: string;
		cookies?: string;
	};
	GeeTestTask: {
		websiteURL: string;
		gt: string;
		challenge: string;
		geetestApiServerSubdomain?: string;
		geetestGetLib?: string;
		proxyType: string;
		proxyAddress: string;
		proxyPort: number;
		proxyLogin?: string;
		proxyPassword?: string;
		userAgent?: string;
	};
	GeeTestTaskProxyless: {
		websiteURL: string;
		gt: string;
		challenge: string;
		geetestApiServerSubdomain?: string;
		geetestGetLib?: string;
		userAgent?: string;
	};
};

const createTask = async (query: CreateTask) => {
	try {
		let response = await got.post(
			"https://api.capmonster.cloud/createTask",
			{
				json: {
					clientKey: query.clientKey,
					task: {
						type: query.captchaType,
						...query.ImageToTextTask,
						...query.NoCaptchaTaskProxyless,
						...query.NoCaptchaTask,
						...query.RecaptchaV3TaskProxyless,
						...query.FunCaptchaTask,
						...query.FunCaptchaTaskProxyless,
						...query.HCaptchaTask,
						...query.HCaptchaTaskProxyless,
						...query.GeeTestTask,
						...query.GeeTestTaskProxyless,
					},
				},
			}
		);
		if (response.statusCode == 200) {
			let data: { errorId: number; errorCode: string; taskId: number } =
				JSON.parse(response.body);
			if (data.errorId == 0) {
				return data.taskId;
			} else if (data.errorId == 1) {
				throw new Error(errorCode[data.errorCode]);
			}
		}
	} catch(err) {
        throw new Error("Something went wrong" + err);
    }
};

export default createTask;
