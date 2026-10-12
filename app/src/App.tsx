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
    text: 'Création d’une identité de marque fictive, de ses supports de communication et de ses déclinaisons. Le travail comprend une maquette de site dans Figma, des visuels pour les réseaux sociaux et une présentation destinée aux investisseurs.',
  },
  {
    title: 'Conception web vitrine',
    tag: 'UI/UX',
    text: 'Conception d’un site vitrine responsive, de la structuration des pages à l’intégration. Le projet met l’accent sur la hiérarchie visuelle, la navigation et une expérience adaptée aux écrans mobiles comme aux ordinateurs.',
  },
  {
    title: 'Support technique & réseau',
    tag: 'IT',
    text: 'Assistance aux utilisateurs, diagnostic de pannes et installation de postes. Mise en place d’un réseau local, configuration du bureau à distance et préparation d’environnements de travail selon les besoins.',
  },
  {
    title: 'Refonte de landing page',
    tag: 'Étude de cas',
    text: 'Repenser une page d’accueil chargée en organisant le contenu autour d’un message principal, des bénéfices, d’éléments de réassurance et d’un appel à l’action. La maquette privilégie une lecture claire et une identité visuelle cohérente.',
  },
  {
    title: 'Visuels pour réseaux sociaux',
    tag: 'Communication',
    text: 'Création de visuels et déclinaisons pour les formats des réseaux sociaux. Le travail porte sur la lisibilité, l’accroche, la cohérence graphique et l’adaptation des contenus aux différents supports.',
  },
]

const skills = [
  {
    title: 'Design graphique & UX',
    text: 'Conception de maquettes et de parcours utilisateurs, organisation de composants, variantes, auto-layout et prototypage dans Figma.',
    icon: Layout,
  },
  {
    title: 'Identité visuelle & communication',
    text: 'Création de logos, chartes et déclinaisons graphiques. Production de visuels adaptés aux réseaux sociaux et aux supports de communication.',
    icon: Palette,
  },
  {
    title: 'Systèmes & matériel',
    text: 'Montage et dépannage de PC, diagnostic matériel, installation de systèmes, maintenance de postes et récupération de données.',
    icon: Briefcase,
  },
  {
    title: 'Réseau, support & web',
    text: 'Assistance utilisateur, bases TCP/IP et réseaux locaux, ainsi qu’intégration de sites avec HTML, CSS, JavaScript et React.',
    icon: Globe,
  },
]

const extraSkills = [
  'Figma',
  'Prototypage',
  'Identité visuelle',
  'Adobe Creative Suite',
  'Canva',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Maintenance informatique',
  'Support utilisateur',
  'Windows',
  'Linux',
  'TCP/IP',
  'Réseaux locaux',
  'Bureau à distance',
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
              <p>
                Mon parcours en design graphique et communication complète mon expérience technique :
                je conçois des maquettes et des visuels soignés, puis je peux participer à leur intégration
                web. J’aime transformer un besoin en une solution claire, pratique et adaptée aux personnes
                qui vont l’utiliser.
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
            <p>
              Ces réalisations illustrent des domaines complémentaires : création visuelle, conception
              d’interfaces web et assistance informatique. Chaque projet demande d’abord de comprendre le
              besoin, puis de proposer une solution claire et adaptée.
            </p>
            <div className="project-grid">
              {projectCards.map(({ title, tag, text }) => (
                <article key={title} className="project-card">
                  <span className="project-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="extra-skills">
              <h3>Compétences clés</h3>
              <p>
                Des compétences créatives et techniques que je mobilise selon les besoins du projet.
              </p>
              <div className="skills-grid">
                {skills.map(({ title, text, icon: Icon }) => (
                  <article key={title} className="skill-box">
                    <div className="skill-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <div className="chip-list">
                {extraSkills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section id="contact" className="panel">
            <h2>Me contacter</h2>
            <p>
              Pour un projet, une collaboration ou une opportunité professionnelle, vous pouvez me
              contacter par email ou par téléphone. Je suis disponible immédiatement et heureux
              d’échanger sur vos besoins.
            </p>
            <div className="contact-grid">
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  const formData = new FormData(event.currentTarget)
                  const name = String(formData.get('name') ?? '').trim()
                  const email = String(formData.get('email') ?? '').trim()
                  const message = String(formData.get('message') ?? '').trim()
                  const subject = encodeURIComponent(`Message du portfolio - ${name}`)
                  const body = encodeURIComponent(
                    `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
                  )

                  window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=loic.rkt0@gmail.com&su=${subject}&body=${body}`
                }}
              >
                <div className="input-grid">
                  <label>
                    <span>Nom</span>
                    <input type="text" name="name" autoComplete="name" placeholder="Votre nom" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="vous@email.com"
                      required
                    />
                  </label>
                </div>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={4} placeholder="Écrivez votre message..." required />
                </label>
                <button type="submit" className="primary-btn full-width">
                  <ArrowUpRight size={16} />
                  Envoyer par email
                </button>
                <p className="form-note">
                  Gmail s’ouvrira avec un brouillon prérempli. Connectez-vous si demandé, puis
                  cliquez sur « Envoyer » dans Gmail.
                </p>
              </form>

              <div className="social-box">
                <h3>Coordonnées</h3>
                <div className="social-list">
                  <a className="meta-item" href="mailto:loic.rkt0@gmail.com">
                    <Mail size={16} />
                    <span>loic.rkt0@gmail.com</span>
                  </a>
                  <a className="meta-item" href="tel:+261326798728">
                    <Phone size={16} />
                    <span>+261 32 67 987 28</span>
                  </a>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>Ankazomanga, Antananarivo</span>
                  </div>
                </div>
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
