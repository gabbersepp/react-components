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
                    title: "JS", 
                    id: "js" + snippet.id, 
                    enabled: true, 
                    element: getJSCodeTab(snippet.jsCode) 
                },
                {
                    title: "TSX", 
                    id: "tsx" + snippet.id, 
                    enabled: true, 
                    element: getTSXCodeTab(snippet.tsxCode) 
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

var getTSXCodeTab = (str) => {
    var code = React.createElement("code", { className: "ts" }, null, str);
    var pre = React.createElement("pre", { children: code });
    return pre;
}

var getJSCodeTab = (str) => {
    var code = React.createElement("code", { className: "xml" }, null, str);
    var pre = React.createElement("pre", { children: code });
    return pre;
}