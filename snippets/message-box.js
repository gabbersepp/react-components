var snippetsList = window.snippetsList || [];

function yesNo() {
    var buttons = [{
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

    var btn1 = React.createElement(ReactComponents.Button, {
        title: "Show Message Yes / Cancel",
        onClick: async () => {
            const result = await ReactComponents.messageBox.showOkCancel("Title", "Yes or Cancel?");
            if (result) {
                ReactComponents.messageBox.showOkCancel("Title", "You clicked YES");
            } else {
                ReactComponents.messageBox.showOkCancel("Title", "I am sorry about that!");
            }
        }
    });

    var btn2 = React.createElement(ReactComponents.Button, {
        title: "Show Message with three buttons",
        onClick: () => ReactComponents.messageBox.show("Title", "Some Buttons", buttons)
    });
    
    var div = React.createElement("div", {
        children: [btn1, btn2, React.createElement(ReactComponents.MessageBox)]
    });
    
    var tsCode = `
    ....
    var buttons: ReactComponents.IMsgBoxButton[] = [{
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
    ReactComponents.messageBox.show("Title", "Yes or Cancel?", buttons)
    ....
    const result: boolean = await ReactComponents.messageBox.showOkCancel("Title", "Yes or Cancel?");
    if (result) {
        ReactComponents.messageBox.showOkCancel("Title", "You clicked YES");
    } else {
        ReactComponents.messageBox.showOkCancel("Title", "I am sorry about that!");
    }
    `
    return [div, tsCode];
}

const yesNoResult = yesNo();

snippetsList.push({
    description: "Show a message-box with Yes / Cancel buttons. The result of the user action can be accessed by awaiting the promise. Or use fully customizable show() that accepts a infinite number of buttons",
    jsxCode: `<ReactComponents.MessageBox /> ${yesNoResult[1]}`,
    tsCode: `React.createElement(ReactComponents.MessageBox) ${yesNoResult[1]}`,
    execute: yesNoResult[0],
    id: "msg-box",
    displayLink: "MessageBox"
});