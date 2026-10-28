const projectList = document.getElementById('project-list');

siteData.projects.forEach(function (project) {
  projectList.append(createProjectCard(project));
});