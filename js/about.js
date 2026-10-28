document.getElementById('about-text').textContent = siteData.about;

// Skills
const skillList = document.getElementById('skill-list');
siteData.skills.forEach(function (skill) {
  const item = document.createElement('li');
  item.textContent = skill;
  skillList.append(item);
});

// Education
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
  educationList.append(card);
});

// If a list has no items yet, show a short message instead
function showEmpty(list, message) {
  const note = document.createElement('p');
  note.className = 'empty';
  note.textContent = message;
  list.replaceWith(note);
}

// Publications
const publicationList = document.getElementById('publication-list');
if (siteData.publications.length === 0) {
  showEmpty(publicationList, 'Publications coming soon.');
}
siteData.publications.forEach(function (paper) {
  const card = document.createElement('li');
  card.className = 'card';

  const title = document.createElement('h3');
  title.textContent = paper.title;

  const details = document.createElement('p');
  details.className = 'meta';
  details.textContent = paper.venue + ' · ' + paper.year;

  card.append(title, details);

  if (paper.link) {
    const link = document.createElement('a');
    link.href = paper.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View paper';
    card.append(link);
  }

  publicationList.append(card);
});

// Experience
const experienceList = document.getElementById('experience-list');
if (siteData.experience.length === 0) {
  showEmpty(experienceList, 'Experience coming soon.');
}
siteData.experience.forEach(function (job) {
  const card = document.createElement('li');
  card.className = 'card';

  const role = document.createElement('h3');
  role.textContent = job.role;

  const details = document.createElement('p');
  details.className = 'meta';
  details.textContent = job.organization + ' · ' + job.period;

  const description = document.createElement('p');
  description.textContent = job.description;

  card.append(role, details, description);
  experienceList.append(card);
});