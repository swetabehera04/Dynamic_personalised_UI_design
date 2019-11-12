import { Rescope } from "cx/widgets";

import Controller from "./Controller";
import { enableCultureSensitiveFormatting } from "cx/ui";

enableCultureSensitiveFormatting();

const defaultProps = {};

export default (props = defaultProps) => (
	<cx>
		<Rescope bind="$data">
			<div class="kpi-header" controller={Controller}>
				USD To INR
			</div>
			<div class="kpi-main">
				<div class="kpi-value" text:tpl="$1 = Rs {dollarToEuro}" />
			</div>
			<div class="kpi-footer">
				<a href="https://www.google.com/search?q=usd+to+inr&oq=usd+to+inr&aqs=chrome..69i57j0l5.3431j1j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener">
					Check!!
				</a>
			</div>
		</Rescope>
	</cx>
);
