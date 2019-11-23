import * as React from "react";
import * as ReactDOM from "react-dom";
import TsComp from "./TsComp";
import "jb-react-components-default-theme/dist/jb-react-components-default-theme.css"
import "./style/style.scss";

ReactDOM.render(
    React.createElement(TsComp),
    document.getElementById("root")
)
