import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <h1 className="name">IrregularPersona</h1>
        
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-categories">
            <div className="skills-category">
              <h3 className="category-title">Languages</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fab fa-js-square skill-icon"></i>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-rust skill-icon"></i>
                  <span className="skill-name">Rust</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-python skill-icon"></i>
                  <span className="skill-name">Python</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-solid fa-c skill-icon"></i>
                  <span className="skill-name">C++</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-java skill-icon"></i>
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-golang skill-icon"></i>
                  <span className="skill-name">Go</span>
                </div>
                <div className="skill-card">
                  <i className="fas fa-microchip skill-icon"></i>
                  <span className="skill-name">x86 Assembly</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Frameworks & Libraries</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fab fa-react skill-icon"></i>
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-node-js skill-icon"></i>
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-card">
                  <i className="fas fa-arrow-right skill-icon"></i>
                  <span className="skill-name">Next.js</span>
                </div>
                <div className="skill-card">
                  <i className="fas fa-wind skill-icon"></i>
                  <span className="skill-name">Tailwind</span>
                </div>
                <div className="skill-card">
                  <i className="fab fa-git-alt skill-icon"></i>
                  <span className="skill-name">Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-name">Glorp</h3>
            <p className="project-description emphasized">
              A cutting-edge Krunker performance client built with WebView2. Features <strong>raw input optimization</strong>, <strong>DXGI latency reduction</strong>, <strong>resource swapping</strong>, and <strong>custom script support</strong>. <strong className="highlight">Over 17,000 downloads.</strong>
            </p>
            <div className="project-tech">
              <span className="tech-tag">Rust</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">WebView2</span>
              <span className="tech-tag">Win32</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/slavcp/glorp" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i>
                Code
              </a>
              <a href="https://github.com/slavcp/glorp/releases" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
        </section>
      </main>
      
      <footer className="social-links">
        <a 
          href="https://github.com/IrregularPersona" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a 
          href="https://youtube.com/@HomeyVal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-youtube"></i>
          YouTube
        </a>
        {/* <a 
          href="https://twitter.com/IrregularPersona" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a> */}
        <a 
          href="https://discord.com/users/354465510064128004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-discord"></i>
          Discord
        </a>
      </footer>
    </div>
  );
}

export default App;
