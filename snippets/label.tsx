import * as React from "react";
import * as ReactComponents from "jb-react-components";

var snippetsList = (window as any).snippetsList || [];

var creator = () => {
    return (
        //to_display
        <ReactComponents.Label value="Label value"/>
        //to_display_end
    )    
}

snippetsList.push({
    description: "Display a Label",
    jsCode: `##js-code##`,
    tsxCode: `##tsx-code##`,
    execute: creator(),
    id: "label",
    displayLink: "Label"
});

