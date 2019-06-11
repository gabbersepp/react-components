import * as React from "react";
import * as ReactComponents from "jb-react-components";

var snippetsList = (window as any).snippetsList || [];

var creator = () => {
    return (
        //to_display
        <ReactComponents.Tabs>
            <ReactComponents.Tab id="first">
                <ReactComponents.TabHeader>
                    Test
                </ReactComponents.TabHeader>
                <ReactComponents.TabContent>
                    <div>
                    Insert any content here
                    </div>
                </ReactComponents.TabContent>
            </ReactComponents.Tab>     
            <ReactComponents.Tab id="second">
                <ReactComponents.TabHeader>
                    Test 2
                </ReactComponents.TabHeader>
                <ReactComponents.TabContent>
                    <div>
                    Insert another content here
                    </div>
                </ReactComponents.TabContent>
            </ReactComponents.Tab>                       
        </ReactComponents.Tabs>
        //to_display_end
    )    
}

snippetsList.push({
    description: "Build a tab control with as many tabs as you like. Maybe you have noticed that this examples are build using this tab control",
    jsCode: `##js-code##`,
    tsxCode: `##tsx-code##`,
    execute: creator(),
    id: "tabs-props",
    displayLink: "Tabs declarative"
});

