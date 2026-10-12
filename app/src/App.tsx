import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Briefcase,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Instagram,
  Layout,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  Moon,
  Palette,
  Phone,
  Sparkles,
  Sun,
  User,
} from 'lucide-react'

const navItems = [
  { id: 'about', label: 'À propos', icon: User },
  { id: 'cv', label: 'CV', icon: FileText },
  { id: 'projects', label: 'Projets', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
] as const

const socialLinks = [
  { label: 'Portfolio', href: 'https://bit.ly/portfolio-Loic', icon: Globe },
  { label: 'Instagram', href: 'https://www.instagram.com/sweet__stronk_boi/', icon: Instagram },
  { label: 'GitHub', href: 'https://github.com/Lo-rkt', icon: Github },
]

const projectCards = [
  {
    title: 'Identité visuelle immobilière',
    tag: 'Branding',
    text: 'Création d’une marque fictive complète avec site web Figma, campagnes réseaux sociaux et présentation investisseurs pour développer un cas réel de communication visuelle.',
  },
  {
    title: 'Conception web vitrine',
    tag: 'UI/UX',
    text: 'Réalisation d’un site vitrine complet avec HTML, CSS, JavaScript, React et Tailwind, en tenant compte de la structure, de la navigation et de l’expérience utilisateur.',
  },
  {
    title: 'Support technique & réseau',
    tag: 'IT',
    text: 'Diagnostic de pannes, installation de postes, configuration réseau local, bureau à distance et mise en place d’environnements de travail selon cahier des charges.',
  },
]

const skills = [
  {
    title: 'Design & UX',
    text: 'Figma, composants, variants, auto-layout, prototypage et création de maquettes web centrées sur l’expérience utilisateur.',
  },
  {
    title: 'Systèmes & Matériel',
    text: 'Montage et dépannage de PC, diagnostics matériels, réinstallation Windows/Linux, récupération de données et maintenance de postes.',
  },
  {
    title: 'Réseau & Support',
    text: 'Câblage réseau, TCP/IP, modèle OSI, bureau à distance, configuration poste à poste et assistance utilisateur quotidienne.',
  },
]

const extraSkills = [
  'Maintenance informatique',
  'Support utilisateur',
  'Windows 7/8/10/Server',
  'Linux',
  'TCP/IP',
  'Réseaux locaux',
  'Bureau à distance',
  'Figma',
  'Adobe Creative Suite',
  'HTML/CSS',
  'React',
  'Rigueur',
  'Sens du service',
  'Disponibilité',
]

function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'cv' | 'projects' | 'contact'>('about')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <section id="about" className="hero panel">
              <div className="badge">Ouvert aux opportunités — Support technique / Design</div>
              <h2>Profil et objectifs</h2>
              <p>
                Je suis <strong>Loïc Rakotondrasoa</strong>, un profil polyvalent alliant <strong>maintenance
                informatique</strong>, <strong>support technique</strong> et <strong>design graphique</strong>.
                Passionné par les solutions concrètes, les environnements numériques et l’expérience
                utilisateur, je mets mes compétences en <strong>réseau</strong>, <strong>dépannage informatique</strong>
                et <strong>conception visuelle</strong> au service de projets utiles, efficaces et bien pensés.
              </p>
              <p>
                Rigoureux, méthodique et orienté <strong>service client</strong>, je suis à la recherche d’une
                opportunité où je peux développer mes compétences, apporter de la valeur et contribuer à des
                missions variées avec sérieux et motivation.
              </p>

              <div className="stats-row">
                <div className="stat-box">
                  <strong>Bac+2</strong>
                  <span>Design Graphique &amp; Communication</span>
                </div>
                <div className="stat-box">
                  <strong>2 mois</strong>
                  <span>stage en administration &amp; marketing</span>
                </div>
                <div className="stat-box">
                  <strong>Très motivé</strong>
                  <span>disponible et orienté service client</span>
                </div>
              </div>
            </section>

            <section className="grid two-cols">
              <article className="panel feature-card blue">
                <div className="feature-icon">
                  <Palette size={22} />
                </div>
                <div>
                  <h3>Formation</h3>
                  <p>Design Graphique &amp; Communication — IT University (2022–2024)</p>
                </div>
              </article>

              <article className="panel feature-card green">
                <div className="feature-icon">
                  <Layout size={22} />
                </div>
                <div>
                  <h3>Spécialisation</h3>
                  <p>UI/UX, design system, web design et support utilisateur</p>
                </div>
              </article>

              <article className="panel feature-card purple">
                <div className="feature-icon">
                  <Megaphone size={22} />
                </div>
                <div>
                  <h3>Expérience</h3>
                  <p>Assistant administratif et marketing — ONG IrayDia (2025, 2 mois)</p>
                </div>
              </article>

              <article className="panel feature-card slate">
                <div className="feature-icon">
                  <Globe size={22} />
                </div>
                <div>
                  <h3>Développement front-end</h3>
                  <p>HTML/CSS, JavaScript, React et Tailwind en projet web vitrine</p>
                </div>
              </article>
            </section>
          </>
        )

      case 'cv':
        return (
          <section id="cv" className="panel">
            <h2>Curriculum Vitae</h2>
            <div className="cv-card-wrap">
              <div className="cv-card">
                <div className="cv-top">
                  <div className="mini-badge">Document principal</div>
                  <h3>Curriculum Vitae</h3>
                </div>
                <p>
                  Mon CV détaillé présente mon parcours académique, mes compétences techniques en support,
                  réseautique et design, ainsi que mon expérience en assistance administrative et marketing.
                </p>
                <div className="actions-row">
                  <a href="/CV_Loic.pdf" target="_blank" rel="noreferrer" className="primary-btn">
                    <ExternalLink size={16} />
                    Voir le CV
                  </a>
                  <a href="/CV_Loic.pdf" download className="secondary-btn">
                    <Download size={16} />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </div>
          </section>
        )

      case 'projects':
        return (
          <section id="projects" className="panel">
            <h2>Projets</h2>
            <div className="project-grid">
              {projectCards.map(({ title, tag, text }) => (
                <article key={title} className="project-card">
                  <span className="project-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
        )

      case 'contact':
        return (
          <section id="contact" className="panel">
            <h2>Me contacter</h2>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="input-grid">
                  <label>
                    <span>Nom</span>
                    <input type="text" placeholder="Votre nom" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" placeholder="vous@email.com" />
                  </label>
                </div>
                <label>
                  <span>Message</span>
                  <textarea rows={4} placeholder="Écrivez votre message..." />
                </label>
                <button type="submit" className="primary-btn full-width">
                  <ArrowUpRight size={16} />
                  Envoyer par email
                </button>
              </form>

              <div className="social-box">
                <h3>Réseaux &amp; Portfolio</h3>
                <div className="social-list">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="social-item">
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="profile-card">
          <div className="avatar-wrap">
            <img src="/photo.png" alt="Loïc Rakotondrasoa" />
          </div>

          <h1>Loïc Rakotondrasoa</h1>
          <p className="role">Technicien support IT / Webdesigner</p>

          <div className="status-pill">
            <span className="dot" />
            Disponible immédiatement
          </div>

          <div className="meta-list">
            <div className="meta-item">
              <Mail size={16} />
              <span>loic.rkt0@gmail.com</span>
            </div>
            <div className="meta-item">
              <Phone size={16} />
              <span>+261 32 67 987 28</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>Ankazomanga III E 30 BE BIS</span>
            </div>
          </div>
        </div>

        <nav className="nav" aria-label="Navigation principale">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={activeTab === id ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveTab(id)}
              aria-pressed={activeTab === id}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode((value) => !value)}
          aria-label="Basculer le thème"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? 'Clair' : 'Sombre'}</span>
        </button>
      </aside>

      <main className="content">{renderTabContent()}</main>
    </div>
  )
}

export default App
