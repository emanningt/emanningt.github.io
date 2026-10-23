/* Approved inward-fold animation and hands-on-first layout. No guide data or password is embedded here. */
(()=>{
'use strict';
const PATCHES = [["    }\n  }\n","    }\n  }\n  // Positive Y rotation of the LEFT leaf closes the inner display face-to-face.\n  // The hinge pivot is 6.1px ahead of each slab center. With +/-5.2px faces,\n  // this leaves a 1.8px internal gap and a 22.6px total closed thickness.\n  const easeHinge = t => {t=clamp(t,0,1);return t*t*t*(t*(t*6-15)+10);};\n  function setHinge(s,open,animate=true){\n    s.manual=true;s.folded=open<.5;s.fromOpen=s.open;s.targetOpen=open;s.hingeElapsed=0;\n    if(!animate||paused||reduced.matches){s.open=open;s.hingeElapsed=2;}\n    document.querySelectorAll(`[data-fold=\"${s.id}\"]`).forEach(b=>{\n      b.querySelector('span').textContent=s.folded?'Unfold':'Fold';\n      b.setAttribute('aria-label',s.folded?'Unfold the animated phone':'Fold the animated phone');\n      b.setAttribute('aria-pressed',String(s.folded));\n    });\n    drawPhone(s,0);kick();\n  }\n"],["    const intro=smooth(time/2.25);\n    let target=s.folded?0.025:1.;\n    if(s.manual===false&&!paused)target=.07+.93*intro;\n    if(paused&&s.manual===false)target=s.time===0?1:s.open;\n    if(forceTime!==null)s.open=target;\n    else if(paused||dt===0)s.open=target;\n    else s.open+=(target-s.open)*(1-Math.exp(-dt*4.8));\n    const idle=1;\n    const yaw=-20+Math.sin(time*.43)*5*idle+s.x*24;\n    const pitch=15+Math.sin(time*.39)*2.4*idle-s.y*11;\n    const roll=-10+Math.sin(time*.31)*2*idle;\n    const floatY=Math.sin(time*.72)*4*idle;\n    const center=(1-s.open)*74;\n    s.rig.style.transform=`translate3d(${center.toFixed(2)}px,${floatY.toFixed(2)}px,0) rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg) rotateZ(${roll.toFixed(2)}deg)`;\n    s.half.style.transform=`rotateY(${(-177*(1-s.open)).toFixed(2)}deg)`;\n    s.shadow.style.transform=`translateX(${(center*.30).toFixed(1)}px) scaleX(${(.55+.45*s.open).toFixed(3)})`;\n    const sheen=.3+Math.abs(s.x)*.3;\n    s.el.querySelectorAll('.glass-sheen').forEach(el=>el.style.opacity=sheen.toFixed(3));\n","    if(!s.manual){\n      if(!paused||forceTime!==null)s.open=easeHinge(time/2.6);\n      else if(s.time===0)s.open=1;\n    }else{\n      if(!paused)s.hingeElapsed=Math.min(2,s.hingeElapsed+dt);\n      s.open=s.fromOpen+(s.targetOpen-s.fromOpen)*easeHinge(s.hingeElapsed/1.65);\n    }\n    if(Math.abs(s.open-1)<.000001)s.open=1;\n    if(Math.abs(s.open)<.000001)s.open=0;\n    const angle=180*(1-s.open);\n    const yaw=-18+Math.sin(time*.43)*3.5+s.x*27;\n    const pitch=12+Math.sin(time*.39)*1.8-s.y*10;\n    const roll=-8+Math.sin(time*.31)*1.5;\n    const floatY=Math.sin(time*.72)*3;\n    // Keep the closed device centered rather than sliding to the right.\n    const center=-82.3*(1-Math.cos(Math.min(angle,90)*Math.PI/180));\n    s.rig.style.transform=`translate3d(${center.toFixed(4)}px,${floatY.toFixed(3)}px,0) rotateX(${pitch.toFixed(3)}deg) rotateY(${yaw.toFixed(3)}deg) rotateZ(${roll.toFixed(3)}deg)`;\n    s.half.style.transform=`rotateY(${angle.toFixed(5)}deg)`;\n    s.rig.classList.toggle('duo-is-flat',s.open===1);\n    s.el.dataset.openAngle=String(Math.round(s.open*180));\n    s.shadow.style.transform=`scaleX(${(.54+.46*s.open).toFixed(3)})`;\n    s.el.querySelectorAll('.cover-face .glass-sheen').forEach(el=>el.style.opacity=(.18+Math.abs(s.x)*.12).toFixed(3));\n    const range=document.querySelector(`[data-hinge=\"${s.id}\"]`);\n    if(range){range.value=String(Math.round(s.open*180));range.setAttribute('aria-valuetext',s.open===1?'Fully open, 180 degrees':s.open===0?'Closed, 0 degrees':`${Math.round(s.open*180)} degrees open`);}\n    const output=document.querySelector(`[data-hinge-value=\"${s.id}\"]`);if(output)output.textContent=`${Math.round(s.open*180)}°`;\n"],["    const s={el,id:el.dataset.id,type:el.dataset.scene,visible:false,time:0,x:0,y:0,tx:0,ty:0,open:.07,folded:false,manual:false,pulse:0,gl:null,triedGL:false};\n    if(s.type==='duo'){s.rig=el.querySelector('.phone-rig');s.half=el.querySelector('.phone-right');s.shadow=el.querySelector('.phone-shadow');}\n","    const s={el,id:el.dataset.id,type:el.dataset.scene,visible:false,time:0,x:0,y:0,tx:0,ty:0,open:0,fromOpen:0,targetOpen:1,hingeElapsed:0,folded:false,manual:false,pulse:0,gl:null,triedGL:false};\n    if(s.type==='duo'){s.rig=el.querySelector('.phone-rig');s.half=el.querySelector('.phone-left');s.shadow=el.querySelector('.phone-shadow');}\n"],["    const s=states.find(s=>s.id===b.dataset.fold);if(!s)return;\n    s.manual=true;s.folded=!s.folded;\n    b.querySelector('span').textContent=s.folded?'Unfold':'Fold';\n    b.setAttribute('aria-label',s.folded?'Unfold the animated phone':'Fold the animated phone');\n    b.setAttribute('aria-pressed',String(s.folded));\n    if(paused)draw(s,0);else kick();\n","    const s=states.find(s=>s.id===b.dataset.fold);if(s)setHinge(s,s.folded?1:0,true);\n  }));\n  document.querySelectorAll('[data-hinge]').forEach(input=>input.addEventListener('input',()=>{\n    const s=states.find(s=>s.id===input.dataset.hinge);if(s)setHinge(s,clamp(Number(input.value)/180,0,1),false);\n"],["    pause:setPaused,\n","    pause:setPaused,\n    setOpen(id,amount){const s=states.find(s=>s.id===id);if(s)setHinge(s,clamp(amount,0,1),false);},\n    setView(id,x,y){const s=states.find(s=>s.id===id);if(s){s.x=s.tx=x;s.y=s.ty=y;draw(s,0);}},\n"],["    inspect(){return {paused,reducedMotion:reduced.matches,scenes:states.map(s=>({id:s.id,type:s.type,visible:isVisible(s),canvas3D:!!s.ctx,folded:s.folded,time:s.time}))};}\n","    inspect(){return {paused,reducedMotion:reduced.matches,scenes:states.map(s=>({id:s.id,type:s.type,visible:isVisible(s),canvas3D:!!s.ctx,folded:s.folded,open:s.open,openAngle:180*s.open,movingLeaf:s.type==='duo'?'left':null,time:s.time}))};}\n"]];
const RELEASE_STYLE = ".duo-scene .phone-perspective { width:329.2px;height:235.6px;margin:-117.8px 0 0 -164.6px;top:48%;perspective:1100px; }\n.duo-scene .phone-rig { width:329.2px;height:235.6px;transform-style:preserve-3d; }\n.duo-scene .phone-half { width:164.6px;height:235.6px;top:0;transform-style:preserve-3d; }\n.duo-scene .phone-left { left:0;transform-origin:100% 50% 6.1px;will-change:transform; }\n.duo-scene .phone-right { left:164.6px;transform:none;transform-origin:0 50% 6.1px;will-change:auto; }\n.duo-scene .metal-slice { border-radius:23px;background:linear-gradient(118deg,#e1e7ee 0%,#6d7e91 4%,#2c3a4e 15%,#131d2d 46%,#465970 84%,#c3cfdf 97%,#667d98);border:1px solid #98afc855; }\n.duo-scene .phone-left .metal-slice { border-radius:23px 2px 2px 23px; }\n.duo-scene .phone-right .metal-slice { border-radius:2px 23px 23px 2px; }\n.duo-scene .inner-face { top:3px;bottom:3px;background:#070c15;border:3px solid #080c14;box-shadow:none;transform:translateZ(5.2px); }\n.duo-scene .phone-left .inner-face { left:3px;right:0;border-right:0;border-radius:20px 0 0 20px; }\n.duo-scene .phone-right .inner-face { left:0;right:3px;border-left:0;border-radius:0 20px 20px 0; }\n.duo-scene .wallpaper { left:0;top:0;width:317.2px;height:223.6px; }\n.duo-scene .phone-right .wallpaper { left:-158.6px; }\n\n.duo-scene .inner-face > .glass-sheen { left:0;right:auto;top:0;bottom:0;width:317.2px;background:linear-gradient(118deg,transparent 10%,#d9efff05 32%,#ffffff0d 40%,transparent 68%);opacity:1!important; }\n.duo-scene .phone-right .inner-face > .glass-sheen { left:-158.6px; }\n.duo-scene .duo-flat-display { position:absolute;inset:3px;border:3px solid #080c14;border-radius:20px;overflow:hidden;background:#08101c;transform:translateZ(5.22px);backface-visibility:hidden;-webkit-backface-visibility:hidden;visibility:hidden;pointer-events:none; }\n.duo-scene .duo-flat-display > .glass-sheen { background:linear-gradient(118deg,transparent 10%,#d9efff05 32%,#ffffff0d 40%,transparent 68%);opacity:1!important; }\n.duo-scene .phone-rig.duo-is-flat .duo-flat-display { visibility:visible; }\n.duo-scene .phone-rig.duo-is-flat .inner-face { visibility:hidden; }\n.duo-scene .hinge { left:161px;top:3px;bottom:3px;width:7.2px;border-radius:4px;background:linear-gradient(90deg,#172131,#9baab9 35%,#556777 65%,#111b29);transform:translateZ(-1px); }\n\n.duo-scene .phone-rig.duo-is-flat .hinge { visibility:hidden; }\n.duo-scene .screen-clock { inset:21px 0 auto; }\n.duo-scene .screen-clock strong { font-size:49px;letter-spacing:-.05em; }\n.duo-scene .screen-clock small { font-size:9px; }\n.duo-scene .screen-dock { left:auto;right:12px;bottom:15px;flex-direction:column;gap:6px;padding:7px 6px;border-radius:12px;background:#cadcff1c; }\n.duo-scene .ribbon-a { top:55px;left:-77px; }\n.duo-scene .ribbon-b { top:-45px;left:90px; }\n.duo-scene .ribbon-c { top:136px;left:100px; }\n.duo-scene .ribbon-d { top:170px;left:-15px; }\n.duo-scene .cover-face { inset:2px;border:4px solid #090d14;border-radius:21px;transform:translateZ(-5.2px) rotateY(180deg);box-shadow:0 0 0 .7px #c6d2df77; }\n.duo-scene .cover-wallpaper { background:radial-gradient(ellipse at 85% 64%,#adc9dd 0%,#667ac0 19%,#263451 26%,#0b1728 31%,transparent 50%),radial-gradient(ellipse at -30% 67%,#b6d9e7 0%,#8799be 35%,#1b2942 41%,#0b1320 50%); }\n.duo-scene .island { width:9px;height:9px;left:auto;right:9px;top:9px;margin:0;border-radius:50%;background:#020507;box-shadow:inset 0 0 1px #182435; }\n.duo-scene .cover-clock { top:25px; }\n.duo-scene .cover-clock strong { font-size:48px; }\n.duo-scene .rear-face { inset:2px;border-radius:21px;transform:translateZ(-5.2px) rotateY(180deg);background:linear-gradient(125deg,#354251,#182638 63%,#223348); }\n.duo-scene .camera-island { top:12px;left:9px;right:9px;width:auto;height:42px;border-radius:20px;background:linear-gradient(115deg,#435467,#263446);padding:5px 8px;gap:6px; }\n.duo-scene .camera-lens { width:30px;height:30px;flex:0 0 30px;border-width:3px; }\n.duo-scene .flash { margin-left:auto;width:6px;height:6px; }\n.duo-scene .phone-button { left:auto;right:-1px;top:68px; }\n.duo-scene .back-line { display:none; }\n.hinge-scrub { display:flex;align-items:center;gap:11px;margin:0 28px 17px;color:#9ca7be;font:10px/1.2 -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif; }\n.hinge-scrub label { white-space:nowrap; }\n.hinge-scrub input { display:block;width:100%;min-width:50px;height:24px;margin:0;accent-color:#b0c5e5;cursor:ew-resize;touch-action:pan-x; }\n.hinge-scrub output { min-width:30px;text-align:right;font-variant-numeric:tabular-nums;color:#dce4f8; }\n.guide-motion .hinge-scrub { margin:0 22px 13px; }\n.visual-disclaimer a { color:inherit;text-underline-offset:2px; }\nbody.motion-paused .view,body.motion-paused .duo-accordion[open] .accordion-body { animation:none!important; }\n@media(min-width:821px){.duo-scene .phone-perspective{transform:scale(.88)}}\n@media(max-width:820px) and (min-width:621px){.duo-scene .phone-perspective{transform:scale(.74)}}\n@media(max-width:620px){.duo-scene .phone-perspective{transform:scale(.84)}.hinge-scrub{margin:0 23px 14px}.preview-badge{font-size:9px}}\n@media(max-width:355px){.duo-scene .phone-perspective{transform:scale(.74)}.preview-badge{font-size:8px;padding:6px}.hinge-scrub{margin:0 18px 14px;gap:7px}}\n@media(min-width:1450px){.duo-scene .phone-perspective{transform:scale(.98)}}\n\n/* Task-first hierarchy. The animations remain on the home screen. */\n.priority-launch{display:flex;align-items:center;justify-content:space-between;gap:18px;margin:0 0 24px;padding:19px 22px;border:1px solid #0071e340;border-radius:20px;background:linear-gradient(120deg,#edf5ff,#f6f9ff);color:var(--ink)}\n.priority-launch-copy{min-width:0}\n.priority-launch-copy strong{display:block;font-size:17px;letter-spacing:-.025em;line-height:1.25}\n.priority-launch-copy span{display:block;font-size:12px;line-height:1.45;color:var(--gray);margin-top:4px}\n.priority-launch-button,.hands-on-card-cta{display:inline-flex;align-items:center;justify-content:center;gap:9px;flex:none;min-height:46px;padding:12px 18px;border:0;border-radius:999px;background:#0071e3!important;color:white!important;font:700 13px/1.2 -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;text-decoration:none;cursor:pointer}\n.priority-launch-button:hover,.hands-on-card-cta:hover{background:#005bb9!important}\n.priority-launch-button:focus-visible,.hands-on-card-cta:focus-visible{outline:3px solid var(--blue);outline-offset:4px}\n.priority-launch-button svg,.hands-on-card-cta svg{width:17px;height:17px}\n#duoScreen .duo-intro{margin-bottom:18px}\n#duoScreen .duo-quick-nav{margin-bottom:20px}\n#duoScreen .duo-quick-nav a[href=\"#duo-quick\"]{background:#0071e3;color:#fff;padding:11px 16px}\n#duoScreen .hands-on-primary{margin-top:0;padding:20px 18px 8px;background:var(--card);border:1px solid #0071e34a;border-radius:22px;scroll-margin-top:72px}\n.hands-on-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 8px}\n#duoScreen .hands-on-heading h2{font-size:28px;line-height:1.15;letter-spacing:-.045em}\n.hands-on-count{flex:none;font-size:11px;font-weight:750;border-radius:99px;padding:6px 9px;background:var(--chip);color:var(--blue);white-space:nowrap}\n#duoScreen .hands-on-primary .duo-kicker{font-size:10px;margin-bottom:8px}\n#duoScreen .hands-on-primary .duo-section-sub{font-size:12px;margin-bottom:16px}\n#duoScreen .hands-on-primary .duo-accordion{background:var(--bg);border-color:var(--line);margin-bottom:12px}\n#duoScreen .hands-on-primary summary{min-height:74px;padding:15px}\n#duoScreen .hands-on-primary .accordion-label{font-size:16px;font-weight:750;line-height:1.3}\n#duoScreen .hands-on-primary .accordion-num{background:var(--chip);border:0;color:var(--blue);width:36px;height:36px;flex-basis:36px}\n#duoScreen .hands-on-primary .accordion-body li{font-size:14px;line-height:1.55}\n#duoScreen .guide-motion{margin-top:28px;margin-bottom:28px}\n.hands-on-top-link{font:700 12px/1.2 -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;color:var(--blue);border:1px solid var(--line);border-radius:99px;padding:10px 13px;min-height:40px;background:var(--card);text-decoration:none;display:inline-flex;align-items:center}\n@media(prefers-color-scheme:dark){.priority-launch{background:linear-gradient(120deg,#0b2039,#101c2c);border-color:#2997ff66}.priority-launch-button,.hands-on-card-cta{background:#0b75df!important}#duoScreen .hands-on-primary{border-color:#2997ff66}}\n@media(max-width:620px){.priority-launch{padding:17px;gap:14px;flex-wrap:wrap}.priority-launch-button{width:100%}.duo-experience .experience-footer{flex-wrap:wrap}.hands-on-card-cta{width:100%}#duoScreen .hands-on-primary{padding:18px 12px 6px}#duoScreen .hands-on-heading h2{font-size:26px}#duoScreen .hands-on-primary summary{padding:14px 12px}.hands-on-top-link{font-size:11px;padding:9px 11px}}\n";

const previousPrepare = window.prepareDemoMotion;
function replaceOnce(source, before, after) {
  if (!before || source.indexOf(before) < 0 || source.indexOf(before) !== source.lastIndexOf(before)) {
    throw new Error('This guide version needs a fresh reload before the update can open.');
  }
  return source.replace(before, () => after);
}
window.prepareDemoMotion = function(html) {
  if (typeof previousPrepare !== 'function') throw new Error('The animation could not load. Refresh and try again.');
  const doc = new DOMParser().parseFromString(previousPrepare(html), 'text/html');
  const runtime = doc.getElementById('motion-edition-script');
  if (!runtime) throw new Error('The animation could not be prepared.');
  let code = runtime.textContent;
  for (const [before, after] of PATCHES) code = replaceOnce(code, before, after);
  runtime.textContent = code;

  const style = doc.createElement('style');
  style.id = 'duo-hands-on-release-style';
  style.textContent = RELEASE_STYLE;
  doc.head.appendChild(style);
  const scenes = doc.querySelectorAll('[data-scene="duo"]');
  if (scenes.length !== 2) throw new Error('The Duo scenes could not be found.');
  scenes.forEach(scene => {
    const rig = scene.querySelector('.phone-rig');
    const left = rig.querySelector('.phone-left');
    const right = rig.querySelector('.phone-right');
    const cover = right.querySelector('.cover-face');
    const rear = left.querySelector('.rear-face');
    if (!cover || !rear) throw new Error('The Duo model could not be updated.');
    left.appendChild(cover);
    right.appendChild(rear);
    const flat = doc.createElement('div');
    flat.className = 'duo-flat-display';
    flat.setAttribute('aria-hidden', 'true');
    flat.innerHTML = left.querySelector('.inner-face').innerHTML;
    rig.appendChild(flat);
    scene.dataset.designRevision = 'inward-seamless-v2';
    scene.setAttribute('aria-label','Illustrative iPhone Duo animation. The inner display folds inward; the outer display remains outside. Drag to rotate or adjust the opening angle.');
    const id = scene.dataset.id;
    const controls = scene.nextElementSibling;
    if (!controls || !controls.classList.contains('scene-controls')) throw new Error('The folding controls could not be found.');
    const slider = doc.createElement('div');
    slider.className = 'hinge-scrub';
    slider.innerHTML = '<label for="angle-'+id+'">Opening angle</label><input id="angle-'+id+'" data-hinge="'+id+'" type="range" min="0" max="180" step="1" value="180" aria-label="Phone opening angle: 0 degrees closed, 180 degrees fully open"><output data-hinge-value="'+id+'" for="angle-'+id+'">180°</output>';
    controls.after(slider);
  });

  const home = doc.getElementById('homeScreen');
  const main = doc.querySelector('#duoScreen main');
  const quick = doc.getElementById('duo-quick');
  const practice = doc.getElementById('duo-practice');
  const animation = main.querySelector('.guide-motion.duo-experience');
  const quickNav = main.querySelector('.duo-quick-nav');
  if (!home || !main || !quick || !practice || !animation || !quickNav) throw new Error('The demo sections could not be arranged.');
  // The actual customer demos come first. Nothing is removed.
  quickNav.after(quick);
  quick.after(animation);
  animation.after(practice);
  quick.classList.add('hands-on-primary');
  main.querySelector('.duo-intro').textContent = 'Start with a hands-on demo. Choose a topic below, then let the customer try it.';
  quick.querySelector('.duo-kicker').textContent = '01 / Hands-on first';
  practice.querySelector('.duo-kicker').textContent = '02 / Optional walkthrough';
  const heading = quick.querySelector('h2');
  heading.setAttribute('tabindex','-1');
  const headingRow = doc.createElement('div');
  headingRow.className = 'hands-on-heading';
  heading.before(headingRow);
  headingRow.appendChild(heading);
  const count = doc.createElement('span');
  count.className = 'hands-on-count';
  count.textContent = quick.querySelectorAll('.duo-accordion').length + ' demos';
  headingRow.appendChild(count);
  const handsLink = quickNav.querySelector('[href="#duo-quick"]');
  const walkthroughLink = quickNav.querySelector('[href="#duo-practice"]');
  quickNav.prepend(handsLink);
  walkthroughLink.textContent = 'Walkthrough';

  const primary = home.querySelector('.duo-experience .enter-button');
  primary.classList.add('hands-on-card-cta');
  primary.dataset.anchor = 'duo-quick';
  primary.setAttribute('aria-label','Open iPhone Duo hands-on demos');
  // Keep the existing arrow icon, but replace the text label.
  Array.from(primary.childNodes).filter(node => node.nodeType === 3).forEach(node => node.remove());
  primary.prepend(doc.createTextNode('Hands-on demos '));
  const launch = doc.createElement('div');
  launch.className = 'priority-launch';
  launch.innerHTML = '<div class="priority-launch-copy"><strong>Hands-on demos</strong><span>Jump straight to the six iPhone Duo walkthroughs.</span></div><button type="button" class="priority-launch-button" data-go="duo" data-anchor="duo-quick">Start a demo <span aria-hidden="true">→</span></button>';
  home.querySelector('.experience-grid').before(launch);
  const topLabel = doc.querySelector('#duoScreen .back-inner .page-label');
  const topLink = doc.createElement('button');
  topLink.type = 'button';
  topLink.className = 'hands-on-top-link';
  topLink.dataset.go = 'duo';
  topLink.dataset.anchor = 'duo-quick';
  topLink.textContent = 'Hands-on demos';
  if (topLabel) topLabel.replaceWith(topLink);

  // Navigation understands a direct hands-on destination, including browser Back.
  const navigation = Array.from(doc.querySelectorAll('script')).find(el => el !== runtime && el.textContent.includes('const screens='));
  if (!navigation) throw new Error('Guide navigation could not be updated.');
  navigation.textContent = replaceOnce(navigation.textContent,
    "history.pushState({screen:v},'',v==='home'?'#home':'#'+v);\n    show(v,true);",
    "e.preventDefault();\n    const anchor=b.getAttribute('data-anchor');\n    const target=anchor?document.getElementById(anchor):null;\n    history.pushState({screen:v},'',target?'#'+anchor:(v==='home'?'#home':'#'+v));\n    show(v,true);\n    if(target)requestAnimationFrame(()=>{target.scrollIntoView({block:'start',behavior:'instant'});const title=target.querySelector('h2');if(title)title.focus({preventScroll:true});});"
  );
  doc.documentElement.dataset.edition = 'motion-duo-hands-on-v2';
  return '<!doctype html>' + doc.documentElement.outerHTML;
};
})();
