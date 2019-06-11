"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function(resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty({}, "__esModule", {
    value: true
});


var snippetsList = window.snippetsList || [];
var creator = () => {
    //to_display
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
        }
    ];
    return (React.createElement("div", null,
        React.createElement(ReactComponents.MessageBox, null),
        React.createElement(ReactComponents.Button, {
            title: "Show Message Yes / Cancel",
            onClick: () => __awaiter(this, void 0, void 0, function*() {
                const result = yield ReactComponents.messageBox.showOkCancel("Title", "Yes or Cancel?");
                if (result) {
                    ReactComponents.messageBox.showOkCancel("Title", "You clicked YES");
                } else {
                    ReactComponents.messageBox.showOkCancel("Title", "I am sorry about that!");
                }
            })
        }),
        React.createElement(ReactComponents.Button, {
            title: "Show Message with three buttons",
            onClick: () => ReactComponents.messageBox.show("Title", "Some Buttons", buttons)
        })));
    //to_display_end
};
snippetsList.push({
    description: "Show a message-box with Yes / Cancel buttons. The result of the user action can be accessed by awaiting the promise. Or use fully customizable show() that accepts a infinite number of buttons",
    jsCode: `
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
        }
    ];
    return (React.createElement("div", null,
        React.createElement(ReactComponents.MessageBox, null),
        React.createElement(ReactComponents.Button, {
            title: "Show Message Yes / Cancel",
            onClick: () => __awaiter(this, void 0, void 0, function*() {
                const result = yield ReactComponents.messageBox.showOkCancel("Title", "Yes or Cancel?");
                if (result) {
                    ReactComponents.messageBox.showOkCancel("Title", "You clicked YES");
                } else {
                    ReactComponents.messageBox.showOkCancel("Title", "I am sorry about that!");
                }
            })
        }),
        React.createElement(ReactComponents.Button, {
            title: "Show Message with three buttons",
            onClick: () => ReactComponents.messageBox.show("Title", "Some Buttons", buttons)
        })));
    `,
    tsxCode: `
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
    `,
    execute: creator(),
    id: "msg-box",
    displayLink: "MessageBox"
});