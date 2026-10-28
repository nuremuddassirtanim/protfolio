// Pages in the menu: change this list to add or remove a page
const pages = [
  { label: 'Home', file: 'index.html' },
  { label: 'About', file: 'about.html' },
  { label: 'Projects', file: 'projects.html' },
  { label: 'Contact', file: 'contact.html' },
];

// Find which page is open now, so the menu can highlight it
let current = location.pathname.split('/').pop();
if (current === '') {
  current = 'index.html';
} else if (!current.includes('.')) {
  current = current + '.html';
}

// ---------- Menu ----------
const navHolder = document.getElementById('site-nav');
if (navHolder) {
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Main menu');

  const inner = document.createElement('div');
  inner.className = 'nav-inner';

  const brand = document.createElement('a');
  brand.className = 'brand';
  brand.href = 'index.html';
  brand.textContent = siteData.brand || siteData.name;

  const list = document.createElement('ul');
  list.className = 'nav-links';

  pages.forEach(function (page) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = page.file;
    link.textContent = page.label;
    if (page.file === current) {
      link.setAttribute('aria-current', 'page');
    }
    item.append(link);
    list.append(item);
  });

  inner.append(brand, list);
  nav.append(inner);
  navHolder.replaceWith(nav);
}

// ---------- Footer ----------
// One footer column: a heading and a list of items.
// An item with a url becomes a link, an item without one is plain text.
function makeFooterColumn(heading, items) {
  const column = document.createElement('div');

  const title = document.createElement('h2');
  title.className = 'footer-title';
  title.textContent = heading;

  const list = document.createElement('ul');
  list.className = 'footer-list';

  items.forEach(function (item) {
    const li = document.createElement('li');
    if (item.url) {
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.label;
      li.append(link);
    } else {
      li.textContent = item.label;
    }
    list.append(li);
  });

  column.append(title, list);
  return column;
}

const footerHolder = document.getElementById('site-footer');
if (footerHolder) {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const inner = document.createElement('div');
  inner.className = 'container';

  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  // Column 1: email and location
  const contactItems = [];
  const emailContact = siteData.contacts.find(function (contact) {
    return contact.label === 'Email';
  });
  if (emailContact) {
    contactItems.push({
      label: emailContact.url.replace('mailto:', ''),
      url: emailContact.url,
    });
  }
  if (siteData.location) {
    contactItems.push({ label: siteData.location, url: '' });
  }

  // Column 2: every contact except email (GitHub, LinkedIn ...)
  const profileItems = siteData.contacts.filter(function (contact) {
    return contact.label !== 'Email';
  });

  // Column 3: the same pages as the menu
  const quickLinks = pages.map(function (page) {
    return { label: page.label, url: page.file };
  });

  grid.append(
    makeFooterColumn('Contact Information', contactItems),
    makeFooterColumn('Profiles', profileItems),
    makeFooterColumn('Quick Links', quickLinks)
  );

  const note = document.createElement('p');
  note.className = 'footer-note';
  note.textContent = siteData.footer || '';

  inner.append(grid, note);
  footer.append(inner);
  footerHolder.replaceWith(footer);
}