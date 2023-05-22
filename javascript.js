function scrollToSection(courses) {
    const section = document.getElementById(courses);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  