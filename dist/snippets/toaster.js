"use strict";
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    return (
        //to_display
        React.createElement("div", null,
            React.createElement(ReactComponents.Toaster, null),
            React.createElement(ReactComponents.Button, {
                title: "Show Toaster (Success)",
                onClick: () => ReactComponents.toaster.success("Success message")
            }),
            React.createElement(ReactComponents.Button, {
                title: "Show Toaster (Error)",
                onClick: () => ReactComponents.toaster.error("Error message")
            }))
        //to_display_end
    );
};
snippetsList.push({
    description: "Display a small toaster message",
    jsCode: `
        React.createElement("div", null,
            React.createElement(ReactComponents.Toaster, null),
            React.createElement(ReactComponents.Button, {
                title: "Show Toaster (Success)",
                onClick: () => ReactComponents.toaster.success("Success message")
            }),
            React.createElement(ReactComponents.Button, {
                title: "Show Toaster (Error)",
                onClick: () => ReactComponents.toaster.error("Error message")
            }))
        `,
    tsxCode: `
        <div>
            <ReactComponents.Toaster/>
            <ReactComponents.Button title="Show Toaster (Success)" onClick={() => ReactComponents.toaster.success("Success message")}/>
            <ReactComponents.Button title="Show Toaster (Error)" onClick={() => ReactComponents.toaster.error("Error message")}/>
        </div>
        `,
    execute: creator(),
    id: "toaster",
    displayLink: "Toaster"
});