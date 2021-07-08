/**
 *  自定义网站配置
 */
 const config = {
  title: "ffffffff0x",                 //write your website title
  subtitle: ":(){:|:&};:", //write your website subtitle
  logo_icon: "globe",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: false,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"magi",
      template:"https://magi.com/search?q=$s"
    },
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  lists: [                            //Url list
    {
      name:"红蓝攻防",
      icon:"user secret",
      list:[
        {
          url:"https://trello.com/",
          name:"trello",
          desc:"任务分工与信息共享"
        },
        {
          url:"https://www.vultr.com/",
          name:"vultr",
          desc:"The Infrastructure Cloud"
        },
        {
          url:"https://dashboard.heroku.com/",
          name:"heroku",
          desc:"Cloud Application Platform"
        },
        {
          url:"https://dash.cloudflare.com/",
          name:"cloudflare",
          desc:"Web Performance & Security"
        },
        {
          url:"https://www.freenom.com/",
          name:"freenom",
          desc:"A Name for Everyone"
        },
        {
          url:"https://cn.aliyun.com/",
          name:"aliyun",
          desc:"傻逼阿里云"
        },
        {
          url:"https://www.namesilo.com/",
          name:"namesilo",
          desc:"Cheap Domain Names"
        },
        {
          url:"https://www.ping.cn/",
          name:"ping.cn",
          desc:"ping检测"
        },
        {
          url:"https://www.exploit-db.com/",
          name:"exploit-db",
          desc:"漏洞资源库"
        },
        {
          url:"https://www.virustotal.com/gui/home/upload",
          name:"virustotal",
          desc:"Analyze files and URLs"
        },
        {
          url:"https://x.threatbook.cn/",
          name:"threatbook",
          desc:"威胁情报社区"
        },
        {
          url:"https://i.hacking8.com/tiquan/",
          name:"提权补丁查询",
          desc:"Windows提权辅助工具"
        },
        {
          url:"https://app.any.run/",
          name:"any.run",
          desc:"Malware Analysis Sandbox"
        },
        {
          url:"https://fofa.so/",
          name:"fofa",
          desc:"网络空间安全搜索引擎"
        },
        {
          url:"http://ceye.io/",
          name:"ceye",
          desc:"OOB Monitor"
        },
        {
          url:"http://dnslog.cn/",
          name:"dnslog",
          desc:"dnslog Tools"
        },
        {
          url:"https://www.cmd5.com/",
          name:"cmd5",
          desc:"md5在线解密破解"
        },
        {
          url:"https://dev.bangcle.com/",
          name:"梆梆安全",
          desc:"APP安全加固|盗版监测"
        },
        {
          url:"https://github.com/ffffffff0x/f8x",
          name:"f8x",
          desc:"红队环境自动化部署工具"
        },

        {
          url:"https://github.com/ffffffff0x/AboutSecurity",
          name:"AboutSecurity",
          desc:"红队 payload 和字典库"
        },
        {
          url:"https://github.com/ffffffff0x/BerylEnigma",
          name:"BerylEnigma",
          desc:"为渗透与CTF而制作的工具集"
        },
        {
          url:"https://gtfobins.github.io/",
          name:"gtfobins",
          desc:"Unix LOL"
        },
        {
          url:"https://lolbas-project.github.io/",
          name:"lolbas",
          desc:"Windows LOL"
        },
        {
          url:"https://gchq.github.io/CyberChef/",
          name:"CyberChef",
          desc:"The Cyber Swiss Army Knife"
        },
      ]
    },
    {
      name:"技术学习",
      icon:"chess knight",
      list:[
        {
          url:"https://www.t00ls.net/",
          name:"t00ls",
          desc:"低调求发展 - 潜心习安全"
        },
        {
          url:"https://bbs.pediy.com/",
          name:"pediy",
          desc:"移动安全研究及逆向工程"
        },
        {
          url:"https://www.freebuf.com/",
          name:"freebuf",
          desc:"互联网安全新媒体"
        },
        {
          url:"https://www.anquanke.com/",
          name:"anquanke",
          desc:"漏洞信息,安全资讯、知识"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"shape the future of software"
        },
        {
          url:"https://stackoverflow.com/",
          name:"stackoverflow",
          desc:"programming ​knowledge"
        },
        {
          url:"https://twitter.com/home",
          name:"twitter",
          desc:"what's happening!?"
        },
        {
          url:"https://www.bilibili.com/",
          name:"bilibili",
          desc:"二次元!二次元!二次元!"
        },
        {
          url:"https://i.hacking8.com/forums/",
          name:"hacking8",
          desc:"安全信息流"
        },
        {
          url:"https://www.hackerpom.com/feed",
          name:"hackerpom",
          desc:"Cyber Threat Intelligence"
        },
        {
          url:"http://www.ruanyifeng.com/blog/",
          name:"ruanyifeng",
          desc:"阮一峰的网络日志"
        },
        {
          url:"https://paper.seebug.org/",
          name:"seebug",
          desc:"安全技术精粹"
        },
        {
          url:"https://xz.aliyun.com/",
          name:"先知社区",
          desc:"先知安全技术社区"
        },
        {
          url:"https://www.ctfhub.com/#/index",
          name:"ctfhub",
          desc:"开箱即用的CTF学习解决方案"
        },
        {
          url:"https://buuoj.cn/",
          name:"buuoj",
          desc:"CTF平台"
        },
        {
          url:"https://ctftime.org/",
          name:"ctftime",
          desc:"All about CTF"
        },
        {
          url:"https://github.com/No-Github/1earn",
          name:"1earn",
          desc:"个人维护的安全知识框架"
        },
        {
          url:"https://github.com/ffffffff0x/Pentest101",
          name:"Pentest101",
          desc:"每周分享渗透知识点"
        },
      ]
    },
    {
      name:"辅助项目",
      icon:"star",
      list:[
        {
          url:"https://cdn.ffffffff0x.com/",
          name:"cdn加速",
          desc:"通过CDN加速下载"
        },
        {
          url:"https://github.ffffffff0x.com/",
          name:"github加速",
          desc:"加速github下载"
        },
        {
          url:"https://ln.ffffffff0x.com/",
          name:"url短链接",
          desc:"生成URL短链"
        },
        {
          url:"https://proxy.ffffffff0x.com/",
          name:"proxy代理",
          desc:"jsproxy网页代理"
        },
        {
          url:"https://status.ffffffff0x.com/",
          name:"status监控",
          desc:"服务运行状态监控"
        },
        {
          url:"https://ffffffff0x.com/",
          name:"ffffffff0x",
          desc:"关于我们"
        },
        {
          url:"https://tasklist.ffffffff0x.com/",
          name:"tasklist",
          desc:"运行查询"
        },
        {
          url:"https://f8x.io/",
          name:"f8x",
          desc:"f8x Workers"
        },
        {
          url:"https://highlight.ffffffff0x.com/",
          name:"highlight",
          desc:"代码高亮"
        },
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/^.*github.*$/)){
    return "https://github.com/fluidicon.png";
  }
  else if(url.match(/^.*bangcle.*$/)){
    return "https://dev.bangcle.com/assets/imgs/favicon.ico";
  }
  else{
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain();
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://magi.com/assets/icons/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="search for future"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");

  return el('main',[],el('div',['class="ui container"'],main));
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/No-Github/Archive2@1.0.4/html/images/ffffffff0x-64.ico" type="image/x-icon">
      <link href="https://cdn.jsdelivr.net/gh/No-Github/Semantic-UI@2.4.4/dist/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/No-Github/cf-worker-dir@0.2.0/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/No-Github/Semantic-UI@2.4.4/dist/semantic.min.css"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}

    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}