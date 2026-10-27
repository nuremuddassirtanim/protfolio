// Fill simple text pieces
document.getElementById('name').textContent = siteData.name;
document.getElementById('role').textContent = siteData.role;
document.getElementById('intro').textContent = siteData.intro;
document.getElementById('about-text').textContent = siteData.about;
document.getElementById('footer-text').textContent = siteData.footer;

// Projects: make one card for each project
const projectList = document.getElementById('project-list');

siteData.projects.forEach(function (project) {
  const card = document.createElement('article');
  card.className = 'card';

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  const tech = document.createElement('p');
  tech.className = 'tech';
  tech.textContent = project.tech.join(' · ');

  const link = document.createElement('a');
  link.href = project.link;
  link.textContent = 'View project';

  card.append(title, description, tech, link);
  projectList.append(card);
});

// Skills: one list item for each skill
const skillList = document.getElementById('skill-list');

siteData.skills.forEach(function (skill) {
  const item = document.createElement('li');
  item.textContent = skill;
  skillList.append(item);
});

// Education: make one card for each education entry
const educationList = document.getElementById('education-list');

siteData.education.forEach(function (education) {
  const card = document.createElement('li');
  card.className = 'card';

  const institution = document.createElement('h3');
  institution.textContent = education.institution;

  const degree = document.createElement('p');
  degree.textContent = education.degree;

  const year = document.createElement('p');
  year.textContent = education.year;

  card.append(institution, degree, year);
  document.getElementById('education-list').append(card);
});

// Contact links
const contactList = document.getElementById('contact-list');

siteData.contacts.forEach(function (contact) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = contact.url;
  link.textContent = contact.label;
  item.append(link);
  contactList.append(item);
});
