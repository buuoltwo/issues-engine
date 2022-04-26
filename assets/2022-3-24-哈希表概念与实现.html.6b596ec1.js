import{_ as o,r as c,o as p,c as l,d as n,a as e,F as i,b as a,e as s}from"./app.0702af34.js";const u={},r=a('<h1 id="\u54C8\u5E0C\u8868\u7406\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7406\u8BBA">\xB6</a> <span class="prefix"></span><span class="content" id="\u54C8\u5E0C\u8868\u7406\u8BBA"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7406\u8BBA" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u7406\u8BBA</span><span class="suffix"></span></h1>',1),k={href:"https://zhuanlan.zhihu.com/p/144296454",target:"_blank",rel:"noopener noreferrer"},d=s("\u56FE\u6587\u5E76\u8302\u8BE6\u89E3\u6570\u636E\u7ED3\u6784\u4E4B\u54C8\u5E0C\u8868"),m={href:"https://www.jianshu.com/p/6e88d63061f2",target:"_blank",rel:"noopener noreferrer"},b=s("\u6570\u636E\u7ED3\u6784(\u4E5D)\u4E4B\u54C8\u5E0C\u8868\u7406\u8BBA"),h=a('<h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3">\xB6</a> <span class="prefix"></span><span class="content" id="\u5C0F\u7ED3"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</span><span class="suffix"></span></h2><ol><li>\u54C8\u5E0C\u8868\u662F\u6570\u7EC4\u5B9E\u73B0\u7684\uFF0C\u67E5\u627E\u548C\u63D2\u5165\u90FD\u975E\u5E38\u5FEB</li><li>\u54C8\u5E0C\u5316\u662F\u8BF4\u4E00\u79CD\u8BA9\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57\u7684\u65B9\u6CD5\uFF0C\u952E/\u5173\u952E\u5B57\u8FD9\u79CD\u82F1\u6587\u5B57\u7B26\u4E32\u80FD\u591F\u8F6C\u4E3A\u6570\u5B57\u4F5C\u4E3A\u6570\u7EC4\u4E0B\u6807\u3002\u54C8\u5E0C\u5316\u53EF\u80FD\u4F1A\u9020\u6210\u51B2\u7A81\u3002\u56E0\u6B64\uFF0C\u54C8\u5E0C\u8868\u867D\u7136\u662F\u4E2A\u6570\u7EC4\uFF0C\u5982\u679C\u89E3\u51B3\u51B2\u7A81\u7684\u65F6\u5019\u4F7F\u7528<strong>\u62C9\u94FE\u6CD5</strong>\uFF0C\u5B83\u7684\u5143\u7D20\u662F\u4E00\u4E2A\u5F15\u7528\uFF0C\u4E5F\u5373\u6570\u7EC4\u6216\u8005\u94FE\u8868\uFF08<code>bucket</code>\uFF0C\u6876\uFF09\u3002\u6B64\u5916\u89E3\u51B3\u51B2\u7A81\u7684\u65B9\u6CD5\u8FD8\u6709<strong>\u5F00\u653E\u5730\u5740\u6CD5</strong>\u3002</li><li>\u54C8\u5E0C\u51FD\u6570 \u662F\u54C8\u5E0C\u5316\u7684\u624B\u6BB5\uFF0C\u6D89\u53CA\u970D\u7EB3\u6CD5\u5219\u3002</li></ol>',2),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u54C8\u5E0C\u51FD\u6570"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"hashFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("str"),n("span",{class:"token punctuation"},","),s(" max")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u521D\u59CB\u5316hashCode\u7684\u503C"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" hashCode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`

    `),n("span",{class:"token comment"},"// 2.\u970D\u7EB3\u7B97\u6CD5, \u6765\u8BA1\u7B97hashCode\u7684\u6570\u503C"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" str"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        hashCode `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"37"),s(),n("span",{class:"token operator"},"*"),s(" hashCode "),n("span",{class:"token operator"},"+"),s(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 3.\u53D6\u6A21\u8FD0\u7B97"),s(`
    hashCode `),n("span",{class:"token operator"},"="),s(" hashCode "),n("span",{class:"token operator"},"%"),s(` max
    `),n("span",{class:"token keyword"},"return"),s(` hashCode
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432766-9468"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u54C8\u5E0C\u51FD\u6570
function hashFunc(str, max) {
    // 1.\u521D\u59CB\u5316hashCode\u7684\u503C
    var hashCode = 0

    // 2.\u970D\u7EB3\u7B97\u6CD5, \u6765\u8BA1\u7B97hashCode\u7684\u6570\u503C
    for (var i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    // 3.\u53D6\u6A21\u8FD0\u7B97
    hashCode = hashCode % max
    return hashCode
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432766-9468","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),f=a('<h1 id="\u54C8\u5E0C\u8868\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u5B9E\u73B0">\xB6</a> <span class="prefix"></span><span class="content" id="\u54C8\u5E0C\u8868\u5B9E\u73B0"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u5B9E\u73B0" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u5B9E\u73B0</span><span class="suffix"></span></h1><p>\u4EE5\u6570\u7EC4bucket \u4E3A\u4F8B\uFF0C\u54C8\u5E0C\u8868\u5B58\u50A8<code>[key,value]</code>\u7684\u65F6\u5019\uFF0C\u6839\u636Ekey\u7684\u54C8\u5E0C\u51FD\u6570\u7ED3\u679C\u5F97\u5230\u6570\u7EC4\u4E0B\u6807\u503C\u627E\u5230bucket\uFF0C\u9996\u5148\u6839\u636Ekey\u770B\u770Bbucket\u6709\u6CA1\u6709\u5B58\u50A8\u8FC7\uFF0C\u662F\u4FEE\u6539\u5C31\u6807\u8BB0\u4E00\u4E0B<code>flag = true</code>\u3002\u662F\u65B0\u589E\u7684\u8BDD<code>bucket.push(Tuple [key,value])</code>,\u7136\u540E\u901A\u8FC7<code>!flag</code>\u6539\u4E00\u4E0B\u54C8\u5E0C\u8868\u7684count\u5C5E\u6027\u3002</p><h2 id="\u54C8\u5E0C\u8868\u7684\u7EC4\u6210-\u542Bhashfunc" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u7EC4\u6210-\u542Bhashfunc">\xB6</a> <span class="prefix"></span><span class="content" id="\u54C8\u5E0C\u8868\u7684\u7EC4\u6210-\u542Bhashfunc"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u7EC4\u6210-\u542Bhashfunc" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u7684\u7EC4\u6210\uFF08\u542BhashFunc\uFF09</span><span class="suffix"></span></h2>',3),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u521B\u5EFAHashTable\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"HashTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u5B9A\u4E49\u5C5E\u6027"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("storage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`

    `),n("span",{class:"token comment"},"// \u5B9A\u4E49\u76F8\u5173\u65B9\u6CD5"),s(`
    `),n("span",{class:"token comment"},"// \u54C8\u5E0C\u51FD\u6570"),s(`
    `),n("span",{class:"token class-name"},"HashTable"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"hashFunc"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("str"),n("span",{class:"token punctuation"},","),s(" max")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1.\u521D\u59CB\u5316hashCode\u7684\u503C"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" hashCode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`

        `),n("span",{class:"token comment"},"// 2.\u970D\u7EB3\u7B97\u6CD5, \u6765\u8BA1\u7B97hashCode\u7684\u6570\u503C"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" str"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            hashCode `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"37"),s(),n("span",{class:"token operator"},"*"),s(" hashCode "),n("span",{class:"token operator"},"+"),s(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      
        `),n("span",{class:"token comment"},"// 3.\u53D6\u6A21\u8FD0\u7B97"),s(`
        hashCode `),n("span",{class:"token operator"},"="),s(" hashCode "),n("span",{class:"token operator"},"%"),s(` max
        `),n("span",{class:"token keyword"},"return"),s(` hashCode
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432778-64131"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u521B\u5EFAHashTable\u6784\u9020\u51FD\u6570
function HashTable() {
    // \u5B9A\u4E49\u5C5E\u6027
    this.storage = []
    this.count = 0
    this.limit = 8

    // \u5B9A\u4E49\u76F8\u5173\u65B9\u6CD5
    // \u54C8\u5E0C\u51FD\u6570
    HashTable.prototype.hashFunc = function(str, max) {
        // 1.\u521D\u59CB\u5316hashCode\u7684\u503C
        var hashCode = 0

        // 2.\u970D\u7EB3\u7B97\u6CD5, \u6765\u8BA1\u7B97hashCode\u7684\u6570\u503C
        for (var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
      
        // 3.\u53D6\u6A21\u8FD0\u7B97
        hashCode = hashCode % max
        return hashCode
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432778-64131","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br")])],-1),w=a('<h2 id="\u54C8\u5E0C\u8868\u7684\u63D2\u5165\u548C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u63D2\u5165\u548C\u4FEE\u6539">\xB6</a> <span class="prefix"></span><span class="content" id="\u54C8\u5E0C\u8868\u7684\u63D2\u5165\u548C\u4FEE\u6539"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u63D2\u5165\u548C\u4FEE\u6539" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u7684\u63D2\u5165\u548C\u4FEE\u6539</span><span class="suffix"></span></h2>',1),C=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u63D2\u5165\u6570\u636E\u65B9\u6CD5"),s(`
`),n("span",{class:"token class-name"},"HashTable"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"put"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u83B7\u53D6key\u5BF9\u5E94\u7684index"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hashFunc"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// 2.\u53D6\u51FA\u6570\u7EC4(\u4E5F\u53EF\u4EE5\u4F7F\u7528\u94FE\u8868)"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" bucket "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("storage"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token comment"},"// 3.\u5224\u65AD\u8FD9\u4E2A\u6570\u7EC4\u662F\u5426\u5B58\u5728"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bucket "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 3.1\u521B\u5EFA\u6876"),s(`
        bucket `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("storage"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` bucket
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),s("bucket"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"// 4.\u5224\u65AD\u662F\u65B0\u589E\u8FD8\u662F\u4FEE\u6539\u539F\u6765\u7684\u503C."),s(`
    `),n("span",{class:"token keyword"},"var"),s(" override "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" bucket"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" tuple "),n("span",{class:"token operator"},"="),s(" bucket"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tuple"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            tuple`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` value
            override `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// 5.\u5982\u679C\u662F\u65B0\u589E, \u524D\u4E00\u6B65\u6CA1\u6709\u8986\u76D6"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("override"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        bucket`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count"),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432780-84860"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u63D2\u5165\u6570\u636E\u65B9\u6CD5
HashTable.prototype.put = function (key, value) {
    // 1.\u83B7\u53D6key\u5BF9\u5E94\u7684index
    var index = this.hashFunc(key, this.limit)

    // 2.\u53D6\u51FA\u6570\u7EC4(\u4E5F\u53EF\u4EE5\u4F7F\u7528\u94FE\u8868)
    var bucket = this.storage[index]

    // 3.\u5224\u65AD\u8FD9\u4E2A\u6570\u7EC4\u662F\u5426\u5B58\u5728
    if (bucket === undefined) {
        // 3.1\u521B\u5EFA\u6876
        bucket = []
        this.storage[index] = bucket
    }
    alert(bucket)
    
    // 4.\u5224\u65AD\u662F\u65B0\u589E\u8FD8\u662F\u4FEE\u6539\u539F\u6765\u7684\u503C.
    var override = false
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        if (tuple[0] === key) {
            tuple[1] = value
            override = true
        }
    }
    
    // 5.\u5982\u679C\u662F\u65B0\u589E, \u524D\u4E00\u6B65\u6CA1\u6709\u8986\u76D6
    if (!override) {
        bucket.push([key, value])
        this.count++
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432780-84860","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br")])],-1),x=a('<h2 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5">\xB6</a> <span class="prefix"></span><span class="content" id="\u5176\u4ED6\u65B9\u6CD5"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u65B9\u6CD5</span><span class="suffix"></span></h2><p>https://www.jianshu.com/p/70c11dc8ec98</p><h2 id="\u54C8\u5E0C\u8868\u7684\u6269\u5BB9-\u542B\u54C8\u5E0C\u8868\u7684\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u6269\u5BB9-\u542B\u54C8\u5E0C\u8868\u7684\u5220\u9664">\xB6</a> <span class="prefix"></span><span class="content" id="\u54C8\u5E0C\u8868\u7684\u6269\u5BB9-\u542B\u54C8\u5E0C\u8868\u7684\u5220\u9664"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u6269\u5BB9-\u542B\u54C8\u5E0C\u8868\u7684\u5220\u9664" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u7684\u6269\u5BB9(\u542B\u54C8\u5E0C\u8868\u7684\u5220\u9664)</span><span class="suffix"></span></h2>',3),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u589E\u5220\u7684\u65F6\u5019\u9700\u8981\u54C8\u5E0C\u8868\u6269\u5BB9"),s(`
`),n("span",{class:"token class-name"},"HashTable"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"resize"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newLimit"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u4FDD\u5B58\u65E7\u7684\u6570\u7EC4\u5185\u5BB9"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" oldStorage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`storage

    `),n("span",{class:"token comment"},"// 2.\u91CD\u7F6E\u5C5E\u6027"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit "),n("span",{class:"token operator"},"="),s(` newLimit
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("storage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token comment"},"// 3.\u904D\u5386\u65E7\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u6570\u636E\u9879, \u5E76\u4E14\u91CD\u65B0\u63D2\u5165\u5230\u54C8\u5E0C\u8868\u4E2D"),s(`
    oldStorage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"bucket"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1.bucket\u4E3Anull, \u8BF4\u660E\u8FD9\u91CC\u9762\u6CA1\u6709\u6570\u636E"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bucket "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// 2.bucket\u4E2D\u6709\u6570\u636E, \u90A3\u4E48\u5C06\u91CC\u9762\u7684\u6570\u636E\u91CD\u65B0\u54C8\u5E0C\u5316\u63D2\u5165"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" bucket"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"var"),s(" tuple "),n("span",{class:"token operator"},"="),s(" bucket"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("tuple"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" tuple"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bind"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432783-24607"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u589E\u5220\u7684\u65F6\u5019\u9700\u8981\u54C8\u5E0C\u8868\u6269\u5BB9
HashTable.prototype.resize = function (newLimit) {
    // 1.\u4FDD\u5B58\u65E7\u7684\u6570\u7EC4\u5185\u5BB9
    var oldStorage = this.storage

    // 2.\u91CD\u7F6E\u5C5E\u6027
    this.limit = newLimit
    this.count = 0
    this.storage = []

    // 3.\u904D\u5386\u65E7\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u6570\u636E\u9879, \u5E76\u4E14\u91CD\u65B0\u63D2\u5165\u5230\u54C8\u5E0C\u8868\u4E2D
    oldStorage.forEach(function (bucket) {
        // 1.bucket\u4E3Anull, \u8BF4\u660E\u8FD9\u91CC\u9762\u6CA1\u6709\u6570\u636E
        if (bucket == null) {
            return
        }

        // 2.bucket\u4E2D\u6709\u6570\u636E, \u90A3\u4E48\u5C06\u91CC\u9762\u7684\u6570\u636E\u91CD\u65B0\u54C8\u5E0C\u5316\u63D2\u5165
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            this.put(tuple[0], tuple[1])
        }
    }).bind(this)
}
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432783-24607","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br")])],-1),_=n("p",null,"\u7F29\u5BB9\u5B9E\u9645\u6267\u884C\uFF1A",-1),j=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u54C8\u5E0C\u8868\u5220\u9664\u6570\u636E"),s(`
`),n("span",{class:"token comment"},"// \u6839\u636E\u5BF9\u5E94\u7684key, \u5220\u9664\u5BF9\u5E94\u7684key/value"),s(`
`),n("span",{class:"token class-name"},"HashTable"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"remove"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u83B7\u53D6key\u5BF9\u5E94\u7684index"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hashFunc"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// 2.\u83B7\u53D6\u5BF9\u5E94\u7684bucket"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" bucket "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("storage"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token comment"},"// 3.\u5224\u65AD\u540C\u662F\u5426\u4E3Anull, \u4E3Anull\u5219\u8BF4\u660E\u6CA1\u6709\u5BF9\u5E94\u7684\u6570\u636E"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bucket "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 4.\u904D\u5386bucket, \u5BFB\u627E\u5BF9\u5E94\u7684\u6570\u636E"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" bucket"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" tuple "),n("span",{class:"token operator"},"="),s(" bucket"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tuple"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            bucket`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count"),n("span",{class:"token operator"},"--"),s(`

            `),n("span",{class:"token comment"},"// \u7F29\u5C0F\u6570\u7EC4\u7684\u5BB9\u91CF"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"7"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"0.25"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"var"),s(" primeNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPrime"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("limit "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("primeNum"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" tuple"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 5.\u6765\u5230\u8BE5\u4F4D\u7F6E, \u8BF4\u660E\u6CA1\u6709\u5BF9\u5E94\u7684\u6570\u636E, \u90A3\u4E48\u8FD4\u56DEnull"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432784-45309"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u54C8\u5E0C\u8868\u5220\u9664\u6570\u636E
// \u6839\u636E\u5BF9\u5E94\u7684key, \u5220\u9664\u5BF9\u5E94\u7684key/value
HashTable.prototype.remove = function (key) {
    // 1.\u83B7\u53D6key\u5BF9\u5E94\u7684index
    var index = this.hashFunc(key, this.limit)

    // 2.\u83B7\u53D6\u5BF9\u5E94\u7684bucket
    var bucket = this.storage[index]

    // 3.\u5224\u65AD\u540C\u662F\u5426\u4E3Anull, \u4E3Anull\u5219\u8BF4\u660E\u6CA1\u6709\u5BF9\u5E94\u7684\u6570\u636E
    if (bucket == null) {
        return null
    }

    // 4.\u904D\u5386bucket, \u5BFB\u627E\u5BF9\u5E94\u7684\u6570\u636E
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        if (tuple[0] === key) {
            bucket.splice(i, 1)
            this.count--

            // \u7F29\u5C0F\u6570\u7EC4\u7684\u5BB9\u91CF
            if (this.limit > 7 && this.count < this.limit * 0.25) {
                var primeNum = this.getPrime(Math.floor(this.limit / 2))
                this.resize(primeNum)
            }
        }
        return tuple[1]
    }

    // 5.\u6765\u5230\u8BE5\u4F4D\u7F6E, \u8BF4\u660E\u6CA1\u6709\u5BF9\u5E94\u7684\u6570\u636E, \u90A3\u4E48\u8FD4\u56DEnull
    return null
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432784-45309","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br")])],-1),T=n("p",null,"resize\u6267\u884C\u524D\u9700\u9884\u64CD\u4F5C\u3002",-1),N=n("p",null,"1.\u5224\u65AD\u4E00\u4E2A\u6570\u662F\u8D28\u6570:",-1),$=n("p",null,"\u2460\u6839\u636E\u5B9A\u4E49\u53BB\u5199",-1),E=n("p",null,"\u2461temp\u53D6\u5F00\u65B9\u53D6\u6574\uFF0C\u53D6\u6A21\u4E3A0\u5219\u4E0D\u4E3A\u8D28\u6570\uFF08\u4E00\u4E2A\u6570\u7684\u4E24\u4E2A\u516C\u56E0\u6570\u5FC5\u7136\u4E00\u4E2A\u5C0F\u4E8Etemp,\u4E00\u4E2A\u5927\u4E8Etemp\uFF0C\u6839\u636Etemp\u5FAA\u73AF\u8DB3\u591F\u3002\uFF09",-1),F=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isPrime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u83B7\u53D6\u5E73\u65B9\u6839"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sqrt"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// 2.\u5FAA\u73AF\u5224\u65AD"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" temp"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"%"),s(" i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u83B7\u53D6\u8D28\u6570"),s(`
`),n("span",{class:"token class-name"},"HashTable"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"getPrime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isPrime"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        num`),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` num
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432785-9072"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`function isPrime(num) {
    // 1.\u83B7\u53D6\u5E73\u65B9\u6839
    var temp = parseInt(Math.sqrt(num))

    // 2.\u5FAA\u73AF\u5224\u65AD
    for (var i = 2; i <= temp; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
// \u83B7\u53D6\u8D28\u6570
HashTable.prototype.getPrime = function (num) {
    while (!isPrime(num)) {
        num++
    }
    return num
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432785-9072","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1);function I(H,P){const t=c("ExternalLinkIcon");return p(),l(i,null,[r,n("p",null,[n("a",k,[d,e(t)])]),n("p",null,[n("a",m,[b,e(t)])]),h,y,f,v,w,C,x,g,_,j,T,N,$,E,F],64)}var B=o(u,[["render",I]]);export{B as default};
