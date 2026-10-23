/* Approved Unfold to Reveal. Layout assets only; original walkthroughs remain encrypted. */
(() => {
'use strict';
const TEMPLATE = "<div class=\"uf-heading-row\"><div><p class=\"uf-eyebrow\">iPHONE DUO / UNFOLD EDITION</p><h1>Unfold the experience.</h1><p class=\"uf-lede\">One demo. More room to make it yours.</p></div><button class=\"uf-preview-button\" data-preview-unfold=\"\" type=\"button\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><rect height=\"16\" rx=\"3\" width=\"18\" x=\"3\" y=\"4\"></rect><path d=\"M12 4v16M8 10l-2 2 2 2m8-4 2 2-2 2\"></path></svg>Preview unfold</button></div>\n<div class=\"uf-meta\"><span class=\"uf-meta-label\"><i aria-hidden=\"true\"></i>Six hands-on demos. Always within reach.</span><span class=\"uf-mode-pill\" id=\"unfold-mode\">Pocket layout</span></div>\n<div class=\"uf-workspace-wrap\" id=\"duo-quick\"><section aria-label=\"iPhone Duo hands-on demo workspace\" class=\"uf-workspace\" data-layout=\"compact\" id=\"duo-workspace\">\n<aside class=\"uf-sidebar\" data-uf=\"sidebar\"><div class=\"uf-sidebar-inner\"><p class=\"uf-sidebar-kicker\">YOUR DEMO PLAYBOOK</p><h2>Hands-on first.</h2><div aria-label=\"Choose a hands-on demo\" class=\"uf-topics\" role=\"group\"><button aria-pressed=\"true\" class=\"uf-topic\" data-demo=\"0\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><rect height=\"16\" rx=\"3\" width=\"18\" x=\"3\" y=\"4\"></rect><path d=\"M12 4v16\"></path></svg></span><span><strong>Open &amp; compare</strong><small>Demo 01</small></span></button><button aria-pressed=\"false\" class=\"uf-topic\" data-demo=\"1\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"M4 7h4l2-3h4l2 3h4v12H4z\"></path><circle cx=\"12\" cy=\"12.5\" r=\"3.5\"></circle></svg></span><span><strong>Camera preview</strong><small>Demo 02</small></span></button><button aria-pressed=\"false\" class=\"uf-topic\" data-demo=\"2\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path d=\"m8 12 3 3 5-6\"></path></svg></span><span><strong>Smart Take</strong><small>Demo 03</small></span></button><button aria-pressed=\"false\" class=\"uf-topic\" data-demo=\"3\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><rect height=\"16\" rx=\"2\" width=\"8\" x=\"3\" y=\"4\"></rect><rect height=\"16\" rx=\"2\" width=\"8\" x=\"13\" y=\"4\"></rect></svg></span><span><strong>Split View</strong><small>Demo 04</small></span></button><button aria-pressed=\"false\" class=\"uf-topic\" data-demo=\"4\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 6v6l4 2\"></path></svg></span><span><strong>StandBy</strong><small>Demo 05</small></span></button><button aria-pressed=\"false\" class=\"uf-topic\" data-demo=\"5\" type=\"button\"><span class=\"uf-topic-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><rect height=\"12\" rx=\"3\" width=\"12\" x=\"3\" y=\"6\"></rect><path d=\"m15 10 6-3v10l-6-3\"></path></svg></span><span><strong>FaceTime</strong><small>Demo 06</small></span></button></div><div class=\"uf-sidebar-bottom\"><p>Pick a topic.<br/>Make it a conversation.<br/>Let them try it.</p><button class=\"uf-siri-link\" data-go=\"siri\" type=\"button\">Explore Siri AI demos <span aria-hidden=\"true\">↗</span></button></div></div></aside>\n<div class=\"uf-content\"><div class=\"uf-pocket-picker\" data-uf=\"picker\"><label for=\"uf-demo-select\">Hands-on demos</label><select aria-label=\"Choose a hands-on demo\" class=\"uf-pocket-select\" data-uf=\"select\" id=\"uf-demo-select\"><option value=\"0\">01 · Open &amp; compare</option><option value=\"1\">02 · Camera preview</option><option value=\"2\">03 · Smart Take</option><option value=\"3\">04 · Split View</option><option value=\"4\">05 · StandBy</option><option value=\"5\">06 · FaceTime</option></select></div>\n<div class=\"uf-demo-head\"><div><p class=\"uf-demo-eyebrow\" data-uf=\"eyebrow\">01 / OPEN &amp; COMPARE</p><h2 data-uf=\"title\">Open, close, and compare</h2></div><span class=\"uf-mini-count\" data-uf=\"count\">01 / 06</span></div>\n<div aria-label=\"Illustrative panoramic demo scene; no camera or native app access\" class=\"uf-stage\" data-art=\"reveal\" data-uf=\"stage\" role=\"img\">\n<svg aria-hidden=\"true\" class=\"uf-panorama\" fill=\"none\" viewbox=\"0 0 960 290\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs>\n<lineargradient gradientunits=\"userSpaceOnUse\" id=\"ufSky\" x1=\"480\" x2=\"480\" y1=\"0\" y2=\"290\"><stop stop-color=\"#071628\"></stop><stop offset=\".54\" stop-color=\"#254667\"></stop><stop offset=\"1\" stop-color=\"#799fae\"></stop></lineargradient>\n<lineargradient gradientunits=\"userSpaceOnUse\" id=\"ufLake\" x1=\"480\" x2=\"480\" y1=\"155\" y2=\"290\"><stop stop-color=\"#3c7d96\"></stop><stop offset=\".5\" stop-color=\"#183e5d\"></stop><stop offset=\"1\" stop-color=\"#0b2135\"></stop></lineargradient>\n<lineargradient gradientunits=\"userSpaceOnUse\" id=\"ufMount\" x1=\"200\" x2=\"470\" y1=\"45\" y2=\"237\"><stop stop-color=\"#80a2b9\"></stop><stop offset=\".55\" stop-color=\"#244561\"></stop><stop offset=\"1\" stop-color=\"#102b42\"></stop></lineargradient>\n<lineargradient gradientunits=\"userSpaceOnUse\" id=\"ufRight\" x1=\"600\" x2=\"750\" y1=\"57\" y2=\"205\"><stop stop-color=\"#809faf\"></stop><stop offset=\".5\" stop-color=\"#335871\"></stop><stop offset=\"1\" stop-color=\"#193a51\"></stop></lineargradient>\n<lineargradient gradientunits=\"userSpaceOnUse\" id=\"ufAurora\" x1=\"260\" x2=\"820\" y1=\"0\" y2=\"95\"><stop stop-color=\"#4686bd\" stop-opacity=\"0\"></stop><stop offset=\".35\" stop-color=\"#a0e5ed\" stop-opacity=\".55\"></stop><stop offset=\".65\" stop-color=\"#b0b7ff\" stop-opacity=\".35\"></stop><stop offset=\"1\" stop-color=\"#688eec\" stop-opacity=\"0\"></stop></lineargradient>\n<radialgradient id=\"ufHorizon\"><stop stop-color=\"#c2edf3\" stop-opacity=\".33\"></stop><stop offset=\"1\" stop-color=\"#9ad9ef\" stop-opacity=\"0\"></stop></radialgradient>\n<filter id=\"ufBlur\"><fegaussianblur stddeviation=\"13\"></fegaussianblur></filter>\n</defs>\n<rect fill=\"url(#ufSky)\" height=\"290\" width=\"960\"></rect><ellipse cx=\"510\" cy=\"145\" fill=\"url(#ufHorizon)\" rx=\"280\" ry=\"105\"></ellipse>\n<path d=\"M100 98C250 40 389 24 511 35S755 95 933 21\" filter=\"url(#ufBlur)\" stroke=\"url(#ufAurora)\" stroke-width=\"29\"></path>\n<path d=\"M145 79C323 23 442 31 556 43S773 81 897 31\" opacity=\".55\" stroke=\"url(#ufAurora)\" stroke-width=\"2\"></path>\n<g fill=\"#dfecff\"><circle cx=\"97\" cy=\"40\" opacity=\".5\" r=\".8\"></circle><circle cx=\"202\" cy=\"28\" opacity=\".4\" r=\".7\"></circle><circle cx=\"307\" cy=\"61\" opacity=\".6\" r=\".7\"></circle><circle cx=\"421\" cy=\"17\" opacity=\".6\" r=\".8\"></circle><circle cx=\"583\" cy=\"39\" opacity=\".5\" r=\".8\"></circle><circle cx=\"716\" cy=\"19\" opacity=\".6\" r=\".7\"></circle><circle cx=\"862\" cy=\"72\" opacity=\".5\" r=\".8\"></circle><circle cx=\"799\" cy=\"49\" opacity=\".9\" r=\".5\"></circle><circle cx=\"539\" cy=\"74\" opacity=\".55\" r=\".6\"></circle></g>\n<circle cx=\"702\" cy=\"52\" fill=\"#e4ecdd\" opacity=\".85\" r=\"15\"></circle><circle cx=\"695\" cy=\"47\" fill=\"#1d344e\" r=\"15\"></circle>\n<path d=\"M195 185L296 94 348 139 407 84 474 148 543 107 609 163 670 108 799 190Z\" fill=\"#46718a\"></path>\n<path d=\"M365 135L407 84 435 111 421 108 415 115 401 108 386 129Z\" fill=\"#a7c2c9\" opacity=\".7\"></path><path d=\"M506 137L543 107 571 133 546 125 530 132Z\" fill=\"#b3cad2\" opacity=\".7\"></path>\n<path d=\"M0 210L0 132 64 78 125 123 177 86 244 54 320 130 375 166 429 199Z\" fill=\"url(#ufMount)\"></path>\n<path d=\"M176 110L244 54 288 98 257 81 251 92 232 85 217 105 208 100Z\" fill=\"#c9d9de\" opacity=\".78\"></path>\n<path d=\"M244 54L273 134 354 195 429 199 375 166 320 130Z\" fill=\"#172f4c\" opacity=\".6\"></path>\n<path d=\"M960 205L960 116 912 91 859 119 801 78 758 92 717 65 649 135 610 154 543 200Z\" fill=\"url(#ufRight)\"></path>\n<path d=\"M683 100L717 65 743 85 725 82 710 94 707 88Z\" fill=\"#c7d8df\" opacity=\".65\"></path>\n<path d=\"M717 65L724 141 663 194 543 200 610 154 649 135Z\" fill=\"#1d4059\" opacity=\".6\"></path>\n<path d=\"M0 192Q202 164 393 185Q477 170 565 185Q740 168 960 188V290H0Z\" fill=\"url(#ufLake)\"></path>\n<path d=\"M228 196L432 196M401 201L557 201M323 212L634 212M384 217L568 217M209 225L445 225M474 238L711 238M324 249L587 249M178 266L390 266M520 276L801 276\" opacity=\".14\" stroke=\"#a2dae7\"></path>\n<path d=\"M0 180Q139 172 242 199L154 214 61 222 0 250Z\" fill=\"#0c263a\"></path>\n<path d=\"M960 172Q858 180 752 194L796 208 914 222 960 238Z\" fill=\"#102d40\"></path>\n<path d=\"M0 290V265L110 236 184 250 263 244 344 277 388 290Z\" fill=\"#0b1f31\"></path>\n<path d=\"M960 290V251L871 246 802 266 747 264 681 290Z\" fill=\"#0a2031\"></path>\n<g fill=\"#071b2b\"><path d=\"M108 236L125 195 142 236H134L145 248H105L118 236Z\"></path><path d=\"M143 247L154 214 166 247H161L170 256H141L149 247Z\"></path><path d=\"M846 255L860 219 874 255H868L878 266H841L851 255Z\"></path></g>\n<path d=\"M472 192h16l5 2h-25z\" fill=\"#d3a477\"></path><path d=\"M481 192v-7\" stroke=\"#b0a59a\" stroke-width=\"1.4\"></path>\n</svg>\n<span class=\"uf-art-label\" data-uf=\"art-label\">ONE CONTINUOUS CANVAS</span><div class=\"uf-camera-overlay\"><div class=\"uf-camera-grid\"></div><span class=\"uf-camera-focus\"></span></div><span class=\"uf-smart-dot\">● Ready for the moment</span>\n<div aria-hidden=\"true\" class=\"uf-miniapps\"><div class=\"uf-miniapp\"><div class=\"uf-miniapp-bar\"><span>Safari</span><span>•••</span></div><div class=\"uf-miniapp-body\"><h3>A weekend away.</h3><div class=\"uf-mini-landscape\"></div><div class=\"uf-fake-line\"></div><div class=\"uf-fake-line short\"></div></div></div><div class=\"uf-miniapp\"><div class=\"uf-miniapp-bar\"><span>Messages</span><span>○</span></div><div class=\"uf-miniapp-body\"><div class=\"uf-bubble\">Want to make a plan?</div><div class=\"uf-bubble reply\">Let’s compare a few ideas.</div><div class=\"uf-fake-line short\"></div></div></div></div>\n<div aria-hidden=\"true\" class=\"uf-standby\"><div class=\"uf-clock\">9:41<small>FRIDAY / A LITTLE MORE ROOM</small></div><div class=\"uf-clock-side\"><small>AT A GLANCE</small><strong>Today</strong><i></i></div></div>\n<div aria-hidden=\"true\" class=\"uf-call\"><div class=\"uf-call-tile\"><span class=\"uf-avatar\">J</span><small>Perspective one</small></div><div class=\"uf-call-tile\"><span class=\"uf-avatar\">A</span><small>Perspective two</small></div></div>\n<div class=\"uf-art-caption\"><strong data-uf=\"art-caption\">A wider perspective.</strong><span>Same moment.<br/>More room.</span></div></div>\n<p class=\"uf-stage-note\" data-uf=\"art-note\">Illustrative panoramic artwork. Opening reveals more of the same scene.</p>\n<div aria-label=\"Demo step\" class=\"uf-steps\" role=\"group\"><button aria-pressed=\"true\" class=\"uf-step\" data-step=\"0\" type=\"button\"><b aria-hidden=\"true\">1</b>Say</button><button aria-pressed=\"false\" class=\"uf-step\" data-step=\"1\" type=\"button\"><b aria-hidden=\"true\">2</b>Show</button><button aria-pressed=\"false\" class=\"uf-step\" data-step=\"2\" type=\"button\"><b aria-hidden=\"true\">3</b>Let them try</button></div>\n<div class=\"uf-instruction\" data-uf=\"instruction\"></div>\n<div class=\"uf-next-row\"><span class=\"uf-step-count\" data-uf=\"step-count\">STEP 01 OF 03</span><div class=\"uf-step-actions\"><button aria-label=\"Previous demo step\" class=\"uf-prev\" data-uf=\"prev\" disabled=\"\" type=\"button\">‹</button><button class=\"uf-next\" data-uf=\"next\" type=\"button\"><span data-uf=\"next-label\">Show the demo</span><span aria-hidden=\"true\">→</span></button></div></div>\n<span class=\"uf-sr\" data-uf=\"progress\">Open &amp; compare · Say</span></div><div aria-hidden=\"true\" class=\"uf-light-sweep\"></div></section></div>\n<div class=\"uf-bottom-note\"><span><strong>Keep your place.</strong> The demo and step stay selected as the layout changes.</span><span>Unfold Edition</span></div>\n<div aria-live=\"polite\" class=\"uf-sr\" id=\"unfold-status\" role=\"status\"></div>";
const PLAYER = "<dialog aria-label=\"Unfold layout simulation\" class=\"uf-player\" id=\"uf-player\"><div class=\"uf-player-inner\"><div class=\"uf-player-top\"><div class=\"uf-player-brand\">Demo Playbook <small>UNFOLD TO REVEAL / PREVIEW PLAYER</small></div><button aria-label=\"Close preview\" class=\"uf-close\" id=\"uf-player-close\" type=\"button\">×</button></div><div class=\"uf-player-title\"><p id=\"uf-player-eyebrow\">CLOSED / COMPACT WORKSPACE</p><h2 id=\"uf-player-title\">A demo in your pocket.</h2></div><div class=\"uf-player-canvas\"><div class=\"uf-sim-holder\"></div></div><div class=\"uf-player-controls\"><button id=\"uf-player-toggle\" type=\"button\">Unfold</button><button id=\"uf-player-replay\" type=\"button\">Replay reveal</button><button id=\"uf-player-scene\" type=\"button\">Next visual</button></div><p class=\"uf-player-note\" id=\"uf-player-note\">Simulated layout, not a live hinge sensor.</p></div></dialog>";
const ABOUT = "<details class=\"uf-concept-info\"><summary>About this layout</summary><p>The layout responds to available window width. A wider window is not proof that a phone was unfolded. Safari on a physical Duo still needs testing. “Preview unfold” simulates the change so it can be reviewed on any device.</p><p>The <strong>Show</strong> step and full walkthroughs preserve the current published guide. <strong>Say</strong> and <strong>Let them try</strong> are new suggested conversation framing. The visuals are illustrative; this page does not run native apps or access a camera or microphone. Reduced-motion preferences are respected.</p><p>Browser reference: <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver\" rel=\"noopener\" target=\"_blank\">ResizeObserver</a> · <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Device_Posture_API\" rel=\"noopener\" target=\"_blank\">Device Posture API limitations</a>.</p></details>";
const FRAMING = [{"short": "Open & compare", "art": "reveal", "say": "What would you do with a little more room?", "caption": "A wider perspective.", "artLabel": "ONE CONTINUOUS CANVAS", "artNote": "Illustrative panoramic artwork. Opening reveals more of the same scene.", "try": "Hand over the phone. Let them open it, close it, and compare the same content."}, {"short": "Camera preview", "art": "camera", "say": "Want to see the photo before I take it?", "caption": "See the bigger picture.", "artLabel": "FRAMING / ILLUSTRATIVE VIEW", "artNote": "Illustrative camera composition. This webpage does not access the camera.", "try": "Let them choose the framing while you hold the phone. Then swap roles."}, {"short": "Smart Take", "art": "smart", "say": "How often is the person taking the photo missing from it?", "caption": "Be part of the moment.", "artLabel": "HANDS-FREE / ILLUSTRATIVE VIEW", "artNote": "Illustrative capture scene. Try the actual feature in Camera.", "try": "Invite them to choose a pose and try the hands-free camera setup."}, {"short": "Split View", "art": "split", "say": "What two things do you usually switch between?", "caption": "Room for both.", "artLabel": "TWO APPS / ILLUSTRATIVE VIEW", "artNote": "Illustrative app panels. These are not running native apps.", "try": "Let them choose two apps they would like to use together."}, {"short": "StandBy", "art": "standby", "say": "Where would you like a quick glance at your day?", "caption": "A moment at a glance.", "artLabel": "AT A GLANCE / ILLUSTRATIVE VIEW", "artNote": "Illustrative clock and widget. Not the device’s actual StandBy screen.", "try": "Let them try a position and a face that suits their desk or nightstand."}, {"short": "FaceTime", "art": "facetime", "say": "Who would you bring into the conversation?", "caption": "Bring everyone in.", "artLabel": "TWO PERSPECTIVES / ILLUSTRATIVE VIEW", "artNote": "Illustrative call. No camera, microphone, or connection is used.", "try": "Invite them to try the call with the second device, when one is available."}];
function startUnfold(){
  'use strict';
  const root = document.getElementById('duo-workspace');
  const dataElement = document.getElementById('unfold-demo-data');
  if (!root || !dataElement) return;
  const demos = JSON.parse(dataElement.textContent);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const screen = document.getElementById('duoScreen');
  const state = {selected: 0, steps: Array(demos.length).fill(0), expanded: innerWidth >= 640};
  const stepNames = ['Say', 'Show', 'Let them try'];
  const sessionKey='demo-playbook-unfold-v1';
  try {
    const saved=JSON.parse(sessionStorage.getItem(sessionKey)||'null');
    if(saved && Number.isInteger(saved.selected) && saved.selected>=0 && saved.selected<demos.length && Array.isArray(saved.steps) && saved.steps.length===demos.length && saved.steps.every(x=>Number.isInteger(x)&&x>=0&&x<=2)){
      state.selected=saved.selected;state.steps=[...saved.steps];
    }
  } catch (_) { /* The preview also works with storage unavailable. */ }
  function savePlace(){try{sessionStorage.setItem(sessionKey,JSON.stringify({selected:state.selected,steps:state.steps}));}catch(_){}}
  const $ = (host, name) => host.querySelector('[data-uf="' + name + '"]');
  let revealTimer = 0, resizeTimer = 0, resizeKey = 0, revealCount = 0;
  let replayTimer = 0, playerFitTimer = 0, playerOpen = false, playerDemo = 0, playerStep = 0;
  const dialog = document.getElementById('uf-player');
  const holder = dialog.querySelector('.uf-sim-holder');
  const playerCanvas = dialog.querySelector('.uf-player-canvas');
  let sim = null, lastFocus = null;

  function render(host, selected, step) {
    const d = demos[selected];
    host.dataset.selectedDemo = String(selected);
    host.dataset.currentStep = String(step);
    $(host, 'title').textContent = d.title;
    $(host, 'eyebrow').textContent = String(selected + 1).padStart(2,'0') + ' / ' + d.short.toUpperCase();
    $(host, 'count').textContent = String(selected+1).padStart(2,'0') + ' / 06';
    $(host, 'select').value = String(selected);
    host.querySelectorAll('[data-demo]').forEach(button => button.setAttribute('aria-pressed',String(Number(button.dataset.demo) === selected)));
    host.querySelectorAll('[data-step]').forEach(button => button.setAttribute('aria-pressed',String(Number(button.dataset.step) === step)));
    const stage = $(host, 'stage');
    stage.dataset.art = d.art;
    stage.classList.toggle('uf-action', step === 2);
    $(host, 'art-caption').textContent = d.caption;
    $(host, 'art-label').textContent = d.artLabel;
    $(host, 'art-note').textContent = d.artNote;
    const body = $(host, 'instruction');
    body.replaceChildren();
    const label = document.createElement('p');
    label.className = 'uf-instruction-label';
    label.textContent = step === 0 ? 'Suggested opening' : step === 1 ? 'Original demo walkthrough' : 'Suggested customer handoff';
    body.appendChild(label);
    if (step === 1) {
      // The original walkthrough is copied verbatim; the framing around it is new.
      const list = document.createElement('ul');list.className='uf-original-list';
      d.steps.forEach(html => {const item=document.createElement('li');item.innerHTML=html;list.appendChild(item);});
      body.appendChild(list);
    } else {
      const text = document.createElement('p');text.className='uf-say';
      text.textContent = step === 0 ? '“' + d.say + '”' : d.try;
      const note = document.createElement('p');note.className='uf-instruction-note';
      note.textContent = step === 0 ? 'Make it a conversation. Then tap Show for the existing instructions.' : 'Let the customer explore on the actual device. The visual above is illustrative.';
      body.append(text,note);
    }
    $(host, 'step-count').textContent = 'STEP ' + String(step+1).padStart(2,'0') + ' OF 03';
    $(host, 'prev').disabled = step === 0;
    $(host, 'next-label').textContent = step === 0 ? 'Show the demo' : step === 1 ? 'Let them try' : 'Next demo';
    $(host, 'progress').textContent = d.short + ' · ' + stepNames[step];
  }
  function announce() {
    document.getElementById('unfold-status').textContent = demos[state.selected].short + '. ' + stepNames[state.steps[state.selected]] + '.';
  }
  function selectDemo(index) {
    if (!Number.isInteger(index) || index < 0 || index >= demos.length) return;
    state.selected=index;savePlace();render(root,index,state.steps[index]);announce();
  }
  function selectStep(step) {
    if (!Number.isInteger(step) || step < 0 || step > 2) return;
    state.steps[state.selected]=step;savePlace();render(root,state.selected,step);announce();
  }
  root.addEventListener('click', event => {
    const topic=event.target.closest('button[data-demo]');
    const step=event.target.closest('button[data-step]');
    if(topic){selectDemo(Number(topic.dataset.demo));return;}
    if(step){selectStep(Number(step.dataset.step));return;}
    if(event.target.closest('[data-uf="prev"]'))selectStep(Math.max(0,state.steps[state.selected]-1));
    if(event.target.closest('[data-uf="next"]')){
      if(state.steps[state.selected]<2)selectStep(state.steps[state.selected]+1);
      else {const next=(state.selected+1)%demos.length;state.steps[next]=0;selectDemo(next);}
    }
  });
  $(root,'select').addEventListener('change',e=>selectDemo(Number(e.target.value)));

  function reveal(host) {
    host.classList.remove('uf-revealing');
    if(reduced.matches || document.body.classList.contains('motion-paused'))return;
    void host.offsetWidth;host.classList.add('uf-revealing');
    if(host===root){revealCount++;clearTimeout(revealTimer);revealTimer=setTimeout(()=>host.classList.remove('uf-revealing'),1250);}
  }
  function setLayout(host,expanded,animated=false) {
    host.dataset.layout = expanded?'expanded':'compact';
    const sidebar=$(host,'sidebar');sidebar.inert=!expanded;sidebar.setAttribute('aria-hidden',String(!expanded));
    $(host,'picker').hidden=expanded;
    if(animated&&expanded)reveal(host);
  }
  function updateMode() {
    document.getElementById('unfold-mode').textContent=state.expanded?'Expanded layout':'Pocket layout';
    document.getElementById('unfold-mode').title='Based on available window width; not a device or hinge identification.';
  }
  function handleSize() {
    // Width only: keyboard and browser toolbar height changes must not trigger an unfold.
    // Hysteresis avoids repeated effects near the breakpoint. Zoom is not an unfold.
    if(window.visualViewport && Math.abs(window.visualViewport.scale-1)>.05)return;
    const width=window.innerWidth;
    const next=state.expanded ? width>600 : width>=640;
    if(next!==state.expanded){
      state.expanded=next;
      // Keep the same DOM, selected demo, step and focus. Never scroll on layout changes.
      setLayout(root,next,!screen.hidden&&!document.hidden);updateMode();
    }
  }
  function scheduleSize() {
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(handleSize,120);
    if(dialog.open)fitPlayer();
  }
  addEventListener('resize',scheduleSize,{passive:true});
  if('ResizeObserver' in window){const ro=new ResizeObserver(()=>{if(innerWidth!==resizeKey){resizeKey=innerWidth;scheduleSize();}});ro.observe(document.documentElement);}
  reduced.addEventListener?.('change',()=>{root.classList.remove('uf-revealing');if(sim)sim.classList.remove('uf-revealing');});

  function playerStatus() {
    document.getElementById('uf-player-title').textContent = playerOpen?'More room. Same demo.':'A demo in your pocket.';
    document.getElementById('uf-player-eyebrow').textContent = playerOpen?'UNFOLDED / EXPANDED WORKSPACE':'CLOSED / COMPACT WORKSPACE';
    document.getElementById('uf-player-toggle').textContent = playerOpen?'Fold back':'Unfold';
    document.getElementById('uf-player-note').textContent = (playerOpen?'Expanded view':'Pocket view')+' · '+demos[playerDemo].short+' · '+stepNames[playerStep]+'. Simulated layout, not a live hinge sensor.';
  }
  function fitPlayer() {
    if(!dialog.open||!sim)return;
    const rect=playerCanvas.getBoundingClientRect();
    const width=playerOpen?960:380;
    const height=sim.offsetHeight;
    const scale=Math.max(.1,Math.min((rect.width-28)/width,(rect.height-22)/height,1));
    holder.style.width=width+'px';holder.style.height=height+'px';
    holder.style.transform='translate(-50%,-50%) scale('+scale.toFixed(5)+')';
  }
  function setPlayer(open,animated=true) {
    if(!sim)return;
    const beforeWidth=sim.offsetWidth;
    const beforeLayout=sim.dataset.layout;
    playerOpen=open;
    const targetWidth=open?960:380;
    // Measure final geometry, then restore it before painting so width truly animates.
    sim.style.transition='none';sim.style.width=targetWidth+'px';
    setLayout(sim,open,false);
    const finalHeight=sim.offsetHeight;
    sim.style.width=beforeWidth+'px';
    setLayout(sim,beforeLayout==='expanded',false);
    void sim.offsetHeight;
    sim.style.transition=animated?'':'none';
    sim.style.width=targetWidth+'px';setLayout(sim,open,false);
    const rect=playerCanvas.getBoundingClientRect();
    const scale=Math.max(.1,Math.min((rect.width-28)/targetWidth,(rect.height-22)/finalHeight,1));
    holder.style.transition=animated?'':'none';
    holder.style.width=targetWidth+'px';holder.style.height=finalHeight+'px';
    holder.style.transform='translate(-50%,-50%) scale('+scale.toFixed(5)+')';
    playerStatus();
    if(animated&&open)reveal(sim);
    clearTimeout(playerFitTimer);playerFitTimer=setTimeout(fitPlayer,800);
  }
  function replay() {
    clearTimeout(replayTimer);setPlayer(false,false);
    if(reduced.matches){setPlayer(true,false);return;}
    replayTimer=setTimeout(()=>setPlayer(true,true),850);
  }
  function openPlayer() {
    lastFocus=document.activeElement;
    playerDemo=state.selected;playerStep=state.steps[state.selected];
    sim=root.cloneNode(true);sim.removeAttribute('id');
    sim.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    // No duplicated SVG references: retain a single inline artwork definition for the clone.
    sim.querySelectorAll('svg.uf-panorama [id]').forEach(el=>el.removeAttribute('id'));
    sim.querySelectorAll('[for]').forEach(el=>el.removeAttribute('for'));
    sim.querySelectorAll('button,input,select').forEach(el=>{el.tabIndex=-1;el.setAttribute('aria-hidden','true');});
    sim.inert=true;sim.setAttribute('aria-hidden','true');
    holder.replaceChildren(sim);render(sim,playerDemo,playerStep);
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
    document.body.style.overflow='hidden';
    setPlayer(false,false);requestAnimationFrame(fitPlayer);
    if(!reduced.matches)replayTimer=setTimeout(()=>setPlayer(true,true),1500);
    document.getElementById('uf-player-close').focus({preventScroll:true});
  }
  function closePlayer() {
    clearTimeout(replayTimer);clearTimeout(playerFitTimer);
    if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');
    document.body.style.overflow='';holder.replaceChildren();sim=null;
    if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});
  }
  document.querySelectorAll('[data-preview-unfold]').forEach(b=>b.addEventListener('click',openPlayer));
  document.getElementById('uf-player-close').addEventListener('click',closePlayer);
  dialog.addEventListener('cancel',event=>{event.preventDefault();closePlayer();});
  document.getElementById('uf-player-toggle').addEventListener('click',()=>{clearTimeout(replayTimer);setPlayer(!playerOpen,true);});
  document.getElementById('uf-player-replay').addEventListener('click',replay);
  document.getElementById('uf-player-scene').addEventListener('click',()=>{
    clearTimeout(replayTimer);
    const sequence=[0,1,3,4,5];const index=sequence.indexOf(playerDemo);
    playerDemo=sequence[(index+1)%sequence.length];render(sim,playerDemo,playerStep);playerStatus();fitPlayer();
    if(playerOpen)reveal(sim);
  });
  // Restoring the tab never schedules a delayed demo jump or repeats the reveal.
  document.addEventListener('visibilitychange',()=>{if(document.hidden){clearTimeout(replayTimer);root.classList.remove('uf-revealing');}});
  setLayout(root,state.expanded,false);render(root,state.selected,state.steps[state.selected]);updateMode();
  // Small, read-only inspection surface for responsive/continuity regression tests.
  window.UnfoldPreview={inspect:()=>({selected:state.selected,steps:[...state.steps],expanded:state.expanded,reveals:revealCount,playerOpen:dialog.open,deviceDetection:'viewport-width-only'})};

}
window.PlaybookUnfold = {
  prepare(html){
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const main = doc.querySelector('#duoScreen main');
    const quick = doc.getElementById('duo-quick');
    if (!main || !quick) throw new Error('The Duo workspace could not load. Refresh and try again.');
    const cards = Array.from(quick.querySelectorAll('.duo-accordion'));
    if (cards.length !== FRAMING.length) throw new Error('The Duo demo list changed. Refresh and try again.');
    const demos = cards.map((card, index) => ({
      ...FRAMING[index],
      title: card.querySelector('.accordion-label').textContent,
      steps: Array.from(card.querySelectorAll('.accordion-body li')).map(item => item.innerHTML)
    }));
    const animation = main.querySelector('.guide-motion.duo-experience');
    const practice = doc.getElementById('duo-practice');
    const siri = doc.getElementById('duo-siri');
    const notice = main.querySelector('.duo-notice');
    const legal = main.querySelector('.duo-legal');
    if (!animation || !practice || !siri || !notice || !legal) throw new Error('The original demo sections could not be retained.');
    // Keep every original section, including its ids, in optional disclosures.
    main.className = 'unfold-main';
    main.innerHTML = TEMPLATE;
    quick.id = 'duo-original-walkthroughs';
    quick.classList.remove('hands-on-primary');
    function optional(label, content){
      const details = doc.createElement('details'); details.className = 'uf-optional';
      const summary = doc.createElement('summary'); summary.textContent = label;
      details.append(summary, content); main.appendChild(details);
    }
    optional('Explore the 3-D phone', animation);
    optional('All six original walkthroughs', quick);
    optional('Optional three-minute flow', practice);
    optional('Siri on the large display', siri);
    main.append(notice, legal);
    main.insertAdjacentHTML('beforeend', ABOUT);
    const badge = doc.querySelector('#homeScreen .preview-badge');
    if (badge) badge.textContent = 'Unfold Edition';
    const style = doc.createElement('link');style.rel = 'stylesheet';
    style.href = './unfold-to-reveal-20261023.css';doc.head.appendChild(style);
    doc.body.insertAdjacentHTML('beforeend', PLAYER);
    const data = doc.createElement('script');data.type='application/json';data.id='unfold-demo-data';
    data.textContent=JSON.stringify(demos).replace(/</g,'\\u003c');doc.body.appendChild(data);
    const runtime=doc.createElement('script');runtime.id='unfold-review-script';
    runtime.textContent='('+startUnfold.toString()+')();';doc.body.appendChild(runtime);
    doc.documentElement.dataset.unfoldRevision='unfold-to-reveal-v1';
    return '<!doctype html>'+doc.documentElement.outerHTML;
  }
};
})();
