(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),l=n.n(o),i=(n(37),n(6)),c=n(7),s=n(9),u=n(8),d=(n(38),n(12)),m=n.n(d),h=n(3),p=(n(100),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).renderSettings=function(){switch(e.props.setting.mode){case-2:return"loading...";case-1:return e.renderOff();case 0:return e.renderColor();case 1:return e.renderFade();case 2:return e.renderFlash();default:return"loading..."}},e.renderOff=function(){return a.a.createElement("div",null,a.a.createElement("div",null,"Mode: Off"),a.a.createElement("div",null,"Message: ",e.props.setting.name))},e.renderColor=function(){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("u",null,"Mode"),": Solid Color"),a.a.createElement("div",{style:{display:"inline-block"}},"Color:",a.a.createElement("div",{style:{margin:"0 5px",width:"15px",height:"15px",display:"inline-block",backgroundColor:e.props.setting.color,borderColor:"white",borderStyle:"solid",borderWidth:"1px"}})),a.a.createElement("div",null,"Message: ",e.props.setting.name))},e.renderFade=function(){return a.a.createElement("div",null,a.a.createElement("div",null,"Mode: Rainbow Fade"),a.a.createElement("div",null,"Message: ",e.props.setting.name))},e.renderFlash=function(){return a.a.createElement("div",null,a.a.createElement("div",null,"Mode: Flashing"),a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement("div",{style:{margin:"0 5px",width:"15px",height:"15px",display:"inline-block",backgroundColor:e.props.setting.color,borderColor:"white",borderStyle:"solid",borderWidth:"1px"}})),a.a.createElement("div",null,"Message: ",e.props.setting.name))},e.currentSettingCSS={margin:"2rem auto",borderColor:"white",backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"3px",borderRadius:"10px",width:window.innerWidth>400?"55%":"75%",height:"125px"},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:this.currentSettingCSS},a.a.createElement(h.Row,{style:{margin:".5rem"}},a.a.createElement("h6",null,"Current Setting")),a.a.createElement(h.Row,null,this.renderSettings()))}}]),n}(a.a.Component)),g=(n(101),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).formSubmission=function(e,t){0===e?r.props.sendFormCallback(r.props.activeForm,""===r.name.current.value?" ":r.name.current.value):1===e?r.props.sendFormCallback(r.props.activeForm,""===r.name.current.value?" ":r.name.current.value,r.color.current.value.toUpperCase()):2===e&&r.props.sendFormCallback(r.props.activeForm,""===r.name.current.value?" ":r.name.current.value,null,t)},r.renderForm=function(){switch(r.props.activeForm){case-3:return r.renderCompletedForm();case-2:return a.a.createElement("p",null);case-1:return r.renderGenericForm();case 0:return r.renderColorPickerForm();case 1:return r.renderFadeForm();case 2:return r.renderGenericForm();default:return a.a.createElement("p",null,"There has been an error")}},r.descriptions=["turn off the lights","set the lights to a specific color","a nice gradient of colors","do not use this one"],r.name=a.a.createRef(),r.color=a.a.createRef(),r}return Object(c.a)(n,[{key:"renderGenericForm",value:function(){var e=this,t=this.props.activeForm+1;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(h.Row,null,a.a.createElement("h6",null,this.descriptions[t])),a.a.createElement(h.Row,null,"Message: ",a.a.createElement("input",{style:{margin:"0 1rem",width:"25%",color:"white"},ref:this.name,type:"text",placeholder:"hi",defaultValue:""})),a.a.createElement(h.Row,null,a.a.createElement(h.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(0)}},"Submit")))}},{key:"renderColorPickerForm",value:function(){var e=this,t=this.props.activeForm+1;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(h.Row,null,a.a.createElement("h6",null,this.descriptions[t])),a.a.createElement(h.Row,null,"Message: ",a.a.createElement("input",{style:{margin:"0 1rem",width:"25%",color:"white"},ref:this.name,type:"text",placeholder:"colors",defaultValue:""})),a.a.createElement(h.Row,null,"Color: ",a.a.createElement("input",{style:{margin:"0 1rem"},ref:this.color,type:"color",defaultValue:"#FFFFFF"})),a.a.createElement(h.Row,null,a.a.createElement(h.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(1)}},"Submit")))}},{key:"renderFadeForm",value:function(){var e=this;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(h.Row,null,a.a.createElement("h6",null,this.descriptions[2])),a.a.createElement(h.Row,null,"Message: ",a.a.createElement("input",{style:{margin:"0 1rem",width:"25%",color:"white"},ref:this.name,type:"text",placeholder:"rainbow stuff",defaultValue:""})),a.a.createElement(h.Container,null,a.a.createElement(h.Row,null,a.a.createElement(h.Button,{sx:{m:.5},style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(2,0)}},"Rainbow"),a.a.createElement(h.Button,{sx:{m:.5},style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(2,1)}},"Cool"),a.a.createElement(h.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.formSubmission(2,2)}},"Warm"))))}},{key:"renderCompletedForm",value:function(){var e=this;return a.a.createElement("div",{className:"FormContents"},a.a.createElement(h.Row,null,a.a.createElement("h5",null,"leds sent!")),a.a.createElement(h.Row,null,a.a.createElement("h6",null,"Give a few second for the LEDs settings to update")),a.a.createElement(h.Row,null,a.a.createElement(h.Button,{style:{backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px"},waves:"green",onClick:function(){return e.props.changeFormCallback(-2)}},"OK")))}},{key:"render",value:function(){return this.props.isLoading?a.a.createElement("div",null,"Sending..."):this.renderForm()}}]),n}(a.a.Component)),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).changeForm=function(e){r.state.isLoading||r.setState({activeForm:e})},r.sendForm=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;r.setState({isLoading:!0}),n?m.a.post(r.apiDomain+"/enqueue/",{mode:e,name:t,color:n}).then((function(){return r.setState({isLoading:!1,activeForm:-3})})):a?m.a.post(r.apiDomain+"/enqueue/",{mode:e,name:t,type:a}).then((function(){r.setState({isLoading:!1,activeForm:-3})})):m.a.post(r.apiDomain+"/enqueue/",{mode:e,name:t,color:"#000000"}).then((function(){return r.setState({isLoading:!1,activeForm:-3})}))},r.state={activeForm:-2,isLoading:!1},r.apiDomain="https://remote-leds.herokuapp.com/queue",r}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t={color:"lightblue",width:"100%",height:"50px",backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"3px",borderRadius:"5px",fontSize:"16pt"},n={color:"white",width:"80%",height:"50px",backgroundColor:"#10131a",borderStyle:"solid",borderWidth:"1px",borderRadius:"5px",fontSize:"14pt"};return a.a.createElement(h.Container,null,a.a.createElement(h.Row,null,a.a.createElement(h.Col,{s:3},a.a.createElement(h.Button,{style:-1===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(-1)}},window.innerWidth>400?"Off":"1")),a.a.createElement(h.Col,{s:3},a.a.createElement(h.Button,{style:0===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(0)}},window.innerWidth>400?"Solid Color":"2")),a.a.createElement(h.Col,{s:3},a.a.createElement(h.Button,{style:1===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(1)}},window.innerWidth>400?"Fade":"3")),a.a.createElement(h.Col,{s:3},a.a.createElement(h.Button,{style:2===this.state.activeForm?t:n,waves:"light",onClick:function(){return e.changeForm(2)}},window.innerWidth>400?"Strobe":"4"))),a.a.createElement(g,{activeForm:this.state.activeForm,changeFormCallback:this.changeForm,sendFormCallback:this.sendForm,isLoading:this.state.isLoading}))}}]),n}(a.a.Component),f=(n(102),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"Footer"},a.a.createElement("div",{className:"FooterText"},"Made by ",a.a.createElement("a",{href:"https://github.com/JoshGuo"},"Joshua Guo")," | Please don't break this <3"))}}]),n}(a.a.Component)),b={header:{backgroundColor:"#10131a",fontSize:"calc(25pt + (50 - 25) * ((100vw - 300px) / (1920 - 300)))"}},E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getCurrentMode=function(){m.a.get(e.apiDomain).then((function(t){e.setState({loadingCurr:!1,currentMode:t.data.currentMode})}))},e.state={loadingCurr:!0,currentMode:{mode:"-1",name:"default"}},e.apiDomain="https://remote-leds.herokuapp.com/queue",e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentMode(),setInterval(this.getCurrentMode,5e3)}},{key:"render",value:function(){return a.a.createElement("div",{className:"Home"},a.a.createElement("div",{style:b.header},a.a.createElement("div",{style:{display:"inline-block"}},"led stuff")),a.a.createElement(h.Container,null,a.a.createElement(p,{isLoading:this.state.loadingCurr,setting:this.state.currentMode}),a.a.createElement(v,null)),a.a.createElement(f,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports=n(103)},37:function(e,t,n){},38:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.719a34b8.chunk.js.map