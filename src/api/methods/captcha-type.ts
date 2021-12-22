/* eslint-disable @typescript-eslint/naming-convention */
export type ImageToTextTask = {
	type: 'ImageToTextTask';
	captchaBody: string;
	CapMonsterModule?: string;
};

export type NoCaptchaTaskProxyless = {
	type: 'NoCaptchaTaskProxyless';
	websiteURL: string;
	websiteKey: string;
	recaptchaDataSValue?: string;
	userAgent?: string;
	cookies?: string;
};
export type NoCaptchaTask = {
	type: 'NoCaptchaTask';
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
export type RecaptchaV3TaskProxyless = {
	type: 'RecaptchaV3TaskProxyless';
	websiteURL: string;
	websiteKey: string;
	minScore: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;
	pageAction?: string;
};

export type FunCaptchaTask = {
	type: 'FunCaptchaTask';
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
export type FunCaptchaTaskProxyless = {
	type: 'FunCaptchaTaskProxyless';
	websiteURL: string;
	funcaptchaApiJSSubdomain?: string;
	websiteKey: number;
	data?: string;
	userAgent?: string;
	cookies?: string;
};
export type HCaptchaTask = {
	type: 'HCaptchaTask';
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
export type HCaptchaTaskProxyless = {
	type: 'HCaptchaTaskProxyless';
	websiteURL: string;
	websiteKey: string;
	isInvisible?: string;
	data?: boolean;
	userAgent?: string;
	cookies?: string;
};
export type GeeTestTask = {
	type: 'GeeTestTask';
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
export type GeeTestTaskProxyless = {
	type: 'GeeTestTaskProxyless';
	websiteURL: string;
	gt: string;
	challenge: string;
	geetestApiServerSubdomain?: string;
	geetestGetLib?: string;
	userAgent?: string;
};
