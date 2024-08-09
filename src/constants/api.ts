class Url {
	base = "http://localhost:3000";
	login = `${this.base}/user/auth/login`;
	refreshToken = `${this.base}/user/auth/refresh-token`;
}
export const api = new Url();
