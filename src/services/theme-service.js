class ThemeService {
  constructor() {
    this.app = document.documentElement;
    this.currentSchema = localStorage.getItem('currentSchema');

    if (!this.currentSchema) {
      localStorage.setItem('currentSchema', 'light');
      this.currentSchema = 'light';
    }
  }

  toggleTheme() {
    if (this.currentSchema === 'light') {
      this.app.setAttribute('theme', 'dark');
      localStorage.setItem('currentSchema', 'dark');
      this.currentSchema = 'dark';
    } else {
      this.app.setAttribute('theme', 'light');
      localStorage.setItem('currentSchema', 'light');
      this.currentSchema = 'light';
    }
  }

  setTheme() {
    if (this.currentSchema === 'light') {
      this.app.setAttribute('theme', 'light');
    } else {
      this.app.setAttribute('theme', 'dark');
    }
  }
}

const themeService = new ThemeService();

export default themeService;
