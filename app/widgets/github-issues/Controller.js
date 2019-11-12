import { Controller } from "cx/ui";

const getQuestions = repo =>
	fetch(
		"https://newsapi.org/v2/top-headlines?category=general&country=in&country=us&apiKey=c03cf67d0e414ff3a578badda1b368cf"
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
