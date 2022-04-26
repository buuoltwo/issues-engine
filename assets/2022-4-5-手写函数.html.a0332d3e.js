import{_ as t,o as e,c as o,F as c,b as a,d as n,e as s}from"./app.0702af34.js";const p={},l=a('<h2 id="_2022-4-5-\u6DF1\u62F7\u8D1D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2022-4-5-\u6DF1\u62F7\u8D1D\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-5-\u6DF1\u62F7\u8D1D\u51FD\u6570"><a class="header-anchor" href="#_2022-4-5-\u6DF1\u62F7\u8D1D\u51FD\u6570" aria-hidden="true">#</a> 2022-4-5-\u6DF1\u62F7\u8D1D\u51FD\u6570</span><span class="suffix"></span></h2>',1),u=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"deepCopy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"src"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),s("src"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"in"),s(" src"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" src"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'object'"),s(),n("span",{class:"token operator"},"&&"),s(" src"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),s(`
            result`),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"deepCopy"),n("span",{class:"token punctuation"},"("),s("src"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},")"),s(`
            result`),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" src"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'value'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"c"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'4399'"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" m "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"deepCopy"),n("span",{class:"token punctuation"},"("),s("o"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},"."),s("a "),n("span",{class:"token operator"},"==="),s(" o"),n("span",{class:"token punctuation"},"."),s("a"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token punctuation"},"."),s("c "),n("span",{class:"token operator"},"==="),s(" o"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token punctuation"},"."),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(" o"),n("span",{class:"token punctuation"},"."),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s("    "),n("span",{class:"token comment"},"// false false false"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433189-37837"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`function deepCopy(src) {
    let result = Array.isArray(src) ? [] : {}
    for(let key in src) {
        if(typeof src[key] === 'object' && src[key] !== null) {
            console.log('1')
            result[key] = deepCopy(src[key])
        }else {
            console.log("2")
            result[key] = src[key]
        }
        
    }
    return result
}
let o = { a: [1,{ key:'value' }], c:{ name:'4399' } }
let m = deepCopy(o)
console.log(m)
console.log(m.a === o.a, m.c === o.c, m.a[1] === o.a[1])    // false false false
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433189-37837","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br")])],-1),i=a('<h2 id="_2022-4-5-\u8282\u6D41\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2022-4-5-\u8282\u6D41\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-5-\u8282\u6D41\u51FD\u6570"><a class="header-anchor" href="#_2022-4-5-\u8282\u6D41\u51FD\u6570" aria-hidden="true">#</a> 2022-4-5-\u8282\u6D41\u51FD\u6570</span><span class="suffix"></span></h2>',1),r=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" $html "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),s(`documentElement
$html`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onscroll"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"e"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"myThrottle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"myThrottle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("fn"),n("span",{class:"token punctuation"},","),s(" interval"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"300")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" canRun "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("canRun"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u88AB\u8282\u6D41"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        canRun `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" arguments"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" interval"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433190-13354"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const $html = document.documentElement
$html.onscroll = e => myThrottle((e)=>{})
function myThrottle(fn, interval=300) {
    let canRun = true
    return function() {
        if(!canRun) {
            // \u88AB\u8282\u6D41
            return
        }

        canRun = false
        setTimeout(()=>{
            fn.apply(this, arguments)
        }, interval)
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433190-13354","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),k=a('<h2 id="_2022-4-5-\u9632\u6296\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2022-4-5-\u9632\u6296\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-5-\u9632\u6296\u51FD\u6570"><a class="header-anchor" href="#_2022-4-5-\u9632\u6296\u51FD\u6570" aria-hidden="true">#</a> 2022-4-5-\u9632\u6296\u51FD\u6570</span><span class="suffix"></span></h2>',1),d=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" $input "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},")"),s(`
$input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onclick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"myDebounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" target "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"myDebounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("fn"),n("span",{class:"token punctuation"},","),s(" interval"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"300")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" timer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        timer `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),s("timer"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" arguments"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" interval"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433190-20706"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const $input = document.querySelector('input')
$input.onclick = (e) => myDebounce(({ target }) => {})
function myDebounce(fn, interval=300) {
    let timer = null
    return function() {
        timer = setTimeout(()=>{
            clearTimeout(timer)
            fn.apply(this, arguments)
        }, interval)
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433190-20706","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),m=a('<h2 id="_2022-4-6-js\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_2022-4-6-js\u7EE7\u627F">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-6-js\u7EE7\u627F"><a class="header-anchor" href="#_2022-4-6-js\u7EE7\u627F" aria-hidden="true">#</a> 2022-4-6-JS\u7EE7\u627F</span><span class="suffix"></span></h2>',1),b=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Parent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'red'"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"say"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token class-name"},"Parent"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"introduce"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Child"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//\u7EE7\u627F\u5C5E\u6027"),s(`
  `),n("span",{class:"token function"},"Parent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" arguments"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"inheritPrototype"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("pa"),n("span",{class:"token punctuation"},","),s(" ch")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" prototype "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),s("pa"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},")"),s(`
  prototype`),n("span",{class:"token punctuation"},"."),s("constructor "),n("span",{class:"token operator"},"="),s(` ch
  ch`),n("span",{class:"token punctuation"},"."),s("prototype "),n("span",{class:"token operator"},"="),s(` prototype
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//\u7EE7\u627F\u539F\u578B"),s(`
`),n("span",{class:"token function"},"inheritPrototype"),n("span",{class:"token punctuation"},"("),s("Parent"),n("span",{class:"token punctuation"},","),s(" Child"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"//\u4E66\u5199\u81EA\u5DF1\u7684\u539F\u578B"),s(`
`),n("span",{class:"token class-name"},"Child"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"announce"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433190-57096"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`function Parent() {
  constructor() {}
  this.color = 'red'
  this.say = ()=>{}
}
Parent.prototype.introduce = ()=>{}
function Child() {
  //\u7EE7\u627F\u5C5E\u6027
  Parent.apply(this, arguments)
}
function inheritPrototype(pa, ch) {
  const prototype = Object.create(pa.prototype)
  prototype.constructor = ch
  ch.prototype = prototype
}
//\u7EE7\u627F\u539F\u578B
inheritPrototype(Parent, Child)
//\u4E66\u5199\u81EA\u5DF1\u7684\u539F\u578B
Child.prototype.announce = ()=>{}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433190-57096","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1),y=a('<h2 id="hook" tabindex="-1"><a class="header-anchor" href="#hook">\xB6</a> <span class="prefix"></span><span class="content" id="hook"><a class="header-anchor" href="#hook" aria-hidden="true">#</a> Hook</span><span class="suffix"></span></h2><h3 id="_2022-4-8-\u5199\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u7684\u81EA\u5B9A\u4E49hook" tabindex="-1"><a class="header-anchor" href="#_2022-4-8-\u5199\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u7684\u81EA\u5B9A\u4E49hook">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-8-\u5199\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u7684\u81EA\u5B9A\u4E49hook"><a class="header-anchor" href="#_2022-4-8-\u5199\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u7684\u81EA\u5B9A\u4E49hook" aria-hidden="true">#</a> <strong>2022-4-8-\u5199\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u7684\u81EA\u5B9A\u4E49hook</strong></span><span class="suffix"></span></h3><blockquote class="multiquote-1"><p>\u53C2\u8003<strong>useHooks</strong>\u5B9E\u73B0\uFF0C\u8FD9\u4E2AHook\u5176\u5B9E\u662FuseDarkTheme\u7684\u7EC4\u6210\u4E4B\u4E00\u3002</p></blockquote><p>\uFF08value\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u5BF9\u8C61\uFF0C\u6570\u7EC4\uFF0CuseHook\u5B9E\u73B0\u8003\u8651\u4E86value\u662Ffunction\u7684\u60C5\u51B5\uFF09</p>',4),f=n("div",{class:"language-jsx ext-jsx line-numbers-mode"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token comment"},"// Usage"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// P.S. Hook\u9700\u8981\u5728\u9876\u5C42\u4F7F\u7528"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("name"),n("span",{class:"token punctuation"},","),s(" setName"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useLocalStorage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Bob"'),n("span",{class:"token punctuation"},")"),s(`
    
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token parameter"},"e"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setName"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s(" name "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("input")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Hook"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useLocalStorage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" initialValue")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 1.State to store our value"),s(`
  	`),n("span",{class:"token comment"},"// Pass initial state function to useState so logic is only executed once"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("storedValue"),n("span",{class:"token punctuation"},","),s(" setStoredValue"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("window"),n("span",{class:"token punctuation"},"."),s("localStorage"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(` initialValue
        
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" item "),n("span",{class:"token operator"},"="),s(" localStorage"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getItem"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(`
        	`),n("span",{class:"token keyword"},"return"),s(" item "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(` initialValue
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` initialValue
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"//	2.Return a wrapped version of useState's setter function that ..."),s(`
  `),n("span",{class:"token comment"},"// ... persists the new value to localStorage."),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"setValue"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
             `),n("span",{class:"token comment"},"// Save state"),s(`
            `),n("span",{class:"token function"},"setStoredValue"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
     		`),n("span",{class:"token comment"},"// Save to local storage"),s(`
         	window`),n("span",{class:"token punctuation"},"."),s("localStorage"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setItem"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"catch"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49hook\u6700\u540E\u8FD4\u56DE\u7684\u6210\u5458"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s("storedValue"),n("span",{class:"token punctuation"},","),s(" setValue"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433191-91857"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// Usage
function App(props) {
    // P.S. Hook\u9700\u8981\u5728\u9876\u5C42\u4F7F\u7528
    const [name, setName] = useLocalStorage("name", "Bob")
    
	return <input onChange={e => setName(e.target.value)}>{ name }</input>
}
// Hook
function useLocalStorage(key, initialValue) {
	// 1.State to store our value
  	// Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(()=>{
        if(!window.localStorage) return initialValue
        
        try {
            const item = localStorage.getItem(key)
        	return item ? JSON.parse(item) : initialValue
        }catch {
            return initialValue
        }
    })
    
    //	2.Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
    const setValue = (key, value) => {
        try {
             // Save state
            setStoredValue(key, value)
     		// Save to local storage
         	window.localStorage.setItem(key, JSON.stringify(value))
        }catch(err) {
            console.log(err)
        }
    }
    
    // \u81EA\u5B9A\u4E49hook\u6700\u540E\u8FD4\u56DE\u7684\u6210\u5458
    return [storedValue, setValue]
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433191-91857","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br")])],-1),h=a('<h3 id="_2022-4-8-\u62BD\u79BB\u8F6E\u8BE2\u903B\u8F91-hook" tabindex="-1"><a class="header-anchor" href="#_2022-4-8-\u62BD\u79BB\u8F6E\u8BE2\u903B\u8F91-hook">\xB6</a> <span class="prefix"></span><span class="content" id="_2022-4-8-\u62BD\u79BB\u8F6E\u8BE2\u903B\u8F91-hook"><a class="header-anchor" href="#_2022-4-8-\u62BD\u79BB\u8F6E\u8BE2\u903B\u8F91-hook" aria-hidden="true">#</a> 2022-4-8-\u62BD\u79BB\u8F6E\u8BE2\u903B\u8F91 hook</span><span class="suffix"></span></h3>',1),v=n("div",{class:"language-jsx ext-jsx line-numbers-mode"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token comment"},"// Usage"),s(`
`),n("span",{class:"token keyword"},"import"),s(" react "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useInterval "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./useInterval.js'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fetchData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// const data = await ClientService.getallregionsumtoday()"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(`
  	`),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),s("fetchData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("source"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"q"),n("span",{class:"token operator"},"=>"),s("q"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Hook"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useRef"),n("span",{class:"token punctuation"},","),s(" useEffect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callback"),n("span",{class:"token punctuation"},","),s(" delay")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" savedCallback "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// \u4FDD\u5B58\u65B0\u56DE\u8C03"),s(`
  `),n("span",{class:"token function"},"useEffect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    savedCallback`),n("span",{class:"token punctuation"},"."),s("current "),n("span",{class:"token operator"},"="),s(` callback
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// \u5EFA\u7ACB interval"),s(`
  `),n("span",{class:"token function"},"useEffect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"tick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      savedCallback`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("delay "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" id "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),s("tick"),n("span",{class:"token punctuation"},","),s(" delay"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s("delay"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433198-33502"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// Usage
import react from 'react'
import { useInterval } from './useInterval.js'

function App(props) {

    const fetchData = async () => {
        // const data = await ClientService.getallregionsumtoday()
        if (!data) return
  	}
    useInterval(fetchData, 5000)
    return <>{source.map(q=>q.name)}</>
}

// Hook
import { useRef, useEffect } from 'react'

export function useInterval(callback, delay) {
  const savedCallback = useRef()

  // \u4FDD\u5B58\u65B0\u56DE\u8C03
  useEffect(() => {
    savedCallback.current = callback
  })

  // \u5EFA\u7ACB interval
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433198-33502","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br")])],-1);function g(w,C){return e(),o(c,null,[l,u,i,r,k,d,m,b,y,f,h,v],64)}var _=t(p,[["render",g]]);export{_ as default};
