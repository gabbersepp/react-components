import * as React from "react";
import * as ReactComponents from "jb-react-components";
import { IMsgBoxButton } from "jb-react-components/dist/ts/components/messageBox/IMsgBoxButton";

var snippetsList = (window as any).snippetsList || [];

var creator = () => {
    //to_display
    var buttons: IMsgBoxButton[] = [{
        title: "btn1",
        onClick: () => {}
    },
    {
        title: "btn2",
        onClick: () => {}
    },
    {
        title: "btn3",
        onClick: () => {}
    }];

    return (        
        <div>
            <ReactComponents.MessageBox/>
            <ReactComponents.Button title="Show Message Yes / Cancel" onClick={async () => {
                const result: boolean = await ReactComponents.messageBox.showOkCancel("Title", "Yes or Cancel?");
                if (result) {
                    ReactComponents.messageBox.showOkCancel("Title", "You clicked YES");
                } else {
                    ReactComponents.messageBox.showOkCancel("Title", "I am sorry about that!");
                }
            }}/>
            <ReactComponents.Button title="Show Message with three buttons" onClick={() => ReactComponents.messageBox.show("Title", "Some Buttons", buttons)}/>
        </div>
    )
    //to_display_end
}

snippetsList.push({
    description: "Show a message-box with Yes / Cancel buttons. The result of the user action can be accessed by awaiting the promise. Or use fully customizable show() that accepts a infinite number of buttons",
    jsCode: `##js-code##`,
    tsxCode: `##tsx-code##`,
    execute: creator(),
    id: "msg-box",
    displayLink: "MessageBox"
});