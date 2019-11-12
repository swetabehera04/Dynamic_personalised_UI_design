import { Controller } from "cx/ui";

const getQuestions = repo =>
	fetch(
		"https://newsapi.org/v2/top-headlines?category=general&country=in&country=us&apiKey=771457fbe3a34f638276dbf73acb337e"
	)
		.then(x => {
			if (!x.ok) throw new Error("Failed to fetch articles");
			return x;
		})
		.then(x => x.json())
		.then(x => {
			return x.articles;
		});

export default class extends Controller {
	onInit() {
		getQuestions().then(p => {
			this.store.set("$data.questions", p);
		});
	}
}
