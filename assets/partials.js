/* Common header/footer injection + light interactions */

// Apply theme as early as possible to reduce FOUC
(function applySavedTheme() {
  try {
    if (localStorage.getItem('mrt-alumni-theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();

const ICONS = {
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  arrowLeft: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  checkCircle: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  doc: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
  badge: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13l-2 8 5-3 5 3-2-8"/></svg>',
  receipt: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h16v20l-3-2-3 2-3-2-3 2-3-2-1 2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>',
  briefcase: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  bell: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z"/></svg>',
  sparkle: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.4L21 11l-6.6 2.6L12 20l-2.4-6.4L3 11l6.6-2.6z"/></svg>',
  history: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-7 3"/><polyline points="3 3 3 9 9 9"/><polyline points="12 7 12 12 15 14"/></svg>',
  community: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  filter: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></svg>',
  external: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  logout: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  building: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20"/><line x1="9" y1="22" x2="9" y2="18"/><line x1="15" y1="22" x2="15" y2="18"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="13" y1="6" x2="13" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="13" y1="10" x2="13" y2="10.01"/></svg>',
  globe: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  sun: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
};

window.ICONS = ICONS;

function renderHeader(active = '') {
  return `
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="index.html" class="brand">
        <span class="brand__mark">M</span>
        <span class="brand__name">MyRealTrip <span class="brand__sub">Alumni</span></span>
      </a>
      <nav class="nav-menu">
        <a href="dashboard.html" class="nav-link ${active==='dashboard'?'active':''}">홈</a>
        <a href="certificates.html" class="nav-link ${active==='certificates'?'active':''}">증명서 발급</a>
        <a href="history.html" class="nav-link ${active==='history'?'active':''}">신청 내역</a>
        <a href="community.html" class="nav-link ${active==='community'?'active':''}">커뮤니티</a>
      </nav>
      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="테마 전환"></button>
        <button class="btn btn--icon btn--ghost" aria-label="알림">${ICONS.bell}</button>
        <div class="user-chip">
          <span class="avatar">이</span>
          <span>이윤재</span>
        </div>
      </div>
    </div>
  </header>`;
}

function renderHeaderMinimal() {
  return `
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="index.html" class="brand">
        <span class="brand__mark">M</span>
        <span class="brand__name">MyRealTrip <span class="brand__sub">Alumni</span></span>
      </a>
      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="테마 전환"></button>
        <a href="login.html" class="btn btn--ghost btn--sm">로그인</a>
        <a href="login.html" class="btn btn--primary btn--sm">시작하기</a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <a href="index.html" class="brand" style="color:white">
            <span class="brand__mark">M</span>
            <span class="brand__name" style="color:white">MyRealTrip <span style="color:#9CA3AF">Alumni</span></span>
          </a>
          <p style="margin-top:16px; color:#9CA3AF; font-size:14px; max-width:320px; line-height:1.7;">
            마이리얼트립 알럼나이를 위한 증명서 발급 및 회원 서비스 사이트입니다.
          </p>
        </div>
        <div>
          <div class="footer-title">서비스</div>
          <a class="footer-link" href="certificates.html">증명서 발급</a>
          <a class="footer-link" href="history.html">신청 내역</a>
          <a class="footer-link" href="community.html">커뮤니티</a>
        </div>
        <div>
          <div class="footer-title">지원</div>
          <a class="footer-link" href="#">자주 묻는 질문</a>
          <a class="footer-link" href="mailto:hr@myrealtrip.com">인사팀 문의</a>
          <a class="footer-link" href="mailto:payroll@myrealtrip.com">급여 문의</a>
        </div>
        <div>
          <div class="footer-title">회사</div>
          <a class="footer-link" href="https://www.myrealtrip.com" target="_blank">마이리얼트립</a>
          <a class="footer-link" href="https://career.myrealtrip.com" target="_blank">채용 정보</a>
          <a class="footer-link" href="#">개인정보 처리방침</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MyRealTrip Inc. All rights reserved.</span>
        <span>주식회사 마이리얼트립 · 대표 이동건 · 사업자등록번호 105-87-71120</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Header
  const headerHolder = document.querySelector('[data-include="header"]');
  if (headerHolder) {
    const variant = headerHolder.dataset.variant;
    const active = headerHolder.dataset.active || '';
    headerHolder.outerHTML = variant === 'minimal' ? renderHeaderMinimal() : renderHeader(active);
  }
  // Footer
  const footerHolder = document.querySelector('[data-include="footer"]');
  if (footerHolder) footerHolder.outerHTML = renderFooter();

  // Inject icons by data attribute
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });

  // OTP input UX
  document.querySelectorAll('.otp-row').forEach(row => {
    const cells = row.querySelectorAll('.otp-cell');
    cells.forEach((cell, idx) => {
      cell.addEventListener('input', (e) => {
        const v = e.target.value.replace(/\D/g, '').slice(0, 1);
        e.target.value = v;
        if (v) cell.classList.add('filled'); else cell.classList.remove('filled');
        if (v && idx < cells.length - 1) cells[idx + 1].focus();
      });
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !cell.value && idx > 0) cells[idx - 1].focus();
      });
    });
  });

  // Radio cards toggle
  document.querySelectorAll('[data-radio-group]').forEach(group => {
    group.querySelectorAll('.radio-card').forEach(card => {
      card.addEventListener('click', () => {
        group.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
  });

  // Auto-inject theme toggle on auth pages (no header)
  if (document.querySelector('.auth-shell') && !document.querySelector('[data-theme-toggle]')) {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('data-theme-toggle', '');
    btn.setAttribute('aria-label', '테마 전환');
    btn.style.cssText = 'position:fixed; top:20px; right:20px; z-index:100;';
    document.body.appendChild(btn);
  }

  // Theme toggle
  const themeBtns = document.querySelectorAll('[data-theme-toggle]');
  const refreshIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    themeBtns.forEach(b => b.innerHTML = isDark ? ICONS.sun : ICONS.moon);
  };
  refreshIcons();
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      try {
        localStorage.setItem(
          'mrt-alumni-theme',
          document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        );
      } catch (_) {}
      refreshIcons();
    });
  });
});
