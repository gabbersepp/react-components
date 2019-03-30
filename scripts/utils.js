var appendNewElement = (elementId) => {
    const newE = document.createElement("div");
    const root = document.getElementById("root");
    root.appendChild(newE);
    return newE;
}

var render = (elementId, reactElementFunction, props) => {
    const e = document.getElementById(elementId);
    const reactElement = React.createElement(reactElementFunction, props);
    ReactDOM.render(reactElement, e);
}