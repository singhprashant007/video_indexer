import {
    IInsightsWidgetConfig,
    InsightsWidget,
    IBaseStyleConfig,
    IWidgetStyle
} from '@azure/video-indexer-widgets';

import '@azure/video-indexer-widgets/dist/assets/custom-insights-config.schema.json';


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
const config: IInsightsWidgetConfig = {
    accountId: '22d3390d-ed40-43a9-ad75-dc3d5c78eede',
    videoId: '148bc3494d',
    accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjoiMi4wLjAuMCIsIktleVZlcnNpb24iOiIzOWRkZTA2ZmY3MjY0MzM3ODkxZTY4ZThjY2U2YjlkOCIsIkFjY291bnRJZCI6IjIyZDMzOTBkLWVkNDAtNDNhOS1hZDc1LWRjM2Q1Yzc4ZWVkZSIsIkFjY291bnRUeXBlIjoiVHJpYWwiLCJQZXJtaXNzaW9uIjoiUmVhZGVyIiwiRXh0ZXJuYWxVc2VySWQiOiI4RDJCQTU2RkU5N0E0NjBCODI2NzlDQzZFODg4MEMwNCIsIlVzZXJUeXBlIjoiTWljcm9zb2Z0Q29ycEFhZCIsIklzc3VlckxvY2F0aW9uIjoiVHJpYWwiLCJuYmYiOjE3MTAxNTU1ODMsImV4cCI6MTcxMDE1OTQ4MywiaXNzIjoiaHR0cHM6Ly9hcGkudmlkZW9pbmRleGVyLmFpLyIsImF1ZCI6Imh0dHBzOi8vYXBpLnZpZGVvaW5kZXhlci5haS8ifQ.ZHQsLVxO8BrrpVg_pPAZ7zt1PaQlCxuG_xjdXWYJ6igDFSyy4tUfwBX8vnvq5vbP80Tqc4fmetw2tA8jz8HudTy_N11vmI5AkCRvlimfs_AvNddbBGXPDZoKRqVVw5I6fofUbrkW8iC64LhAtpsUl4QCjk7E2cd-1T0Iiowui57t3rk17O0iMRWWJV7aEuljMD9mKya15c3bZGCK-Qz3rhw4fTzx18q5wyProx_EPeuCk57ZTeNEOXIy5kEE1M0sBRF4b6JZHOtgwtEhDPmO4pbjX2pvn_DP5oC8gFAJYP-1SomeQhkoCDTAXQhVQDSde0w8Cw9lG2FqRYMoljJzXg',
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