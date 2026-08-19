/**
 * Direção visual: Linha de Código — editorial técnico com assimetria funcional,
 * azul de referência e leitura cronológica precisa. Cada decisão deve reforçar
 * uma trajetória profissional confiável, metódica e acessível.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const skills = [
  "Java",
  "Spring Boot",
  "APIs REST",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Hibernate/JPA",
  "JDBC",
  "Maven",
  "Git",
  "Linux",
  "Docker",
  "JavaScript",
  "Angular",
  "HTML/CSS",
  "UML",
  "Metodologias Ágeis",
  "ITIL",
  "Virtualização",
];

const experiences = [
  {
    period: "2026 — atual",
    role: "Técnico Bancário — TI",
    company: "CAIXA",
    place: "Brasília, DF",
    highlights: ["Capítulo de Codificação."],
  },
  {
    period: "2019 — atual",
    role: "Professor de TI",
    company: "Escola Técnica de Brasília",
    place: "Brasília, DF",
    highlights: [
      "Ministrou disciplinas de Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas.",
      "Desenvolvimento de materiais didáticos e projetos práticos.",
    ],
  },
  {
    period: "2016 — 2026",
    role: "Analista de TI",
    company: "Universidade de Brasília",
    place: "Brasília, DF",
    highlights: [
      "Desenvolvimento e manutenção de sistemas corporativos utilizando Java e SQL.",
      "Implementação de melhorias em aplicações web e processos internos.",
      "Administração e sustentação de plataformas corporativas.",
      "Levantamento de requisitos e contratações públicas de TI.",
      "Administração da Central de Serviços com foco em práticas ITIL.",
      "Suporte técnico e análise de incidentes em ambientes Linux e Windows.",
      "Manutenção e administração de plataformas Joomla e WordPress.",
    ],
  },
  {
    period: "2013 — 2014",
    role: "Programador",
    company: "Lakes Environmental",
    place: "Waterloo, Canadá",
    highlights: [
      "Desenvolvimento de aplicações web utilizando .NET, JavaScript, jQuery e ASP.NET.",
      "Modernização de sistemas legados com migração de código Delphi para C++.",
      "Manutenção evolutiva e sustentação de aplicações.",
    ],
  },
];

const education = [
  {
    period: "Em andamento",
    degree: "Mestrado em Ciência de Dados",
    school: "Universidade de Brasília",
    place: "Brasília, DF",
  },
  {
    period: "2016 — 2017",
    degree: "Pós-graduação em Gestão e Desenvolvimento de Sistemas de Informação",
    school: "Faculdade JK",
    place: "Brasília, DF",
  },
  {
    period: "2009 — 2015",
    degree: "Graduação em Computação",
    school: "Universidade de Brasília",
    place: "Brasília, DF",
  },
  {
    period: "2012 — 2013",
    degree: "Graduação Sanduíche",
    school: "University of Waterloo",
    place: "Canadá",
  },
];

const navigation = [
  { label: "Visão geral", href: "#inicio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Competências", href: "#competencias" },
  { label: "Contato", href: "#contato" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex items-end gap-4 sm:mb-10">
      <div className="h-[3px] w-12 shrink-0 bg-[#1D5FA7] sm:w-16" aria-hidden="true" />
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#20262e]">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <aside className="sidebar" aria-label="Resumo e navegação">
        <div className="flex flex-col gap-9">
          <a className="brand-lockup" href="#inicio" aria-label="Início — Matheus Rosa">
            <img src="/manus-storage/mr-monogram_eb937988.png" alt="Marca abstrata MR" className="brand-mark" />
            <div>
              <p className="font-display text-xl font-bold tracking-[-0.045em] text-[#20262e]">Matheus Rosa</p>
              <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#66717e]">
                Backend Java
              </p>
            </div>
          </a>

          <div className="sidebar-rule" />

          <nav aria-label="Seções do currículo">
            <ul className="space-y-1">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a className="sidebar-link" href={item.href}>
                    <span className="font-mono text-[10px] text-[#1D5FA7]">0{index + 1}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#66717e]">
            <MapPin className="size-3.5 text-[#1D5FA7]" aria-hidden="true" />
            Brasília, DF
          </div>
          <div className="flex gap-3">
            <a className="social-link" href="mailto:matheusltr@gmail.com" aria-label="Enviar e-mail para Matheus Rosa">
              <Mail className="size-4" />
            </a>
            <a className="social-link" href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer" aria-label="Abrir GitHub de Matheus Rosa">
              <Github className="size-4" />
            </a>
            <a className="social-link" href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn de Matheus Rosa">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </aside>

      <header className="mobile-header">
        <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="Início — Matheus Rosa">
          <img src="/manus-storage/mr-monogram_eb937988.png" alt="Marca abstrata MR" className="brand-mark size-10" />
          <div>
            <p className="font-display text-base font-bold tracking-[-0.04em] text-[#20262e]">Matheus Rosa</p>
            <p className="mt-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-[#66717e]">Backend Java</p>
          </div>
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        {isMenuOpen && (
          <nav className="mobile-menu" aria-label="Seções do currículo">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} className="mobile-menu-link" onClick={closeMenu}>
                <span className="font-mono text-[10px] text-[#1D5FA7]">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="conteudo" className="main-content">
        <section id="inicio" className="hero-section">
          <img className="hero-art" src="/manus-storage/cv-editorial-hero_6b597056.png" alt="Composição abstrata de linhas técnicas em azul e grafite" />
          <div className="hero-content">
            <p className="eyebrow mb-6">Currículo online · Brasília, DF</p>
            <h1 className="hero-title">
              Sistemas estáveis começam com <span>decisões claras.</span>
            </h1>
            <p className="hero-copy">
              Desenvolvedor Backend Java com experiência em sistemas corporativos, aplicações web, processos de TI e dados. Atualmente, mestrando em Ciência de Dados pela Universidade de Brasília.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="mailto:matheusltr@gmail.com">
                <Mail className="size-4" aria-hidden="true" />
                Iniciar uma conversa
              </a>
              <a className="secondary-action" href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer">
                Ver LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-index" aria-label="Resumo profissional">
            <p>TRAJETÓRIA</p>
            <strong>2013 → atual</strong>
            <span>Software, operações, dados e educação.</span>
          </div>
        </section>

        <section className="content-section intro-grid" aria-labelledby="atuação-title">
          <div>
            <p className="eyebrow mb-5">Em foco</p>
            <h2 id="atuação-title" className="intro-heading">Arquitetura, manutenção e melhoria contínua para ambientes que precisam funcionar todos os dias.</h2>
          </div>
          <div className="intro-note">
            <Code2 className="size-5 text-[#1D5FA7]" aria-hidden="true" />
            <p>Atuação em análise de sistemas, sustentação de ambientes, manutenção evolutiva e melhoria de processos.</p>
          </div>
        </section>

        <section id="experiencia" className="content-section" aria-labelledby="experiencia-title">
          <SectionTitle eyebrow="01 / percurso profissional" title="Experiência" />
          <div className="timeline" id="experiencia-title">
            {experiences.map((experience, index) => (
              <article className="timeline-entry" key={`${experience.company}-${experience.period}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-period">{experience.period}</div>
                <div className="timeline-content">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3>{experience.role}</h3>
                    <p className="company-line">{experience.company} <span>·</span> {experience.place}</p>
                  </div>
                  <ul className="experience-list">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" className="content-section education-section" aria-labelledby="formacao-title">
          <SectionTitle eyebrow="02 / aprendizado contínuo" title="Formação" />
          <div id="formacao-title" className="education-list">
            {education.map((item) => (
              <article className="education-entry" key={`${item.school}-${item.degree}`}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school} <span>·</span> {item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="competencias" className="skills-section" aria-labelledby="competencias-title">
          <div className="skills-layout">
            <div>
              <p className="eyebrow skills-eyebrow mb-5">03 / ferramental</p>
              <h2 id="competencias-title" className="skills-heading">Competências que conectam código, operação e contexto.</h2>
              <div className="language-card">
                <Languages className="size-5" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#b9d4ef]">Idiomas</p>
                  <strong>Inglês avançado / fluente</strong>
                  <span>TOEFL</span>
                </div>
              </div>
            </div>
            <div className="skills-cloud" aria-label="Lista de competências técnicas">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <img className="skills-art" src="/manus-storage/cv-system-abstract_0b775fe7.png" alt="Textura abstrata de linhas e planos que representa sistemas conectados" />
        </section>

        <section id="contato" className="contact-section" aria-labelledby="contato-title">
          <div>
            <p className="eyebrow mb-5">04 / próximo passo</p>
            <h2 id="contato-title" className="contact-heading">Vamos conversar sobre o que seu sistema precisa sustentar.</h2>
          </div>
          <div className="contact-actions">
            <a className="contact-link prominent" href="mailto:matheusltr@gmail.com">
              <span><AtSign className="size-4" aria-hidden="true" /> matheusltr@gmail.com</span>
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
            <a className="contact-link" href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer">
              <span><Github className="size-4" aria-hidden="true" /> github.com/profmatheusrosa</span>
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
            <a className="contact-link" href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer">
              <span><Linkedin className="size-4" aria-hidden="true" /> linkedin.com/in/matheusrosabsb</span>
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-[#1D5FA7]" aria-hidden="true" /> Disponível para conexões profissionais.</div>
          <a className="footer-download" href="mailto:matheusltr@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20curr%C3%ADculo%20-%20Matheus%20Rosa">
            <Download className="size-3.5" aria-hidden="true" /> Solicitar versão em PDF
          </a>
          <p>© 2026 Matheus Rosa</p>
        </footer>
      </main>
    </div>
  );
}
