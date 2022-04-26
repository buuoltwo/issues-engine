import{_ as e,o as t,c as o,F as c,b as a,d as n,e as s}from"./app.0702af34.js";const l={},p=a('<h1 id="\u4E8C\u53C9\u6811\u4E0E\u4E8C\u53C9\u641C\u7D22\u6811-bst" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u4E0E\u4E8C\u53C9\u641C\u7D22\u6811-bst">\xB6</a> <span class="prefix"></span><span class="content" id="\u4E8C\u53C9\u6811\u4E0E\u4E8C\u53C9\u641C\u7D22\u6811-bst"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u4E0E\u4E8C\u53C9\u641C\u7D22\u6811-bst" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u4E0E\u4E8C\u53C9\u641C\u7D22\u6811(BST)</span><span class="suffix"></span></h1><h2 id="\u524D\u77BB" tabindex="-1"><a class="header-anchor" href="#\u524D\u77BB">\xB6</a> <span class="prefix"></span><span class="content" id="\u524D\u77BB"><a class="header-anchor" href="#\u524D\u77BB" aria-hidden="true">#</a> \u524D\u77BB</span><span class="suffix"></span></h2><ul><li>\u4E8C\u53C9\u6811\u7684\u7279\u5F81 <ul><li>[\u9898]\u8282\u70B9\u6570\u8BA1\u7B97\uFF1B</li><li>\u6EE1\u4E8C\u53C9\u6811/\u5B8C\u7F8E\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF1B</li><li>\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF1B</li></ul></li><li>\u4EC0\u4E48\u662F\u4E8C\u53C9\u641C\u7D22\u6811(Binary Search Tree) <ul><li>BST\u7684\u67E5\u627E\u662F\u5F88\u5FEB\u7684</li><li>BST\u7684\u5220\u9664\u662F\u975E\u5E38\u9EBB\u70E6\u7684</li><li>BST\u7684\u529F\u80FD\u5B9E\u73B0</li></ul></li></ul><h2 id="\u4E8C\u53C9\u6811\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u57FA\u672C\u6982\u5FF5">\xB6</a> <span class="prefix"></span><span class="content" id="\u4E8C\u53C9\u6811\u57FA\u672C\u6982\u5FF5"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u57FA\u672C\u6982\u5FF5</span><span class="suffix"></span></h2><h3 id="\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#\u7279\u5F81">\xB6</a> <span class="prefix"></span><span class="content" id="\u7279\u5F81"><a class="header-anchor" href="#\u7279\u5F81" aria-hidden="true">#</a> \u7279\u5F81</span><span class="suffix"></span></h3><details><summary>\u6682\u7F3A</summary> - [\u9898]\u8282\u70B9\u6570\u8BA1\u7B97\uFF1B - \u6EE1\u4E8C\u53C9\u6811/\u5B8C\u7F8E\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF1B - \u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF1B </details><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3">\xB6</a> <span class="prefix"></span><span class="content" id="\u5C0F\u7ED3"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</span><span class="suffix"></span></h3><ol><li>\u6700\u5E95\u90E8\u6CA1\u6709\u5EF6\u5C55\u4EFB\u4F55\u8282\u70B9\u7684\u662F\u53F6\u8282\u70B9</li><li><strong>\u5EA6\u4E3A2</strong>\u7684\u975E\u53F6\u8282\u70B9\uFF1A\u8282\u70B9\u67092\u4E2A\u5411\u4E0B\u5EF6\u5C55\u7684\u8282\u70B9</li><li>\u6EE1\u4E8C\u53C9\u6811\uFF1A\u5373 \u6240\u6709\u7684\u975E\u53F6\u8282\u70B9\u5EA6\u4E3A2</li></ol><h2 id="bst\u7279\u70B9-\u5C01\u88C5\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#bst\u7279\u70B9-\u5C01\u88C5\u4E0E\u5B9E\u73B0">\xB6</a> <span class="prefix"></span><span class="content" id="bst\u7279\u70B9-\u5C01\u88C5\u4E0E\u5B9E\u73B0"><a class="header-anchor" href="#bst\u7279\u70B9-\u5C01\u88C5\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> BST\u7279\u70B9\uFF0C\u5C01\u88C5\u4E0E\u5B9E\u73B0</span><span class="suffix"></span></h2><h3 id="\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49">\xB6</a> <span class="prefix"></span><span class="content" id="\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49"><a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49</span><span class="suffix"></span></h3><p>\u4E8C\u53C9\u641C\u7D22\u6811\u662F\u4E00\u9897\u4E8C\u53C9\u6811, \u53EF\u4EE5\u4E3A\u7A7A\uFF1B\u5982\u679C\u4E0D\u4E3A\u7A7A\uFF0C\u6EE1\u8DB3\u4EE5\u4E0B\u6027\u8D28\uFF1A</p><ul><li>\u975E\u7A7A\u5DE6\u5B50\u6811\u7684\u6240\u6709\u952E\u503C\u5C0F\u4E8E\u5176\u6839\u7ED3\u70B9\u7684\u952E\u503C\u3002</li><li>\u975E\u7A7A\u53F3\u5B50\u6811\u7684\u6240\u6709\u952E\u503C\u5927\u4E8E\u5176\u6839\u7ED3\u70B9\u7684\u952E\u503C\u3002</li><li>\u5DE6\u3001\u53F3\u5B50\u6811\u672C\u8EAB\u4E5F\u90FD\u662F\u4E8C\u53C9\u641C\u7D22\u6811\u3002</li></ul><h4 id="bst\u7528\u94FE\u8868\u5B9E\u73B0\u662F\u8F83\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#bst\u7528\u94FE\u8868\u5B9E\u73B0\u662F\u8F83\u4F73\u5B9E\u8DF5">\xB6</a> <span class="prefix"></span><span class="content" id="bst\u7528\u94FE\u8868\u5B9E\u73B0\u662F\u8F83\u4F73\u5B9E\u8DF5"><a class="header-anchor" href="#bst\u7528\u94FE\u8868\u5B9E\u73B0\u662F\u8F83\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> BST\u7528\u94FE\u8868\u5B9E\u73B0\u662F\u8F83\u4F73\u5B9E\u8DF5</span><span class="suffix"></span></h4><ul><li>BST\u7684\u7EC4\u6210 <ul><li>Node : { left:Node, key:any, right:Node }</li><li>root : Node</li></ul></li></ul>',14),r=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u521B\u5EFA\u7ED3\u70B9\u6784\u9020\u51FD\u6570"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(` key
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BinarySearchTree"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u4FDD\u5B58\u6839\u7684\u5C5E\u6027"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432855-47265"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
class Node {
  constructor(key) {
    // \u521B\u5EFA\u7ED3\u70B9\u6784\u9020\u51FD\u6570
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  // \u4FDD\u5B58\u6839\u7684\u5C5E\u6027
    this.root = null
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432855-47265","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),i=a('<ul><li>BST\u7684\u67E5\u627E\u662F\u5F88\u5FEB\u7684</li><li>BST\u7684\u5220\u9664\u662F\u975E\u5E38\u9EBB\u70E6\u7684</li></ul><h3 id="\u5411\u6811\u4E2D\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5411\u6811\u4E2D\u63D2\u5165\u6570\u636E">\xB6</a> <span class="prefix"></span><span class="content" id="\u5411\u6811\u4E2D\u63D2\u5165\u6570\u636E"><a class="header-anchor" href="#\u5411\u6811\u4E2D\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u5411\u6811\u4E2D\u63D2\u5165\u6570\u636E</span><span class="suffix"></span></h3><ul><li>\u4F7F\u7528\u9012\u5F52\u63D2\u5165\u6570\u636E\u662F\u6700\u65B9\u4FBF\u7684\u65B9\u6CD5</li></ul>',3),u=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(` key
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BinarySearchTree"),s(),n("span",{class:"token punctuation"},"{"),s(`
  root `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token comment"},"//\u63D2\u5165\u6570\u636E\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5"),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"//this.root\u5B58\u5728\uFF1F"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u9012\u5F52\u5F00\u59CB"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u5728\u9012\u5F52\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u63D2\u5165\u7684\u6570\u636E\u8981\u4E48\u5F80\u5DE6\u8D70\uFF0C\u8981\u4E48\u5F80\u53F3\u8D70\u3002\u603B\u80FD\u63D2\u5165\u4E2D\u4F5C\u53F6\u5B50\u5143\u7D20\u7684"),s(`
  `),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" newNode")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s("right "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` node
    
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("newNode"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//\u5411\u5DE6\u67E5\u627E"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9012\u5F52\u7ED3\u675F"),s(`
        node`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9012\u5F52\u7EE7\u7EED"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("newNode"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},">"),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//\u5411\u53F3\u67E5\u627E"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u952E\u503C\u76F8\u7B49"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432856-67439"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  root = null
  
  //\u63D2\u5165\u6570\u636E\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5
  insert(key) {
    let newNode = new Node(key)
    
    //this.root\u5B58\u5728\uFF1F
    if(!this.root) {
      this.root = newNode
    }else {
      // \u9012\u5F52\u5F00\u59CB
      this.insertNode(this.root, newNode)
    }
  }
    //\u5728\u9012\u5F52\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u63D2\u5165\u7684\u6570\u636E\u8981\u4E48\u5F80\u5DE6\u8D70\uFF0C\u8981\u4E48\u5F80\u53F3\u8D70\u3002\u603B\u80FD\u63D2\u5165\u4E2D\u4F5C\u53F6\u5B50\u5143\u7D20\u7684
  insertNode(node, newNode) {
    let { key, left,right } = node
    
    if(newNode.key < key) {
      //\u5411\u5DE6\u67E5\u627E
      if(node.left === null) {
        // \u9012\u5F52\u7ED3\u675F
        node.left = newNode
      }else {
        // \u9012\u5F52\u7EE7\u7EED
        this.insertNode(node.left, newNode)
      }
    }else if(newNode.key > key){
      //\u5411\u53F3\u67E5\u627E
      if(node.right === null) {
        node.right = newNode
      }else {
        this.insertNode(node.right, newNode)
      }
    }else {
      console.error(\`\u952E\u503C\u76F8\u7B49\`)
    }
  }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432856-67439","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br")])],-1),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u6D4B\u8BD5\u4EE3\u7801"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(` key
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BinarySearchTree"),s(),n("span",{class:"token punctuation"},"{"),s(`
  root `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token comment"},"//\u63D2\u5165\u6570\u636E\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5"),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"//this.root\u5B58\u5728\uFF1F"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u9012\u5F52\u5F00\u59CB"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u5728\u9012\u5F52\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u63D2\u5165\u7684\u6570\u636E\u8981\u4E48\u5F80\u5DE6\u8D70\uFF0C\u8981\u4E48\u5F80\u53F3\u8D70\u3002\u603B\u80FD\u63D2\u5165\u4E2D\u4F5C\u53F6\u5B50\u5143\u7D20\u7684"),s(`
  `),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" newNode")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s("right "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` node
    
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("newNode"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//\u5411\u5DE6\u67E5\u627E"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9012\u5F52\u7ED3\u675F"),s(`
        node`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9012\u5F52\u7EE7\u7EED"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("newNode"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},">"),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//\u5411\u53F3\u67E5\u627E"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" newNode"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u952E\u503C\u76F8\u7B49"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432857-69333"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u6D4B\u8BD5\u4EE3\u7801
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  root = null
  
  //\u63D2\u5165\u6570\u636E\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5
  insert(key) {
    let newNode = new Node(key)
    
    //this.root\u5B58\u5728\uFF1F
    if(!this.root) {
      this.root = newNode
    }else {
      // \u9012\u5F52\u5F00\u59CB
      this.insertNode(this.root, newNode)
    }
  }
    //\u5728\u9012\u5F52\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u63D2\u5165\u7684\u6570\u636E\u8981\u4E48\u5F80\u5DE6\u8D70\uFF0C\u8981\u4E48\u5F80\u53F3\u8D70\u3002\u603B\u80FD\u63D2\u5165\u4E2D\u4F5C\u53F6\u5B50\u5143\u7D20\u7684
  insertNode(node, newNode) {
    let { key, left,right } = node
    
    if(newNode.key < key) {
      //\u5411\u5DE6\u67E5\u627E
      if(node.left === null) {
        // \u9012\u5F52\u7ED3\u675F
        node.left = newNode
      }else {
        // \u9012\u5F52\u7EE7\u7EED
        this.insertNode(node.left, newNode)
      }
    }else if(newNode.key > key){
      //\u5411\u53F3\u67E5\u627E
      if(node.right === null) {
        node.right = newNode
      }else {
        this.insertNode(node.right, newNode)
      }
    }else {
      console.error(\`\u952E\u503C\u76F8\u7B49\`)
    }
  }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432857-69333","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br")])],-1),d=a('<h3 id="bst-\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#bst-\u904D\u5386">\xB6</a> <span class="prefix"></span><span class="content" id="bst-\u904D\u5386"><a class="header-anchor" href="#bst-\u904D\u5386" aria-hidden="true">#</a> BST-\u904D\u5386</span><span class="suffix"></span></h3><p>\u4E09\u79CD\u904D\u5386\u65B9\u5F0F\uFF1A</p><img src="https://img.ukx.cn/abcdocker/2022/04/14/7591b0adb1dd9/7591b0adb1dd9.png" alt="image-20220414113416333" style="zoom:50%;">',3),m=n("details",null,[n("summary",null,[n("b",null,"\u4E2D\u5E8F\u904D\u5386"),s("\u7684\u4E2D\u662F\u5565\u542B\u4E49\uFF1A ")]),n("ol",null,[n("li",null,"\u5B9E\u73B0\u5C42\u9762\u4E0A-handler\u5728\u9012\u5F52\u4EE3\u7801\u4E2D\u7684\u4F4D\u7F6E\uFF1B"),n("li",null,"\u7ED3\u679C\u5C42\u9762\u4E0A-\u6839\u8282\u70B9\u5728\u904D\u5386\u4E4B\u540E\u4F1A\u5728\u4EC0\u4E48\u4F4D\u7F6E\u51FA\u73B0")]),n("iframe",{width:"80%",height:"420px",src:"//player.bilibili.com/player.html?aid=89972618&bvid=BV1x7411L7Q7&cid=153660353&page=90",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")],-1),b=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u5148\u5E8F\u904D\u5386"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"preOrderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"handler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"preOrderTranversalNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"preOrderTranversalNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" handler")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1.\u6253\u5370\u5F53\u524D\u7ECF\u8FC7\u7684\u8282\u70B9"),s(`
        `),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// 2.\u904D\u5386\u6240\u6709\u7684\u5DE6\u5B50\u6811"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"preOrderTranversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// 3.\u904D\u5386\u6240\u6709\u7684\u53F3\u5B50\u6811"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"preOrderTranversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u4E2D\u5E8F\u904D\u5386"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"inOrderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"handler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"inOrderTraversalNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"inOrderTraversalNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" handler")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"inOrderTraversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// 2.\u6253\u5370\u5F53\u524D\u7ECF\u8FC7\u7684\u8282\u70B9"),s(`
        `),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"inOrderTraversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u540E\u5E8F\u904D\u5386"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"postOrderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"handler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"postOrderTraversalNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"postOrderTraversalNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" handler")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"postOrderTraversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"postOrderTraversalNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432859-87197"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u5148\u5E8F\u904D\u5386
BinarySerachTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTranversalNode(this.root, handler)
}

BinarySerachTree.prototype.preOrderTranversalNode = function (node, handler) {
    if (node !== null) {
        // 1.\u6253\u5370\u5F53\u524D\u7ECF\u8FC7\u7684\u8282\u70B9
        handler(node.key)
        // 2.\u904D\u5386\u6240\u6709\u7684\u5DE6\u5B50\u6811
        this.preOrderTranversalNode(node.left, handler)
        // 3.\u904D\u5386\u6240\u6709\u7684\u53F3\u5B50\u6811
        this.preOrderTranversalNode(node.right, handler)
    }
}

// \u4E2D\u5E8F\u904D\u5386
BinarySerachTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler)
}

BinarySerachTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
        this.inOrderTraversalNode(node.left, handler)
        // 2.\u6253\u5370\u5F53\u524D\u7ECF\u8FC7\u7684\u8282\u70B9
        handler(node.key)
        this.inOrderTraversalNode(node.right, handler)
    }
}

// \u540E\u5E8F\u904D\u5386
BinarySerachTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler)
}

BinarySerachTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
        this.postOrderTraversalNode(node.left, handler)
        this.postOrderTraversalNode(node.right, handler)
        handler(node.key)
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432859-87197","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br")])],-1),y=a('<h3 id="\u6700\u5927\u503C-\u6700\u5C0F\u503C" tabindex="-1"><a class="header-anchor" href="#\u6700\u5927\u503C-\u6700\u5C0F\u503C">\xB6</a> <span class="prefix"></span><span class="content" id="\u6700\u5927\u503C-\u6700\u5C0F\u503C"><a class="header-anchor" href="#\u6700\u5927\u503C-\u6700\u5C0F\u503C" aria-hidden="true">#</a> \u6700\u5927\u503C&amp;\u6700\u5C0F\u503C</span><span class="suffix"></span></h3><p>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5DE6\u8FB9\u7684\u503C\u548C\u6700\u53F3\u8FB9\u7684\u503C\u3002\u7528\u5FAA\u73AF\uFF0C\u4E00\u76F4\u5411\u5DE6\u627E\uFF0C\u4E00\u76F4\u5411\u53F3\u627E\u3002</p><ul><li>\u4EE3\u7801\u4F9D\u6B21\u5411\u5DE6\u627E\u5230\u6700\u5DE6\u8FB9\u7684\u7ED3\u70B9\u5C31\u662F\u6700\u5C0F\u503C,</li><li>\u4EE3\u7801\u4F9D\u6B21\u5411\u53F3\u627E\u5230\u6700\u53F3\u8FB9\u7684\u7ED3\u70B9\u5C31\u662F\u6700\u5927\u503C.</li></ul><img src="https://img.ukx.cn/abcdocker/2022/04/14/da3b8200e61bf/da3b8200e61bf.png" alt="image-20220414114151090" style="zoom:50%;">',4),h=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u83B7\u53D6\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"min"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s(`key
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"max"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s(`key
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432860-1751"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u83B7\u53D6\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C
BinarySerachTree.prototype.min = function () {
    var node = this.root
    while (node.left !== null) {
        node = node.left
    }
    return node.key
}

BinarySerachTree.prototype.max = function () {
    var node = this.root
    while (node.right !== null) {
        node = node.right
    }
    return node.key
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432860-1751","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),f=a('<h3 id="\u641C\u7D22\u7279\u5B9A\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u7279\u5B9A\u7684\u503C">\xB6</a> <span class="prefix"></span><span class="content" id="\u641C\u7D22\u7279\u5B9A\u7684\u503C"><a class="header-anchor" href="#\u641C\u7D22\u7279\u5B9A\u7684\u503C" aria-hidden="true">#</a> \u641C\u7D22\u7279\u5B9A\u7684\u503C</span><span class="suffix"></span></h3><ul><li>\u4E8C\u53C9\u641C\u7D22\u6811\u4E0D\u4EC5\u4EC5\u83B7\u53D6\u6700\u503C\u6548\u7387\u975E\u5E38\u9AD8, \u641C\u7D22\u7279\u5B9A\u7684\u503C\u6548\u7387\u4E5F\u975E\u5E38\u9AD8.</li><li><strong>\u7279\u5B9A\u7684\u503C</strong>\u4E0D\u65AD\u4E0E\u65B0\u7684current\u8282\u70B9\u6BD4\u8F83\uFF0C\u503C\u6BD4\u8F83\u5C0F\u5219\u5F80\u5DE6\u3002</li></ul>',2),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u641C\u7D22\u7279\u5B9A\u7684\u503C-\u9012\u5F52"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"search"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"searchNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" key")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u5982\u679C\u4F20\u5165\u7684node\u4E3Anull\u90A3\u4E48, \u90A3\u4E48\u5C31\u9000\u51FA\u9012\u5F52"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 2.\u5224\u65ADnode\u8282\u70B9\u7684\u503C\u548C\u4F20\u5165\u7684key\u5927\u5C0F"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},">"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 2.1.\u4F20\u5165\u7684key\u8F83\u5C0F, \u5411\u5DE6\u8FB9\u7EE7\u7EED\u67E5\u627E"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 2.2.\u4F20\u5165\u7684key\u8F83\u5927, \u5411\u53F3\u8FB9\u7EE7\u7EED\u67E5\u627E"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchNode"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 2.3.\u76F8\u540C, \u8BF4\u660E\u627E\u5230\u4E86key"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432861-66400"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u641C\u7D22\u7279\u5B9A\u7684\u503C-\u9012\u5F52
BinarySerachTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
}

BinarySerachTree.prototype.searchNode = function (node, key) {
    // 1.\u5982\u679C\u4F20\u5165\u7684node\u4E3Anull\u90A3\u4E48, \u90A3\u4E48\u5C31\u9000\u51FA\u9012\u5F52
    if (node === null) {
        return false
    }

    // 2.\u5224\u65ADnode\u8282\u70B9\u7684\u503C\u548C\u4F20\u5165\u7684key\u5927\u5C0F
    if (node.key > key) { // 2.1.\u4F20\u5165\u7684key\u8F83\u5C0F, \u5411\u5DE6\u8FB9\u7EE7\u7EED\u67E5\u627E
        return this.searchNode(node.left, key)
    } else if (node.key < key) { // 2.2.\u4F20\u5165\u7684key\u8F83\u5927, \u5411\u53F3\u8FB9\u7EE7\u7EED\u67E5\u627E
        return this.searchNode(node.right, key)
    } else { // 2.3.\u76F8\u540C, \u8BF4\u660E\u627E\u5230\u4E86key
        return true
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432861-66400","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u641C\u7D22\u7279\u5B9A\u7684\u503C-\u5FAA\u73AF"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"search"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},">"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`left
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u627E\u5230\u4E86\u5339\u914D\u7684\u53F6\u8282\u70B9"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// \u627E\u5230\u67D0\u4E00\u4E2A\u53F6\u8282\u70B9,\u4ECD\u672A\u627E\u5230\u7279\u5B9A\u7684\u503C"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432861-25777"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u641C\u7D22\u7279\u5B9A\u7684\u503C-\u5FAA\u73AF
BinarySerachTree.prototype.search = function (key) {
    var node = this.root
    while (node !== null) {
        if (node.key > key) {
            node = node.left
        } else if (node.key < key) {
            node = node.right
        } else {
            // \u627E\u5230\u4E86\u5339\u914D\u7684\u53F6\u8282\u70B9
            return true
        }
    }
    // \u627E\u5230\u67D0\u4E00\u4E2A\u53F6\u8282\u70B9,\u4ECD\u672A\u627E\u5230\u7279\u5B9A\u7684\u503C
    return false
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432861-25777","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),v=a('<h3 id="bst-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#bst-\u5220\u9664">\xB6</a> <span class="prefix"></span><span class="content" id="bst-\u5220\u9664"><a class="header-anchor" href="#bst-\u5220\u9664" aria-hidden="true">#</a> BST-\u5220\u9664</span><span class="suffix"></span></h3><ol><li>\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9</li><li>\u5206\u7C7B\u8BA8\u8BBA(if..else if..else if...else) <ol><li>\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9</li><li>\u76EE\u6807\u8282\u70B9\u4EC51\u4E2A\u5B50\u8282\u70B9</li><li>\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9\uFF08\u5EA6\u4E3A2\u7684\u975E\u53F6\u8282\u70B9\uFF09</li></ol></li></ol><h4 id="_1-\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9">\xB6</a> <span class="prefix"></span><span class="content" id="_1-\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9"><a class="header-anchor" href="#_1-\u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9" aria-hidden="true">#</a> 1. \u67E5\u627E\u8981\u5220\u9664\u7684\u8282\u70B9</span><span class="suffix"></span></h4>',3),N=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// BinarySerachTree.prototype.remove"),s(`
`),n("span",{class:"token comment"},"// \u5E0C\u671B\u5220\u9664\uFF0C\u9700\u8981\u7528\u4E09\u4E2A\u53D8\u91CF"),s(`
`),n("span",{class:"token keyword"},"var"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
`),n("span",{class:"token keyword"},"var"),s(" parent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
`),n("span",{class:"token keyword"},"var"),s(" isLeftChild "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token comment"},"// \u5FAA\u73AF"),s(`
`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"!=="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    parent `),n("span",{class:"token operator"},"="),s(` current
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" current"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        isLeftChild `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        isLeftChild `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u5982\u679C\u53D1\u73B0current\u5DF2\u7ECF\u6307\u5411null, \u90A3\u4E48\u8BF4\u660E\u6CA1\u6709\u627E\u5230\u8981\u5220\u9664\u7684\u6570\u636E"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    
    `),n("span",{class:"token comment"},"// \u5F97\u5230\u4E09\u4E2A\u53D8\u91CF\uFF0C\u5DF2\u67E5\u51FA\u76EE\u6807current\u8282\u70B9\u3002..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432862-51797"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// BinarySerachTree.prototype.remove
// \u5E0C\u671B\u5220\u9664\uFF0C\u9700\u8981\u7528\u4E09\u4E2A\u53D8\u91CF
var current = this.root
var parent = this.root
var isLeftChild = true
// \u5FAA\u73AF
while (current.key !== key) {
    parent = current
    if (key < current.key) {
        isLeftChild = true
        current = current.left
    } else {
        isLeftChild = false
        current = current.right
    }

    // \u5982\u679C\u53D1\u73B0current\u5DF2\u7ECF\u6307\u5411null, \u90A3\u4E48\u8BF4\u660E\u6CA1\u6709\u627E\u5230\u8981\u5220\u9664\u7684\u6570\u636E
    if (current === null) return false
    
    // \u5F97\u5230\u4E09\u4E2A\u53D8\u91CF\uFF0C\u5DF2\u67E5\u51FA\u76EE\u6807current\u8282\u70B9\u3002...
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432862-51797","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),C=a('<h4 id="_2-1-\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9">\xB6</a> <span class="prefix"></span><span class="content" id="_2-1-\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9"><a class="header-anchor" href="#_2-1-\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9" aria-hidden="true">#</a> 2.1.\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9</span><span class="suffix"></span></h4>',1),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 2.1.\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" current"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432862-11746"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// 2.1.\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9
if (current.left === null && current.right === null) {
    if (current == this.root) {
        this.root == null
    } else if (isLeftChild) {
        parent.left = null
    } else {
        parent.right = null
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432862-11746","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),T=a('<h4 id="_2-2-\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9">\xB6</a> <span class="prefix"></span><span class="content" id="_2-2-\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9"><a class="header-anchor" href="#_2-2-\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9" aria-hidden="true">#</a> 2.2.\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9</span><span class="suffix"></span></h4><img src="https://upload-images.jianshu.io/upload_images/1102036-354ce2d1dd7bd572?imageMogr2/auto-orient/strip|imageView2/2/w/1090/format/webp" alt="img" style="zoom:33%;">',2),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 2.2.\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9"),s(`
`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432863-55357"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// 2.2.\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9
else if (current.right === null) {
    if (current == this.root) {
        this.root = current.left
    } else if (isLeftChild) {
        parent.left = current.left
    } else {
        parent.right = current.left
    }
} 
else if (current.left === null) {
    if (current == this.root) {
        this.root = current.right
    } else if (isLeftChild) {
        parent.left = current.right
    } else {
        parent.right = current.right
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432863-55357","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1),j=a('<h4 id="_2-3-\u5220\u9664\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9-\u5BFB\u627E\u524D\u9A71-\u540E\u7EE7" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5220\u9664\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9-\u5BFB\u627E\u524D\u9A71-\u540E\u7EE7">\xB6</a> <span class="prefix"></span><span class="content" id="_2-3-\u5220\u9664\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9-\u5BFB\u627E\u524D\u9A71-\u540E\u7EE7"><a class="header-anchor" href="#_2-3-\u5220\u9664\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9-\u5BFB\u627E\u524D\u9A71-\u540E\u7EE7" aria-hidden="true">#</a> 2.3. \u5220\u9664\u76EE\u6807\u8282\u70B9\u67092\u4E2A\u5B50\u8282\u70B9\uFF1A\u5BFB\u627E\u524D\u9A71 | \u540E\u7EE7</span><span class="suffix"></span></h4><p><strong>\u89C4\u5F8B\u603B\u7ED3</strong>\uFF1A\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u6709\u4E24\u4E2A\u5B50\u8282\u70B9\uFF0C\u751A\u81F3\u5B50\u8282\u70B9\u8FD8\u6709\u5B50\u8282\u70B9\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9700\u8981\u4ECE\u8981\u5220\u9664\u8282\u70B9\u4E0B\u9762\u7684\u5B50\u8282\u70B9\u4E2D\u627E\u5230\u4E00\u4E2A\u5408\u9002\u7684\u8282\u70B9\uFF0C\u6765\u66FF\u6362\u5F53\u524D\u7684\u8282\u70B9\u3002</p><p>\u82E5\u7528 current \u8868\u793A\u9700\u8981\u5220\u9664\u7684\u8282\u70B9\uFF0C\u5219\u5408\u9002\u7684\u8282\u70B9\u6307\u7684\u662F\uFF1A</p><ul><li><strong>current \u8282\u70B9\u7684\u524D\u9A71:</strong> current \u5DE6\u5B50\u6811\u4E2D\u6BD4 current \u5C0F\u4E00\u70B9\u70B9\u7684\u8282\u70B9\uFF0C\u5373 current \u5DE6\u5B50\u6811\u4E2D\u7684\u6700\u5927\u503C\uFF1B</li><li>**current \u8282\u70B9\u7684\u540E\u7EE7: **current \u53F3\u5B50\u6811\u4E2D\u6BD4 current \u5927\u4E00\u70B9\u70B9\u7684\u8282\u70B9\uFF0C\u5373 current \u53F3\u5B50\u6811\u4E2D\u7684\u6700\u5C0F\u503C\uFF1B</li></ul><p>\u5220\u9664\u8FD9\u4E2A\u8282\u70B9\u7684<strong>\u601D\u8DEF\uFF1A</strong></p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/14/455dc7920e7fd/455dc7920e7fd.png" alt=""><figcaption>image-20220414105816382</figcaption></figure>',6),B=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 2.3.\u5220\u9664\u6709\u4E24\u4E2A\u8282\u70B9\u7684\u8282\u70B9"),s(`
`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u83B7\u53D6\u540E\u7EE7\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" successor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSuccessor"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"// 2.\u5224\u65AD\u662F\u5426\u662F\u6839\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` successor
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(` successor
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` successor
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// 3.\u5C06\u5220\u9664\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u8D4B\u503C\u7ED9successor"),s(`
    successor`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432864-76028"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// 2.3.\u5220\u9664\u6709\u4E24\u4E2A\u8282\u70B9\u7684\u8282\u70B9
else {
    // 1.\u83B7\u53D6\u540E\u7EE7\u8282\u70B9
    var successor = this.getSuccessor(current)
    
    // 2.\u5224\u65AD\u662F\u5426\u662F\u6839\u8282\u70B9
    if (current == this.root) {
        this.root = successor
    } else if (isLeftChild) {
        parent.left = successor
    } else {
        parent.right = successor
    }
    
    // 3.\u5C06\u5220\u9664\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u8D4B\u503C\u7ED9successor
    successor.left = current.left
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432864-76028","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br")])],-1),S=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u627E\u540E\u7EE7\u7684\u65B9\u6CD5"),s(`
`),n("span",{class:"token comment"},"// (\u5FAA\u73AF,\u4ECEcurrent.right\u5F00\u59CB\u4E00\u76F4\u8FED\u4EE3current/successor\u7B49\u4E09\u4E2A\u53D8\u91CF,\u4E00\u76F4\u5F80\u5DE6\u627E\u6700\u5C0F\u503C)"),s(`

`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"getSuccessor"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"delNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u4F7F\u7528\u53D8\u91CF\u4FDD\u5B58\u4E34\u65F6\u7684\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" successorParent "),n("span",{class:"token operator"},"="),s(` 
    `),n("span",{class:"token keyword"},"var"),s(" successor "),n("span",{class:"token operator"},"="),s(` delNode
    `),n("span",{class:"token keyword"},"var"),s(" current "),n("span",{class:"token operator"},"="),s(" delNode"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token comment"},"// \u8981\u4ECE\u53F3\u5B50\u6811\u5F00\u59CB\u627E"),s(`

    `),n("span",{class:"token comment"},"// 2.\u5BFB\u627E\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        successorParent `),n("span",{class:"token operator"},"="),s(` successor
        successor `),n("span",{class:"token operator"},"="),s(` current
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 3.\u5982\u679C\u662F\u5220\u9664\u56FE\u4E2D15\u7684\u60C5\u51B5, \u8FD8\u9700\u8981\u5982\u4E0B\u4EE3\u7801"),s(`
    	`),n("span",{class:"token comment"},"// ps:\u6B64\u65F6\u540E\u7EE7\u8282\u70B9\u662F18"),s(`
    	`),n("span",{class:"token comment"},"// 18!=20"),s(`
    	`),n("span",{class:"token comment"},"// \u540E\u7EE7\u8282\u70B9\u7236\u4EB2\u7684left\u6307\u9488\u4E0D\u518D\u6307\u5411\u540E\u7EE7\u8282\u70B9\uFF0C\u6307\u5411 \u540E\u7EE7\u8282\u70B9.right(\u56FE\u4E2D\u768419)"),s(`
    	`),n("span",{class:"token comment"},"// \u540E\u7EE7\u8282\u70B9\u7684right\u6307\u9488\u6570\u636E\u5DF2\u5B58\u597D\uFF0C\u6539\u4E3A\u6307\u5411 delNode.right(\u56FE\u4E2D\u768420)"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("successor "),n("span",{class:"token operator"},"!="),s(" delNode"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        successorParent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" successor"),n("span",{class:"token punctuation"},"."),s(`right
        successor`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" delNode"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(` successor
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432864-16318"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u627E\u540E\u7EE7\u7684\u65B9\u6CD5
// (\u5FAA\u73AF,\u4ECEcurrent.right\u5F00\u59CB\u4E00\u76F4\u8FED\u4EE3current/successor\u7B49\u4E09\u4E2A\u53D8\u91CF,\u4E00\u76F4\u5F80\u5DE6\u627E\u6700\u5C0F\u503C)

BinarySerachTree.prototype.getSuccessor = function (delNode) {
    // 1.\u4F7F\u7528\u53D8\u91CF\u4FDD\u5B58\u4E34\u65F6\u7684\u8282\u70B9
    var successorParent = 
    var successor = delNode
    var current = delNode.right // \u8981\u4ECE\u53F3\u5B50\u6811\u5F00\u59CB\u627E

    // 2.\u5BFB\u627E\u8282\u70B9
    while (current != null) {
        successorParent = successor
        successor = current
        current = current.left
    }

    // 3.\u5982\u679C\u662F\u5220\u9664\u56FE\u4E2D15\u7684\u60C5\u51B5, \u8FD8\u9700\u8981\u5982\u4E0B\u4EE3\u7801
    	// ps:\u6B64\u65F6\u540E\u7EE7\u8282\u70B9\u662F18
    	// 18!=20
    	// \u540E\u7EE7\u8282\u70B9\u7236\u4EB2\u7684left\u6307\u9488\u4E0D\u518D\u6307\u5411\u540E\u7EE7\u8282\u70B9\uFF0C\u6307\u5411 \u540E\u7EE7\u8282\u70B9.right(\u56FE\u4E2D\u768419)
    	// \u540E\u7EE7\u8282\u70B9\u7684right\u6307\u9488\u6570\u636E\u5DF2\u5B58\u597D\uFF0C\u6539\u4E3A\u6307\u5411 delNode.right(\u56FE\u4E2D\u768420)
    if (successor != delNode.right) {
        successorParent.left = successor.right
        successor.right = delNode.right
    }
    
    return successor
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432864-16318","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br")])],-1),$=a('<p><strong><code>getSuccessor()</code>\u540E\u7EE7\u8282\u70B9\u56FE\u6CE8\uFF1A</strong></p><img src="https://img.ukx.cn/abcdocker/2022/04/14/420a1affc83a5/420a1affc83a5.png" alt="image-20220414110737833" style="zoom:50%;"><img src="https://img.ukx.cn/abcdocker/2022/04/14/1262e047db765/1262e047db765.svg" alt="Untitled-1" style="zoom:25%;"><h4 id="\u5220\u9664\u8282\u70B9\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9\u5B8C\u6574\u4EE3\u7801">\xB6</a> <span class="prefix"></span><span class="content" id="\u5220\u9664\u8282\u70B9\u5B8C\u6574\u4EE3\u7801"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9\u5B8C\u6574\u4EE3\u7801</span><span class="suffix"></span></h4>',4),O=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u5220\u9664\u7ED3\u70B9"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"remove"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u5B9A\u4E49\u4E34\u65F6\u4FDD\u5B58\u7684\u53D8\u91CF"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"var"),s(" parent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"var"),s(" isLeftChild "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`

    `),n("span",{class:"token comment"},"// 2.\u5F00\u59CB\u67E5\u627E\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"!=="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parent `),n("span",{class:"token operator"},"="),s(` current
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" current"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isLeftChild `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            isLeftChild `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// \u5982\u679C\u53D1\u73B0current\u5DF2\u7ECF\u6307\u5411null, \u90A3\u4E48\u8BF4\u660E\u6CA1\u6709\u627E\u5230\u8981\u5220\u9664\u7684\u6570\u636E"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 3.\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" current"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 4.\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 5.\u5220\u9664\u6709\u4E24\u4E2A\u8282\u70B9\u7684\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1.\u83B7\u53D6\u540E\u7EE7\u8282\u70B9"),s(`
        `),n("span",{class:"token keyword"},"var"),s(" successor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSuccessor"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token comment"},"// 2.\u5224\u65AD\u662F\u5426\u662F\u6839\u8282\u70B9"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` successor
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("isLeftChild"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(` successor
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            parent`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` successor
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// 3.\u5C06\u5220\u9664\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u8D4B\u503C\u7ED9successor"),s(`
        successor`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u627E\u540E\u7EE7\u7684\u65B9\u6CD5"),s(`
`),n("span",{class:"token class-name"},"BinarySerachTree"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"getSuccessor"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"delNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 1.\u4F7F\u7528\u53D8\u91CF\u4FDD\u5B58\u4E34\u65F6\u7684\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" successorParent "),n("span",{class:"token operator"},"="),s(` delNode
    `),n("span",{class:"token keyword"},"var"),s(" successor "),n("span",{class:"token operator"},"="),s(` delNode
    `),n("span",{class:"token keyword"},"var"),s(" current "),n("span",{class:"token operator"},"="),s(" delNode"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token comment"},"// \u8981\u4ECE\u53F3\u5B50\u6811\u5F00\u59CB\u627E"),s(`

    `),n("span",{class:"token comment"},"// 2.\u5BFB\u627E\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        successorParent `),n("span",{class:"token operator"},"="),s(` successor
        successor `),n("span",{class:"token operator"},"="),s(` current
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// 3.\u5982\u679C\u662F\u5220\u9664\u56FE\u4E2D15\u7684\u60C5\u51B5, \u8FD8\u9700\u8981\u5982\u4E0B\u4EE3\u7801"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("successor "),n("span",{class:"token operator"},"!="),s(" delNode"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        successorParent`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" successor"),n("span",{class:"token punctuation"},"."),s(`right
        successor`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" delNode"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(` successor
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432865-69103"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u5220\u9664\u7ED3\u70B9
BinarySerachTree.prototype.remove = function (key) {
    // 1.\u5B9A\u4E49\u4E34\u65F6\u4FDD\u5B58\u7684\u53D8\u91CF
    var current = this.root
    var parent = this.root
    var isLeftChild = true

    // 2.\u5F00\u59CB\u67E5\u627E\u8282\u70B9
    while (current.key !== key) {
        parent = current
        if (key < current.key) {
            isLeftChild = true
            current = current.left
        } else {
            isLeftChild = false
            current = current.right
        }

        // \u5982\u679C\u53D1\u73B0current\u5DF2\u7ECF\u6307\u5411null, \u90A3\u4E48\u8BF4\u660E\u6CA1\u6709\u627E\u5230\u8981\u5220\u9664\u7684\u6570\u636E
        if (current === null) return false
    }

    // 3.\u5220\u9664\u7684\u7ED3\u70B9\u662F\u53F6\u7ED3\u70B9
    if (current.left === null && current.right === null) {
        if (current == this.root) {
            this.root == null
        } else if (isLeftChild) {
            parent.left = null
        } else {
            parent.right = null
        }
    }

    // 4.\u5220\u9664\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u7684\u8282\u70B9
    else if (current.right === null) {
        if (current == this.root) {
            this.root = current.left
        } else if (isLeftChild) {
            parent.left = current.left
        } else {
            parent.right = current.left
        }
    } else if (current.left === null) {
        if (current == this.root) {
            this.root = current.right
        } else if (isLeftChild) {
            parent.left = current.right
        } else {
            parent.right = current.right
        }
    }

    // 5.\u5220\u9664\u6709\u4E24\u4E2A\u8282\u70B9\u7684\u8282\u70B9
    else {
        // 1.\u83B7\u53D6\u540E\u7EE7\u8282\u70B9
        var successor = this.getSuccessor(current)

        // 2.\u5224\u65AD\u662F\u5426\u662F\u6839\u8282\u70B9
        if (current == this.root) {
            this.root = successor
        } else if (isLeftChild) {
            parent.left = successor
        } else {
            parent.right = successor
        }

        // 3.\u5C06\u5220\u9664\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u8D4B\u503C\u7ED9successor
        successor.left = current.left
    }

    return true
}

// \u627E\u540E\u7EE7\u7684\u65B9\u6CD5
BinarySerachTree.prototype.getSuccessor = function (delNode) {
    // 1.\u4F7F\u7528\u53D8\u91CF\u4FDD\u5B58\u4E34\u65F6\u7684\u8282\u70B9
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right // \u8981\u4ECE\u53F3\u5B50\u6811\u5F00\u59CB\u627E

    // 2.\u5BFB\u627E\u8282\u70B9
    while (current != null) {
        successorParent = successor
        successor = current
        current = current.left
    }

    // 3.\u5982\u679C\u662F\u5220\u9664\u56FE\u4E2D15\u7684\u60C5\u51B5, \u8FD8\u9700\u8981\u5982\u4E0B\u4EE3\u7801
    if (successor != delNode.right) {
        successorParent.left = successor.right
        successor.right = delNode.right
    }
    
    return successor
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432865-69103","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br")])],-1);function L(E,I){return t(),o(c,null,[p,r,i,u,k,d,m,b,y,h,f,w,g,v,N,C,x,T,_,j,B,S,$,O],64)}var F=e(l,[["render",L]]);export{F as default};
