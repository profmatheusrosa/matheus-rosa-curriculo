/**
 * Direção visual: Ateliê de Produto — portfólio humano, tátil e contemporâneo.
 * A interface evita a estética de dossiê; usa superfícies foscas, acentos em verde e coral,
 * composição em blocos de impacto e leitura acolhedora nos modos claro e escuro.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleArrowUp,
  Code2,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Send,
  Sparkles,
  Sun,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const skills = [
  "Java", "Spring Boot", "APIs REST", "SQL", "PostgreSQL", "MySQL", "Hibernate/JPA",
  "JDBC", "Maven", "Git", "Linux", "Docker", "JavaScript", "Angular", "HTML/CSS",
  "UML", "Metodologias Ágeis", "ITIL", "Virtualização",
];

const experiences = [
  {
    period: "2026 — hoje",
    company: "CAIXA",
    role: "Técnico Bancário — TI",
    place: "Brasília, DF",
    tone: "mint",
    highlights: ["Capítulo de Codificação."],
  },
  {
    period: "2019 — hoje",
    company: "Escola Técnica de Brasília",
    role: "Professor de TI",
    place: "Brasília, DF",
    tone: "coral",
    highlights: [
      "Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas.",
      "Materiais didáticos e projetos práticos.",
    ],
  },
  {
    period: "2016 — 2026",
    company: "Universidade de Brasília",
    role: "Analista de TI",
    place: "Brasília, DF",
    tone: "sun",
    highlights: [
      "Sistemas corporativos em Java e SQL; aplicações web e processos internos.",
      "Sustentação de plataformas, levantamento de requisitos e contratações públicas de TI.",
      "Central de Serviços com práticas ITIL, suporte em Linux e Windows e plataformas Joomla e WordPress.",
    ],
  },
  {
    period: "2013 — 2014",
    company: "Lakes Environmental",
    role: "Programador",
    place: "Waterloo, Canadá",
    tone: "lilac",
    highlights: [
      "Aplicações web com .NET, JavaScript, jQuery e ASP.NET.",
      "Modernização de sistemas legados e sustentação de aplicações.",
    ],
  },
];

const education = [
  { period: "Em andamento", degree: "Mestrado em Ciência de Dados", school: "Universidade de Brasília", className: "education-card large" },
  { period: "2016 — 2017", degree: "Pós em Gestão e Desenvolvimento de Sistemas de Informação", school: "Faculdade JK", className: "education-card coral" },
  { period: "2009 — 2015", degree: "Graduação em Computação", school: "Universidade de Brasília", className: "education-card mint" },
  { period: "2012 — 2013", degree: "Graduação Sanduíche", school: "University of Waterloo · Canadá", className: "education-card ink" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (!toggleTheme) return null;

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      <span>{isDark ? "Claro" : "Escuro"}</span>
    </button>
  );
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="atelier-page">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <header className="atelier-nav">
        <a href="#inicio" className="wordmark" aria-label="Início — Matheus Rosa">
          <svg className="wordmark-mark" viewBox="0 0 42 36" fill="none" aria-hidden="true">
            <path d="M3.5 31.5V5.5L12.1 18.2L20.7 5.5V31.5" />
            <path d="M25.5 31.5V5.5H31.2C35.2 5.5 37.5 7.7 37.5 11.5C37.5 15.3 35.2 17.4 31.2 17.4H25.5M31.1 17.4L38.2 31.5" />
            <circle cx="21" cy="18.2" r="2.1" fill="currentColor" stroke="none" />
          </svg>
          <span>Matheus Rosa</span>
        </a>
        <nav className="atelier-links" aria-label="Navegação principal">
          <a href="#trajetoria">Trajetória</a>
          <a href="#formacao">Formação</a>
          <a href="#competencias">Competências</a>
          <a href="#contato">Contato</a>
        </nav>
        <ThemeToggle />
      </header>

      <main id="conteudo">
        <section id="inicio" className="atelier-hero">
          <div className="hero-copy-block">
            <div className="availability"><span /> Aberto a conexões profissionais</div>
            <p className="hero-role">Desenvolvedor Backend Java · Brasília, DF</p>
            <h1>Construo o que <em>continua funcionando.</em></h1>
            <p className="hero-summary">Experiência em sistemas corporativos, dados e processos de TI. Uma trajetória que combina análise, código e educação para transformar necessidades reais em produtos confiáveis.</p>
            <div className="hero-buttons">
              <a href="mailto:matheusltr@gmail.com" className="button-primary"><Mail className="size-4" aria-hidden="true" /> Falar com Matheus</a>
              <a href="#trajetoria" className="button-link">Conheça a trajetória <ArrowDownRight className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="hero-mini-facts">
              <div><strong>Desde 2013</strong><span>em tecnologia</span></div>
              <div><strong>Java &amp; Dados</strong><span>foco de atuação</span></div>
              <div><strong>Inglês fluente</strong><span>TOEFL</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Composição abstrata em verde e coral">
            <img src="/manus-storage/product-studio-hero_529f11dc.png" alt="Composição abstrata de objetos em verde e coral" />
            <div className="visual-caption"><Sparkles className="size-4" aria-hidden="true" /><span>O cuidado está nos detalhes que deixam o sistema respirar.</span></div>
          </div>
        </section>

        <section className="focus-section" aria-label="Resumo de atuação">
          <div className="focus-intro">
            <p>O que me move</p>
            <strong>Unir clareza técnica e continuidade operacional.</strong>
          </div>
          <div className="focus-card"><Code2 className="size-5" aria-hidden="true" /><span>Desenvolvimento<br />e manutenção</span></div>
          <div className="focus-card"><BriefcaseBusiness className="size-5" aria-hidden="true" /><span>Processos de TI<br />que fazem sentido</span></div>
          <div className="focus-card"><GraduationCap className="size-5" aria-hidden="true" /><span>Conhecimento<br />que se multiplica</span></div>
        </section>

        <section id="trajetoria" className="experience-section">
          <SectionHeading kicker="Experiência" title="Uma carreira feita para resolver com consistência." copy="Cada etapa trouxe um novo contexto — e a mesma atenção ao que sustenta a operação no dia a dia." />
          <div className="experience-stack">
            {experiences.map((experience, index) => (
              <article className={`experience-card ${experience.tone}`} key={experience.company}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-topline"><span>{experience.period}</span><span>{experience.place}</span></div>
                <div className="experience-main"><div><p className="experience-company">{experience.company}</p><h3>{experience.role}</h3></div><ArrowUpRight className="size-5" aria-hidden="true" /></div>
                <div className="experience-detail">{experience.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" className="education-section-v3">
          <SectionHeading kicker="Formação" title="Curiosidade é uma habilidade de longo prazo." />
          <div className="education-grid">
            {education.map((item) => (
              <article className={item.className} key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="competencias" className="skills-section-v3">
          <div className="skills-copy-v3">
            <p className="section-kicker">Competências</p>
            <h2>Ferramentas são mais úteis quando se conectam ao contexto.</h2>
            <div className="language-note"><Languages className="size-5" aria-hidden="true" /><span><strong>Inglês avançado / fluente</strong><small>TOEFL</small></span></div>
          </div>
          <div className="skills-stage">
            <img src="/manus-storage/product-studio-orbit_b942504e.png" alt="Composição abstrata de discos e formas em verde e coral" />
            <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section id="contato" className="contact-section-v3">
          <img className="contact-art" src="/manus-storage/product-studio-ribbon_48631ecc.png" alt="Fita abstrata coral e forma verde" />
          <div className="contact-panel">
            <p className="section-kicker">Vamos conversar</p>
            <h2>Se há algo importante para construir ou melhorar, eu adoraria ouvir.</h2>
            <a className="contact-email" href="mailto:matheusltr@gmail.com"><Send className="size-4" aria-hidden="true" /> matheusltr@gmail.com <ArrowUpRight className="size-4" aria-hidden="true" /></a>
            <div className="contact-socials">
              <a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="size-4" aria-hidden="true" /> GitHub</a>
              <a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="size-4" aria-hidden="true" /> LinkedIn</a>
              <span><MapPin className="size-4" aria-hidden="true" /> Brasília, DF</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="atelier-footer">
        <span>© 2026 Matheus Rosa</span>
        <span>Backend · Dados · Educação</span>
        <a href="#inicio">Voltar ao início <CircleArrowUp className="size-4" aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
