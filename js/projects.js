const projectList = document.getElementById('project-list');

siteData.projects.forEach(function (project) {
  projectList.append(createProjectCard(project));
});
// Panel under the project cards
document.getElementById('callout-title').textContent = siteData.callout.title;
document.getElementById('callout-text').textContent = siteData.callout.text;

const calloutButtons = document.getElementById('callout-buttons');

siteData.callout.buttons.forEach(function (button, index) {
  const link = document.createElement('a');
  link.className = index === 0 ? 'button' : 'button button-outline';
  link.href = button.url;
  link.textContent = button.label;

  // Links to other websites open in a new tab
  if (button.url.startsWith('http')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  calloutButtons.append(link);
});
