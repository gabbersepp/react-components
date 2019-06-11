import * as React from "react";
import * as ReactComponents from "jb-react-components";

var snippetsList = (window as any).snippetsList || [];

var creator = () => {
    return (
        //to_display
        <ReactComponents.Button title="Button" onClick={() => alert("Button was clicked")}/>
        //to_display_end
    )    
}

snippetsList.push({
    description: "Display a Button",
    jsCode: `##js-code##`,
    tsxCode: `##tsx-code##`,
    execute: creator(),
    id: "button",
    displayLink: "Button"
});