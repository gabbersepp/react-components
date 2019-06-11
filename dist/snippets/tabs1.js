"use strict";
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    return (
        //to_display
        React.createElement(ReactComponents.Tabs, null,
            React.createElement(ReactComponents.Tab, {
                    id: "first"
                },
                React.createElement(ReactComponents.TabHeader, null, "Test"),
                React.createElement(ReactComponents.TabContent, null,
                    React.createElement("div", null, "Insert any content here"))),
            React.createElement(ReactComponents.Tab, {
                    id: "second"
                },
                React.createElement(ReactComponents.TabHeader, null, "Test 2"),
                React.createElement(ReactComponents.TabContent, null,
                    React.createElement("div", null, "Insert another content here"))))
        //to_display_end
    );
};
snippetsList.push({
    description: "Build a tab control with as many tabs as you like. Maybe you have noticed that this examples are build using this tab control",
    jsCode: `
        React.createElement(ReactComponents.Tabs, null,
            React.createElement(ReactComponents.Tab, {
                    id: "first"
                },
                React.createElement(ReactComponents.TabHeader, null, "Test"),
                React.createElement(ReactComponents.TabContent, null,
                    React.createElement("div", null, "Insert any content here"))),
            React.createElement(ReactComponents.Tab, {
                    id: "second"
                },
                React.createElement(ReactComponents.TabHeader, null, "Test 2"),
                React.createElement(ReactComponents.TabContent, null,
                    React.createElement("div", null, "Insert another content here"))))
        `,
    tsxCode: `
        <ReactComponents.Tabs>
            <ReactComponents.Tab id="first">
                <ReactComponents.TabHeader>
                    Test
                </ReactComponents.TabHeader>
                <ReactComponents.TabContent>
                    <div>
                    Insert any content here
                    </div>
                </ReactComponents.TabContent>
            </ReactComponents.Tab>     
            <ReactComponents.Tab id="second">
                <ReactComponents.TabHeader>
                    Test 2
                </ReactComponents.TabHeader>
                <ReactComponents.TabContent>
                    <div>
                    Insert another content here
                    </div>
                </ReactComponents.TabContent>
            </ReactComponents.Tab>                       
        </ReactComponents.Tabs>
        `,
    execute: creator(),
    id: "tabs-props",
    displayLink: "Tabs declarative"
});