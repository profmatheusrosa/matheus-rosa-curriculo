/**
 * Direção visual: Signal Systems — produto digital premium com dados, arquitetura e estados operacionais.
 * O layout usa superfícies escuras, azul elétrico controlado e cartões estruturados para apresentar o currículo.
 */
import {
  ArrowRight,
  ChevronDown,
  Circle,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const heroImage = "/manus-storage/signal-systems-hero_a922b432.png";

const experience = [
  { period: "2026 — atual", role: "Técnico Bancário — TI", company: "CAIXA", description: "Capítulo de Codificação.", state: "atual" },
  { period: "2019 — atual", role: "Professor de TI", company: "Escola Técnica de Brasília", description: "Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas. Desenvolvimento de materiais didáticos e projetos práticos.", state: "paralelo" },
  { period: "2016 — 2026", role: "Analista de TI", company: "Universidade de Brasília", description: "Sistemas corporativos em Java e SQL, sustentação de aplicações web, requisitos, ITIL, suporte Linux/Windows e administração de plataformas.", state: "concluído" },
  { period: "2013 — 2014", role: "Programador", company: "Lakes Environmental · Canadá", description: "Aplicações web com .NET, JavaScript, jQuery e ASP.NET. Modernização de sistemas legados e sustentação de aplicações.", state: "concluído" },
];

const stack = [
  { number: "01", label: "Backend", values: ["Java", "Spring Boot", "APIs REST", "Hibernate / JPA", "JDBC", "Maven"] },
  { number: "02", label: "Dados", values: ["SQL", "PostgreSQL", "MySQL"] },
  { number: "03", label: "Infra", values: ["Linux", "Docker", "Git", "Virtualização"] },
  { number: "04", label: "Web", values: ["JavaScript", "Angular", "HTML / CSS"] },
];

const education = [
  ["Mestrado em Ciência de Dados", "Universidade de Brasília", "em curso"],
  ["Pós em Gestão e Desenvolvimento de Sistemas", "Faculdade JK", "2016 — 2017"],
  ["Graduação em Computação", "Universidade de Brasília", "2009 — 2015"],
  ["Graduação Sanduíche", "University of Waterloo · Canadá", "2012 — 2013"],
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return <button className="signal-theme" type="button" onClick={toggleTheme} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}<span>{dark ? "Claro" : "Escuro"}</span></button>;
}

function SignalMark() {
  return <svg className="signal-mark" viewBox="0 0 42 36" fill="none" aria-hidden="true"><path d="M3.5 31.5V5.5L12.1 18.2L20.7 5.5V31.5" /><path d="M25.5 31.5V5.5H31.2C35.2 5.5 37.5 7.7 37.5 11.5C37.5 15.3 35.2 17.4 31.2 17.4H25.5M31.1 17.4L38.2 31.5" /><circle cx="21" cy="18.2" r="2.1" fill="currentColor" stroke="none" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [["Trajetória", "#experiencia"], ["Stack", "#stack"], ["Formação", "#formacao"], ["Contato", "#contato"]];

  return (
    <div className="signal-page">
      <a className="skip-link" href="#conteudo">Pular para conteúdo</a>
      <header className="signal-nav">
        <a className="signal-brand" href="#inicio"><SignalMark /><span>matheus<span>.rosa</span></span></a>
        <nav className="signal-nav-links" aria-label="Navegação principal">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="signal-nav-tools"><ThemeToggle /><a className="signal-connect-head" href="mailto:matheusltr@gmail.com">Conectar <ArrowRight className="size-3.5" /></a><button className="signal-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button></div>
        {menuOpen && <div className="signal-mobile-menu">{navItems.map(([label, href]) => <a href={href} onClick={() => setMenuOpen(false)} key={href}>{label}</a>)}</div>}
      </header>

      <main id="conteudo">
        <section id="inicio" className="signal-hero">
          <div className="signal-grid" />
          <div className="signal-orb signal-orb-one" /><div className="signal-orb signal-orb-two" />
          <div className="signal-hero-content">
            <div className="signal-eyebrow"><span className="live-dot" /> Disponível para conexões profissionais <span>·</span> Brasília, DF</div>
            <h1>Infraestrutura<br /><span>que escala.</span></h1>
            <p className="signal-hero-copy">Matheus Rosa desenvolve e sustenta sistemas corporativos com Java, dados e pensamento de produto.</p>
            <div className="signal-hero-actions"><a href="mailto:matheusltr@gmail.com" className="signal-primary"><Mail className="size-4" /> Iniciar conversa</a><a href="#experiencia" className="signal-secondary">Explorar trajetória <ChevronDown className="size-4" /></a></div>
            <dl className="signal-hero-stats"><div><dt>+10</dt><dd>anos em tecnologia</dd></div><div><dt>Java</dt><dd>foco em backend</dd></div><div><dt>C1</dt><dd>inglês / TOEFL</dd></div></dl>
          </div>
          <div className="signal-visual"><div className="visual-status"><span><Circle className="size-2.5 fill-current" /> SISTEMA ATIVO</span><span>v2026.01</span></div><img src={heroImage} alt="Visualização abstrata de arquitetura de dados" /><div className="visual-float"><span className="mini-label">ARQUITETURA</span><strong>Confiável por design.</strong><i /></div></div>
        </section>

        <section className="signal-strip"><span>ENGENHARIA DE BACKEND</span><span>·</span><span>SISTEMAS DE DADOS</span><span>·</span><span>SOFTWARE CORPORATIVO</span><span>·</span><span>APRENDIZADO CONTÍNUO</span></section>

        <section id="experiencia" className="signal-section experience-signal">
          <div className="signal-section-head"><div><p>01 / TRAJETÓRIA</p><h2>Sistemas em movimento.</h2></div><p>Experiência prática entre desenvolvimento, sustentação, ensino e contexto institucional.</p></div>
          <div className="signal-timeline">{experience.map((item, index) => <article className="timeline-card" key={item.company}><div className="timeline-top"><span className={`timeline-state ${item.state}`}><i /> {item.state}</span><span>{item.period}</span></div><div className="timeline-body"><div><p className="timeline-index">0{index + 1}</p><h3>{item.role}</h3><h4>{item.company}</h4></div><p>{item.description}</p></div></article>)}</div>
        </section>

        <section id="stack" className="signal-section stack-signal">
          <div className="signal-section-head"><div><p>02 / CAPABILIDADES</p><h2>Stack de produção.</h2></div><p>Ferramentas aplicadas à construção de produtos internos, plataformas e serviços confiáveis.</p></div>
          <div className="stack-grid">{stack.map((group) => <article className="stack-card" key={group.label}><div><span>{group.number}</span><h3>{group.label}</h3></div><ul>{group.values.map((value) => <li key={value}>{value}</li>)}</ul><ArrowRight className="stack-arrow size-4" /></article>)}<article className="stack-card stack-note"><span className="mini-label">PROCESSOS</span><p>UML, metodologias ágeis e ITIL para conectar entrega e operação.</p><div className="language-chip">INGLÊS / FLUENTE</div></article></div>
        </section>

        <section id="formacao" className="signal-section education-signal">
          <div className="education-panel"><div className="education-copy"><p>03 / FORMAÇÃO</p><h2>Aprender é parte da arquitetura.</h2><p>Uma trajetória acadêmica que acompanha a evolução do trabalho em software, dados e sistemas.</p></div><div className="education-data">{education.map(([degree, institution, date], index) => <article key={degree}><span>0{index + 1}</span><div><h3>{degree}</h3><p>{institution}</p></div><time>{date}</time></article>)}</div></div>
        </section>

        <section id="contato" className="signal-contact"><div className="contact-grid" /><div className="contact-left"><span className="live-dot" /> DISPONÍVEL PARA NOVAS CONEXÕES</div><div className="contact-center"><p>04 / CONTATO</p><h2>Vamos construir<br />o próximo sistema.</h2></div><div className="contact-right"><a className="signal-primary" href="mailto:matheusltr@gmail.com"><Send className="size-4" /> Enviar e-mail</a><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="size-4" /> github.com/profmatheusrosa <ExternalLink className="size-3" /></a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> linkedin.com/in/matheusrosabsb <ExternalLink className="size-3" /></a></div>
        </section>
      </main>
      <footer className="signal-footer"><div><SignalMark /><span>© 2026 Matheus Rosa</span></div><span>Construído com clareza e cuidado.</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </div>
  );
}
