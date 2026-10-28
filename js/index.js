document.getElementById('name').textContent = siteData.name;
document.getElementById('role').textContent = siteData.role;
document.getElementById('focus').textContent = siteData.focus;
document.getElementById('about-short').textContent = siteData.aboutShort;

// Interests as small tags
const interestList = document.getElementById('interest-list');
siteData.interests.forEach(function (interest) {
  const item = document.createElement('li');
  item.textContent = interest;
  interestList.append(item);
});

// Photo, or your initials if the picture file is missing
const photoBox = document.getElementById('hero-photo');

function showInitials() {
  const words = siteData.name.split(' ');
  photoBox.textContent = words[0][0] + words[words.length - 1][0];
  photoBox.classList.add('initials');
  photoBox.setAttribute('aria-hidden', 'true');
}

if (siteData.photo) {
  const img = document.createElement('img');
  img.onerror = showInitials;
  img.src = siteData.photo;
  img.alt = 'Photo of ' + siteData.name;
  photoBox.append(img);
} else {
  showInitials();
}

// Explore My Work cards
const exploreList = document.getElementById('explore-list');
siteData.explore.forEach(function (item) {
  exploreList.append(createExploreCard(item));
});