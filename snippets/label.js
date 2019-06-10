var snippetsList = window.snippetsList || [];

snippetsList.push({
    description: "Display a Label",
    jsxCode: `<ReactComponents.Label value='Label Value'/>`,
    tsCode: 
`
const label: ReactComponents.ILabelProps = { value: "Label value" };
React.createElement(ReactComponents.Label, label);
`,
    execute: React.createElement(ReactComponents.Label, { 
        value: "Label value"
    }),
    id: "label",
    displayLink: "Label"
});