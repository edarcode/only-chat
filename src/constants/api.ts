class Url {
	base = "http://localhost:3000";
	login = `${this.base}/user/auth/login`;
	refreshToken = `${this.base}/user/auth/refresh-token`;
	search = `${this.base}/user/client/search`;
}
export const api = new Url();
