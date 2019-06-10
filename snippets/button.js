var snippetsList = window.snippetsList || [];

snippetsList.push({
    description: "Display a Button",
    jsxCode: 
`<Button title='A title' 
    onClick={someCallback}/>`,
    jsCode: "React.createElement(Button, { title: 'A title', onClick: someCallback })",
    execute: React.createElement(ReactComponents.Button, { 
        title: "Button",
        onClick: () => alert("Button was clicked")
    }),
    id: "button"
});