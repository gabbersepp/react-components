var snippetsList = window.snippetsList || [];

snippetsList.push({
    description: "Display a Label",
    jsxCode: `<Label value='Label Value'/>`,
    jsCode: "React.createElement(Label, { value='Label value' })",
    execute: React.createElement(ReactComponents.Label, { 
        value: "Label value"
    }),
    id: "label"
});