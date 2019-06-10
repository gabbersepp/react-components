var snippetsList = window.snippetsList || [];

var btn1 = React.createElement(ReactComponents.Button, {
    title: "Show Toaster (Success)",
    onClick: () => ReactComponents.toaster.success("Success message")
});

var btn2 = React.createElement(ReactComponents.Button, {
    title: "Show Toaster (Error)",
    onClick: () => ReactComponents.toaster.error("Error message")
});

var div = React.createElement("div", {
    children: [btn1, btn2, React.createElement(ReactComponents.Toaster)]
});

var tsCode = `React.createElement(ReactComponents.Toaster) 
....
ReactComponents.toaster.success("Success message");
ReactComponents.toaster.error("Error message");
`

snippetsList.push({
    description: "Display a small toaster message",
    jsxCode: `<ReactComponents.Toaster/>`,
    tsCode: tsCode,
    execute: div,
    id: "toaster",
    displayLink: "Toaster"
});