import { Controller } from "cx/ui";

const getRepo = () =>
	fetch(
"https://newsapi.org/v2/top-headlines?category=sports&apiKey=c03cf67d0e414ff3a578badda1b368cf"
		)
		.then(x => {
			if (!x.ok) throw new Error("Failed to fetch repo data from GitHub.");
			return x;
		})
		.then(x => x.json())
		.then(x => {
			return x["totalResults"];
		});

export default class extends Controller {
	onInit() {
		this.store.set("$data.repo", this.repo);
		getRepo().then(p => {
			this.store.set("$data.stars", p);
		});
	}
}
