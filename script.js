/* =====================================================================
   Syed Ukasha Shahid · Portfolio
   Panel switching for a no-scroll, single-page "presentation" site.

   How it works, in short:
   - Every section is a <section class="panel" data-panel="NAME"> inside #stage.
   - Any button with data-go="NAME" shows that panel.
   - Buttons with data-step="1" / "-1" go to the next / previous panel.
   - The visible panel has the class "is-active". Hidden panels are made
     "inert" so the keyboard can't tab into content you can't see.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Find the elements we need ---------- */
  const stage      = document.getElementById("stage");
  const panels     = Array.from(document.querySelectorAll(".panel"));
  const navLinks   = Array.from(document.querySelectorAll(".nav__link"));
  const nav        = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const countNow   = document.getElementById("count-current");
  const countAll   = document.getElementById("count-total");
  const countName  = document.getElementById("count-name");
  const prevBtn    = document.querySelector('[data-step="-1"]');
  const nextBtn    = document.querySelector('[data-step="1"]');
  const toast      = document.getElementById("toast");

  const names = panels.map(function (p) { return p.dataset.panel; });   // ["home", "about", ...]
  let current = 0;                // index of the visible panel
  let leaveTimer = null;

  // Animation length used to clean up the outgoing panel (matches style.css)
  const LEAVE_MS = 420;

  /* Number each .reveal element inside a panel so CSS can stagger them */
  panels.forEach(function (panel) {
    panel.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.setProperty("--i", i);
    });
  });

  /* Two-digit counter text: 3 -> "03" */
  function pad(n) { return String(n).padStart(2, "0"); }
  countAll.textContent = pad(panels.length);

  /* ---------- 2. Update everything that reflects the current panel ---------- */
  function updateUI() {
    const name = names[current];

    navLinks.forEach(function (link) {
      const isActive = link.dataset.go === name;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    panels.forEach(function (panel, i) {
      const visible = i === current;
      panel.toggleAttribute("inert", !visible);   // not focusable / clickable when hidden
      panel.setAttribute("aria-hidden", visible ? "false" : "true");
    });

    countNow.textContent = pad(current + 1);
    countName.textContent = " " + capitalise(name);
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === panels.length - 1;

    // Keep the section in the address bar (e.g. #projects) without reloading
    try { history.replaceState(null, "", "#" + name); } catch (e) { /* not allowed here; ignore */ }
  }

  function capitalise(word) { return word.charAt(0).toUpperCase() + word.slice(1); }

  /* ---------- 3. Show a panel ---------- */
  function goTo(index, options) {
    options = options || {};
    if (index < 0 || index >= panels.length || index === current) return;

    const outgoing = panels[current];
    const incoming = panels[index];
    const direction = index > current ? 1 : -1;   // 1 = forwards (slide left), -1 = backwards

    // Finish any previous transition immediately
    clearTimeout(leaveTimer);
    panels.forEach(function (p) { p.classList.remove("is-leaving"); });

    // 1) Tell CSS which way to slide, and hide the incoming panel's pieces
    stage.style.setProperty("--dir", direction);
    incoming.classList.add("is-prep");
    void stage.offsetWidth;                         // force the browser to apply the start state

    // 2) Swap the classes: CSS transitions do the animation
    outgoing.classList.remove("is-active");
    outgoing.classList.add("is-leaving");
    incoming.classList.remove("is-prep");
    incoming.classList.add("is-active");
    incoming.scrollTop = 0;

    leaveTimer = setTimeout(function () {
      outgoing.classList.remove("is-leaving");
    }, LEAVE_MS);

    current = index;
    updateUI();

    // Move keyboard / screen-reader focus to the new panel's heading
    if (options.focus !== false) {
      const heading = incoming.querySelector("[tabindex='-1']");
      if (heading) heading.focus({ preventScroll: true });
    }
  }

  function goToName(name, options) {
    const index = names.indexOf(name);
    if (index !== -1) goTo(index, options);
  }

  /* ---------- 4. Clicks: nav links, CTA buttons, pager ---------- */
  document.addEventListener("click", function (event) {
    const goBtn = event.target.closest("[data-go]");
    if (goBtn) {
      event.preventDefault();
      goToName(goBtn.dataset.go);
      closeMenu();
      return;
    }
    const stepBtn = event.target.closest("[data-step]");
    if (stepBtn) {
      goTo(current + Number(stepBtn.dataset.step), { focus: false });
      return;
    }
    // Click outside an open mobile menu closes it
    if (nav.classList.contains("is-open") && !event.target.closest(".nav, .menu-toggle")) {
      closeMenu();
    }
  });

  /* ---------- 5. Mobile menu ---------- */
  function openMenu() {
    nav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    const active = nav.querySelector(".nav__link.is-active") || navLinks[0];
    active.focus();
  }
  function closeMenu() {
    if (!nav.classList.contains("is-open")) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
    } else {
      openMenu();
    }
  });

  /* ---------- 6. Keyboard ---------- */
  function isTypingTarget(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || isTypingTarget(document.activeElement)) return;
    if (nav.classList.contains("is-open")) return;       // arrows belong to the open menu

    switch (event.key) {
      case "ArrowRight":
      case "PageDown":
        event.preventDefault();
        goTo(current + 1);
        break;
      case "ArrowLeft":
      case "PageUp":
        event.preventDefault();
        goTo(current - 1);
        break;
      case "Home":
        event.preventDefault();
        goTo(0);
        break;
      case "End":
        event.preventDefault();
        goTo(panels.length - 1);
        break;
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        // These would normally scroll the page. Block them unless the focused
        // element needs them (buttons use Space to click, so let that through).
        if (!event.target.closest("button, a")) event.preventDefault();
        break;
    }
  });

  /* ---------- 7. Touch swipe (phones and tablets) ---------- */
  let touchX = 0, touchY = 0, touchT = 0;
  stage.addEventListener("touchstart", function (e) {
    const t = e.changedTouches[0];
    touchX = t.clientX; touchY = t.clientY; touchT = Date.now();
  }, { passive: true });

  stage.addEventListener("touchend", function (e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchX;
    const dy = t.clientY - touchY;
    const quick = Date.now() - touchT < 600;
    // Only count clear, mostly-horizontal swipes
    if (quick && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(current + (dx < 0 ? 1 : -1), { focus: false });
    }
  }, { passive: true });

  /* ---------- 8. Copy buttons (email / phone) ---------- */
  let toastTimer = null;
  function showToast(text) {
    toast.textContent = text;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-on"); }, 1800);
  }

  function selectText(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const source = document.getElementById(btn.dataset.copy);
      const text = source.textContent.trim();
      const label = btn.dataset.copy === "email-value" ? "Email address" : "Phone number";

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(function () { showToast(label + " copied"); })
          .catch(function () { selectText(source); showToast("Selected. Press Ctrl+C to copy"); });
      } else {
        selectText(source);
        showToast("Selected. Press Ctrl+C to copy");
      }
    });
  });

  /* ---------- 9. Start: open the panel named in the address bar, or Home ---------- */
  function readHash() {
    return (location.hash || "").replace("#", "").toLowerCase();
  }

  const startIndex = names.indexOf(readHash());
  if (startIndex > 0) {
    // Jump straight there without animation on first load
    panels[0].classList.remove("is-active");
    panels[startIndex].classList.add("is-active");
    current = startIndex;
  }
  updateUI();

  // Back/forward buttons or a manually typed #section
  window.addEventListener("hashchange", function () {
    goToName(readHash(), { focus: false });
  });

  // Safety: if the browser ever scrolls the window (e.g. find-in-page), snap back
  window.addEventListener("scroll", function () {
    if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
  });
})();
