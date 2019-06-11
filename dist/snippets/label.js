"use strict";
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    return (
        //to_display
        React.createElement(ReactComponents.Label, {
            value: "Label value"
        })
        //to_display_end
    );
};
snippetsList.push({
    description: "Display a Label",
    jsCode: `
        React.createElement(ReactComponents.Label, {
            value: "Label value"
        })
        `,
    tsxCode: `
        <ReactComponents.Label value="Label value"/>
        `,
    execute: creator(),
    id: "label",
    displayLink: "Label"
});