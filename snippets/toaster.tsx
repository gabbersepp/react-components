import * as React from "react";
import * as ReactComponents from "jb-react-components";

var snippetsList = (window as any).snippetsList || [];

var creator = () => {
    return (
        //to_display
        <div>
            <ReactComponents.Toaster/>
            <ReactComponents.Button title="Show Toaster (Success)" onClick={() => ReactComponents.toaster.success("Success message")}/>
            <ReactComponents.Button title="Show Toaster (Error)" onClick={() => ReactComponents.toaster.error("Error message")}/>
        </div>
        //to_display_end
    )
}

snippetsList.push({
    description: "Display a small toaster message",
    jsCode: `##js-code##`,
    tsxCode: `##tsx-code##`,
    execute: creator(),
    id: "toaster",
    displayLink: "Toaster"
});

