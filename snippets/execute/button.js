var Button = function() {
}

Button.prototype.apply = function(elementId) {
    render(elementId, 
        ReactComponents.Button, 
        { 
            title: "Button",
            onClick: () => alert("Button was clicked")
        });
}