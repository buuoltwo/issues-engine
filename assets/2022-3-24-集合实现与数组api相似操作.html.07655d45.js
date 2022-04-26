import{_ as t,o as e,c as o,F as c,b as a,d as n,e as s}from"./app.0702af34.js";const l={},p=a('<h3 id="\u96C6\u5408\u7684\u5C01\u88C5\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u7684\u5C01\u88C5\u4E0E\u5B9E\u73B0">\xB6</a> <span class="prefix"></span><span class="content" id="\u96C6\u5408\u7684\u5C01\u88C5\u4E0E\u5B9E\u73B0"><a class="header-anchor" href="#\u96C6\u5408\u7684\u5C01\u88C5\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> \u96C6\u5408\u7684\u5C01\u88C5\u4E0E\u5B9E\u73B0</span><span class="suffix"></span></h3><p>\u96C6\u5408\u7684\u5143\u7D20\u6709\u4E24\u4E2A\u7279\u5F81\uFF0C\u4E00\u662F\u65E0\u5E8F\uFF0C\u4E8C\u662F\u4E0D\u53EF\u91CD\u590D\u3002</p><p>JavaScript\u5185\u7F6E\u96C6\u5408\u5BF9\u8C61\u3002 new Set(Array [])</p>',3),u=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token comment"},"//\u96C6\u5408 -\u5143\u7D20\u65E0\u5E8F\uFF0C\u4E0D\u53EF\u91CD\u590D\u3002"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MySet"),s(),n("span",{class:"token punctuation"},"{"),s(`
   items `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
   
  `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" keyName "),n("span",{class:"token operator"},"="),s(" value "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"''"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"["),s("keyName"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` value
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasOwnProperty"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token comment"},"//     log(this.items[value],this.items.value)"),s(`
    `),n("span",{class:"token keyword"},"delete"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`length
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
   
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" newset "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"MySet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
newset`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'4599'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("newset"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4599"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("newset"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// newset.clear()"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("newset"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432839-87184"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const log = console.log
//\u96C6\u5408 -\u5143\u7D20\u65E0\u5E8F\uFF0C\u4E0D\u53EF\u91CD\u590D\u3002
class MySet {
   items = {}
   
  add(value) {
    if(this.has(value)) return false
    let keyName = value + ''
    this.items[keyName] = value
    return true
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  remove(value) {
    if(!this.has(value)) return false
//     log(this.items[value],this.items.value)
    delete this.items[value]
    return true
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.keys(this.items)
  }
   
}

let newset = new MySet()
newset.add(1)
newset.add(2)
newset.add("2")
newset.add(3)
newset.remove(3)
newset.add('4599')
log(newset.has(4599))
log(newset.size())
// newset.clear()
log(newset.values())

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432839-87184","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br")])],-1),r=a('<h3 id="\u96C6\u5408\u95F4\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u95F4\u7684\u64CD\u4F5C">\xB6</a> <span class="prefix"></span><span class="content" id="\u96C6\u5408\u95F4\u7684\u64CD\u4F5C"><a class="header-anchor" href="#\u96C6\u5408\u95F4\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u96C6\u5408\u95F4\u7684\u64CD\u4F5C</span><span class="suffix"></span></h3><p>\u6C42\u8BE5\u96C6\u5408\u4E0E\u5176\u4ED6\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u4EA4\u96C6\uFF0C\u9A8C\u8BC1\u662F\u5426\u4E3A\u5BF9\u65B9\u96C6\u5408\u7684\u5B50\u96C6</p>',2),i=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//\u96C6\u5408\u95F4\u7684\u5E76\u96C6"),s(`
`),n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token comment"},"//\u96C6\u5408 -\u5143\u7D20\u65E0\u5E8F\uFF0C\u4E0D\u53EF\u91CD\u590D\u3002"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MySet"),s(),n("span",{class:"token punctuation"},"{"),s(`
   items `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
   
  `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" keyName "),n("span",{class:"token operator"},"="),s(" value "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"''"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"["),s("keyName"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` value
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasOwnProperty"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token comment"},"//     log(this.items[value],this.items.value)"),s(`
    `),n("span",{class:"token keyword"},"delete"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`length
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("items"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"union"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"otherSet"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" isInstance "),n("span",{class:"token operator"},"="),s(" otherSet "),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"MySet"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isInstance"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" unionset "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" values "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" values"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      unionSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    values `),n("span",{class:"token operator"},"="),s(" otherSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    values`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(" unionSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(` unionset
  `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//\u4EA4\u96C6"),s(`
  `),n("span",{class:"token function"},"intersection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"otherSet"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" isInstance "),n("span",{class:"token operator"},"="),s(" otherSet "),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"MySet"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isInstance"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" intersectionSet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" values "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" values"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("otherSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        intersectionSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` intersectionSet
  `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//\u5DEE\u96C6 A-B x\u5C5E\u4E8EA\u4F46\u662Fx\u4E0D\u5C5E\u4E8EB"),s(`
  `),n("span",{class:"token function"},"difference"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"otherSet"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" isInstance "),n("span",{class:"token operator"},"="),s(" otherSet "),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"MySet"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isInstance"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" differenceSet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" values "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" values"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("otherSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        differenceSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` differenceSet
  `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//\u5B50\u96C6 A\u5305\u542B\u4E8EB"),s(`
  `),n("span",{class:"token function"},"isContained"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"otherSet"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" isInstance "),n("span",{class:"token operator"},"="),s(" otherSet "),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"MySet"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isInstance"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    
`),n("span",{class:"token comment"},"//     let isContained = true"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" values "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" values"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("otherSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token comment"},"//         isContained = false"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//     return isContained"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" newset "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"MySet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("newset"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"union"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432840-15596"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`//\u96C6\u5408\u95F4\u7684\u5E76\u96C6
const log = console.log
//\u96C6\u5408 -\u5143\u7D20\u65E0\u5E8F\uFF0C\u4E0D\u53EF\u91CD\u590D\u3002
class MySet {
   items = {}
   
  add(value) {
    if(this.has(value)) return false
    let keyName = value + ''
    this.items[keyName] = value
    return true
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  remove(value) {
    if(!this.has(value)) return false
//     log(this.items[value],this.items.value)
    delete this.items[value]
    return true
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.keys(this.items)
  }

  union(otherSet) {
    let isInstance = otherSet instanceof MySet
    if(!isInstance) return false
    
    let unionset = new Set()
    let values = this.values()
    for(let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    values.forEach(item => unionSet.add(item))
    
    return unionset
  }

//\u4EA4\u96C6
  intersection(otherSet) {
    let isInstance = otherSet instanceof MySet
    if(!isInstance) return false
    
    let intersectionSet = new Set()
    let values = this.values()
    for(let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

//\u5DEE\u96C6 A-B x\u5C5E\u4E8EA\u4F46\u662Fx\u4E0D\u5C5E\u4E8EB
  difference(otherSet) {
    let isInstance = otherSet instanceof MySet
    if(!isInstance) return false
    
    let differenceSet = new Set()
    let values = this.values()
    for(let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

//\u5B50\u96C6 A\u5305\u542B\u4E8EB
  isContained(otherSet) {
    let isInstance = otherSet instanceof MySet
    if(!isInstance) return false
    
//     let isContained = true
    let values = this.values()
    for(let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
//         isContained = false
        return false
      }
    }
//     return isContained
    return true
  }
}

let newset = new MySet()
log(newset.union(2))

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432840-15596","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br")])],-1),k=a('<h3 id="\u6570\u7EC4\u7684api-\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6-\u8865\u96C6-\u5E76\u96C6\u3002" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684api-\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6-\u8865\u96C6-\u5E76\u96C6\u3002">\xB6</a> <span class="prefix"></span><span class="content" id="\u6570\u7EC4\u7684api-\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6-\u8865\u96C6-\u5E76\u96C6\u3002"><a class="header-anchor" href="#\u6570\u7EC4\u7684api-\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6-\u8865\u96C6-\u5E76\u96C6\u3002" aria-hidden="true">#</a> \u6570\u7EC4\u7684API-\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6,\u8865\u96C6,\u5E76\u96C6\u3002</span><span class="suffix"></span></h3>',1),m=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token comment"},"//\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6,\u8865\u96C6,\u5E76\u96C6"),s(`
`),n("span",{class:"token keyword"},"const"),s(" arr1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"const"),s(" arr2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"intersection"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr1"),n("span",{class:"token punctuation"},","),s("arr2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//\u6C42\u4EA4\u96C6\uFF0Carr2\u7528some.\u4E00\u65E6\u4E24\u5143\u7D20\u76F8\u7B49\uFF0Cfilter\u5C31\u7528\u771F\u503C"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(" arr1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item1"),s(),n("span",{class:"token operator"},"=>"),s(" arr2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item2"),s(),n("span",{class:"token operator"},"=>"),s(" item2 "),n("span",{class:"token operator"},"==="),s(" item1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4EA4\u96C6"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s("result"),n("span",{class:"token punctuation"},")"),s(` 
  `),n("span",{class:"token keyword"},"return"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(` 
`),n("span",{class:"token function"},"intersection"),n("span",{class:"token punctuation"},"("),s("arr1"),n("span",{class:"token punctuation"},","),s("arr2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//[2,3,4]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"difference"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr1"),n("span",{class:"token punctuation"},","),s("arr2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u6C42\u8865\u96C6\uFF0C arr2\u7528every\uFF0C\u4E00\u65E6arr2\u4ECE\u6CA1\u6709\u8FD9\u4E2A\u5143\u7D20\uFF0Cfilter\u5C31\u7528\u771F\u503C"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(" arr1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item1"),s(),n("span",{class:"token operator"},"=>"),s(" arr2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"every"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item2"),s(),n("span",{class:"token operator"},"=>"),s(" item1 "),n("span",{class:"token operator"},"!=="),s(" item2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u8865\u96C6"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s("result"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"difference"),n("span",{class:"token punctuation"},"("),s("arr1"),n("span",{class:"token punctuation"},","),s(" arr2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//[1]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"union"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr1"),n("span",{class:"token punctuation"},","),s(" arr2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u6C42\u5E76\u96C6\uFF0C\u62FF\u8865\u96C6\u51FA\u6765\u518D\u548C\u6570\u7EC42\u5408\u5E76"),s(`
   `),n("span",{class:"token comment"},"// let result = difference(arr1, arr2).concat(arr2)"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(" arr1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item1"),s(),n("span",{class:"token operator"},"=>"),s(" arr2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"every"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item2"),s(),n("span",{class:"token operator"},"=>"),s(" item1 "),n("span",{class:"token operator"},"!=="),s(" item2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("arr2"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5E76\u96C6"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s("result"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"union"),n("span",{class:"token punctuation"},"("),s("arr1"),n("span",{class:"token punctuation"},","),s("arr2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//[1, 2, 3, 4, 5, 6]"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432842-73452"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const log = console.log
//\u4E24\u4E2A\u6570\u7EC4\u95F4\u7684\u4EA4\u96C6,\u8865\u96C6,\u5E76\u96C6
const arr1 = [1,2,3,4]
const arr2 = [2,3,4,5,6]

const intersection = (arr1,arr2) => {
  //\u6C42\u4EA4\u96C6\uFF0Carr2\u7528some.\u4E00\u65E6\u4E24\u5143\u7D20\u76F8\u7B49\uFF0Cfilter\u5C31\u7528\u771F\u503C
  let result = arr1.filter(item1 => arr2.some(item2 => item2 === item1))
  log(\`\u4EA4\u96C6\`,result) 
  return result
} 
intersection(arr1,arr2) //[2,3,4]

const difference = (arr1,arr2) => {
  // \u6C42\u8865\u96C6\uFF0C arr2\u7528every\uFF0C\u4E00\u65E6arr2\u4ECE\u6CA1\u6709\u8FD9\u4E2A\u5143\u7D20\uFF0Cfilter\u5C31\u7528\u771F\u503C
  let result = arr1.filter(item1 => arr2.every(item2 => item1 !== item2))
  log(\`\u8865\u96C6\`,result)
  return result
}
difference(arr1, arr2) //[1]

const union = (arr1, arr2) => {
  // \u6C42\u5E76\u96C6\uFF0C\u62FF\u8865\u96C6\u51FA\u6765\u518D\u548C\u6570\u7EC42\u5408\u5E76
   // let result = difference(arr1, arr2).concat(arr2)
  let result = arr1.filter(item1 => arr2.every(item2 => item1 !== item2)).concat(arr2)
  log(\`\u5E76\u96C6\`,result)
  return result
}
union(arr1,arr2) //[1, 2, 3, 4, 5, 6]
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432842-73452","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br")])],-1);function b(d,y){return e(),o(c,null,[p,u,r,i,k,m],64)}var h=t(l,[["render",b]]);export{h as default};
