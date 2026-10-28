// Small line icons (fixed strings written here, not data from outside)
function svgIcon(inner) {
  return (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    inner +
    '</svg>'
  );
}

const contactIcons = {
  mail: svgIcon(
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
  ),
  pin: svgIcon(
    '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'
  ),
  github: svgIcon(
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'
  ),
  linkedin: svgIcon(
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
  ),
};

// One row: icon, heading, value (a link, or plain text) and a small note
function createContactItem(item) {
  const row = document.createElement('li');
  row.className = 'contact-item ci-' + item.icon;

  const icon = document.createElement('span');
  icon.className = 'contact-icon';
  icon.innerHTML = contactIcons[item.icon] || '';

  const heading = document.createElement('h3');
  heading.textContent = item.heading;

  const value = document.createElement('p');
  value.className = 'contact-value';

  if (item.url) {
    const link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.text;
    if (!item.url.startsWith('mailto:')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    value.append(link);
  } else {
    value.textContent = item.text;
  }

  row.append(icon, heading, value);

  if (item.note) {
    const note = document.createElement('p');
    note.className = 'contact-note';
    note.textContent = item.note;
    row.append(note);
  }

  return row;
}

const infoList = document.getElementById('info-list');
const profileList = document.getElementById('profile-list');
const sendEmail = document.getElementById('send-email');

// Left card: email and location
const emailContact = siteData.contacts.find(function (contact) {
  return contact.label === 'Email';
});

if (emailContact) {
  infoList.append(
    createContactItem({
      heading: 'Email',
      icon: emailContact.icon || 'mail',
      text: emailContact.url.replace('mailto:', ''),
      url: emailContact.url,
      note: emailContact.note,
    })
  );
  sendEmail.href = emailContact.url;
} else {
  sendEmail.hidden = true;
}

if (siteData.location) {
  infoList.append(
    createContactItem({
      heading: 'Location',
      icon: 'pin',
      text: siteData.location,
      url: '',
      note: '',
    })
  );
}

// Right card: every contact except email (GitHub, LinkedIn ...)
siteData.contacts
  .filter(function (contact) {
    return contact.label !== 'Email';
  })
  .forEach(function (contact) {
    profileList.append(
      createContactItem({
        heading: contact.label,
        icon: contact.icon,
        text: 'View Profile',
        url: contact.url,
        note: contact.note,
      })
    );
  });