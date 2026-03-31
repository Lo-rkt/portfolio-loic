import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  Instagram,
  Github,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Download,
  ExternalLink,
  Palette,
  Layout,
  Megaphone,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import './App.css'

type Section = 'about' | 'cv' | 'projects' | 'skills' | 'contact'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about')

  const navItems = [
    { id: 'about' as Section, label: 'À propos', icon: User },
    { id: 'cv' as Section, label: 'CV', icon: FileText },
    { id: 'projects' as Section, label: 'Projets', icon: Briefcase },
    { id: 'skills' as Section, label: 'Compétences', icon: Layout },
    { id: 'contact' as Section, label: 'Contact', icon: MessageSquare },
  ]

  const socialLinks = [
    { icon: Globe, href: 'https://bit.ly/portfolio-Loic', label: 'Portfolio' },
    { icon: Facebook, href: 'https://web.facebook.com/yona.loic', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sweet__stronk_boi/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Lo-rkt', label: 'GitHub' },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Ouvert aux opportunités - Graphiste / Webdesigner
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">À propos de moi</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Je suis un <strong>graphiste / webdesigner</strong> orienté produit, qui aime transformer un besoin métier 
                  en interface claire et efficace. J&apos;utilise au quotidien <strong>Figma</strong> pour concevoir des maquettes web, 
                  des systèmes de composants et des prototypes prêts à être développés.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Humainement, je suis quelqu&apos;un de calme, à l&apos;écoute et très attentif aux détails : hiérarchie 
                  typographique, cohérence des grilles, choix des couleurs et lisibilité. J&apos;aime travailler en 
                  équipe, échanger avec les profils marketing / produit / développement, et faire évoluer une idée 
                  jusqu&apos;à un parcours utilisateur simple à utiliser.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  J&apos;ai également une expérience en <strong>développement web front-end</strong> (HTML/CSS, React, 
                  Tailwind) que j&apos;ai mise en pratique en réalisant ce portfolio et d&apos;autres interfaces 
                  web. Cette double compétence design + intégration me permet de proposer des interfaces à la fois 
                  esthétiques, réalistes à développer et alignées avec les contraintes techniques.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-none">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Formation</p>
                      <p className="text-sm text-slate-600">Design Graphique - IT University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100 h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-none">
                      <Layout className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Spécialisation</p>
                      <p className="text-sm text-slate-600">UI/UX & Design Systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-none">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Campagnes digitales</p>
                      <p className="text-sm text-slate-600">
                        Création de visuels pour les réseaux sociaux (Meta, Instagram, Facebook), 
                        adaptés aux formats publicitaires et orientés performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-none">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Développement front-end</p>
                      <p className="text-sm text-slate-600">
                        Intégration d'interfaces avec React et Tailwind pour donner vie aux maquettes
                        et garantir une expérience fluide sur desktop et mobile.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'cv':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Document principal
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
                <FileText className="w-6 h-6 text-slate-900" />
                Curriculum Vitae
              </h2>
            </div>

            <div className="flex flex-col items-center gap-6">
              {/* CV Card */}
              <Card className="w-full max-w-xl group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Curriculum Vitae</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 h-full">
                  <p className="text-slate-600 text-sm">
                    Mon CV détaillé avec mon parcours académique, mes formations et mes compétences principales.
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open('/CV_L.pdf', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le CV
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-blue-200"
                      onClick={() => window.open('/CV_L.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger le PDF
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    Format PDF, adapté à la lecture écran et à l&apos;impression.
                  </p>
                </CardContent>
              </Card>

              {/* Portfolio Card */}
              <Card className="w-full max-w-xl group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-indigo-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Projets sélectionnés</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 h-full">
                  <p className="text-slate-600 text-sm">
                    Un aperçu concret de mon travail en design et intégration, avec une sélection de projets.
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      className="flex-1 bg-slate-900 hover:bg-slate-800"
                      onClick={() => window.open('https://bit.ly/portfolio-Loic', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lettre de Motivation (LM) temporairement désactivée : gardée pour plus tard */}
              {/*
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-emerald-200 h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Lettre de Motivation</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 h-full">
                  <p className="text-slate-600 text-sm">
                    Ma lettre de motivation détaillant ma démarche, ma façon de travailler et ce que je peux apporter à une équipe créative.
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => window.open('/LM_L.pdf', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open('/LM_L.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
              */}
            </div>

            <p className="text-center text-xs text-slate-500">
              Besoin d&rsquo;une lettre de motivation ? Je peux te la fournir sur demande.
            </p>
          </div>
        )

      case 'projects':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Projets et cas d&apos;étude</h2>
              <p className="text-slate-600">
                Une sélection de projets qui illustrent ma façon de travailler&nbsp;: du brief initial 
                jusqu&apos;aux maquettes finales prêtes pour le développement.
              </p>
            </div>

            {/* Cas d'étude principal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex flex-col gap-1">
                  <span>Refonte de landing page pour une marque digitale</span>
                  <span className="text-xs font-normal text-slate-500">
                    Cas d&apos;étude – positionnement de marque & conversion
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm">
                  Objectif&nbsp;: moderniser l&apos;image d&apos;une marque digitale et rendre la page d&apos;accueil plus claire 
                  pour les nouveaux visiteurs. Le point de départ était une page chargée, sans hiérarchie visuelle.
                </p>
                <p className="text-slate-600 text-sm">
                  Approche&nbsp;: j&apos;ai structuré la page autour de quelques sections clés (héros, bénéfices, 
                  preuve sociale, appel à l&apos;action), en travaillant la hiérarchie typographique, le contraste 
                  des blocs et un système de composants réutilisables dans Figma.
                </p>
                <p className="text-slate-600 text-sm">
                  Résultat&nbsp;: une page plus lisible, avec un message principal mis en avant et un design cohérent 
                  avec l&apos;univers de marque. La structure est pensée pour être facilement intégrable en React ou 
                  tout autre framework front.
                </p>
                <Button 
                  className="bg-slate-900 hover:bg-slate-800"
                  onClick={() => window.open('https://bit.ly/portfolio-Loic', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir les maquettes et visuels
                </Button>
              </CardContent>
            </Card>

            {/* Autres projets (grille courte) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Identité visuelle & logos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    Création de logos et déclinaisons pour plusieurs marques (couleurs, typographies, usages 
                    réseaux sociaux et print léger).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Logo Design</Badge>
                    <Badge variant="secondary">Charte rapide</Badge>
                    <Badge variant="secondary">Réseaux sociaux</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Visuels social media & Ads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    Création de visuels optimisés pour Meta et Instagram (formats carré, story, carrousel) 
                    avec un focus sur la lisibilité et l&apos;accroche.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Meta Ads</Badge>
                    <Badge variant="secondary">Instagram</Badge>
                    <Badge variant="secondary">Canva Pro</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'skills':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes Compétences</h2>
              <p className="text-slate-600">
                Compétences en design graphique, webdesign et développement front-end, appliquées à des projets digitaux variés 
                (identités visuelles, sites web, campagnes social media). Je distingue ici ce que je sais faire au quotidien 
                et les outils que j&apos;utilise le plus.
              </p>
            </div>

            <div className="space-y-6">
              {/* Design & UX */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Layout className="w-4 h-4 text-purple-600" />
                    </div>
                    Design d&apos;interfaces & Design Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Conception d&apos;interfaces UI adaptées aux parcours utilisateurs (pages d&apos;accueil, fiches produits, 
                    landing pages). Utilisation des components, variants, auto-layout et prototypage dans Figma. 
                    Capacité à créer et maintenir des design systems cohérents pour des projets multi-marques.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Components</Badge>
                    <Badge variant="secondary">Variants</Badge>
                    <Badge variant="secondary">Auto-layout</Badge>
                    <Badge variant="secondary">Prototypage</Badge>
                    <Badge variant="secondary">Design System</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Campagnes Digitales */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Megaphone className="w-4 h-4 text-blue-600" />
                    </div>
                    Campagnes digitales & Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Création de visuels pour campagnes paid ads (Meta, Google, LinkedIn). 
                    Utilisation avancée de Canva Pro pour la production marketing rapide et efficace. 
                    Visuels orientés conversion et performance marketing.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Meta Ads</Badge>
                    <Badge variant="secondary">LinkedIn Ads</Badge>
                    <Badge variant="secondary">Canva Pro</Badge>
                    <Badge variant="secondary">Visuels Conversion</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Branding & Identité */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Palette className="w-4 h-4 text-emerald-600" />
                    </div>
                    Branding & Identité Visuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Création de logos et d'identités visuelles complètes. Déclinaisons graphiques 
                    multi-marques à partir d'un même concept. Chartes graphiques et cohérence visuelle.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Logo Design</Badge>
                    <Badge variant="secondary">Charte Graphique</Badge>
                    <Badge variant="secondary">Multi-marques</Badge>
                    <Badge variant="secondary">Adobe Creative Suite</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* UI Web & Développement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-amber-600" />
                    </div>
                    UI Web & Front-end
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Conception et intégration d'interfaces web responsive (desktop & mobile). 
                    Expérience en HTML/CSS, React et Tailwind, mise en pratique notamment sur ce portfolio 
                    et d'autres interfaces front-end. Bonne compréhension des contraintes produit et développement pour 
                    une collaboration efficace avec les équipes techniques.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">UI Web</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">React (notions)</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Me Contacter</h2>
              <p className="text-slate-600">
                N&apos;hésitez pas à me contacter pour un projet, une collaboration ou une opportunité professionnelle.
                Je suis disponible pour échanger en visio ou en présentiel, selon vos besoins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a 
                        href="mailto:loic.rkt0@gmail.com" 
                        className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        loic.rkt0@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Téléphone</p>
                      <a 
                        href="tel:+261326798728" 
                        className="font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        +261 32 67 987 28
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Localisation</p>
                      <p className="font-medium text-slate-900">
                        Ankadifotsy, Antananarivo, Madagascar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">M&apos;envoyer un message</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const formData = new FormData(form)
                    const name = (formData.get('name') as string) ?? ''
                    const email = (formData.get('email') as string) ?? ''
                    const message = (formData.get('message') as string) ?? ''

                    const subject = encodeURIComponent(
                      `Nouveau message depuis le portfolio - ${name || 'Contact'}`,
                    )
                    const body = encodeURIComponent(
                      `Nom : ${name || '-'}\nEmail : ${email || '-'}\n\nMessage :\n${message || ''}`,
                    )

                    // Ouvre un nouveau message dans Gmail (si l'utilisateur est connecté)
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=loic.rkt0@gmail.com&su=${subject}&body=${body}`
                    window.open(gmailUrl, '_blank')
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="vous@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Écrivez votre message..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                      Envoyer par email
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Réseaux & Portfolio</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Disponibilité</h3>
              <p className="text-blue-700 text-sm">
                Je suis disponible immédiatement pour un CDI en temps plein, avec une organisation 
                hybride. N'hésitez pas à me contacter pour un entretien !
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-80 bg-white border-r border-slate-200 lg:min-h-screen lg:fixed lg:left-0 lg:top-0">
        <div className="p-6 lg:p-8">
          {/* Profile */}
          <div className="text-center lg:text-left mb-8">
            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full mx-auto lg:mx-0 mb-4 overflow-hidden border-4 border-slate-100 shadow-lg">
              <img 
                src="/photo.jpg" 
                alt="Loïc Rakotondrasoa" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Loïc Rakotondrasoa</h1>
            <p className="text-slate-500 mt-1">Graphiste / Webdesigner</p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Disponible immédiatement
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <a 
              href="mailto:loic.rkt0@gmail.com" 
              className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="truncate">loic.rkt0@gmail.com</span>
            </a>
            <a 
              href="tel:+261326798728" 
              className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+261 32 67 987 28</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>Ankadifotsy, Antananarivo</span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          <Separator className="my-8" />

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-80">
        <div className="max-w-4xl mx-auto p-6 lg:p-12">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App
