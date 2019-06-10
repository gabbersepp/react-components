// http://infoheap.com/online-react-jsx-to-javascript/

var render = (elementId, reactElementFunction, props) => {
    const e = document.getElementById(elementId);
    const reactElement = React.createElement(reactElementFunction, props);
    ReactDOM.render(reactElement, e);
}

var renderTabContainerForSnippet = (snippet) => {
    render(snippet.id,
        ReactComponents.Tabs,
        { 
            tabs: [
                {
                    title: snippet.displayLink, 
                    active: true, 
                    id: "text" + snippet.id, 
                    enabled: true, 
                    element: getDescriptionTab(snippet.description) 
                },
                {
                    title: "JSX", 
                    id: "jsx" + snippet.id, 
                    enabled: true, 
                    element: getJSXCodeTab(snippet.jsxCode) 
                },
                {
                    title: "TS", 
                    id: "ts" + snippet.id, 
                    enabled: true, 
                    element: getTSCodeTab(snippet.tsCode) 
                }, 
                {
                    title: "Example", 
                    id:"example" + snippet.id, 
                    enabled: true, 
                    element: snippet.execute
                }
            ]
        })
}

var getDescriptionTab = (str) => {
    return React.createElement("div", null, str);
}

var getTSCodeTab = (str) => {
    var code = React.createElement("code", { className: "ts" }, null, str);
    var pre = React.createElement("pre", { children: code });
    return pre;
}

var getJSXCodeTab = (str) => {
    var code = React.createElement("code", { className: "xml" }, null, str);
    var pre = React.createElement("pre", { children: code });
    return pre;
}