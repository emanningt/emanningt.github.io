/* Demo Playbook navigation: explicit routes, stable startup, no saved-tip auto-scroll. */
(() => {
  'use strict';
  const pageURL = new URL(location.href);
  const entry = performance.getEntriesByType('navigation')[0];
  const refreshing = entry?.type === 'reload' || pageURL.searchParams.has('_refresh');
  function screenFor(hash) {
    if (hash === '#siri' || /^#d[0-7]$/.test(hash)) return 'siri';
    if (hash === '#duo' || hash.startsWith('#duo-')) return 'duo';
    return 'home';
  }
  // A saved Home Screen URL can contain a tip fragment. Do not treat it as a tap.
  const initialScreen = refreshing ? screenFor(pageURL.hash) : 'home';
  try {
    history.scrollRestoration = 'manual';
    pageURL.hash = initialScreen === 'home' ? '' : '#' + initialScreen;
    pageURL.searchParams.delete('_refresh');
    history.replaceState({screen: initialScreen}, '', pageURL.href);
  } catch (_) { /* Navigation still works if history storage is restricted. */ }

  function startNavigation(firstScreen) {
    'use strict';
    const screens = {
      home: document.getElementById('homeScreen'),
      duo: document.getElementById('duoScreen'),
      siri: document.getElementById('siriScreen')
    };
    let active = 'home', navigationId = 0, startupPending = true;
    try { history.scrollRestoration = 'manual'; } catch (_) {}
    const top = () => window.scrollTo({left: 0, top: 0, behavior: 'instant'});
    const stopStartup = () => { startupPending = false; };
    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(type => {
      window.addEventListener(type, stopStartup, {capture: true, passive: true});
    });
    function route(hash) {
      let id;
      try { id = decodeURIComponent(hash.slice(1)); } catch (_) { id = ''; }
      if (id === 'home' || !id) return {screen: 'home', target: null};
      if (id === 'duo' || id === 'siri') return {screen: id, target: null};
      const target = document.getElementById(id);
      const view = target?.closest('.view');
      const name = Object.keys(screens).find(key => screens[key] === view);
      return name ? {screen: name, target} : {screen: 'home', target: null};
    }
    function show(name) {
      active = screens[name] ? name : 'home';
      Object.entries(screens).forEach(([key, view]) => { view.hidden = key !== active; });
      document.title = active === 'duo' ? 'iPhone Duo Demos' : active === 'siri' ? 'Siri AI Demos' : 'Demo Playbook';
    }
    function writeRoute(name, target, replace) {
      const url = new URL(location.href);
      url.hash = target ? '#' + target.id : name === 'home' ? '' : '#' + name;
      url.searchParams.delete('_refresh');
      try {
        const method = replace || url.href === location.href ? 'replaceState' : 'pushState';
        history[method]({screen: name}, '', url.href);
      } catch (_) {}
    }
    function position(target, focus, ticket) {
      if (ticket !== navigationId) return;
      if (!target) { top(); return; }
      if (target.tagName === 'DETAILS') target.open = true;
      target.scrollIntoView({block: 'start', behavior: 'instant'});
      const heading = target.querySelector('h1,h2,h3,summary');
      if (focus && heading) {
        if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
        heading.focus({preventScroll: true});
      }
    }
    function navigate(name, target = null, options = {}) {
      stopStartup();
      const ticket = ++navigationId;
      show(name);
      if (options.history !== false) writeRoute(active, target, options.replace === true);
      // Stop any outstanding smooth scroll from an earlier screen immediately.
      top();
      requestAnimationFrame(() => position(target, options.focus === true, ticket));
    }
    document.addEventListener('click', event => {
      if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const element = event.target instanceof Element ? event.target : event.target.parentElement;
      const control = element?.closest('[data-go]');
      if (control && screens[control.dataset.go]) {
        event.preventDefault();
        const wanted = document.getElementById(control.dataset.anchor || '');
        const target = wanted?.closest('.view') === screens[control.dataset.go] ? wanted : null;
        navigate(control.dataset.go, target, {focus: true});
        return;
      }
      const link = element?.closest('a[href]');
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      const destination = route(url.hash);
      if (!destination.target && !['#home', '#duo', '#siri'].includes(url.hash)) return;
      event.preventDefault();
      navigate(destination.screen, destination.target, {focus: true});
    });
    const fromHistory = () => {
      const destination = route(location.hash);
      navigate(destination.screen, destination.target, {history: false});
    };
    window.addEventListener('popstate', fromHistory);
    window.addEventListener('hashchange', fromHistory);

    // Startup runs once, and cancels as soon as someone interacts with the guide.
    show(firstScreen);
    writeRoute(active, null, true);
    top();
    const settle = () => { if (startupPending) top(); };
    requestAnimationFrame(() => requestAnimationFrame(settle));
    window.addEventListener('load', settle, {once: true});
    window.addEventListener('pageshow', event => {
      if (event.persisted) {
        // Restore the selected guide, not a browser-saved pixel offset or tip.
        const destination = route(location.hash);
        navigate(destination.screen, null, {replace: true});
      } else settle();
    });

    const box = document.getElementById('pullRefresh');
    const label = document.getElementById('refreshText');
    if (box && label) {
      let startX = 0, startY = 0, pull = 0, tracking = false, reloading = false;
      const reset = () => {
        tracking = false; pull = 0;
        box.classList.remove('show', 'refreshing');
        box.style.transform = 'translate(-50%,-54px)';
        label.textContent = 'Pull to refresh';
      };
      window.addEventListener('touchstart', event => {
        if (reloading) return;
        reset();
        if (scrollY > 0 || event.touches.length !== 1 || event.target.closest('.motion-scene,button,input,a,summary')) return;
        tracking = true; startX = event.touches[0].clientX; startY = event.touches[0].clientY;
      }, {passive: true});
      window.addEventListener('touchmove', event => {
        if (!tracking) return;
        if (event.touches.length !== 1 || scrollY > 2) { reset(); return; }
        const dx = Math.abs(event.touches[0].clientX - startX);
        pull = Math.max(0, event.touches[0].clientY - startY);
        if (dx > 12 && dx > pull) { reset(); return; }
        if (pull < 6) return;
        box.classList.add('show');
        box.style.transform = `translate(-50%,${Math.min(18, pull * .22) - 42}px)`;
        label.textContent = pull >= 88 ? 'Release to refresh' : 'Pull to refresh';
      }, {passive: true});
      window.addEventListener('touchcancel', reset, {passive: true});
      window.addEventListener('touchend', () => {
        if (!tracking || reloading) return;
        if (pull < 88) { reset(); return; }
        tracking = false; reloading = true;
        box.classList.add('show', 'refreshing');
        box.style.transform = 'translate(-50%,10px)';
        label.textContent = 'Refreshing…';
        const url = new URL(location.href);
        url.hash = active === 'home' ? '' : '#' + active;
        url.searchParams.set('_refresh', Date.now().toString());
        setTimeout(() => {
          if (location.protocol === 'file:') location.reload();
          else location.replace(url.href);
        }, 120);
      }, {passive: true});
    }
    document.documentElement.dataset.navigationRevision = 'stable-start-v1';
  }

  window.PlaybookNavigation = {
    prepare(html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const navigation = Array.from(doc.querySelectorAll('script')).filter(script =>
        script.id !== 'motion-edition-script' && script.textContent.includes('const screens=')
      );
      if (navigation.length !== 1) throw new Error('The guide navigation could not load. Refresh and try again.');
      navigation[0].textContent = '(' + startNavigation.toString() + ')(' + JSON.stringify(initialScreen) + ');';
      // Do not trigger the keyboard or a late focus scroll after remembered login.
      doc.querySelectorAll('[autofocus]').forEach(element => element.removeAttribute('autofocus'));
      return '<!doctype html>' + doc.documentElement.outerHTML;
    }
  };
})();
