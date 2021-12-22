export const errorCode: { [string: string]: string } = {
	ERROR_KEY_DOES_NOT_EXIST: "Client key does not exist",
	ERROR_ZERO_CAPTCHA_FILESIZE:
		"The size of the captcha you are uploading is less than 100 byte",
	ERROR_TOO_BIG_CAPTCHA_FILESIZE:
		"The size of the captcha you are uploading is more than 50 MB",
	ERROR_ZERO_BALANCE: "Account has zero balance",
	ERROR_IP_NOT_ALLOWED:
		"Request with current account key is not allowed from your IP",
	ERROR_CAPTCHA_UNSOLVABLE:
		"This type of captchas is not supported by the service or the image does not contain an answer, perhaps it is too noisy. It could also mean that the image is corrupted or was incorrectly rendered.",
	ERROR_NO_SUCH_CAPCHA_ID:
		"The captcha that you are requesting was not found. Make sure you are requesting a status update only within 5 minutes of uploading.",
	WRONG_CAPTCHA_ID:
		"The captcha that you are requesting was not found. Make sure you are requesting a status update only within 5 minutes of uploading.",
	CAPTCHA_NOT_READY: "The captcha has not yet been solved",
	ERROR_IP_BANNED:
		"You have exceeded the limit of requests with the wrong api key, check the correctness of your api key in the control panel and after some time, try again",
	ERROR_NO_SUCH_METHOD: "This method is not supported or empty",
	ERROR_TOO_MUCH_REQUESTS:
		"You have exceeded the limit of requests to receive an answer for one task. Try to request the result of the task no more than 1 time in 2 seconds.",
	ERROR_DOMAIN_NOT_ALLOWED:
		"Captcha from some domains cannot be solved in CapMonster Cloud. If you try to create a task for such a domain, this error will return.",
};
