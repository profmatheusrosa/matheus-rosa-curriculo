/**
 * Direção visual: Currículo A4 Digital — documento profissional com página A4, margens, hierarquia editorial e regras de impressão.
 * A interface preserva apenas controles úteis de tema e impressão fora da folha documental.
 */
import { Download, Github, Linkedin, Moon, Printer, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const experiences = [
  { period: "2026 — atual", role: "Técnico Bancário — TI", organization: "CAIXA", entries: ["Capítulo de Codificação."] },
  { period: "2019 — atual", role: "Professor de TI", organization: "Escola Técnica de Brasília", entries: ["Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas.", "Desenvolvimento de materiais didáticos e projetos práticos."] },
  { period: "2016 — 2026", role: "Analista de TI", organization: "Universidade de Brasília", entries: ["Desenvolvimento e manutenção de sistemas corporativos em Java e SQL.", "Aplicações web, processos internos, levantamento de requisitos e práticas ITIL.", "Suporte em Linux e Windows; administração de Joomla e WordPress."] },
  { period: "2013 — 2014", role: "Programador", organization: "Lakes Environmental · Waterloo, Canadá", entries: ["Aplicações web com .NET, JavaScript, jQuery e ASP.NET.", "Modernização de sistemas legados e sustentação de aplicações."] },
];

const education = [
  ["Mestrado em Ciência de Dados", "Universidade de Brasília", "Em andamento"],
  ["Especialização em Gestão e Desenvolvimento de Sistemas de Informação", "Faculdade JK", "2016 — 2017"],
  ["Graduação Sanduíche", "University of Waterloo · Canadá", "2012 — 2013"],
  ["Graduação em Computação", "Universidade de Brasília", "2009 — 2015"],
];

const competencyAreas = [
  ["Sistemas backend", "Java, Spring Boot, APIs REST, Hibernate/JPA, JDBC e Maven."],
  ["Dados e infraestrutura", "SQL, PostgreSQL, MySQL, Linux, Docker, Git e virtualização."],
  ["Produtos e métodos", "JavaScript, Angular, HTML/CSS, UML, metodologias ágeis e ITIL."],
];

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return <button type="button" className="document-tool" onClick={toggleTheme} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}<span>{dark ? "Modo claro" : "Modo escuro"}</span></button>;
}

export default function Home() {
  return (
    <div className="document-page">
      <a href="#curriculo" className="skip-link">Pular para currículo</a>
      <header className="document-toolbar">
        <div className="toolbar-actions"><ThemeButton /><button type="button" className="document-tool document-print" onClick={() => window.print()}><Printer className="size-4" /><span>Imprimir / Salvar PDF</span></button></div>
      </header>

      <main id="curriculo" className="resume-sheet">
        <div className="sheet-running-head"><span>MATHEUS ROSA — CURRÍCULO PROFISSIONAL</span></div>
        <header className="resume-head">
          <div><p className="doc-kicker">DESENVOLVEDOR BACKEND JAVA</p><h1>Matheus<br /><strong>Rosa</strong></h1></div>
          <div className="head-meta"><span className="profile-meta-label">Perfis profissionais</span><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="meta-link-icon" /> github.com/profmatheusrosa</a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="meta-link-icon" /> linkedin.com/in/matheusrosabsb</a><p>Brasília, DF</p></div>
        </header>

        <section className="profile-summary"><span>PERFIL</span><p>Desenvolvedor Backend Java focado na sustentação e evolução de sistemas corporativos. Atua com dados, aplicações web e processos de TI, conectando análise, código, operação e ensino. Atualmente, cursando Mestrado em Ciência de Dados pela Universidade de Brasília.</p></section>

        <div className="resume-layout">
          <section className="doc-section" id="experiencia"><h2>Experiência profissional</h2><div className="experience-doc-list">{experiences.map((item) => <article key={item.organization + item.period}><div className="experience-date">{item.period}</div><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><ul>{item.entries.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></article>)}</div></section>
          <section className="doc-section" id="formacao"><h2>Formação acadêmica</h2><div className="education-doc-list">{education.map(([degree, school, date]) => <article key={degree}><div><h3>{degree}</h3><p>{school}</p></div><time>{date}</time></article>)}</div></section>
        </div>

        <section className="doc-section document-skills-band"><h2>Competências</h2><div className="competency-panels">{competencyAreas.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
        <section className="doc-section languages-section"><h2>Idiomas</h2><div className="language-document-card"><strong>Inglês</strong><span>Avançado / fluente</span><small>TOEFL</small></div></section>
        <footer className="sheet-footer"><span>Matheus Rosa · Currículo digital</span><span>Atualizado em 2026</span></footer>
      </main>
      <p className="screen-hint"><Download className="size-3.5" /> Use “Imprimir / Salvar PDF” para gerar uma cópia do documento.</p>
    </div>
  );
}
