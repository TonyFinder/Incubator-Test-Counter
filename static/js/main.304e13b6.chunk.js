(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],[,,,,function(e,t,a){e.exports={main:"SetDisplay_main__3tG7u",fieldSeparate:"SetDisplay_fieldSeparate__1moIX",number:"SetDisplay_number__3QokI",inputCorrection:"SetDisplay_inputCorrection__3XtCW",redBackground:"SetDisplay_redBackground__2P_ZN"}},function(e,t,a){e.exports={main:"SetDisplay_main__1mPOb",fieldSeparate:"SetDisplay_fieldSeparate__1EfxC",number:"SetDisplay_number__1yhyg",inputCorrection:"SetDisplay_inputCorrection__2V6Zr",redBackground:"SetDisplay_redBackground__3IYqp"}},,function(e,t,a){e.exports={back:"Counter_back__2PEdL",middle:"Counter_middle__Y--sg",counterField:"Counter_counterField__He1Tx",buttonsField:"Counter_buttonsField__r3dks",twoCounters:"Counter_twoCounters__2NAD_"}},function(e,t,a){e.exports={back:"Counter_back__2VYbC",middle:"Counter_middle__P2kof",counterField:"Counter_counterField__1VBQW",buttonsField:"Counter_buttonsField__QAYZA",twoCounters:"Counter_twoCounters__2zkrT"}},function(e,t,a){e.exports={back:"Counter3_back__2uWtE",middle:"Counter3_middle__2B1RE",counterField:"Counter3_counterField__1qy7w",buttonsField:"Counter3_buttonsField__DBaX3",twoCounters:"Counter3_twoCounters__duCUs"}},function(e,t,a){e.exports={main:"SetDisplay3_main__2_-dI",fieldSeparate:"SetDisplay3_fieldSeparate__3sFAv",number:"SetDisplay3_number__3BMXL",inputCorrection:"SetDisplay3_inputCorrection__MMRX4",redBackground:"SetDisplay3_redBackground__1LSCe"}},function(e,t,a){e.exports={appComponent:"TuesdayFirst_appComponent__12eRp",textDecoration:"TuesdayFirst_textDecoration__2BFMK"}},function(e,t,a){e.exports={back:"Counter_back__TZ0Hn",middle:"Counter_middle__3A_Mf",counterField:"Counter_counterField__KsYDd",buttonsField:"Counter_buttonsField__1wvWv"}},function(e,t,a){e.exports={number:"CounterDisplay_number__31qiD",redNumber:"CounterDisplay_redNumber__3rcL2",setMessage:"CounterDisplay_setMessage__3Ehw9",setMessageRed:"CounterDisplay_setMessageRed__2_O9N"}},function(e,t,a){e.exports={number:"CounterDisplay_number__2GIiP",redNumber:"CounterDisplay_redNumber__3iS9C",setMessage:"CounterDisplay_setMessage__aSj2Z",setMessageRed:"CounterDisplay_setMessageRed__1X6Kl"}},function(e,t,a){e.exports={number:"CounterDisplay3_number__1xn3q",redNumber:"CounterDisplay3_redNumber__2qE8G",setMessage:"CounterDisplay3_setMessage__2WiAx",setMessageRed:"CounterDisplay3_setMessageRed__3vWyD"}},,,function(e,t,a){e.exports={appComponent:"Monday_appComponent__kopOg",textDecoration:"Monday_textDecoration__1-r8w"}},function(e,t,a){e.exports={number:"CounterDisplay_number__1kZ43",redNumber:"CounterDisplay_redNumber__J_RKe"}},function(e,t,a){e.exports={fieldSeparate:"Input_fieldSeparate__3r5l3",number:"Input_number__ER0lS",inputCorrection:"Input_inputCorrection__24bjD",redBackground:"Input_redBackground__2UYYB"}},function(e,t,a){e.exports={fieldSeparate:"Input_fieldSeparate__1XkAu",number:"Input_number__nIWYH",inputCorrection:"Input_inputCorrection__2L9ay",redBackground:"Input_redBackground__aTJBx"}},function(e,t,a){e.exports={fieldSeparate:"Input3_fieldSeparate__1yGte",number:"Input3_number__5nzIG",inputCorrection:"Input3_inputCorrection__iKysU",redBackground:"Input3_redBackground__2aJOF"}},,function(e,t,a){e.exports={appComponent:"Wednesday_appComponent__2aVo_",textDecoration:"Wednesday_textDecoration__2kSzL"}},,function(e,t,a){e.exports={button:"Button_button__389iw"}},function(e,t,a){e.exports={button:"Button_button__ap28o"}},function(e,t,a){e.exports={button:"Button_button__2ogfv"}},,function(e,t,a){e.exports={button:"Button3_button__D3wxR"}},,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),s=a.n(r),i=(a(35),a(18)),o=a.n(i),u=a(2),l=a(26),d=a.n(l),b=a(0),j=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:d.a.button,children:e.title})},m=a(12),O=a.n(m),p=a(19),_=a.n(p),x=function(e){var t=5===e.counterNumber?_.a.redNumber:_.a.number;return Object(b.jsx)("div",{className:t,children:e.counterNumber})},S=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!0),d=Object(u.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){var e=localStorage.getItem("incrementMonday");if(e){var t=JSON.parse(e);if(0===t)return;5===t?(_(),c(t)):(S(),c(t))}}),[]);var _=function(){o(!0),p(!1)},S=function(){o(!1),p(!1)};return Object(b.jsx)("div",{className:O.a.back,children:Object(b.jsxs)("div",{className:O.a.middle,children:[Object(b.jsx)("div",{className:O.a.counterField,children:Object(b.jsx)(x,{counterNumber:a})}),Object(b.jsxs)("div",{className:O.a.buttonsField,children:[Object(b.jsx)(j,{disable:i,title:"inc",callback:function(){a>=5?o(!0):(a++,c(a),5===a&&_(),1===a&&p(!1),localStorage.setItem("incrementMonday",JSON.stringify(a)))}}),Object(b.jsx)(j,{disable:m,title:"reset",callback:function(){c(0),o(!1),p(!0),localStorage.setItem("incrementMonday",JSON.stringify(0))}})]})]})})},f=function(){return Object(b.jsxs)("div",{className:o.a.appComponent,children:[Object(b.jsx)("h3",{className:o.a.textDecoration,children:"Monday Exam"}),Object(b.jsx)(S,{})]})},v=a(11),N=a.n(v),g=a(27),C=a.n(g),h=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:C.a.button,children:e.title})},y=a(13),E=a.n(y),k=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:E.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?E.a.redNumber:E.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:E.a.setMessage,children:"enter values and press 'set'"})})},I=a(7),T=a.n(I),M=a(4),V=a.n(M),B=a(20),D=a.n(B),R=function(e){return Object(b.jsxs)("div",{className:D.a.fieldSeparate,children:[Object(b.jsx)("span",{className:D.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},A=function(e){var t=Object(n.useState)(V.a.inputCorrection),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(V.a.inputCorrection),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){return e.max<e.start||e.max<=0&&e.start>0&&e.start!==e.max?(r("".concat(V.a.inputCorrection," ").concat(V.a.redBackground)),void l(V.a.inputCorrection)):e.max===e.start?(r("".concat(V.a.inputCorrection," ").concat(V.a.redBackground)),void l("".concat(V.a.inputCorrection," ").concat(V.a.redBackground))):e.start<0&&e.max>0?(r(V.a.inputCorrection),void l("".concat(V.a.inputCorrection," ").concat(V.a.redBackground))):e.start>=0&&e.max>0?(r(V.a.inputCorrection),void l(V.a.inputCorrection)):void 0}),[e.max,e.start]),Object(b.jsxs)("div",{className:V.a.main,children:[Object(b.jsx)("div",{className:V.a.fieldSeparate,children:Object(b.jsx)(R,{name:"max value:",value:e.max,onChangeCallback:e.onChangeMax,inputStyle:c})}),Object(b.jsx)("div",{className:V.a.fieldSeparate,children:Object(b.jsx)(R,{name:"start value:",value:e.start,onChangeCallback:e.onChangeStart,inputStyle:o})})]})},F=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(5),d=Object(u.a)(l,2),j=d[0],m=d[1],O=Object(n.useState)(!1),p=Object(u.a)(O,2),_=p[0],x=p[1],S=Object(n.useState)(!0),f=Object(u.a)(S,2),v=f[0],N=f[1],g=Object(n.useState)(!0),C=Object(u.a)(g,2),y=C[0],E=C[1],I=Object(n.useState)(!1),M=Object(u.a)(I,2),V=M[0],B=M[1],D=function(){x(!1),N(!0)},R=function(){x(!0),N(!0)},F=function(){var e=localStorage.getItem("incrementTuesday1"),t=localStorage.getItem("startValue1"),a=localStorage.getItem("maxValue1");e!==a&&e!==t&&(x(!1),N(!1)),e===a&&(x(!0),N(!1)),e===t&&D()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday1"),t=localStorage.getItem("startValue1"),a=localStorage.getItem("maxValue1");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday1",JSON.stringify(0)),t?o(JSON.parse(t)):localStorage.setItem("startValue1",JSON.stringify(0)),a?m(JSON.parse(a)):localStorage.setItem("maxValue1",JSON.stringify(5)),F()}),[]);var U=function(e,t){var a=localStorage.getItem("startValue1"),n=localStorage.getItem("maxValue1");return a===e.toString()&&n===t.toString()?(F(),E(!0),void B(!1)):t<=0||t<=e||e<0||t===e?(B(!0),R(),void E(!0)):(E(!1),R(),void B(!1))};return Object(b.jsxs)("div",{className:T.a.twoCounters,children:[Object(b.jsx)("div",{className:T.a.back,children:Object(b.jsxs)("div",{className:T.a.middle,children:[Object(b.jsx)("div",{className:T.a.counterField,children:Object(b.jsx)(A,{start:i,max:j,onChangeMax:function(e){m(e),U(i,e)},onChangeStart:function(e){o(e),U(e,j)}})}),Object(b.jsx)("div",{className:T.a.buttonsField,children:Object(b.jsx)(h,{disable:y,title:"set",callback:function(){localStorage.setItem("maxValue1",JSON.stringify(j)),localStorage.setItem("startValue1",JSON.stringify(i)),localStorage.setItem("incrementTuesday1",JSON.stringify(i)),c(i),E(!0),D()}})})]})}),Object(b.jsx)("div",{className:T.a.back,children:Object(b.jsxs)("div",{className:T.a.middle,children:[Object(b.jsx)("div",{className:T.a.counterField,children:Object(b.jsx)(k,{counterNumber:a,max:j,setMessage:y,error:V})}),Object(b.jsxs)("div",{className:T.a.buttonsField,children:[Object(b.jsx)(h,{disable:_,title:"inc",callback:function(){++a>=i&&N(!1),a>=j?(x(!0),c(a)):c(a),localStorage.setItem("incrementTuesday1",JSON.stringify(a))}}),Object(b.jsx)(h,{disable:v,title:"reset",callback:function(){c(i),D(),localStorage.setItem("incrementTuesday1",JSON.stringify(i))}})]})]})})]})},U=function(){return Object(b.jsxs)("div",{className:N.a.appComponent,children:[Object(b.jsx)("h3",{className:N.a.textDecoration,children:"Tuesday Exam (first version)"}),Object(b.jsx)(F,{})]})},J=a(28),L=a.n(J),w=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:L.a.button,children:e.title})},P=a(14),G=a.n(P),X=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:G.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?G.a.redNumber:G.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:G.a.setMessage,children:"enter values and press 'set'"})})},W=a(8),H=a.n(W),Y=a(5),Z=a.n(Y),q=a(21),K=a.n(q),z=function(e){return Object(b.jsxs)("div",{className:K.a.fieldSeparate,children:[Object(b.jsx)("span",{className:K.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},Q=function(e){var t=Object(n.useState)(Z.a.inputCorrection),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(Z.a.inputCorrection),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){return e.max<e.start||e.max<=0&&e.start>0&&e.start!==e.max?(r("".concat(Z.a.inputCorrection," ").concat(Z.a.redBackground)),void l(Z.a.inputCorrection)):e.max===e.start?(r("".concat(Z.a.inputCorrection," ").concat(Z.a.redBackground)),void l("".concat(Z.a.inputCorrection," ").concat(Z.a.redBackground))):e.start<0&&e.max>0?(r(Z.a.inputCorrection),void l("".concat(Z.a.inputCorrection," ").concat(Z.a.redBackground))):e.start>=0&&e.max>0?(r(Z.a.inputCorrection),void l(Z.a.inputCorrection)):void 0}),[e.max,e.start]),Object(b.jsxs)("div",{className:Z.a.main,children:[Object(b.jsx)("div",{className:Z.a.fieldSeparate,children:Object(b.jsx)(z,{name:"max value:",value:e.max,onChangeCallback:e.onChangeMax,inputStyle:c})}),Object(b.jsx)("div",{className:Z.a.fieldSeparate,children:Object(b.jsx)(z,{name:"start value:",value:e.start,onChangeCallback:e.onChangeStart,inputStyle:o})})]})},$=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(5),d=Object(u.a)(l,2),j=d[0],m=d[1],O=Object(n.useState)(!1),p=Object(u.a)(O,2),_=p[0],x=p[1],S=Object(n.useState)(!0),f=Object(u.a)(S,2),v=f[0],N=f[1],g=Object(n.useState)(!0),C=Object(u.a)(g,2),h=C[0],y=C[1],E=Object(n.useState)(!1),k=Object(u.a)(E,2),I=k[0],T=k[1],M=Object(n.useState)(!0),V=Object(u.a)(M,2),B=V[0],D=V[1],R=function(){x(!1),N(!0)},A=function(){x(!0),N(!0)},F=function(){var e=localStorage.getItem("incrementTuesday2"),t=localStorage.getItem("startValue2"),a=localStorage.getItem("maxValue2");e!==a&&e!==t&&(x(!1),N(!1)),e===a&&(x(!0),N(!1)),e===t&&R()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday2"),t=localStorage.getItem("startValue2"),a=localStorage.getItem("maxValue2");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday2",JSON.stringify(0)),t?o(JSON.parse(t)):localStorage.setItem("startValue2",JSON.stringify(0)),a?m(JSON.parse(a)):localStorage.setItem("maxValue2",JSON.stringify(5)),F()}),[]);var U=function(e,t){var a=localStorage.getItem("startValue2"),n=localStorage.getItem("maxValue2");return a===e.toString()&&n===t.toString()?(F(),y(!0),void T(!1)):t<=0||t<=e||e<0||t===e?(T(!0),A(),void y(!0)):(y(!1),A(),void T(!1))},J=function(){D(!B)};return Object(b.jsxs)("div",{className:H.a.twoCounters,children:[!B&&Object(b.jsx)("div",{className:H.a.back,children:Object(b.jsxs)("div",{className:H.a.middle,children:[Object(b.jsx)("div",{className:H.a.counterField,children:Object(b.jsx)(Q,{start:i,max:j,onChangeMax:function(e){m(e),U(i,e)},onChangeStart:function(e){o(e),U(e,j)}})}),Object(b.jsxs)("div",{className:H.a.buttonsField,children:[Object(b.jsx)(w,{disable:h,title:"set",callback:function(){localStorage.setItem("maxValue2",JSON.stringify(j)),localStorage.setItem("startValue2",JSON.stringify(i)),localStorage.setItem("incrementTuesday2",JSON.stringify(i)),c(i),y(!0),R(),D(!B)}}),Object(b.jsx)(w,{disable:!1,title:"back",callback:J})]})]})}),B&&Object(b.jsx)("div",{className:H.a.back,children:Object(b.jsxs)("div",{className:H.a.middle,children:[Object(b.jsx)("div",{className:H.a.counterField,children:Object(b.jsx)(X,{counterNumber:a,max:j,setMessage:h,error:I})}),Object(b.jsxs)("div",{className:H.a.buttonsField,children:[Object(b.jsx)(w,{disable:_,title:"inc",callback:function(){++a>=i&&N(!1),a>=j?(x(!0),c(a)):c(a),localStorage.setItem("incrementTuesday2",JSON.stringify(a))}}),Object(b.jsx)(w,{disable:v,title:"reset",callback:function(){c(i),R(),localStorage.setItem("incrementTuesday2",JSON.stringify(i))}}),Object(b.jsx)(w,{disable:!1,title:"set",callback:J})]})]})})]})},ee=function(){return Object(b.jsxs)("div",{className:N.a.appComponent,children:[Object(b.jsx)("h3",{className:N.a.textDecoration,children:"Tuesday Exam (second version)"}),Object(b.jsx)($,{})]})},te=a(9),ae=a.n(te),ne=a(10),ce=a.n(ne),re=a(22),se=a.n(re),ie=function(e){return Object(b.jsxs)("div",{className:se.a.fieldSeparate,children:[Object(b.jsx)("span",{className:se.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},oe=a(6),ue=a(3),le={start:0,max:5,tempStart:0,tempMax:5,increment:0},de=function(e){return{type:"TEMPSTART-VALUE",value:e}},be=function(e){return{type:"TEMPMAX-VALUE",value:e}},je=function(e){return{type:"INCREMENT-VALUE-UPDATE",value:e}},me={setButtonValue:!1,incButtonValue:!0,resetButtonValue:!1},Oe=function(e){return{type:"BUTTON-SET-VALUE-CHANGE",value:e}},pe=function(e){return{type:"BUTTON-INC-VALUE-CHANGE",value:e}},_e=function(e){return{type:"BUTTON-RESET-VALUE-CHANGE",value:e}},xe={counterScreen:!0,setValueScreen:!1,errorScreen:!1},Se=function(){var e=Object(oe.b)(),t=Object(oe.c)((function(e){return e.values})),a=Object(oe.c)((function(e){return e.buttons})),n=Object(oe.c)((function(e){return e.screens})).errorScreen?"".concat(ce.a.inputCorrection," ").concat(ce.a.redBackground):ce.a.inputCorrection,c=function(t,a,n){e(Oe(t)),e(pe(a)),e(_e(n))},r=function(){e({type:"SCREEN-COUNTER-ON"}),t.increment===t.start&&c(!1,!0,!1),t.increment>t.start&&t.increment<t.max&&c(!1,!0,!0),t.increment===t.max&&c(!1,!1,!0)};return Object(b.jsxs)("div",{className:ce.a.main,children:[Object(b.jsx)("div",{className:ce.a.fieldSeparate,children:Object(b.jsx)(ie,{name:"max value:",value:t.tempMax,onChangeCallback:function(n){-1!==t.tempStart&&n!==t.tempStart-1&&(n===t.max&&t.start===t.tempStart&&(e(be(n)),r()),(n>t.tempStart||n!==t.tempMax)&&(e(be(n)),a.setButtonValue||(e({type:"SCREEN-SET-ON"}),c(!0,!1,!1))),n===t.tempStart&&(e({type:"SCREEN-ERROR-ON"}),c(!1,!1,!1)))},inputStyle:n})}),Object(b.jsx)("div",{className:ce.a.fieldSeparate,children:Object(b.jsx)(ie,{name:"start value:",value:t.tempStart,onChangeCallback:function(n){if(!(n>t.tempMax))return n===t.start&&t.max===t.tempMax?(e(de(n)),void r()):n===t.tempMax||n<0?n<-1?void 0:(e(de(n)),e({type:"SCREEN-ERROR-ON"}),void c(!1,!1,!1)):void((n<t.tempMax||n!==t.tempStart)&&(e(de(n)),a.setButtonValue||(e({type:"SCREEN-SET-ON"}),c(!0,!1,!1))))},inputStyle:n})})]})},fe=a(30),ve=a.n(fe),Ne=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:ve.a.button,children:e.title})},ge=a(15),Ce=a.n(ge),he=function(){var e=Object(oe.c)((function(e){return e.screens})),t=Object(oe.c)((function(e){return e.values}));return Object(b.jsxs)("div",{children:[e.counterScreen&&Object(b.jsx)("div",{className:t.max===t.increment?Ce.a.redNumber:Ce.a.number,children:t.increment}),e.setValueScreen&&Object(b.jsx)("div",{className:Ce.a.setMessage,children:"enter values and press 'set'"}),e.errorScreen&&Object(b.jsx)("div",{className:Ce.a.setMessageRed,children:"Incorrect value!"})]})},ye=function(){var e=Object(oe.c)((function(e){return e.buttons})),t=Object(oe.c)((function(e){return e.values})),a=Object(oe.b)();return Object(b.jsxs)("div",{className:ae.a.twoCounters,children:[Object(b.jsx)("div",{className:ae.a.back,children:Object(b.jsxs)("div",{className:ae.a.middle,children:[Object(b.jsx)("div",{className:ae.a.counterField,children:Object(b.jsx)(Se,{})}),Object(b.jsx)("div",{className:ae.a.buttonsField,children:Object(b.jsx)(Ne,{disable:!e.setButtonValue,title:"set",callback:function(){a(Oe(!1)),a(pe(!0)),a(_e(!1)),a({type:"START-VALUE",value:t.tempStart}),a(function(e){return{type:"MAX-VALUE",value:e}}(t.tempMax)),a(je(t.tempStart)),a({type:"SCREEN-COUNTER-ON"})}})})]})}),Object(b.jsx)("div",{className:ae.a.back,children:Object(b.jsxs)("div",{className:ae.a.middle,children:[Object(b.jsx)("div",{className:ae.a.counterField,children:Object(b.jsx)(he,{})}),Object(b.jsxs)("div",{className:ae.a.buttonsField,children:[Object(b.jsx)(Ne,{disable:!e.incButtonValue,title:"inc",callback:function(){t.increment===t.start&&a(_e(!0)),t.increment+1===t.max?(a(pe(!1)),a({type:"INCREMENT-VALUE"})):a({type:"INCREMENT-VALUE"})}}),Object(b.jsx)(Ne,{disable:!e.resetButtonValue,title:"reset",callback:function(){a(pe(!0)),a(_e(!1)),a(je(t.start))}})]})]})})]})},Ee=a(24),ke=a.n(Ee),Ie=function(){return Object(b.jsxs)("div",{className:ke.a.appComponent,children:[Object(b.jsx)("h3",{className:ke.a.textDecoration,children:"Wednesday Exam"}),Object(b.jsx)(ye,{})]})};var Te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(U,{}),Object(b.jsx)(ee,{}),Object(b.jsx)(Ie,{})]})},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Ve=a(25),Be=Object(Ve.a)({values:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START-VALUE":return Object(ue.a)(Object(ue.a)({},e),{},{start:t.value});case"MAX-VALUE":return Object(ue.a)(Object(ue.a)({},e),{},{max:t.value});case"INCREMENT-VALUE":return Object(ue.a)(Object(ue.a)({},e),{},{increment:e.increment+1});case"TEMPMAX-VALUE":return Object(ue.a)(Object(ue.a)({},e),{},{tempMax:t.value});case"TEMPSTART-VALUE":return Object(ue.a)(Object(ue.a)({},e),{},{tempStart:t.value});case"INCREMENT-VALUE-UPDATE":return Object(ue.a)(Object(ue.a)({},e),{},{increment:t.value});default:return e}},buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUTTON-SET-VALUE-CHANGE":return Object(ue.a)(Object(ue.a)({},e),{},{setButtonValue:t.value});case"BUTTON-INC-VALUE-CHANGE":return Object(ue.a)(Object(ue.a)({},e),{},{incButtonValue:t.value});case"BUTTON-RESET-VALUE-CHANGE":return Object(ue.a)(Object(ue.a)({},e),{},{resetButtonValue:t.value});default:return e}},screens:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCREEN-COUNTER-ON":return Object(ue.a)(Object(ue.a)({},e),{},{counterScreen:!0,setValueScreen:!1,errorScreen:!1});case"SCREEN-SET-ON":return Object(ue.a)(Object(ue.a)({},e),{},{counterScreen:!1,setValueScreen:!0,errorScreen:!1});case"SCREEN-ERROR-ON":return Object(ue.a)(Object(ue.a)({},e),{},{counterScreen:!1,setValueScreen:!1,errorScreen:!0});default:return e}}}),De=Object(Ve.b)(Be,function(){var e=localStorage.getItem("state");if(e)return JSON.parse(e)}());De.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}({values:De.getState().values,buttons:De.getState().buttons,screens:De.getState().screens})})),s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(oe.a,{store:De,children:Object(b.jsx)(Te,{})})}),document.getElementById("root")),Me()}],[[43,1,2]]]);
//# sourceMappingURL=main.304e13b6.chunk.js.map