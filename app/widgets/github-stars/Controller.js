import { Controller } from "cx/ui";

const getRepo = () =>
	fetch(
"https://newsapi.org/v2/top-headlines?category=sports&apiKey=771457fbe3a34f638276dbf73acb337e"
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
