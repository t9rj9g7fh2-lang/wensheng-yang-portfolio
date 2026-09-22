'use strict';
const asset = (name) => `assets/web/${name}.webp`;
const projectData = {
  fuguang: {
    index:'01', name:'浮光 FUGUANG', short:'浮光 · 五款风味', category:'品牌视觉 / 系列海报', subtitle:'让日常，浮起一点光。', cover:asset('fuguang-cover'), type:'品牌视觉概念', scope:'风味视觉 · 产品场景 · 海报系统', output:'5 张系列海报', pdf:'assets/fuguang-posters.pdf',
    summary:'以风味气泡茶为载体，把清新、轻盈与片刻松弛变成可感知的视觉体验。五款风味保留统一的版式与品牌语言，同时用水果、植物和光线讲述各自的故事。',
    story:[['从风味出发','用自然意象建立产品记忆。将果实的颜色、茶叶的纹理和气泡的轻盈，转化成画面的情绪线索。'],['用光串联品牌','暖白罐体、自然光与细腻水珠形成一致的视觉基调。文字、产品与原料在画面中保留清晰层级。'],['让差异有秩序','五张海报共用品牌识别与信息框架，让不同风味既能独立表达，又能作为一个完整系列出现。']],
    images:Array.from({length:5},(_,i)=>({src:asset(`fuguang-${String(i+1).padStart(2,'0')}`),caption:['青柚绿茶 · 清新先浮起','白桃乌龙 · 桃香落进云里','茉莉白柚 · 花开在气泡里','杨梅山楂 · 把晚霞饮入杯','桂花金橘 · 一口金色秋光'][i]})),next:'jade'
  },
  jade: {
    index:'02',name:'光栖 GUANGQI',short:'光栖 · 红山玉龙',category:'文化转译 / 文创概念',subtitle:'从一枚玉龙，到一束日常的光。',cover:asset('jade-cover'),type:'文化创意产品概念',scope:'形态转译 · 使用场景 · 材料与包装',output:'5 张设计展板',pdf:null,landscape:true,
    summary:'以红山玉龙的环形轮廓为起点，探索文化符号与桌面生活的连接。系列展板展示了从文化形态、日用功能到结构、材料和包装配色的设计思考。',
    story:[['保留文化线索','提取玉龙的弧线与龙首特征，在传统形态和简洁的当代产品语言之间寻找平衡。'],['走进桌面场景','将照明、手机承托与收纳等日用关系放在一起考虑，使文化表达与使用场景建立联系。'],['呈现完整概念','通过五张展板展开文化、功能、结构与包装研究，将形态探索整理为一套完整的文创产品概念。']],
    images:Array.from({length:5},(_,i)=>({src:asset(`jade-${String(i+1).padStart(2,'0')}`),caption:['红山玉龙 · 光栖概念总览','文化形态转译 · 从玉龙到灯具','一件产品，三种日用','结构与材料','包装与配色'][i]})),next:'deskon'
  },
  deskon: {
    index:'03',name:'DESK//ON',short:'DESK//ON · 桌面设备视觉',category:'商业视觉 / 产品海报',subtitle:'意图先于动作。',cover:asset('deskon-cover'),type:'桌面设备视觉系列',scope:'产品视觉 · 版式系统 · 系列文案',output:'5 张 A3 海报',pdf:null,
    summary:'围绕键盘、鼠标、耳机、摄像头与麦克风，建立一组统一的桌面设备视觉。深色背景、青蓝点缀与近距离产品画面，把日常操作转化为具有力量感的视觉表达。',
    story:[['把动作变成主题','以输入、移动、聆听、看见与表达为线索，为五类设备建立各自的沟通主题。'],['统一视觉语法','深色背景与青蓝强调色贯穿系列，保持品牌标识、产品型号和信息排版的连续性。'],['用细节传达质感','通过局部特写、材质光泽与尺度对比突出产品特征，让产品信息与品牌情绪形成清晰的阅读顺序。']],
    images:Array.from({length:5},(_,i)=>({src:asset(`deskon-${String(i+1).padStart(2,'0')}`),caption:['K1 · 机械键盘','M1 · 轻量无线鼠标','H1 · 游戏耳机','C1 · 4K 摄像头','M2 · 桌面麦克风'][i]})),next:'lanxin'
  },
  lanxin:{
    index:'04',name:'澜信 LANXIN',short:'澜信 · 艺工鲸',category:'校园 IP / 形象系统',subtitle:'让创意逐浪，让灵感发光。',cover:asset('lanxin-cover'),type:'校园 IP 概念提案',scope:'角色形象 · 设计理念 · 应用延展',output:'15 页完整提案',pdf:'assets/dalian-ip.pdf',landscape:true,
    summary:'以“艺工鲸”为形象载体，把海洋意象、艺术表达、工程思维与信息连接融入校园 IP。蓝色鲸鱼、画笔与齿轮等线索共同形成亲和而充满创作感的角色语言。',
    story:[['从校园语境出发','围绕大连工业大学艺术与信息工程学院的语境，将海洋城市意象与艺术、信息等主题结合。'],['建立角色识别','以鲸鱼为核心造型，使用深蓝、青蓝与琥珀橙建立色彩识别，让角色同时具备亲和力与清晰的记忆点。'],['从角色走向应用','完整提案进一步展开角色设定与场景应用，探索 IP 在校园交流和视觉传播中的延展可能。']],
    images:Array.from({length:15},(_,i)=>({src:asset(`lanxin-${String(i+1).padStart(2,'0')}`),caption:['澜信 · 艺工鲸形象提案','项目背景与设计方向','形象概念与设计理念','角色设计展开'][i]||`IP 形象系统与应用 · 第 ${String(i+1).padStart(2,'0')} 页`})),next:'fuguang'
  }
};
const main = document.querySelector('#main');
const homeView = document.querySelector('#home-view');
const projectView = document.querySelector('#project-view');
const baseTitle = '杨文生 — 视觉设计作品集';
let activeProject = null;
let currentImage = 0;
let toastTimer;
let returnFocus = null;
function notify(message){
  const toast=document.querySelector('#toast');
  toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('visible'),3000);
}
function renderProject(key){
  const p=projectData[key];
  if(!p) return false;
  activeProject=p;
  document.title=`${p.short} — 杨文生作品集`;
  const next=projectData[p.next];
  projectView.innerHTML=`<div class="section-shell"><a class="project-back" href="#work">← 返回精选作品</a><header class="case-header"><div><p class="eyebrow">${p.index} / ${p.category}</p><h1>${p.name}</h1><p class="case-subtitle">${p.subtitle}</p></div><p class="case-summary">${p.summary}</p></header><dl class="case-facts"><div><dt>PROJECT TYPE</dt><dd>${p.type}</dd></div><div><dt>DESIGN SCOPE</dt><dd>${p.scope}</dd></div><div><dt>DELIVERABLES</dt><dd>${p.output}</dd></div></dl><div class="case-cover"><img src="${p.cover}" alt="${p.short}主视觉" fetchpriority="high"></div><div class="case-narrative">${p.story.map((s,i)=>`<section><h2><span>0${i+1} / DESIGN THINKING</span>${s[0]}</h2><p>${s[1]}</p></section>`).join('')}</div><div class="gallery-heading"><h2>视觉展开</h2><span>${p.images.length} 张作品 · 点击可放大</span></div><div class="case-gallery ${p.landscape?'landscape':''}">${p.images.map((im,i)=>`<figure><button class="gallery-image" data-image="${i}" aria-label="放大查看：${im.caption}"><img src="${im.src}" alt="${im.caption}" loading="lazy" ${p.landscape?'width="1536" height="1024"':'width="1200" height="1698"'}><span aria-hidden="true">放大 ↗</span></button><figcaption><span>${String(i+1).padStart(2,'0')}</span>${im.caption}</figcaption></figure>`).join('')}</div>${p.pdf?`<div class="case-download"><p>更多设计细节，收录于完整 PDF 档案。</p><a class="button button-dark" href="${p.pdf}" target="_blank" rel="noopener">查看完整 PDF <span>↗</span></a></div>`:''}<a class="next-project" href="#project/${p.next}"><div><small>NEXT PROJECT / ${next.index}</small><h2>${next.short}</h2></div><span aria-hidden="true">↗</span></a></div>`;
  return true;
}
function route(){
  closeMenu();
  if(lightbox.open)lightbox.close();
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash.startsWith('project/') && renderProject(hash.split('/')[1])){
    homeView.hidden=true;projectView.hidden=false;
    window.scrollTo({top:0,behavior:'instant'});
    projectView.focus({preventScroll:true});
  }else{
    homeView.hidden=false;projectView.hidden=true;document.title=baseTitle;
    const target=document.getElementById(hash==='home'||!hash?'main':hash);
    if(target){requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant',block:'start'}));}
  }
}
const menu=document.querySelector('.menu-button');
const mobileNav=document.querySelector('#mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','打开导航菜单');mobileNav.hidden=true;}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'打开导航菜单':'关闭导航菜单');mobileNav.hidden=open;});
mobileNav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('click',e=>{if(!mobileNav.hidden && !e.target.closest('.mobile-nav,.menu-button'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && !mobileNav.hidden){closeMenu();menu.focus();}});
window.addEventListener('resize',()=>{if(innerWidth>760)closeMenu();});
// Filter real project collections; the visible count mirrors the selected category.
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('.project').forEach(card=>{const show=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;card.classList.toggle('filtered-out',!show);if(show)count++;});
  document.querySelector('.project-grid').classList.toggle('filtered',button.dataset.filter!=='all');
  document.querySelector('#filter-count').textContent=`${String(count).padStart(2,'0')} PROJECT${count===1?'':'S'}`;
}));
// The featured image can be explored without an automatic carousel.
document.querySelectorAll('[data-hero]').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.hero,p=projectData[key];
  document.querySelectorAll('[data-hero]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  const image=document.querySelector('#hero-image');image.src=p.cover;image.alt=`${p.short}主视觉`;
  const stage=document.querySelector('.hero-stage');stage.href=`#project/${key}`;stage.setAttribute('aria-label',`查看${p.short}项目`);
  document.querySelector('#hero-category').textContent=`${key==='jade'?'CULTURAL DESIGN':'BRAND VISUAL'} / ${p.index}`;
  document.querySelector('#hero-project-title').textContent=p.short;
}));
const lightbox=document.querySelector('#lightbox');
function showImage(index){
  if(!activeProject)return;
  currentImage=(index+activeProject.images.length)%activeProject.images.length;
  const image=activeProject.images[currentImage],el=document.querySelector('#lightbox-image');
  el.classList.remove('zoomed');el.src=image.src;el.alt=image.caption;
  document.querySelector('#lightbox-title').textContent=image.caption;
  document.querySelector('#lightbox-count').textContent=`${currentImage+1} / ${activeProject.images.length}`;
}
projectView.addEventListener('click',e=>{const button=e.target.closest('[data-image]');if(!button)return;returnFocus=button;showImage(Number(button.dataset.image));lightbox.showModal();document.body.classList.add('lightbox-open');document.querySelector('#lightbox-close').focus();});
document.querySelector('#lightbox-close').addEventListener('click',()=>lightbox.close());
document.querySelector('#lightbox-prev').addEventListener('click',()=>showImage(currentImage-1));
document.querySelector('#lightbox-next').addEventListener('click',()=>showImage(currentImage+1));
document.querySelector('#lightbox-image').addEventListener('click',e=>e.target.classList.toggle('zoomed'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
lightbox.addEventListener('close',()=>{document.body.classList.remove('lightbox-open');if(returnFocus?.isConnected)returnFocus.focus();});
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showImage(currentImage-1);}if(e.key==='ArrowRight'){e.preventDefault();showImage(currentImage+1);}});
document.querySelector('#copy-email').addEventListener('click',async()=>{
  try{
    if(navigator.clipboard?.writeText){await navigator.clipboard.writeText('2708328934@qq.com');}
    else{const field=document.createElement('textarea');field.value='2708328934@qq.com';field.style.position='fixed';field.style.left='-9999px';document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();if(!ok)throw new Error('copy unavailable');}
    notify('邮箱已复制：2708328934@qq.com');
  }catch{notify('请手动复制：2708328934@qq.com');}
});
window.addEventListener('hashchange',route);
route();
