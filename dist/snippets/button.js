"use strict";
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    return (
        //to_display
        React.createElement(ReactComponents.Button, {
            title: "Button",
            onClick: () => alert("Button was clicked")
        })
        //to_display_end
    );
};
snippetsList.push({
    description: "Display a Button",
    jsCode: `
        React.createElement(ReactComponents.Button, {
            title: "Button",
            onClick: () => alert("Button was clicked")
        })
        `,
    tsxCode: `
        <ReactComponents.Button title="Button" onClick={() => alert("Button was clicked")}/>
        `,
    execute: creator(),
    id: "button",
    displayLink: "Button"
});