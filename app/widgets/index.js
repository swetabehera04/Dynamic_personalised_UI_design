const widgets = {};
const props = {};

export function registerWidget(type, factory, defaultProps) {
	widgets[type] = factory;
	props[type] = defaultProps;
}

export function createWidget(type, props = {}) {
	let factory = widgets[type];

	if (!factory) factory = removedWidgetFactory;

	return factory(props);
}

export function getWidgetTypes() {
	return Object.keys(widgets);
}

export function getWidgetTypeProps() {
	return Object.keys(widgets).map(type => ({
		type,
		...props[type]
	}));
}

const removedWidgetFactory = props => (
	<cx>
		<div>
			This widget type has been removed. Please remove it from the dashboard.
		</div>
	</cx>
);

registerWidget(
    "btc-price-chart-bchain-info",
    props => System.import("./btc-price-chart-bchain-info").then(x => x.default(props)),
    {
        description: "Bitcoin (BTC) price from blockhain.info",
        box: {
            width: 8,
            height: 8,
            class: "kpi"
        }
    }
);

/*
registerWidget(
	"text",
	props => System.import("./text").then(x => x.default(props)),
	{
		description: "Text label",
		box: {
			width: 4,
			height: 2,
			class: "text"
		}
	}
);
*/

registerWidget(
	"github-stars",
	props => System.import("./github-stars").then(x => x.default(props)),
	{
		description: "Number of sports news",
		box: {
			width: 8,
			height: 8,
			class: "kpi"
		}
	}
);

registerWidget(
	"time",
	props => System.import("./time").then(x => x.default(props)),
	{
		description: "Current date and time",
		box: {
			width: 12,
			height: 8,
			class: "kpi"
		}
	}
);
/*registerWidget(
	"ask",
	props => System.import("./ask").then(x => x.default(props)),
	{
		description: "ask info and display",
		box: {
			width: 12,
			height: 8,
			class: "kpi"
		}
	}
);*/
registerWidget(
    "no_of",
    props => System.import("./no_of").then(x => x.default(props)),
    {
        description: "no of articles about climate",
        box: {
            width: 8,
            height: 8,
            class: "kpi"
        }
    }
);

registerWidget(
	"btc-price-bchain-info",
	props => System.import("./btc-price-bchain-info").then(x => x.default(props)),
	{
		description: "number of articles",
		box: {
			width: 8,
			height: 8,
			class: "kpi"
		}
	}
);

/*
registerWidget(
    "chart",
    props => System.import("./chart").then(x => x.default(props)),
    {
        description: "Pie  chart etc",
        box: {
            width: 8,
            height: 8,
            class: "kpi"
        }
    }
);*/

/*registerWidget(
	"btc-price-coindesk",
	props => System.import("./btc-price-coindesk").then(x => x.default(props)),
	{
		description: "Bitcoin (BTC) price from CoinDesk",
		box: {
			width: 8,
			height: 8,
			class: "kpi"
		}
	}
);
*/
registerWidget(
	"dollar-to-euro",
	props => System.import("./dollar-to-euro").then(x => x.default(props)),
	{
		description: "Conversion dollar to inr",
		box: {
			width: 16,
			height: 8,
			class: "kpi"
		}
	}
);

registerWidget(
	"news",
	props => System.import("./news").then(x => x.default(props)),
	{
		description: " technology News",
		box: {
			width: 20,
			height: 12,
			class: "kpi"
		}
	}
);

registerWidget(
	"github-issues",
	props => System.import("./github-issues").then(x => x.default(props)),
	{
		description: "general news headlines",
		box: {
			width: 20,
			height: 12,
			class: "kpi"
		}
	}
);

registerWidget(
	"stackoverflow-questions",
	props =>
		System.import("./stackoverflow-questions").then(x => x.default(props)),
	{
		description: "business news",
		box: {
			width: 20,
			height: 12,
			class: "kpi"
		}
	}
);

registerWidget(
	"trend",
	props =>
		System.import("./trend").then(x => x.default(props)),
	{
		description: "trending news about India top headlines",
		box: {
			width: 20,
			height: 12,
			class: "kpi"
		}
	}
);
