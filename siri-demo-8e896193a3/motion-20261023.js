/* Demo Playbook Motion Edition. Visual assets only; demo content stays encrypted. */
(() => {
'use strict';
const home = `<section aria-label="Choose a demo" class="view motion-home" id="homeScreen">
<main class="motion-hub">
<header class="motion-top"><a aria-label="Demo Playbook home" class="motion-brand" href="#home"><span aria-hidden="true" class="new-brandmark"><i></i><i></i><i></i></span>Demo Playbook</a><div class="preview-badge"><span></span>Motion Edition</div></header>
<div class="intro-row"><div><p class="motion-eyebrow">THE INTERACTIVE EDITION</p><h1>Ready to <span>demo?</span></h1><p class="motion-subtitle">Two experiences. A whole new first impression.</p></div><button aria-label="Pause animation" aria-pressed="false" class="motion-toggle" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg><span>Pause motion</span></button></div>
<div class="experience-grid">
<article class="experience-card duo-experience"><div class="experience-title"><div><p class="card-eyebrow">01 / EXPLORE THE POSSIBILITIES</p><h2>iPhone <span>Duo.</span></h2></div><span aria-hidden="true" class="card-index">↗</span></div>
<div aria-label="Interactive, stylized 3-D foldable phone. Drag horizontally to rotate it, or use the Fold button." class="motion-scene duo-scene" data-id="home-duo" data-scene="duo" role="img">
<div aria-hidden="true" class="duo-atmosphere"></div><div aria-hidden="true" class="stage-horizon"></div><div aria-hidden="true" class="phone-shadow"></div>
<div aria-hidden="true" class="phone-perspective"><div class="phone-rig"><div class="phone-half phone-left"><div class="metal-slice" style="--z:-5px"></div><div class="metal-slice" style="--z:-4px"></div><div class="metal-slice" style="--z:-2px"></div><div class="metal-slice" style="--z:0px"></div><div class="metal-slice" style="--z:2px"></div><div class="metal-slice" style="--z:4px"></div><div class="screen-face inner-face"><div class="wallpaper"><i class="ribbon ribbon-a"></i><i class="ribbon ribbon-b"></i><i class="ribbon ribbon-c"></i><i class="ribbon ribbon-d"></i><div class="screen-clock"><small>Friday, October 23</small><strong>9:41</strong></div><div class="screen-dock"><i></i><i></i><i></i><i></i></div></div><div class="glass-sheen"></div></div><div class="screen-face rear-face"><div class="camera-island"><i class="camera-lens"></i><i class="camera-lens"></i><i class="flash"></i></div><span class="back-line"></span></div><div class="phone-button"></div></div><div class="hinge"></div><div class="phone-half phone-right"><div class="metal-slice" style="--z:-5px"></div><div class="metal-slice" style="--z:-4px"></div><div class="metal-slice" style="--z:-2px"></div><div class="metal-slice" style="--z:0px"></div><div class="metal-slice" style="--z:2px"></div><div class="metal-slice" style="--z:4px"></div><div class="screen-face inner-face"><div class="wallpaper"><i class="ribbon ribbon-a"></i><i class="ribbon ribbon-b"></i><i class="ribbon ribbon-c"></i><i class="ribbon ribbon-d"></i><div class="screen-clock"><small>Friday, October 23</small><strong>9:41</strong></div><div class="screen-dock"><i></i><i></i><i></i><i></i></div></div><div class="glass-sheen"></div></div><div class="screen-face cover-face"><div class="cover-wallpaper"></div><div class="island"></div><div class="cover-clock"><small>Friday, October 23</small><strong>9:41</strong></div><span class="cover-bar"></span><div class="glass-sheen"></div></div></div></div></div>
<span aria-hidden="true" class="scene-note">DESIGNED TO UNFOLD</span></div>
<div class="scene-controls"><span class="gesture-hint"><span class="gesture-dot"></span> Drag to rotate</span><button aria-label="Fold the animated phone" aria-pressed="false" class="effect-button" data-fold="home-duo" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><rect height="13" rx="2.5" stroke="currentColor" stroke-width="1.2" width="14" x="3" y="3.5"></rect><path d="M10 4v12" stroke="currentColor" stroke-width="1.2"></path></svg><span>Fold</span></button></div>
<div class="experience-footer"><p>A new dimension.<br/><span>Six hands-on demos.</span></p><button class="enter-button" data-go="duo" type="button">Explore Duo <svg aria-hidden="true" fill="none" viewbox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path></svg></button></div></article>
<article class="experience-card siri-experience"><div class="experience-title"><div><p class="card-eyebrow">02 / START A CONVERSATION</p><h2>Siri <span>AI.</span></h2></div><span aria-hidden="true" class="card-index">↗</span></div>
<div aria-label="Interactive Siri-inspired light sculpture. Tap to create a ripple; no microphone is used." class="motion-scene siri-scene" data-id="home-siri" data-scene="siri" role="img">
<div aria-hidden="true" class="orb-fallback"><div></div></div><canvas aria-hidden="true" class="light-canvas"></canvas>
<div aria-hidden="true" class="orb-orbit orbit-a"></div><div aria-hidden="true" class="orb-orbit orbit-b"></div>
<span aria-hidden="true" class="siri-star star-one">✧</span><span aria-hidden="true" class="siri-star star-two">✧</span>
<span aria-hidden="true" class="scene-note">A LITTLE MORE POSSIBLE</span>
</div><div class="scene-controls"><span class="gesture-hint"><span class="gesture-dot"></span> Tap the light to react</span><button aria-label="Animate a ripple in the Siri-inspired light" class="effect-button" data-react="home-siri" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><path d="m10 2 2.1 5.9L18 10l-5.9 2.1L10 18l-2.1-5.9L2 10l5.9-2.1L10 2Z" stroke="currentColor" stroke-width="1.2"></path></svg>React</button></div>
<div class="experience-footer"><p>A spark of possibility.<br/><span>Eight guided demos.</span></p><button class="enter-button" data-go="siri" type="button">Explore Siri <svg aria-hidden="true" fill="none" viewbox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path></svg></button></div></article>
</div><footer class="motion-home-footer"><span>Touch. Explore. Make it yours.</span><span>Pull down at the top to refresh</span></footer>
<p class="visual-disclaimer">Illustrative animations, not exact product renders or a live Siri connection.</p>
</main></section>`;
const duo = `<section aria-label="Interactive duo animation" class="guide-motion duo-experience"><div class="guide-motion-top"><span>Unfold the possibilities.</span><button aria-label="Pause animation" aria-pressed="false" class="motion-toggle mini-toggle" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg><span>Pause</span></button></div><div aria-label="Interactive, stylized 3-D foldable phone. Drag horizontally to rotate it, or use the Fold button." class="motion-scene duo-scene" data-id="guide-duo" data-scene="duo" role="img">
<div aria-hidden="true" class="duo-atmosphere"></div><div aria-hidden="true" class="stage-horizon"></div><div aria-hidden="true" class="phone-shadow"></div>
<div aria-hidden="true" class="phone-perspective"><div class="phone-rig"><div class="phone-half phone-left"><div class="metal-slice" style="--z:-5px"></div><div class="metal-slice" style="--z:-4px"></div><div class="metal-slice" style="--z:-2px"></div><div class="metal-slice" style="--z:0px"></div><div class="metal-slice" style="--z:2px"></div><div class="metal-slice" style="--z:4px"></div><div class="screen-face inner-face"><div class="wallpaper"><i class="ribbon ribbon-a"></i><i class="ribbon ribbon-b"></i><i class="ribbon ribbon-c"></i><i class="ribbon ribbon-d"></i><div class="screen-clock"><small>Friday, October 23</small><strong>9:41</strong></div><div class="screen-dock"><i></i><i></i><i></i><i></i></div></div><div class="glass-sheen"></div></div><div class="screen-face rear-face"><div class="camera-island"><i class="camera-lens"></i><i class="camera-lens"></i><i class="flash"></i></div><span class="back-line"></span></div><div class="phone-button"></div></div><div class="hinge"></div><div class="phone-half phone-right"><div class="metal-slice" style="--z:-5px"></div><div class="metal-slice" style="--z:-4px"></div><div class="metal-slice" style="--z:-2px"></div><div class="metal-slice" style="--z:0px"></div><div class="metal-slice" style="--z:2px"></div><div class="metal-slice" style="--z:4px"></div><div class="screen-face inner-face"><div class="wallpaper"><i class="ribbon ribbon-a"></i><i class="ribbon ribbon-b"></i><i class="ribbon ribbon-c"></i><i class="ribbon ribbon-d"></i><div class="screen-clock"><small>Friday, October 23</small><strong>9:41</strong></div><div class="screen-dock"><i></i><i></i><i></i><i></i></div></div><div class="glass-sheen"></div></div><div class="screen-face cover-face"><div class="cover-wallpaper"></div><div class="island"></div><div class="cover-clock"><small>Friday, October 23</small><strong>9:41</strong></div><span class="cover-bar"></span><div class="glass-sheen"></div></div></div></div></div>
<span aria-hidden="true" class="scene-note">DESIGNED TO UNFOLD</span></div>
<div class="scene-controls"><span class="gesture-hint"><span class="gesture-dot"></span> Drag to rotate</span><button aria-label="Fold the animated phone" aria-pressed="false" class="effect-button" data-fold="guide-duo" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><rect height="13" rx="2.5" stroke="currentColor" stroke-width="1.2" width="14" x="3" y="3.5"></rect><path d="M10 4v12" stroke="currentColor" stroke-width="1.2"></path></svg><span>Fold</span></button></div><div class="guide-visual-caption">Stylized foldable concept</div></section>`;
const siri = `<section aria-label="Interactive siri animation" class="guide-motion siri-experience"><div class="guide-motion-top"><span>Let the conversation glow.</span><button aria-label="Pause animation" aria-pressed="false" class="motion-toggle mini-toggle" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg><span>Pause</span></button></div><div aria-label="Interactive Siri-inspired light sculpture. Tap to create a ripple; no microphone is used." class="motion-scene siri-scene" data-id="guide-siri" data-scene="siri" role="img">
<div aria-hidden="true" class="orb-fallback"><div></div></div><canvas aria-hidden="true" class="light-canvas"></canvas>
<div aria-hidden="true" class="orb-orbit orbit-a"></div><div aria-hidden="true" class="orb-orbit orbit-b"></div>
<span aria-hidden="true" class="siri-star star-one">✧</span><span aria-hidden="true" class="siri-star star-two">✧</span>
<span aria-hidden="true" class="scene-note">A LITTLE MORE POSSIBLE</span>
</div><div class="scene-controls"><span class="gesture-hint"><span class="gesture-dot"></span> Tap the light to react</span><button aria-label="Animate a ripple in the Siri-inspired light" class="effect-button" data-react="guide-siri" type="button"><svg aria-hidden="true" fill="none" viewbox="0 0 20 20"><path d="m10 2 2.1 5.9L18 10l-5.9 2.1L10 18l-2.1-5.9L2 10l5.9-2.1L10 2Z" stroke="currentColor" stroke-width="1.2"></path></svg>React</button></div><div class="guide-visual-caption">Interactive visual · No microphone used</div></section>`;
function navigation(){
(()=>{
  const screens={home:document.getElementById('homeScreen'),duo:document.getElementById('duoScreen'),siri:document.getElementById('siriScreen')};
  const fromHash=()=>{
    const h=location.hash.toLowerCase();
    if(h==='#siri'||/^#d[0-7]$/.test(h))return 'siri';
    if(h.startsWith('#duo'))return 'duo';
    return 'home';
  };
  let active=null;
  const show=(name, scrollTop=true)=>{
    if(!screens[name])name='home';
    const changed=active!==name;
    for(const [n,el] of Object.entries(screens))el.hidden=n!==name;
    active=name;
    document.title=(name==='duo'?'iPhone Duo Demos':name==='siri'?'Siri AI Demos':'Demo Playbook');
    if(scrollTop&&changed)scrollTo({top:0,behavior:'instant'});
  };
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-go]');if(!b)return;
    const v=b.getAttribute('data-go');if(!screens[v])return;
    history.pushState({screen:v},'',v==='home'?'#home':'#'+v);
    show(v,true);
  });
  addEventListener('popstate',()=>show(fromHash(),true));
  addEventListener('hashchange',()=>show(fromHash(),false));
  show(fromHash(),false);
  if(/^#d[0-7]$/.test(location.hash)||location.hash.startsWith('#duo-')){
     requestAnimationFrame(()=>requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView()));
  }
})();



(()=>{
  const box=document.getElementById('pullRefresh'), text=document.getElementById('refreshText');
  let startY=0, pull=0, tracking=false;
  const threshold=88;
  const reset=()=>{pull=0;tracking=false;box.classList.remove('show');box.style.transform='translate(-50%,-54px)';text.textContent='Pull to refresh';};
  addEventListener('touchstart',e=>{if(scrollY<=0&&e.touches.length===1&&!e.target.closest(".motion-scene,button,input,a")){tracking=true;startY=e.touches[0].clientY;pull=0;}},{passive:true});
  addEventListener('touchmove',e=>{if(!tracking)return;pull=Math.max(0,e.touches[0].clientY-startY);if(pull<6)return;const y=Math.min(18,pull*.22)-42;box.style.transform=`translate(-50%,${y}px)`;box.classList.add('show');text.textContent=pull>=threshold?'Release to refresh':'Pull to refresh';},{passive:true});
  addEventListener('touchend',()=>{if(!tracking)return;if(pull>=threshold){box.classList.add('show','refreshing');box.style.transform='translate(-50%,10px)';text.textContent='Refreshing…';const u=new URL(location.href);if(location.protocol==='file:'){location.reload();return;}u.searchParams.set('_refresh',Date.now().toString());setTimeout(()=>location.replace(u.href),120);}else reset();},{passive:true});
  if(location.search.includes('_refresh=')) history.replaceState(null,'',location.pathname+location.hash);
})();

}
function startMotion(){
'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = window.matchMedia('(pointer: coarse)');
  let paused = reduced.matches;
  let raf = 0, last = 0, lastPaint = 0;
  let forceTime = null;
  const states = [];
  const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
  const smooth = x => { x=clamp(x,0,1);return x*x*(3-2*x); };
  const isVisible = s => s.visible && !s.el.closest('.view')?.hidden;
  const playIcon='<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m7 4 9 6-9 6V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
  const pauseIcon='<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 5v10M13 5v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  function updateControls(){
    document.body.classList.toggle('motion-paused',paused);
    document.querySelectorAll('.motion-toggle').forEach(b=>{
      b.setAttribute('aria-pressed',String(paused));
      b.setAttribute('aria-label',paused?'Play animation':'Pause animation');
      b.innerHTML=(paused?playIcon:pauseIcon)+'<span>'+(b.classList.contains('mini-toggle')?(paused?'Play':'Pause'):(paused?'Play motion':'Pause motion'))+'</span>';
    });
  }
  function setPaused(value){
    paused=value;last=0;updateControls();
    if(paused){cancelAnimationFrame(raf);raf=0;renderAll(0);}
    else kick();
  }
  document.querySelectorAll('.motion-toggle').forEach(b=>b.addEventListener('click',()=>setPaused(!paused)));
  reduced.addEventListener?.('change',e=>setPaused(e.matches));

  // Projected 3-D ribbon geometry on Canvas 2D. Works without WebGL or external assets.
  const TAU=Math.PI*2;
  const colors=[[73,216,253],[128,131,255],[190,119,250],[246,130,203],[255,194,164],[102,222,240]];
  function palette(n){
    n=((n%1)+1)%1*colors.length;
    const i=Math.floor(n),t=n-i,a=colors[i],b=colors[(i+1)%colors.length];
    return a.map((v,k)=>v+(b[k]-v)*t);
  }
  function rgb(c,a=1){return `rgba(${c.map(x=>Math.round(clamp(x,0,255))).join(',')},${a})`;}
  function initLight(s){
    if(s.triedCanvas)return;s.triedCanvas=true;
    s.canvas=s.el.querySelector('canvas');s.ctx=s.canvas.getContext('2d',{alpha:false});
    if(s.ctx){s.el.classList.add('canvas-ready');resizeLight(s);}
  }
  function resizeLight(s){
    if(!s.ctx)return;
    const r=s.el.getBoundingClientRect();if(r.width<1||r.height<1)return;
    const scale=Math.min(window.devicePixelRatio||1,1.5);
    const w=Math.round(r.width*scale),h=Math.round(r.height*scale);
    if(s.canvas.width!==w||s.canvas.height!==h){s.canvas.width=w;s.canvas.height=h;}
    s.cw=r.width;s.ch=r.height;s.scale=scale;
  }
  function drawLight(s){
    initLight(s);if(!s.ctx)return;resizeLight(s);
    const ctx=s.ctx,w=s.cw,h=s.ch,t=forceTime===null?s.time:forceTime;
    ctx.setTransform(s.scale,0,0,s.scale,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
    ctx.fillStyle='#080a10';ctx.fillRect(0,0,w,h);
    const cx=w*.5,cy=h*.472,R=h*.335*(1+s.pulse*.025);
    const tiltX=.28+Math.sin(t*.24)*.12+s.y*.34,tiltY=t*.21+s.x*.52,tiltZ=-.30;
    const ca=Math.cos(tiltX),sa=Math.sin(tiltX),cb=Math.cos(tiltY),sb=Math.sin(tiltY),cc=Math.cos(tiltZ),sc=Math.sin(tiltZ);
    function transform(p){
      let [x,y,z]=p;[x,z]=[x*cb+z*sb,-x*sb+z*cb];[y,z]=[y*ca-z*sa,y*sa+z*ca];[x,y]=[x*cc-y*sc,x*sc+y*cc];return [x,y,z];
    }
    function project(p){const k=3.7/(3.7-p[2]);return [cx+p[0]*R*k,cy+p[1]*R*k,p[2]];}
    const glow=ctx.createRadialGradient(cx,cy,R*.15,cx,cy,R*1.9);
    glow.addColorStop(0,'rgba(143,92,255,.17)');glow.addColorStop(.44,'rgba(87,87,187,.11)');glow.addColorStop(.75,'rgba(100,68,142,.035)');glow.addColorStop(1,'rgba(8,10,16,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const orbit=[];
    for(let j=0;j<=144;j++){
      const a=j/144*TAU;
      const p=[Math.cos(a)*1.38,Math.sin(a)*.20,Math.sin(a)*1.23];
      const q=[p[0]*.96-p[1]*.28,p[0]*.28+p[1]*.96,p[2]];
      orbit.push(project(q));
    }
    function orbitHalf(front){
      ctx.lineWidth=.7;
      for(let j=1;j<orbit.length;j++){
        const a=orbit[j-1],b=orbit[j];if((a[2]>0)!==front)continue;
        ctx.strokeStyle=rgb(palette(j/144+t*.02),front?.34:.19);ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();
      }
    }
    orbitHalf(false);
    // Transparent glass core with a soft internal glow.
    const core=ctx.createRadialGradient(cx-R*.34,cy-R*.4,R*.08,cx,cy,R*1.01);
    core.addColorStop(0,'rgba(123,143,216,.13)');core.addColorStop(.56,'rgba(27,29,64,.34)');core.addColorStop(.92,'rgba(94,130,186,.12)');core.addColorStop(1,'rgba(143,185,224,.23)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,TAU);ctx.fillStyle=core;ctx.fill();
    // A small procedural light texture is mapped onto a rotating sphere. The light
    // is computed locally; it is not a remote image, video, microphone or AI call.
    if(!s.texture){
      const N=192;
      s.texture=document.createElement('canvas');s.texture.width=N;s.texture.height=N;
      s.textureCtx=s.texture.getContext('2d');s.pixels=s.textureCtx.createImageData(N,N);s.normalMap=[];
      for(let y=0;y<N;y++)for(let x=0;x<N;x++){
        const nx=(x+.5)/N*2-1,ny=(y+.5)/N*2-1,d=nx*nx+ny*ny;
        if(d<=1)s.normalMap.push([4*(y*N+x),nx,ny,Math.sqrt(1-d),clamp((1-Math.sqrt(d))*N,0,1)]);
      }
    }
    const pixel=s.pixels.data,table=[];
    for(let i=0;i<256;i++)table.push(palette(i/256));
    for(const map of s.normalMap){
      const [i,nx,ny,nz,aa]=map;
      const p=transform([nx,ny,nz]),x=p[0],y=p[1],z=p[2];
      const flow=y*3.4+Math.sin(x*2.7+t*.36)*1.32+Math.sin(z*3.2-t*.28)*.7;
      const ridge=Math.pow(Math.max(0,1-Math.abs(Math.sin(flow))),5);
      const inner=Math.pow(Math.max(0,1-Math.abs(Math.sin(x*2.8-z*2.4+Math.sin(y*3.1+t*.24)*1.15))),4);
      const f=.48+y*.27-x*.14+z*.14+t*.022;
      const color=table[((f%1+1)%1*255)|0];
      const secondary=table[(((f+.24)%1+1)%1*255)|0];
      const fresnel=Math.pow(1-nz,2.1),diffuse=Math.max(0,nx*-.32+ny*-.47+nz*.82);
      const spec=Math.pow(Math.max(0,nx*-.28+ny*-.46+nz*.84),80)*.82;
      const caustic=Math.pow(Math.max(0,1-Math.abs(Math.sin(flow+.22))),18)*.23;
      const factor=.16+.70*ridge+.32*inner+.30*fresnel+.14*diffuse;
      const tint=.14*inner;
      for(let k=0;k<3;k++)pixel[i+k]=clamp(color[k]*factor+secondary[k]*tint+spec*235+caustic*color[k]+fresnel*16,0,255);
      pixel[i+3]=aa*255;
    }
    s.textureCtx.putImageData(s.pixels,0,0);
    ctx.save();ctx.imageSmoothingEnabled=true;ctx.drawImage(s.texture,cx-R,cy-R,R*2,R*2);ctx.restore();
    // Bright, offset glints emphasize the shell without a hard plastic outline.
    const rim=ctx.createLinearGradient(cx-R,cy-R,cx+R,cy+R);
    rim.addColorStop(0,'rgba(165,219,255,.4)');rim.addColorStop(.3,'rgba(120,120,200,.07)');rim.addColorStop(.7,'rgba(255,183,220,.2)');rim.addColorStop(1,'rgba(106,207,237,.36)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,TAU);ctx.strokeStyle=rim;ctx.lineWidth=.7;ctx.stroke();
    orbitHalf(true);
    for(let i=0;i<3;i++){
      const pos=orbit[Math.floor(((t*.017+i*.333)%1)*144)];
      ctx.save();ctx.fillStyle=rgb(palette(i*.33+t*.02),.8);ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(pos[0],pos[1],1.3,0,TAU);ctx.fill();ctx.restore();
    }
    if(s.pulse>0){
      const r=R*(.85+(1-s.pulse)*1.1);
      ctx.beginPath();ctx.ellipse(cx,cy,r,r*.83,-.22,0,TAU);ctx.strokeStyle=`rgba(160,165,255,${s.pulse*.4})`;ctx.lineWidth=1.3;ctx.stroke();
      const wave=ctx.createRadialGradient(cx,cy,0,cx,cy,R*1.6);wave.addColorStop(0,`rgba(167,145,255,${s.pulse*.09})`);wave.addColorStop(1,'rgba(167,145,255,0)');ctx.fillStyle=wave;ctx.fillRect(0,0,w,h);
    }
  }
  function drawPhone(s,dt){
    const time=forceTime===null?s.time:forceTime;
    const intro=smooth(time/2.25);
    let target=s.folded?0.025:1.;
    if(s.manual===false&&!paused)target=.07+.93*intro;
    if(paused&&s.manual===false)target=s.time===0?1:s.open;
    if(forceTime!==null)s.open=target;
    else if(paused||dt===0)s.open=target;
    else s.open+=(target-s.open)*(1-Math.exp(-dt*4.8));
    const idle=1;
    const yaw=-20+Math.sin(time*.43)*5*idle+s.x*24;
    const pitch=15+Math.sin(time*.39)*2.4*idle-s.y*11;
    const roll=-10+Math.sin(time*.31)*2*idle;
    const floatY=Math.sin(time*.72)*4*idle;
    const center=(1-s.open)*74;
    s.rig.style.transform=`translate3d(${center.toFixed(2)}px,${floatY.toFixed(2)}px,0) rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg) rotateZ(${roll.toFixed(2)}deg)`;
    s.half.style.transform=`rotateY(${(-177*(1-s.open)).toFixed(2)}deg)`;
    s.shadow.style.transform=`translateX(${(center*.30).toFixed(1)}px) scaleX(${(.55+.45*s.open).toFixed(3)})`;
    const sheen=.3+Math.abs(s.x)*.3;
    s.el.querySelectorAll('.glass-sheen').forEach(el=>el.style.opacity=sheen.toFixed(3));
  }
  function draw(s,dt){
    if(!isVisible(s))return;
    if(!paused){s.time+=dt;s.pulse=Math.max(0,s.pulse-dt*.65);}
    s.x+=(s.tx-s.x)*Math.min(1,dt>0?dt*5:1);
    s.y+=(s.ty-s.y)*Math.min(1,dt>0?dt*5:1);
    if(s.type==='duo')drawPhone(s,dt);else drawLight(s);
  }
  function renderAll(dt){states.forEach(s=>draw(s,dt));}
  function frame(now){
    raf=0;
    if(paused||document.hidden)return;
    if(!states.some(isVisible))return;
    const interval=coarse.matches?1000/30:1000/45;
    if(now-lastPaint>=interval-1){
      const dt=last?Math.min((now-last)/1000,.08):1/45;
      last=now;lastPaint=now;renderAll(dt);
    }
    raf=requestAnimationFrame(frame);
  }
  function kick(){if(!paused&&!document.hidden&&!raf){last=0;raf=requestAnimationFrame(frame);}}
  function react(s){
    if(reduced.matches&&paused){s.tx=-s.tx+.15;draw(s,0);return;}
    s.pulse=1;draw(s,0);kick();
  }

  document.querySelectorAll('[data-scene]').forEach(el=>{
    const s={el,id:el.dataset.id,type:el.dataset.scene,visible:false,time:0,x:0,y:0,tx:0,ty:0,open:.07,folded:false,manual:false,pulse:0,gl:null,triedGL:false};
    if(s.type==='duo'){s.rig=el.querySelector('.phone-rig');s.half=el.querySelector('.phone-right');s.shadow=el.querySelector('.phone-shadow');}
    states.push(s);
    let down=false,moved=false,startX=0,startY=0,initialX=0,initialY=0;
    el.addEventListener('pointerdown',e=>{
      if(e.isPrimary===false||e.button>0)return;
      down=true;moved=false;startX=e.clientX;startY=e.clientY;initialX=s.tx;initialY=s.ty;
      if(e.pointerType==='mouse'){el.setPointerCapture?.(e.pointerId);el.classList.add('dragging');}
    });
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect();
      if(down){
        const dx=e.clientX-startX,dy=e.clientY-startY;
        if(Math.abs(dx)>5||Math.abs(dy)>5)moved=true;
        s.tx=clamp(initialX+dx/Math.max(120,r.width*.55),-1,1);
        s.ty=clamp(initialY+dy/Math.max(110,r.height),-1,1);
        if(Math.abs(dx)>Math.abs(dy)){el.classList.add('dragging');}
      }else if(e.pointerType==='mouse'){
        s.tx=clamp((e.clientX-r.left)/r.width*2-1,-1,1)*.65;
        s.ty=clamp((e.clientY-r.top)/r.height*2-1,-1,1)*.65;
      }
      if(paused)draw(s,0);else kick();
    });
    const end=e=>{
      if(down&&!moved&&s.type==='siri')react(s);
      down=false;el.classList.remove('dragging');
      if(el.hasPointerCapture?.(e.pointerId))el.releasePointerCapture(e.pointerId);
    };
    el.addEventListener('pointerup',end);
    el.addEventListener('pointercancel',e=>{down=false;el.classList.remove('dragging');});
    el.addEventListener('pointerleave',()=>{if(!down){s.tx=0;s.ty=0;if(paused)draw(s,0);}});
  });
  document.querySelectorAll('[data-fold]').forEach(b=>b.addEventListener('click',()=>{
    const s=states.find(s=>s.id===b.dataset.fold);if(!s)return;
    s.manual=true;s.folded=!s.folded;
    b.querySelector('span').textContent=s.folded?'Unfold':'Fold';
    b.setAttribute('aria-label',s.folded?'Unfold the animated phone':'Fold the animated phone');
    b.setAttribute('aria-pressed',String(s.folded));
    if(paused)draw(s,0);else kick();
  }));
  document.querySelectorAll('[data-react]').forEach(b=>b.addEventListener('click',()=>{
    const s=states.find(s=>s.id===b.dataset.react);if(s)react(s);
  }));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{const s=states.find(s=>s.el===e.target);if(s){s.visible=e.isIntersecting;if(s.visible){draw(s,0);}}});
      kick();
    },{threshold:.05});
    states.forEach(s=>observer.observe(s.el));
  }else{states.forEach(s=>s.visible=true);}
  if('ResizeObserver' in window){
    const ro=new ResizeObserver(()=>{states.forEach(s=>{if(s.type==='siri'&&isVisible(s))resizeLight(s);});if(paused)renderAll(0);kick();});
    states.forEach(s=>ro.observe(s.el));
  }
  new MutationObserver(()=>{
    states.forEach(s=>{if(s.el.closest('.view')?.hidden)s.visible=false;});
    kick();
  }).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(raf);raf=0;last=0;}else kick();
  });
  updateControls();kick();
  // Small test surface: no account data, networking, persistence or production mutation.
  window.DemoMotion={
    pause:setPaused,
    seek(t){forceTime=t;renderAll(0);},
    resume(){forceTime=null;setPaused(false);},
    inspect(){return {paused,reducedMotion:reduced.matches,scenes:states.map(s=>({id:s.id,type:s.type,visible:isVisible(s),canvas3D:!!s.ctx,folded:s.folded,time:s.time}))};}
  };
}
window.prepareDemoMotion = function(html){
  const doc = new DOMParser().parseFromString(html,'text/html');
  const homeScreen = doc.getElementById('homeScreen');
  const duoIntro = doc.querySelector('#duoScreen .duo-intro');
  const siriIntro = doc.querySelector('#siriScreen .sub');
  if (!homeScreen || !duoIntro || !siriIntro) throw new Error('Guide layout could not be loaded.');
  homeScreen.outerHTML = home;
  duoIntro.insertAdjacentHTML('afterend',duo);
  siriIntro.insertAdjacentHTML('afterend',siri);
  const style = doc.createElement('link');
  style.rel = 'stylesheet';
  style.href = './motion-20261023.css';
  doc.head.appendChild(style);
  const script = doc.querySelector('script');
  if (!script) throw new Error('Guide navigation could not be loaded.');
  script.textContent = '(' + navigation.toString() + ')();';
  const effects = doc.createElement('script');
  effects.id = 'motion-edition-script';
  effects.textContent = '(' + startMotion.toString() + ')();';
  doc.body.appendChild(effects);
  doc.title = 'Demo Playbook — Motion Edition';
  doc.documentElement.dataset.edition = 'motion-20261023';
  return '<!doctype html>' + doc.documentElement.outerHTML;
};
})();
