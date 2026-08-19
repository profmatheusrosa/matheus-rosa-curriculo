/**
 * Direção visual: Developer Profile — perfil técnico inspirado em terminal, logs e arquivos de configuração.
 * A interface privilegia monospace, dados, estados de sistema e uma hierarquia clara em modo claro e escuro.
 */
import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  CircleDot,
  Code2,
  Command,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Sun,
  TerminalSquare,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const experience = [
  {
    range: "2026 — atual",
    title: "Técnico Bancário — TI",
    company: "CAIXA",
    location: "Brasília, DF",
    work: ["Capítulo de Codificação."],
  },
  {
    range: "2019 — atual",
    title: "Professor de TI",
    company: "Escola Técnica de Brasília",
    location: "Brasília, DF",
    work: ["Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas.", "Materiais didáticos e projetos práticos."],
  },
  {
    range: "2016 — 2026",
    title: "Analista de TI",
    company: "Universidade de Brasília",
    location: "Brasília, DF",
    work: ["Sistemas corporativos em Java e SQL; aplicações web e processos internos.", "Sustentação de plataformas, requisitos, contratações públicas de TI e Central de Serviços com práticas ITIL.", "Suporte em Linux e Windows; administração de Joomla e WordPress."],
  },
  {
    range: "2013 — 2014",
    title: "Programador",
    company: "Lakes Environmental",
    location: "Waterloo, Canadá",
    work: ["Aplicações web com .NET, JavaScript, jQuery e ASP.NET.", "Modernização de sistemas legados e sustentação de aplicações."],
  },
];

const skillGroups = [
  { key: "backend", label: "backend", values: ["Java", "Spring Boot", "APIs REST", "Hibernate/JPA", "JDBC", "Maven"] },
  { key: "data", label: "dados", values: ["SQL", "PostgreSQL", "MySQL"] },
  { key: "infra", label: "infra", values: ["Linux", "Docker", "Git", "Virtualização"] },
  { key: "web", label: "web", values: ["JavaScript", "Angular", "HTML/CSS"] },
  { key: "process", label: "processos", values: ["UML", "Metodologias Ágeis", "ITIL"] },
];

const education = [
  { date: "em curso", course: "Mestrado em Ciência de Dados", school: "Universidade de Brasília", type: "current" },
  { date: "2016 — 2017", course: "Pós em Gestão e Desenvolvimento de Sistemas de Informação", school: "Faculdade JK", type: "complete" },
  { date: "2009 — 2015", course: "Graduação em Computação", school: "Universidade de Brasília", type: "complete" },
  { date: "2012 — 2013", course: "Graduação Sanduíche", school: "University of Waterloo · Canadá", type: "complete" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button type="button" className="dev-theme-toggle" onClick={toggleTheme} aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"} aria-pressed={isDark}>
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      <span>{isDark ? "light" : "dark"}</span>
    </button>
  );
}

function RailNav({ onNavigate }: { onNavigate?: () => void }) {
  const items = [
    ["./perfil", "#inicio"], ["./trajetoria", "#experiencia"], ["./formacao", "#formacao"], ["./stack", "#stack"], ["./contato", "#contato"],
  ];
  return (
    <nav className="rail-nav" aria-label="Navegação do currículo">
      <p>~/workspace</p>
      {items.map(([label, href]) => <a key={href} href={href} onClick={onNavigate}><span>›</span>{label}</a>)}
    </nav>
  );
}

function WindowHeader({ title }: { title: string }) {
  return <div className="window-header"><div className="window-dots"><span /><span /><span /></div><span>{title}</span></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dev-page">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <aside className="dev-rail" aria-label="Identidade e navegação">
        <a href="#inicio" className="dev-brand"><span className="brand-prompt">MR</span><span>matheus.rosa</span></a>
        <div className="rail-status"><span className="status-led" /> STATUS: AVAILABLE</div>
        <RailNav />
        <div className="rail-bottom">
          <ThemeToggle />
          <div className="rail-location"><MapPin className="size-3.5" aria-hidden="true" /> Brasília, DF</div>
          <div className="rail-socials">
            <a href="mailto:matheusltr@gmail.com" aria-label="Enviar e-mail"><Mail className="size-4" /></a>
            <a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-4" /></a>
            <a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="size-4" /></a>
          </div>
        </div>
      </aside>

      <header className="dev-mobile-header">
        <a href="#inicio" className="dev-brand"><span className="brand-prompt">MR</span><span>matheus.rosa</span></a>
        <div className="mobile-tools"><ThemeToggle /><button type="button" className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}><Menu className="size-4" /></button></div>
        {menuOpen && <div className="mobile-nav"><RailNav onNavigate={() => setMenuOpen(false)} /></div>}
      </header>

      <main id="conteudo" className="dev-main">
        <section id="inicio" className="terminal-hero">
          <WindowHeader title="profile.sh — bash" />
          <div className="terminal-grid">
            <div className="terminal-output">
              <div className="profile-signature">
                <svg className="profile-mark" viewBox="0 0 42 36" fill="none" aria-hidden="true">
                  <path d="M3.5 31.5V5.5L12.1 18.2L20.7 5.5V31.5" />
                  <path d="M25.5 31.5V5.5H31.2C35.2 5.5 37.5 7.7 37.5 11.5C37.5 15.3 35.2 17.4 31.2 17.4H25.5M31.1 17.4L38.2 31.5" />
                  <circle cx="21" cy="18.2" r="2.1" fill="currentColor" stroke="none" />
                </svg>
                <span>mr://backend.workspace</span>
              </div>
              <p className="terminal-line"><span className="prompt">matheus@dev:~$</span> whoami</p>
              <h1>Matheus Rosa<span className="cursor">_</span></h1>
              <p className="terminal-role">backend_java_developer</p>
              <p className="terminal-line mt"><span className="prompt">matheus@dev:~$</span> cat profile.md</p>
              <p className="profile-description">Desenvolvedor Backend Java com experiência em sistemas corporativos, aplicações web e processos de TI. Atua em análise de sistemas, sustentação de ambientes, manutenção evolutiva e melhoria contínua. Atualmente cursando Mestrado em Ciência de Dados pela UnB.</p>
              <div className="terminal-actions">
                <a href="mailto:matheusltr@gmail.com" className="terminal-action"><Mail className="size-4" /> ./iniciar-conversa</a>
                <a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer" className="terminal-link">git remote -v <ArrowUpRight className="size-3.5" /></a>
              </div>
            </div>
            <div className="profile-inspector">
              <div className="inspector-title"><CircleDot className="size-4" /> profile.status</div>
              <div className="avatar-terminal"><span>&gt;_</span></div>
              <dl>
                <div><dt>localização</dt><dd>Brasília, DF</dd></div>
                <div><dt>disponibilidade</dt><dd><i /> conexões profissionais</dd></div>
                <div><dt>foco atual</dt><dd>dados &amp; sistemas</dd></div>
                <div><dt>idioma</dt><dd>inglês · fluente</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="runtime-strip" aria-label="Resumo de competências">
          <div><Server className="size-5" /><span>runtime</span><strong>Sistemas corporativos</strong></div>
          <div><Database className="size-5" /><span>data layer</span><strong>Java · SQL · APIs</strong></div>
          <div><Command className="size-5" /><span>practice</span><strong>ITIL · requisitos · ensino</strong></div>
          <div><CheckCircle2 className="size-5" /><span>state</span><strong>produção estável</strong></div>
        </section>

        <section id="experiencia" className="dev-section experience-dev">
          <div className="section-command"><span className="prompt">matheus@dev:~$</span> git log --career --oneline</div>
          <div className="section-intro"><p>HISTÓRICO DE COMMITS</p><h2>Experiência profissional</h2><span>4 contextos · software, operação e educação</span></div>
          <div className="commit-log">
            {experience.map((item, index) => (
              <article className="commit-entry" key={item.company}>
                <div className="commit-graph"><span /><i /></div>
                <div className="commit-meta"><span>{item.range}</span><span>{item.location}</span></div>
                <div className="commit-body">
                  <div className="commit-heading"><p>commit 0{index + 1} — {item.company}</p><h3>{item.title}</h3></div>
                  <div className="commit-message">{item.work.map((line) => <p key={line}>+ {line}</p>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="dev-section stack-section">
          <div className="stack-window">
            <WindowHeader title="stack.json" />
            <div className="json-content">
              <p><span className="json-brace">&#123;</span></p>
              {skillGroups.map((group, index) => <div className="json-row" key={group.key}><span className="json-key">"{group.label}"</span><span className="json-colon">:</span><span className="json-value">[{group.values.map((skill, skillIndex) => <b key={skill}>"{skill}"{skillIndex < group.values.length - 1 ? ", " : ""}</b>)}]</span>{index < skillGroups.length - 1 && <span>,</span>}</div>)}
              <p><span className="json-brace">&#125;</span></p>
            </div>
          </div>
          <div className="stack-aside">
            <div className="section-command"><span className="prompt">matheus@dev:~$</span> cat stack.json</div>
            <p className="eyebrow-terminal">TOOLKIT</p>
            <h2>Ferramentas para construir e sustentar.</h2>
            <p>Uma stack que conecta código, dados, infraestrutura e contexto de negócio — sem perder de vista quem precisa usar o sistema.</p>
            <div className="language-terminal"><span>language:</span><strong>ENGLISH / C1</strong><small>TOEFL</small></div>
          </div>
        </section>

        <section id="formacao" className="dev-section education-dev">
          <div className="section-command"><span className="prompt">matheus@dev:~$</span> ls -la ./formacao</div>
          <div className="section-intro"><p>ACADEMIC DIRECTORY</p><h2>Formação</h2></div>
          <div className="file-list">
            {education.map((item) => <article className={`file-row ${item.type}`} key={item.course}><GraduationCap className="size-5" /><span className="file-date">{item.date}</span><div><h3>{item.course}</h3><p>{item.school}</p></div><span className="file-state">{item.type === "current" ? "IN_PROGRESS" : "COMPLETE"}</span></article>)}
          </div>
        </section>

        <section id="contato" className="contact-terminal">
          <WindowHeader title="connect.sh" />
          <div className="connect-inner">
          <div><p className="terminal-line"><span className="prompt">matheus@dev:~$</span> ./connect --start</p><h2>Abrir uma conexão operacional.</h2><p>Se o seu desafio envolve software, sistemas, dados ou ensino em tecnologia, estou a uma mensagem de distância.</p></div>
            <div className="connect-actions"><a href="mailto:matheusltr@gmail.com" className="connect-main"><Mail className="size-4" /> matheusltr@gmail.com <ArrowUpRight className="size-4" /></a><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="size-4" /> github.com/profmatheusrosa</a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> linkedin.com/in/matheusrosabsb</a></div>
          </div>
        </section>
      </main>

      <footer className="dev-footer"><span>© 2026 Matheus Rosa</span><span>built with clarity &amp; care</span><a href="#inicio">cd ~/top</a></footer>
    </div>
  );
}
