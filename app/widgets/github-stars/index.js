import Controller from "./Controller";
import {enableCultureSensitiveFormatting} from "cx/ui";
import {ContentResolver} from "cx/ui";

enableCultureSensitiveFormatting();

export default ({repo}) => (
    <cx>
        <div class="kpi-header" ws controller={{type: Controller, repo}}>
            Number of sports articles
           
        </div>
        <div class="kpi-main">
            <div class="kpi-value" text:tpl="{$data.stars}"/>
        </div>
        <div class="kpi-footer">
            <a
                href:tpl="https://timesofindia.indiatimes.com/sports"
                target="_blank"
                rel="noopener"
            >
                Open Sports News
            </a>
        </div>

        <ContentResolver
            visible:bind="$data.settings.visible"
            onResolve={() => System.import("../github-issues/settings").then(x => x.default)}
        />
    </cx>
);
