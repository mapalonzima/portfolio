import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { id: 'work', label: 'WORK' },
  { id: 'systems', label: 'SYSTEMS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
]

const projects = [
  {
    number: '01',
    name: 'QR Guard Patrol System',
    category: 'Security operations',
    status: 'Designed / Proposed / Development work',
    description:
      'A QR-based security patrol monitoring concept designed for guard checkpoint verification and operational oversight.',
    details:
      'Designed and proposed to Pramquex Security, the concept was positively received but large-scale rollout was constrained by the organisation’s existing technology capacity.',
    tech: ['QR authentication', 'Guard workflow', 'Admin dashboard', 'WebSockets', 'GPS-aware mapping'],
  },
  {
    number: '02',
    name: 'Truck Checkpoint Monitoring System',
    category: 'Logistics monitoring',
    status: 'Currently developing',
    description:
      'A QR-based checkpoint system extending the patrol model into truck route monitoring and transit verification.',
    details:
      'The concept registers drivers, trucks, business details, routes and checkpoint events to support control-room visibility and reporting across daily, weekly, monthly and quarterly intervals.',
    tech: ['Route registration', 'QR journey IDs', 'Checkpoint scan logs', 'Control room reporting', 'Verification workflow'],
  },
  {
    number: '03',
    name: 'Course Feedback Platform',
    category: 'Education operations',
    status: 'Deployed',
    description:
      'A live web application enabling anonymous academic feedback across student, lecturer and HOD roles.',
    details:
      'Developed in response to a direct departmental request with role-based access and streamlined communication between academic stakeholders.',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'Role-based auth'],
  },
  {
    number: '04',
    name: 'Sungani Funds',
    category: 'Financial systems',
    status: 'Academic group project',
    description:
      'A student savings and micro-loans platform based on a digitised village-banking model.',
    details:
      'Served as secretary and developer in a four-person academic team focused on practical digital financial inclusion design.',
    tech: ['System design', 'Academic team leadership', 'Digital operations'],
  },
  {
    number: '05',
    name: 'Titandizana — Smart Pharmacy SaaS',
    category: 'Healthcare concept',
    status: 'Concept',
    description:
      'A multi-role healthcare platform concept connecting patients, pharmacies, doctors and delivery services in Zambia.',
    details:
      'Prepared for the ZICTA ICT Competition as a concept model for digital service coordination and healthcare access.',
    tech: ['Healthcare UX', 'Multi-role systems', 'SaaS design', 'ZICTA concept'],
  },
  {
    number: '06',
    name: 'Pramquex Automated Invoicing & Payment Reminder System',
    category: 'Billing operations',
    status: 'Requirements / system design in development',
    description:
      'A business billing system designed to automate monthly invoicing, payment allocation, client statements, reminders, approvals and financial audit trails for a security services company.',
    details:
      'The case study focuses on turning a manual billing operation into a structured, auditable system. Implementation claims are intentionally kept separate from the current requirements and design work.',
    tech: ['Requirements engineering', 'Financial data integrity', 'Automation', 'Auditability'],
    caseStudy: true,
  },
]

const systemSteps = [
  {
    index: '01',
    title: 'REQUIREMENTS',
    text: 'Understanding the problem before writing the solution.',
  },
  {
    index: '02',
    title: 'DESIGN',
    text: 'UML · Architecture · Data Models',
  },
  {
    index: '03',
    title: 'DEVELOPMENT',
    text: 'Frontend · Backend · APIs',
  },
  {
    index: '04',
    title: 'VALIDATION',
    text: 'Testing · Debugging · Refinement',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['HTML / CSS', 'JavaScript', 'C++', 'Python — learning for data science'],
  },
  {
    title: 'Frameworks / Tools',
    items: ['React', 'Tailwind CSS', 'Git', 'Vercel'],
  },
  {
    title: 'Engineering concepts',
    items: [
      'Role-Based Access Control',
      'SaaS Design',
      'REST API Design',
      'Real-Time Systems / WebSockets',
      'Cloud Deployment',
      'Requirements Engineering',
      'UML',
    ],
  },
  {
    title: 'Learning interests',
    items: ['Machine Learning', 'Data Science & Analysis', 'Deep Learning / AI'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')
  const [expandedProject, setExpandedProject] = useState(null)

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#intro" className="brand" aria-label="Mapalo Nzima home">
          MN
        </a>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          MENU
        </button>
      </header>

      <main>
        <section id="intro" className="hero section">
          <div className="hero-copy reveal-delay-1">
            <p className="eyebrow">
              SOFTWARE ENGINEERING STUDENT <span>/ SYSTEM BUILDER</span>
            </p>

            <h1 className="display-name">
              <span>MAPALO</span>
              <span>NZIMA</span>
            </h1>

            <p className="statement">
              I design and build practical digital systems for real-world problems.
            </p>

            <div className="cta-row">
              <a href="#work" className="primary-button">
                VIEW MY WORK <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/mapalonzima"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <span aria-hidden="true">↗</span>
              </a>
            </div>

            <ul className="hero-meta" aria-label="Mapalo general information">
              <li>Ndola, Zambia</li>
              <li>Requirements-driven builder</li>
              <li>Systems thinking</li>
            </ul>
          </div>

          <div className="hero-visual reveal-delay-2" aria-label="Portrait of Mapalo Nzima">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img
                  className="portrait-image"
                  src="/portrait.jpg"
                  alt="Mapalo Nzima in a black suit"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <span className="portrait-fallback" aria-hidden="true">MN</span>
              </div>

              <div className="panel-annotations">
                <span className="tag">SYSTEM BUILDER</span>
                <div className="signal-box">
                  <span className="signal-label">Currently thinking about</span>
                  <strong>Security / Education / Operations</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-header">
            <p className="section-kicker">01 — WORK</p>
            <h2>Selected systems and product thinking.</h2>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`project ${expandedProject === project.number ? 'expanded' : ''}`}
              >
                <div className="project-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p className="project-status">{project.status}</p>
                    <p>{project.description}</p>
                    {expandedProject === project.number && (
                      <p className="project-details">{project.details}</p>
                    )}
                  </div>

                  <div className="project-preview" aria-hidden="true">
                    <div className="preview-grid" />
                    <div className="preview-window">
                      <span className="mini-label">System</span>
                      <strong>{project.name}</strong>
                    </div>
                  </div>
                </div>

                <div className="project-meta">
                  <div className="tags" aria-label={`${project.name} technologies`}>
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-link project-expand"
                    aria-expanded={expandedProject === project.number}
                    aria-controls={project.caseStudy ? 'pramquex-case-study' : undefined}
                    onClick={() =>
                      setExpandedProject((current) =>
                        current === project.number ? null : project.number,
                      )
                    }
                  >
                    {expandedProject === project.number ? 'HIDE DETAILS' : 'VIEW DETAILS'}
                    <span aria-hidden="true">{expandedProject === project.number ? '↑' : '↓'}</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {expandedProject === '06' && (
        <section id="pramquex-case-study" className="section case-study-section">
          <div className="section-header case-study-header">
            <div>
              <p className="section-kicker">FEATURED CASE STUDY · 06</p>
              <h2>From manual billing work to an auditable operating system.</h2>
            </div>
            <span className="case-study-status">IN DESIGN</span>
          </div>

          <div className="case-study-intro">
            <div>
              <p className="case-study-label">PRAMQUEX AUTOMATED INVOICING &amp; PAYMENT REMINDER SYSTEM</p>
              <h3>Automated invoicing &amp; billing operations</h3>
            </div>
            <p>
              A security company billing system intended to reduce manual work around
              month-end invoicing, delivery, payments, receipts, statements, reminders,
              reporting, approvals and auditability.
            </p>
          </div>

          <div className="case-study-grid">
            <article className="case-study-block case-study-block-wide">
              <span className="case-study-index">01 / OVERVIEW</span>
              <h3>A real operations problem, modelled before it is coded.</h3>
              <p>
                The project is positioned as a software engineering system for digitising
                billing administration, not as a generic invoicing app. Its focus is the
                chain from requirements and system modelling through business rules,
                financial integrity, automation and audit trails.
              </p>
            </article>

            <article className="case-study-block">
              <span className="case-study-index">02 / PROBLEM</span>
              <h3>Manual administration creates friction.</h3>
              <p>
                Invoices and payment administration were heavily manual. The intended
                system targets the repeated work around generation, delivery, recording,
                allocation, receipts, statements, reminders, reporting and approvals.
              </p>
            </article>

            <article className="case-study-block">
              <span className="case-study-index">03 / SOLUTION</span>
              <h3>One controlled billing workflow.</h3>
              <p>
                The proposed solution brings clients, invoices, payments, allocations,
                reminders, approvals and audit events into a traceable operational model.
              </p>
            </article>
          </div>

          <div className="case-study-process" aria-label="Pramquex engineering process">
            <span>REQUIREMENTS</span><b>↓</b><span>SRS</span><b>↓</b><span>USE CASES</span><b>↓</b>
            <span>ACTIVITY DIAGRAMS</span><b>↓</b><span>SEQUENCE DIAGRAMS</span><b>↓</b>
            <span>DATA / CLASS MODEL</span><b>↓</b><span>ARCHITECTURE</span><b>↓</b>
            <span>IMPLEMENTATION</span><b>↓</b><span>TESTING</span><b>↓</b><span>DEPLOYMENT</span>
          </div>

          <div className="case-study-details">
            <article className="case-study-panel">
              <span className="case-study-index">04 / REQUIREMENTS</span>
              <ul className="case-study-list">
                <li>Client management and month-end invoice generation</li>
                <li>Invoice delivery, receipts and client statements</li>
                <li>Payment recording, reminders, reporting and approvals</li>
                <li>Cancellation / voiding and role-based access</li>
              </ul>
            </article>

            <article className="case-study-panel">
              <span className="case-study-index">05 / SYSTEM DESIGN</span>
              <p>
                Requirements are translated into use cases, activity and sequence flows,
                then into a data / class model and architecture. The portfolio currently
                contains no project diagrams or screenshots, so this surface is reserved
                for the actual artefacts when they are available.
              </p>
              <div className="artefact-slots" aria-label="Planned documentation artefacts">
                <span>USE CASE DIAGRAM</span><span>ACTIVITY DIAGRAM</span>
                <span>SEQUENCE DIAGRAM</span><span>DATA / CLASS MODEL</span>
              </div>
            </article>

            <article className="case-study-panel">
              <span className="case-study-index">06 / ARCHITECTURE</span>
              <p>
                The target architecture separates billing workflows from financial
                records, notifications and audit events so each decision can be tested
                and traced independently.
              </p>
              <p className="claim-note">Architecture implementation: to be verified.</p>
            </article>
          </div>

          <div className="case-study-details case-study-details-bottom">
            <article className="case-study-panel">
              <span className="case-study-index">07 / CORE FEATURES</span>
              <div className="feature-status-list">
                {[
                  ['Client management', 'Planned'],
                  ['Monthly invoice generation', 'Planned'],
                  ['Payment allocation rules', 'In design'],
                  ['Reminders and audit logging', 'Planned'],
                  ['Approvals and role-based access', 'Planned'],
                ].map(([feature, status]) => (
                  <div key={feature}><span>{feature}</span><b>{status}</b></div>
                ))}
              </div>
            </article>

            <article className="case-study-panel allocation-panel">
              <span className="case-study-index">08 / FINANCIAL DATA INTEGRITY</span>
              <h3>Oldest-first allocation is a business rule, not a button.</h3>
              <p>
                A single payment should be able to distribute across multiple outstanding
                invoices while keeping balances and statements accurate. The design
                separates a payment record from allocation records: one payment can create
                multiple allocations, with overpayment protection and an oldest-first rule.
              </p>
              <p className="claim-note">Requirement → design decision → implementation: implementation to be verified.</p>
            </article>
          </div>

          <div className="case-study-footer">
            <div>
              <span className="case-study-index">09 / TECHNICAL IMPLEMENTATION</span>
              <p>
                Verified in this portfolio repository: React, Vite, JavaScript and CSS.
                Pramquex backend, database, PDF and notification technologies are not
                available in this workspace, so they are not claimed here.
              </p>
            </div>
            <div>
              <span className="case-study-index">10 / CURRENT STATUS</span>
              <p>Requirements and system design in development. Testing and deployment status pending implementation evidence.</p>
              <span className="repository-pending">REPOSITORY LINK PENDING</span>
            </div>
          </div>
        </section>
        )}

        <section id="systems" className="section systems-section">
          <div className="section-header narrow">
            <p className="section-kicker">02 — SYSTEMS</p>
            <h2>Building from requirements to validation.</h2>
          </div>

          <div className="systems-grid">
            {systemSteps.map((step) => (
              <article key={step.index} className="system-card">
                <span className="system-index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skill-section">
          <div className="section-header">
            <p className="section-kicker">03 — SKILLS</p>
            <h2>Focused capability with clear technical direction.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header narrow">
            <p className="section-kicker">04 — ABOUT</p>
            <h2>Technical seriousness with practical momentum.</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                A first-year Software Engineering student at Zambia University College of
                Technology, Mapalo is building hands-on experience in web applications,
                system design and operational software around security, monitoring,
                education and digital operations.
              </p>
              <p>
                He founded Nobel Web and Media, a web design and digital marketing agency,
                and is developing a systems-first mindset around problem framing,
                requirements, implementation and validation.
              </p>
              <p>
                Long-term interests: Machine Learning, Data Science and AI.
              </p>
            </div>

            <div className="facts-panel">
              <div className="fact-item">
                <span>Experience</span>
                <strong>Nobel Web and Media</strong>
                <small>Founder &amp; CEO · 2023 — Present</small>
              </div>
              <div className="fact-item">
                <span>Education</span>
                <strong>BSc Software Engineering</strong>
                <small>Zambia University College of Technology · 2026 — 2030</small>
              </div>
              <div className="fact-item">
                <span>Learning</span>
                <strong>CS50: Intro to Computer Science</strong>
                <small>Harvard University / edX · In Progress</small>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <p className="section-kicker">05 — CONTACT</p>
            <h2>HAVE A PROBLEM WORTH SOLVING?</h2>
            <p className="contact-call">LET&apos;S TALK →</p>

            <div className="contact-row">
              <a href="tel:+260763998325">+260 763 998 325</a>
              <a href="mailto:mapalonzima.work1@email.com">mapalonzima.work1@email.com</a>
              <a href="https://github.com/mapalonzima" target="_blank" rel="noreferrer">
                GitHub: github.com/mapalonzima
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Mapalo Nzima</span>
        <span>System builder</span>
      </footer>
    </div>
  )
}

export default App
