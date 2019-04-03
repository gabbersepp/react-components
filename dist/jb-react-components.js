!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactComponents=t(require("react")):e.ReactComponents=t(e.React)}(window,function(e){return function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=9)}([function(t,s){t.exports=e},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static newFromObj(e){const t={};for(const s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);return t}static setProp(e,t,s){const n=this.newFromObj(e);return n[t]=s,n}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);s(11);t.default=class extends n.Component{render(){const e=n.createElement("div",null,n.createElement("div",{className:"overlay"}),n.createElement("div",{className:"overlay-content"},n.createElement("div",null,this.props.children))),t={className:"overlay-container"};return this.props.onClick&&(t.onClick=this.props.onClick),n.createElement("div",t,e)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{render(){return this.props.expression?this.props.children:null}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);s(13);t.default=class extends n.Component{constructor(e){super(e),this.state={disabled:e.disabled}}render(){return n.createElement("div",{className:`btn ${this.props.type||"default"}`,onClick:()=>this.onClick()},this.props.title)}onClick(){this.state.disabled||this.props.onClick()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{constructor(e){super(e),this.state={value:e.value||""}}render(){return n.createElement("input",{placeholder:this.props.placeholder,onChange:e=>this.onChange(e.currentTarget.value),value:this.state.value,onFocus:()=>this.props.onFocus?this.props.onFocus():null})}componentDidUpdate(e){e.value!==this.props.value&&this.setState({value:this.props.value})}onChange(e){this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(10);t.MessageBox=n.default;const o=s(14);t.Toaster=o.default;const i=s(17);t.Tabs=i.default;const r=s(5);t.Tab=r.default;const a=s(6);t.TabHeader=a.default;const l=s(7);t.TabContent=l.default;const c=s(4);t.Button=c.default;const u=s(21);t.Checkbox=u.default,t.CheckboxCrossTypes=u.CheckboxCrossTypes;const d=s(23);t.FileInput=d.default;const p=s(3);t.If=p.default;const h=s(8);t.Input=h.default;const f=s(25);t.Label=f.default;const m=s(2);t.Overlay=m.default;const b=s(27);t.Select=b.default;const v=s(29);t.Thumbnail=v.default;const C={success:o.success};t.toaster=C;const y={showOkCancel:n.showOkCancel};t.messageBox=y},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0),o=s(1),i=s(2);s(12);const r=s(4);let a=null;const l=[{title:"OK",onClick:null},{title:"Abbrechen",onClick:null}];t.showOkCancel=function(e,t){return new Promise((s,n)=>{l[0].onClick=(()=>{s(),a.hide()}),l[1].onClick=(()=>{n(),a.hide()}),a.show(e,t,l)})};t.default=class extends n.Component{constructor(e){super(e),this.state={show:!1,title:"",msg:"",buttons:[]},a=this}hide(){const e=o.default.newFromObj(this.state);e.show=!1,this.setState(e)}show(e,t,s){const n=o.default.newFromObj(this.state);n.title=e,n.msg=t,n.show=!0,n.buttons=s,this.setState(n)}render(){const e=n.createElement(i.default,null,n.createElement("div",{className:"msg-box"},n.createElement("div",{className:"title"},this.state.title),n.createElement("div",{className:"msg"},this.state.msg),n.createElement("div",{className:"buttons"},this.state.buttons.map(e=>n.createElement(r.default,{key:e.title,onClick:e.onClick,title:e.title})))));return this.state.show?e:null}}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0),o=s(3);s(15);const i=s(1),r=s(16);let a=null;t.success=function(e){a.show(e,"success")};t.default=class extends n.Component{constructor(e){super(e),this.timeoutHandles=[],this.state={show:!1,message:"",type:null,fadeOut:!1},a=this,this.triggerDisable=this.triggerDisable.bind(this),this.triggerFadeOut=this.triggerFadeOut.bind(this)}render(){return n.createElement(o.default,{expression:this.state.show},n.createElement("div",{className:`message ${this.state.fadeOut?"fade-out":""}`},n.createElement("div",{className:this.state.type},this.state.message)))}show(e,t){this.timeoutHandles.length>0&&(this.timeoutHandles.forEach(e=>clearTimeout(e)),this.timeoutHandles.length=0),this.setState({fadeOut:!1,show:!0,message:e,type:t}),this.disposeEvents(),r.default.queue(this.triggerFadeOut,2e3)}componentWillUnmount(){this.disposeEvents()}disposeEvents(){r.default.clear(this.triggerDisable),r.default.clear(this.triggerFadeOut)}triggerFadeOut(){const e=i.default.setProp(this.state,"fadeOut",!0);this.setState(e),r.default.queue(this.triggerDisable,2e3)}triggerDisable(){this.setState({show:!1})}}},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=new class{constructor(){this.functions=[],this.handles=[]}queue(e,t){this.clear(e);const s=setTimeout(e,t);this.functions.push(e),this.handles.push(s)}clear(e){const t=this.functions.indexOf(e);t>-1&&(clearTimeout(this.handles[t]),this.functions.splice(t,1),this.handles.splice(t,1))}};t.default=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0),o=s(18),i=s(19);s(20);const r=s(1),a=s(5),l=s(6),c=s(7);t.default=class extends n.Component{constructor(e){if(super(e),e.tabs&&e.children)throw new Error("Not able to set tabs through both properties");this.state={tabs:e.tabs||this.buildTabsFromProps()||[]}}render(){return n.createElement("div",{className:"tabs"},n.createElement("div",{className:"bar"},this.state.tabs.map(e=>n.createElement(o.default,{key:e.id+e.active+e.enabled,disabled:!e.enabled,onClick:()=>this.selectTab(e),active:e.active,title:e.title}))),n.createElement("div",{className:"content"},this.state.tabs.map(e=>n.createElement(i.default,{key:e.id+e.active+e.enabled,active:e.active,element:e.element}))))}componentDidUpdate(e){if(!e.children&&(e.tabs!==this.props.tabs||e.tabs.length!==this.props.tabs.length||e.tabs.filter(e=>this.props.tabs.find(t=>t.id===e.id&&t.active===e.active&&t.enabled===e.enabled)).length!==e.tabs.length)){const e=r.default.newFromObj(this.state);e.tabs=this.props.tabs,this.setState(e)}}selectTab(e){if(e.enabled){const t=r.default.newFromObj(this.state);t.tabs.forEach(t=>t.active=t.id===e.id),this.setState(t)}}buildTabsFromProps(){if(this.props.tabs)return this.props.tabs;let e=[];Array.isArray(this.props.children)?e=this.props.children:e.push(this.props.children);const t=[];let s=0;return e.forEach(e=>{const o={enabled:!0,id:s+++""};if(e.type!==a.default)throw new Error("unexpected type. Expected chidl to be of type 'Tab'");const i=e.props.children.find(e=>e.type===l.default);if(!i)throw new Error("expected one child of type 'TabHeader'");const r=i.props.children;o.title=r;const u=e.props.children.find(e=>e.type===c.default);if(!u)throw new Error("expected one child of type 'TabContent'");o.element=n.createElement("div",null,u.props.children),t.push(o)}),t.length>0&&(t[0].active=!0),t}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{render(){return n.createElement("div",{className:`header ${this.props.active?"active":"inactive"} ${this.props.disabled?"disabled":""}`,onClick:()=>this.props.onClick()},n.createElement("span",null,this.props.title),n.createElement("span",null,"x"))}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);t.default=class extends n.Component{render(){return n.createElement("div",{className:`body ${this.props.active?"active":""}`},this.props.element||this.props.children)}}},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);s(22);const o=s(1);t.default=class extends n.Component{constructor(e){super(e),this.state={checked:e.checked,disabled:e.disabled}}render(){return n.createElement("div",{className:`chk-box ${this.state.disabled?"disabled":""} ${this.state.checked?"checked":""} ${this.props.crossType}`,onClick:()=>this.onClick()})}componentDidUpdate(e){this.props.disabled===e.disabled&&this.props.checked===e.checked||this.setState({disabled:this.props.disabled,checked:this.props.checked})}onClick(){if(!this.state.disabled){const e=o.default.newFromObj(this.state);e.checked=!e.checked,this.setState(e),this.props.onStateChange&&this.props.onStateChange(e.checked)}}},function(e){e.DefaultCross="DefaultCross",e.GreenHook="GreenHook"}(t.CheckboxCrossTypes||(t.CheckboxCrossTypes={}))},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);s(24);t.default=class extends n.Component{render(){const e=(this.props.accept||[]).reduce((e,t)=>`${e},${t}`);return n.createElement("div",{className:"file-input"},n.createElement("input",{type:"file",id:"file",onChange:e=>this.onChange(e.target.files),multiple:!!this.props.multiple,accept:e}),n.createElement("label",{htmlFor:"file"},this.props.title))}onChange(e){const t=[];for(let s=0;s<e.length;s++)t.push(e.item(s));this.props.multiple?this.props.onChange(t):this.props.onChange(t[0])}}},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0);s(26);t.default=class extends n.Component{constructor(e){super(e),this.state={value:e.value}}render(){return n.createElement("div",{className:"lbl"},this.state.value)}componentDidUpdate(e){e.value!==this.props.value&&this.setState({value:this.props.value})}}},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0),o=s(8),i=s(1);s(28);t.default=class extends n.Component{constructor(e){super(e),this.state={selectedKey:e.selectedKey||"",filtered:e.options||[],options:e.options||[],dropDownOpened:!1}}render(){return n.createElement("div",{className:"select"},n.createElement(o.default,{onFocus:()=>this.openDropdown(),value:this.getValue(this.props.selectedKey),onChange:e=>this.filter(e)}),n.createElement("div",{className:`select-results ${this.state.dropDownOpened?"open":""}`},this.state.filtered.map(e=>n.createElement("div",{tabIndex:0,className:"select-item",key:e.key,onClick:t=>this.select(e,t.currentTarget)},e.value))))}componentDidUpdate(e){if(e.options!==this.props.options){const e=i.default.newFromObj(this.state);e.options=this.props.options,e.filtered=this.props.options,this.setState(e)}}openDropdown(){const e=i.default.setProp(this.state,"dropDownOpened",!0);this.setState(e)}closeDropdown(){const e=i.default.setProp(this.state,"dropDownOpened",!1);this.setState(e)}select(e,t){this.props.onChange(e),this.closeDropdown()}getValue(e){const t=this.state.options.find(t=>t.key===e);if(t)return t.value}filter(e){let t;t=e&&""!==e?this.state.options.filter(t=>t.value.indexOf(e)>-1):this.state.options;const s=i.default.newFromObj(this.state);s.filtered=t,this.setState(s)}}},function(e,t,s){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(0),o=s(3);s(30);const i=s(2);t.default=class extends n.Component{constructor(e){super(e),this.state={show:!1}}render(){return n.createElement("div",{className:"thumbnail"},n.createElement(o.default,{expression:this.state.show},n.createElement(i.default,{onClick:()=>this.hide()},n.createElement("img",{src:this.props.src,onClick:()=>this.hide()}),n.createElement("span",null))),n.createElement("img",{src:this.props.src,onClick:()=>this.show()}))}show(){this.setState({show:!0})}hide(){this.setState({show:!1})}}},function(e,t,s){}])});
//# sourceMappingURL=jb-react-components.js.map