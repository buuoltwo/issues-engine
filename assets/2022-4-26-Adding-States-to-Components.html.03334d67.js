import{_ as c,o as a,c as s,F as o,b as t,d as n,e}from"./app.0702af34.js";const i={},l=t('<h1 id="adding-states-to-components" tabindex="-1"><a class="header-anchor" href="#adding-states-to-components">\xB6</a> <span class="prefix"></span><span class="content" id="adding-states-to-components"><a class="header-anchor" href="#adding-states-to-components" aria-hidden="true">#</a> Adding-States-to-Components</span><span class="suffix"></span></h1><h2 id="usestate\u548Cusereducer\u7684\u4F7F\u7528\u51B3\u7B56" tabindex="-1"><a class="header-anchor" href="#usestate\u548Cusereducer\u7684\u4F7F\u7528\u51B3\u7B56">\xB6</a> <span class="prefix"></span><span class="content" id="usestate\u548Cusereducer\u7684\u4F7F\u7528\u51B3\u7B56"><a class="header-anchor" href="#usestate\u548Cusereducer\u7684\u4F7F\u7528\u51B3\u7B56" aria-hidden="true">#</a> <code>useState</code>\u548C<code>useReducer</code>\u7684\u4F7F\u7528\u51B3\u7B56</span><span class="suffix"></span></h2><p><code>useState</code>\u548C<code>useRuducer</code>\u90FD\u5141\u8BB8\u5F00\u53D1\u8005\u5411\u7EC4\u4EF6\u6DFB\u52A0\u72B6\u6001\u4EE5\u8FDB\u884C\u66F4\u65B0\u3002</p>',3),d=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`// useRuducer
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433275-95006"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// useRuducer
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433275-95006","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),r=n("p",null,[n("strong",null,"ISSUE:"),e(" react hook\u72B6\u6001\u66F4\u65B0: \u968F\u7740\u4E1A\u52A1\u53D8\u5316\u5BFC\u81F4\u65B0\u7684state\u589E\u52A0\uFF0C\u800C\u4E14\u51E0\u4E2Astate\u8FD8\u662F\u540C\u4E00\u65F6\u673A\u8FDB\u884C\u66F4\u65B0\uFF08\u4E92\u4E0D\u72EC\u7ACB\uFF09\uFF0C\u6B64\u65F6\u9700\u8981\u4F7F\u7528"),n("code",null,"useReducer")],-1),u=n("p",null,[n("strong",null,"EXAMPLES")],-1),m=n("ol",null,[n("li",null,[n("p",null,"\u7531\u4E8E\u95ED\u5305\u95EE\u9898\u8FD9\u6BB5\u9519\u8BEF\u4EE3\u7801\u5F97\u5230\u4E86\u8FC7\u65F6\u7684state"),n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`React.useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1)
  }, 1000)
  return () => clearInterval(id)
}, [count])
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433275-59650"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`React.useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1)
  }, 1000)
  return () => clearInterval(id)
}, [count])
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433275-59650","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])])]),n("li",null,[n("p",null,[e("\u6B64\u65F6"),n("code",null,"useEffect"),e("\u7684\u4F9D\u8D56\u9879\u6570\u7EC4\u53EA\u6709count\uFF0C\u53EF\u4EE5\u8003\u8651"),n("code",null,"setCount"),e("\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\u6216\u8005\u4F7F\u7528"),n("code",null,"useRef.current"),e("\u6682\u5B58\u89E3\u51B3\u3002")]),n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`React.useEffect(() => {
  const id = setInterval(() => {
    setCount((count) => count + 1)
  })
  return () => clearInterval(id)
}, [count])
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433276-15030"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`React.useEffect(() => {
  const id = setInterval(() => {
    setCount((count) => count + 1)
  })
  return () => clearInterval(id)
}, [count])
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433276-15030","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])])]),n("li",null,[n("p",null,[e("\u5662\u4E1A\u52A1\u53D8\u5316\uFF0C\u591A\u4E2Astate\u90FD\u9700\u8981\u53C2\u4E0E\u8FDB\u6765\u8FD9\u4E2A\u526F\u4F5C\u7528\u4E86\uFF0C\u9700\u8981\u8FD0\u7528"),n("code",null,"useRuducer"),e("\uFF1A")]),n("ul",null,[n("li",null,"\u76EE\u7684\u662F\u51CF\u5C11\u4F9D\u8D56\u9879\u6570\u7EC4\uFF0C\u6B64\u65F6\u4E0D\u9700\u8981\u5728\u526F\u4F5C\u7528\u91CC\u8BBF\u95EEstate\uFF0C\u8FD9\u4E2Astate\u4F1A\u5728\u7279\u5B9Aaction\u4E2D\u53BB\u6539\u53D8"),n("li",null,[e("\u5728"),n("code",null,"action.type === 'increment' "),e("\u4E2D,"),n("code",null,"count = count + step")])])])],-1),p=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`React.useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: 'increment' })
  })
  return () => clearInterval(id)
}, [])
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433277-69150"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`React.useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: 'increment' })
  })
  return () => clearInterval(id)
}, [])
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433277-69150","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),b=n("p",null,"PS: \u5982\u679C\u4E0D\u7528dispatch\u800C\u662F\u5728\u526F\u4F5C\u7528\u91CC\u9762\u8BBF\u95EE\u591A\u4E2Astate\uFF0C\u5C31\u4F1A\u5199\u51FA\u65E0\u6CD5\u6B63\u5E38\u8FD0\u4F5C\u7684\u4EE3\u7801:",-1),y=n("ul",null,[n("li",null,"\u867D\u7136deps\u6570\u7EC4\u6DFB\u52A0step\uFF0CsetCount\u4E5F\u662F\u7528\u7684\u51FD\u6570\uFF0C"),n("li",null,"\u4F46\u662F\uFF0C\u6BCF\u6B21step\u66F4\u65B0\uFF0C\u4F1A\u6E05\u9664interval\uFF0C\u7136\u540E\u6DFB\u52A0\u65B0\u7684setInterval"),n("li",null,"\u7B26\u5408\u9884\u671F\u7684\u4EE3\u7801\u9700\u8981\u4FDD\u8BC1\u4F7F\u7528\u4E00\u4E2A\u8BA1\u65F6\u5668\u3002")],-1),h=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`//WRONG
React.useEffect(() => {
  const id = setInterval(() => {
    setCount((count) => count + step)
  })
  return () => clearInterval(id)
}, [step])
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433278-23459"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`//WRONG
React.useEffect(() => {
  const id = setInterval(() => {
    setCount((count) => count + step)
  })
  return () => clearInterval(id)
}, [step])
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433278-23459","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),f=t('<p><strong>\u6700\u540E</strong></p><ol><li><p>\u622A\u56FE\uFF1A\u4EE5\u524D\u770B\u5230\u7684form\u8868\u5355\u7684reducer\u3002\u6B64\u5904\u8FD8\u4F7F\u7528\u4E86\uFF1A</p><ul><li><p>JS\u7684\u52A8\u6001\u5C5E\u6027\u540D\u3002</p></li><li><p>JS\u7684\u5BF9\u8C61\u89E3\u6784\u3002</p></li></ul></li></ol><img src="https://img.ukx.cn/abcdocker/2022/04/26/b5b506b58879d/b5b506b58879d.png" alt="image-20220426124233758" style="zoom:67%;"><ol start="2"><li><code>useState</code>\u548C<code>useReducer</code>\u7684\u4F7F\u7528\u51B3\u7B56\uFF1A</li></ol><img src="https://img.ukx.cn/abcdocker/2022/04/26/59aec5e808f36/59aec5e808f36.png" alt="image-20220426102110311">',5);function C(v,g){return a(),s(o,null,[l,d,r,u,m,p,b,y,h,f],64)}var k=c(i,[["render",C]]);export{k as default};
