class Url {
	base = "http://localhost:3000";
	login = `${this.base}/auth/login`;
	refreshToken = `${this.base}/auth/refresh-token`;
	search = `${this.base}/users/search-user`;
	follow = `${this.base}/follows/follow-to`;
	getAccount = `${this.base}/users/get-account`;
}
export const api = new Url();
