import {
    IInsightsWidgetConfig,
    InsightsWidget,
    IBaseStyleConfig,
    IWidgetStyle
} from '@azure/video-indexer-widgets';

// Change two colors of the base style config
const insightsStyleConfig : IBaseStyleConfig = {
    primary: 'yellow',
    dividers: 'rgba(134,28,173,1)'
};

// Select dark mode theme and send new style
const style: IWidgetStyle = {
    customStyle: insightsStyleConfig,
    theme: 'Dark'
};
const config: IVIInsightsWidgetConfig = {
    accountId: '<ACCESS-TOKEN>',
    videoId: '<VIDEO-ID>',
    accessToken: '<ACCESS-TOKEN>',
    style: style
};

this.insightsWidget = new InsightsWidget(
    'container',
    {
        height: 780,
        width: 580
    },
    config
);

this.insightsWidget.render();