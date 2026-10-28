// Card for the Projects page
function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const cover = document.createElement('div');
  cover.className = 'project-cover';
  if (project.image) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title + ' screenshot';
    cover.append(img);
  }

  const body = document.createElement('div');
  body.className = 'project-body';

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  const tech = document.createElement('p');
  tech.className = 'tech';
  tech.textContent = project.tech.join(' · ');

  const footer = document.createElement('div');
  footer.className = 'project-footer';

  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = project.category || 'Project';

  const link = document.createElement('a');
  link.className = 'learn-more';
  link.href = project.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Learn More →';
  link.setAttribute('aria-label', 'Learn more about ' + project.title);

  footer.append(badge, link);
  body.append(title, description, tech, footer);
  card.append(cover, body);
  return card;
}
// ---------- Home page cards ----------

// Small line icons for the Explore cards.
// These are fixed strings written here in the code, not data from outside.
function svgIcon(inner) {
  return (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    inner +
    '</svg>'
  );
}

const exploreIcons = {
  book: svgIcon(
    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
  ),
  flask: svgIcon(
    '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>'
  ),
  briefcase: svgIcon(
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  ),
  mail: svgIcon(
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
  ),
};

// Card for "Explore My Work"
function createExploreCard(item) {
  const card = document.createElement('a');
  card.className = 'explore-card';
  card.href = item.link;

  const icon = document.createElement('span');
  icon.className = 'explore-icon icon-' + item.icon;
  icon.innerHTML = exploreIcons[item.icon] || '';

  const title = document.createElement('h3');
  title.textContent = item.title;

  const text = document.createElement('p');
  text.textContent = item.text;

  card.append(icon, title, text);
  return card;
}

// Colored number card in the About section
function createStatCard(stat, index) {
  const card = document.createElement('div');
  card.className = 'stat-card stat-' + (index % 3);

  const value = document.createElement('span');
  value.className = 'stat-value';
  value.textContent = stat.value;

  const label = document.createElement('span');
  label.className = 'stat-label';
  label.textContent = stat.label;

  card.append(value, label);
  return card;
}