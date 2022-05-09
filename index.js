/**
 *  自定义网站配置 
 */
 const config = {
  title: "kitezzz",                 //write your website title
  subtitle: "风筝-导航页", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
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
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    },
    {
      name:"红 客",
      template:"https://www.hong.ke/search?query=$s&page=1"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  lists: [                            //Url list
    {
      name:"技术社区",
      icon:"code",
      list:[
        {
          url:"https://i.hacking8.com/forums/",
          name:"Hacking8",
          desc:"安全信息流"
        },
        {
          url:"https://wx.zsxq.com/",
          name:"知识星球",
          desc:"连接一千位铁杆粉丝,知识变现,小团队共享"
        },
        {
          url:"https://www.t00ls.cc/",
          name:"T00LS",
          desc:"低调求发展-潜心习安全"
        },
        {
          url:"https://xz.aliyun.com/",
          name:"先知社区",
          desc:"先知安全技术社区"
        },
        {
          url:"https://zone.huoxian.cn/?sort=newest",
          name:"火线Zone",
          desc:"云安全社区"
        },
        {
          url:"https://tttang.com/",
          name:"跳跳糖",
          desc:"跳跳糖安全技术社区"
        },
        {
          url:"https://forum.butian.net/",
          name:"奇安信攻防社区",
          desc:"实战攻防技术"
        },
        {
          url:"https://paper.seebug.org/",
          name:"Seebug",
          desc:"Paper - 安全技术精粹"
        },
        {
          url:"https://wechat.doonsec.com/",
          name:"洞见微信聚合",
          desc:"安全圈微信搜索"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"where the world builds software"
        },
        {
          url:"https://www.freebuf.com/articles/web",
          name:"Freebuf",
          desc:"互联网安全新媒体"
        },
        {
          url:"https://www.anquanke.com/",
          name:"安全客",
          desc:"有思想的安全新媒体"
        },
      ]
    },
    {
      name:"安全知识库",
      icon:"graduation cap",
      list:[
        {
          url:"https://wiki.kitezzz.com/readme-1",
          name:"Kite Wiki",
          desc:"风筝个人文库"
        },
        {
          url:"https://github.com/ffffffff0x/1earn",
          name:"1earn Wiki",
          desc:"团队1earn安全知识库"
        },
        {
          url:"https://wiki.teamssix.com/",
          name:"T Wiki",
          desc:"面向云安全方向的知识文库"
        },
        {
          url:"http://wiki.peiqi.tech/",
          name:"PeiQi文库",
          desc:"面向网络安全从业者的知识文库"
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
      <link href="https://cdn.jsdelivr.net/gh/No-Github/Semantic-UI@2.4.4/dist/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/kitezzzgrim/cf-worker-dir@0.2.3/style.css" rel="stylesheet">
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