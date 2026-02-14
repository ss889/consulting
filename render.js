/**
 * render.js - Dynamically renders portfolio from content.json
 */

async function renderPortfolio() {
  try {
    const response = await fetch('content.json');
    if (!response.ok) throw new Error('Failed to load content.json');
    const content = await response.json();

    // Render all sections
    renderHero(content);
    renderAbout(content);
    renderProjects(content);
    renderContact(content);
    renderSocial(content);

    // Scroll reveal initialization
    if (window.ScrollReveal) {
      const sr = ScrollReveal();
      sr.reveal('.load-hidden', { duration: 1000, distance: '0px', delay: 200 });
    }

    console.log('✓ Portfolio rendered successfully');
  } catch (error) {
    console.error('Error loading portfolio:', error);
    document.body.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: Arial;">
        <h1>Unable to Load Portfolio</h1>
        <p>${error.message}</p>
        <p>Make sure <strong>content.json</strong> exists in the root directory</p>
      </div>
    `;
  }
}

function renderHero(content) {
  const nameEl = document.getElementById('heroName');
  const titleEl = document.getElementById('heroTitle');
  
  if (nameEl) {
    nameEl.textContent = content.name || 'Your Name';
  }
  
  if (titleEl) {
    const title = content.title || 'AI Consultant';
    const article = title.match(/^[aeiouAEIOU]/) ? 'n' : '';
    titleEl.textContent = article + ' ' + title;
  }
}

function renderAbout(content) {
  // Profile image
  const profileImg = document.getElementById('profileImage');
  if (profileImg && content.profileImage) {
    profileImg.src = content.profileImage;
  }

  // Bio
  const bioEl = document.getElementById('bioParagraph');
  if (bioEl && content.bio) {
    bioEl.textContent = content.bio;
  }

  // Services
  const servicesEl = document.getElementById('servicesParagraph');
  if (servicesEl && content.services && content.services.length > 0) {
    const servicesList = content.services
      .map(s => `<strong>${s.title}:</strong> ${s.description}`)
      .join(' | ');
    servicesEl.innerHTML = servicesList;
  }

  // Resume link
  const resumeLink = document.getElementById('resumeLink');
  if (resumeLink && content.resume) {
    resumeLink.href = content.resume;
  }
}

function renderProjects(content) {
  const container = document.getElementById('projectsContainer');
  if (!container || !content.projects) return;

  container.innerHTML = '';

  content.projects.forEach(project => {
    const projectRow = document.createElement('div');
    projectRow.className = 'row';
    projectRow.innerHTML = `
      <div class="col-lg-4 col-sm-12">
        <div class="project-wrapper__text load-hidden">
          <h3 class="project-wrapper__text-title">${escapeHtml(project.title)}</h3>
          <div>
            <p class="mb-4">${escapeHtml(project.description || '')}</p>
          </div>
          ${
            project.liveLink && project.liveLink !== '#!'
              ? `<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="${escapeHtml(project.liveLink)}">See Live</a>`
              : ''
          }
          ${
            project.sourceCode && project.sourceCode !== '#!'
              ? `<a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="${escapeHtml(project.sourceCode)}">Source Code</a>`
              : ''
          }
        </div>
      </div>
      <div class="col-lg-8 col-sm-12">
        <div class="project-wrapper__image load-hidden">
          <a rel="noreferrer" href="${project.liveLink || '#!'}" target="_blank">
            <div class="thumbnail rounded">
              <img
                alt="${escapeHtml(project.title)}"
                class="img-fluid"
                src="${project.image || 'assets/project.jpg'}"
              />
            </div>
          </a>
        </div>
      </div>
    `;
    container.appendChild(projectRow);
  });

  // Reinitialize scroll reveal for new elements
  if (window.ScrollReveal) {
    const sr = ScrollReveal();
    sr.reveal('.project-wrapper__text', { duration: 1000, distance: '0px', delay: 200 });
    sr.reveal('.project-wrapper__image', { duration: 1000, distance: '0px', delay: 200 });
  }
}

function renderContact(content) {
  const contactText = document.getElementById('contactText');
  if (contactText && content.contact?.callToAction) {
    contactText.textContent = content.contact.callToAction;
  }

  const contactLink = document.getElementById('contactLink');
  if (contactLink && content.contact?.email) {
    contactLink.href = `mailto:${escapeHtml(content.contact.email)}`;
  }
}

function renderSocial(content) {
  const socialContainer = document.getElementById('socialLinks');
  if (!socialContainer || !content.contact?.social) return;

  socialContainer.innerHTML = '';
  const social = content.contact.social;

  if (social.twitter) {
    const link = document.createElement('a');
    link.rel = 'noreferrer';
    link.href = social.twitter;
    link.target = '_blank';
    link.innerHTML = '<i class="fa fa-twitter fa-inverse"></i>';
    socialContainer.appendChild(link);
  }

  if (social.linkedin) {
    const link = document.createElement('a');
    link.rel = 'noreferrer';
    link.href = social.linkedin;
    link.target = '_blank';
    link.innerHTML = '<i class="fa fa-linkedin fa-inverse"></i>';
    socialContainer.appendChild(link);
  }

  if (social.github) {
    const link = document.createElement('a');
    link.rel = 'noreferrer';
    link.href = social.github;
    link.target = '_blank';
    link.innerHTML = '<i class="fa fa-github fa-inverse"></i>';
    socialContainer.appendChild(link);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Load when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPortfolio);
} else {
  renderPortfolio();
}
