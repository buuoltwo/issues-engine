import{_ as a,o as t,c as e,F as o,b as c,d as n,e as s}from"./app.0702af34.js";const p={},l=c('<h2 id="react-hooks\u4E2D\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#react-hooks\u4E2D\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5">\xB6</a> <span class="prefix"></span><span class="content" id="react-hooks\u4E2D\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5"><a class="header-anchor" href="#react-hooks\u4E2D\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5" aria-hidden="true">#</a> React Hooks\u4E2D\u7236\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5</span><span class="suffix"></span></h2><p>\u4F7F\u7528\u5230\u7684hooks-- useImperativeHandle\uFF0CuseRef</p><p>\u65B9\u6CD5\u4E00\u3001</p><p><strong>child\u5B50\u7EC4\u4EF6\u901A\u8FC7<code>props.cRef</code>\u786E\u5B9A\u81EA\u5DF1\u7684ref</strong></p>',4),i=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"/* child\u5B50\u7EC4\u4EF6 */"),s(`
`),n("span",{class:"token comment"},"// https://reactjs.org/docs/hooks-reference.html#useimperativehandle"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("useState"),n("span",{class:"token punctuation"},","),s(" useImperativeHandle"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token operator"},"..."),s(`
`),n("span",{class:"token comment"},"// props\u5B50\u7EC4\u4EF6\u4E2D\u9700\u8981\u63A5\u53D7ref"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"ChildComp"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("cRef"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("val"),n("span",{class:"token punctuation"},","),s(" setVal"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u6B64\u5904\u6CE8\u610FuseImperativeHandle\u65B9\u6CD5\u7684\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5143\u7D20\u7684ref\u5F15\u7528"),s(`
    `),n("span",{class:"token function"},"useImperativeHandle"),n("span",{class:"token punctuation"},"("),s("cRef"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// changeVal \u5C31\u662F\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5"),s(`
        `),n("span",{class:"token function-variable function"},"changeVal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setVal"),n("span",{class:"token punctuation"},"("),s("newVal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"..."),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("val"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433264-12612"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`/* child\u5B50\u7EC4\u4EF6 */
// https://reactjs.org/docs/hooks-reference.html#useimperativehandle
import {useState, useImperativeHandle} from 'react';
...
// props\u5B50\u7EC4\u4EF6\u4E2D\u9700\u8981\u63A5\u53D7ref
const ChildComp = ({cRef}) => {
    const [val, setVal] = useState();
    // \u6B64\u5904\u6CE8\u610FuseImperativeHandle\u65B9\u6CD5\u7684\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5143\u7D20\u7684ref\u5F15\u7528
    useImperativeHandle(cRef, () => ({
        // changeVal \u5C31\u662F\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
        changeVal: (newVal) => {
          setVal(newVal);
        }
    }));
    ...
    return (
        <div>{val}</div>
    )
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433264-12612","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1),r=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"/* FComp \u7236\u7EC4\u4EF6 */"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("useRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(" 'react"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token operator"},"..."),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"FComp"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" childRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateChildState"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// changeVal\u5C31\u662F\u5B50\u7EC4\u4EF6\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5"),s(`
        childRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"changeVal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token operator"},"..."),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/* \u6B64\u5904\u6CE8\u610F\u9700\u8981\u5C06childRef\u901A\u8FC7props\u5C5E\u6027\u4ECE\u7236\u7EC4\u4EF6\u4E2D\u4F20\u7ED9\u81EA\u5DF1 cRef={childRef} */"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token operator"},"<"),s("ChildComp  cRef"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("childRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("button onClick"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("updateChildState"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("\u89E6\u53D1\u5B50\u7EC4\u4EF6\u65B9\u6CD5"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433265-31700"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`/* FComp \u7236\u7EC4\u4EF6 */
import {useRef} from 'react;
...
const FComp = () => {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal\u5C31\u662F\u5B50\u7EC4\u4EF6\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
        childRef.current.changeVal(99);
    }
    ...
    return (
        <>
            {/* \u6B64\u5904\u6CE8\u610F\u9700\u8981\u5C06childRef\u901A\u8FC7props\u5C5E\u6027\u4ECE\u7236\u7EC4\u4EF6\u4E2D\u4F20\u7ED9\u81EA\u5DF1 cRef={childRef} */}
            <ChildComp  cRef={childRef} />
            <button onClick={updateChildState}>\u89E6\u53D1\u5B50\u7EC4\u4EF6\u65B9\u6CD5</button>
        </>
    )
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433265-31700","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br")])],-1),u=n("p",null,"\u65B9\u6CD5\u4E8C\u3001\u53C2\u8003react\u5B98\u65B9\u6587\u6863\uFF1A",-1),d=n("p",null,[s("child"),n("strong",null,"\u5B50\u7EC4\u4EF6\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u5165\u53C2"),n("code",null,"ref"),s("\u786E\u5B9A\u81EA\u5DF1\u7684ref")],-1),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("useState"),n("span",{class:"token punctuation"},","),s(" useImperativeHandle"),n("span",{class:"token punctuation"},","),s("forwardRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// props\u5B50\u7EC4\u4EF6\u4E2D\u9700\u8981\u63A5\u53D7ref"),s(`
`),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"ChildComp"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s("ref")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u6B64\u5904\u6CE8\u610FuseImperativeHandle\u65B9\u6CD5\u7684\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5143\u7D20\u7684ref\u5F15\u7528"),s(`
    `),n("span",{class:"token function"},"useImperativeHandle"),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// changeVal \u5C31\u662F\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5"),s(`
        `),n("span",{class:"token function-variable function"},"changeVal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
           
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("val"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
ChildComp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"forwardRef"),n("span",{class:"token punctuation"},"("),s("ChildComp"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433266-52472"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`import {useState, useImperativeHandle,forwardRef} from 'react';
// props\u5B50\u7EC4\u4EF6\u4E2D\u9700\u8981\u63A5\u53D7ref
let ChildComp = (props,ref) => {
    // \u6B64\u5904\u6CE8\u610FuseImperativeHandle\u65B9\u6CD5\u7684\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5143\u7D20\u7684ref\u5F15\u7528
    useImperativeHandle(ref, () => ({
        // changeVal \u5C31\u662F\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
        changeVal: (newVal) => {
           
        }
    }));
    return (
        <div>{val}</div>
    )
}
ChildComp = forwardRef(ChildComp)
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433266-52472","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),m=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"/* FComp \u7236\u7EC4\u4EF6 */"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("useRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"FComp"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" childRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateChildState"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// changeVal\u5C31\u662F\u5B50\u7EC4\u4EF6\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5"),s(`
        childRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"changeVal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("ChildComp ref"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("childRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("button onClick"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("updateChildState"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("\u89E6\u53D1\u5B50\u7EC4\u4EF6\u65B9\u6CD5"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433271-21665"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`/* FComp \u7236\u7EC4\u4EF6 */
import {useRef} from 'react';
const FComp = () => {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal\u5C31\u662F\u5B50\u7EC4\u4EF6\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
        childRef.current.changeVal(99);
    }
    return (
        <>
            <ChildComp ref={childRef} />
            <button onClick={updateChildState}>\u89E6\u53D1\u5B50\u7EC4\u4EF6\u65B9\u6CD5</button>
        </>
    )
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433271-21665","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),b=n("p",null,"\u6CE8\u610F\uFF1A",-1),f=n("p",null,"useRef \u4EC5\u80FD\u7528\u5728 FunctionComponent\uFF0CcreateRef \u4EC5\u80FD\u7528\u5728 ClassComponent\u3002",-1);function y(h,C){return t(),e(o,null,[l,i,r,u,d,k,m,b,f],64)}var g=a(p,[["render",y]]);export{g as default};
