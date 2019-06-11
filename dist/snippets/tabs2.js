"use strict";
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    //to_display
    const tabs = [{
            active: true,
            allowClose: true,
            element: (React.createElement("div", null, "Tab can be marked as closeable, too")),
            title: "Ony string allowed",
            enabled: true,
            id: "1"
        },
        {
            active: false,
            allowClose: false,
            element: (React.createElement("div", null, "Test")),
            title: "Not closeable",
            enabled: true,
            id: "2"
        }
    ];
    return (React.createElement(ReactComponents.Tabs, {
        tabs: tabs
    }));
    //to_display_end
};
snippetsList.push({
    description: "If you can not use the declarative definition of tabs, you can also use props to init the tab control",
    jsCode: `
    const tabs = [{
            active: true,
            allowClose: true,
            element: (React.createElement("div", null, "Tab can be marked as closeable, too")),
            title: "Ony string allowed",
            enabled: true,
            id: "1"
        },
        {
            active: false,
            allowClose: false,
            element: (React.createElement("div", null, "Test")),
            title: "Not closeable",
            enabled: true,
            id: "2"
        }
    ];
    return (React.createElement(ReactComponents.Tabs, {
        tabs: tabs
    }));
    `,
    tsxCode: `
    const tabs: ReactComponents.ITab[] = [
        {
            active: true, // select first tab,
            allowClose: true,
            element: (<div>Tab can be marked as closeable, too</div>),
            title: "Ony string allowed",
            enabled: true,
            id: "1"
        },
        {
            active: false,
            allowClose: false,
            element: (<div>Test</div>),
            title: "Not closeable",
            enabled: true,
            id: "2"
        }        
    ];

    return (
        <ReactComponents.Tabs tabs={tabs}/>
    );    

    `,
    execute: creator(),
    id: "tabs-2",
    displayLink: "Tabs with props"
});