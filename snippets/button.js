var snippetsList = window.snippetsList || [];

snippetsList.push({
    description: "Display a Button",
    jsxCode: 
`<Button title='A title' 
    onClick={someCallback}/>`,
    tsCode: 
`
const button: ReactComponents.IButtonProps = { 
    title: 'A title', 
    onClick: someCallback
};
React.createElement(ReactComponents.Button, button);
`,
    execute: React.createElement(ReactComponents.Button, { 
        title: "Button",
        onClick: () => alert("Button was clicked")
    }),
    id: "button",
    displayLink: "Button"
});