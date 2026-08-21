/**
 * Direção visual: Currículo A4 Digital — documento profissional de leitura editorial, agora com conteúdo PT / EN equivalente.
 * Os controles de tema, idioma e impressão permanecem fora da folha para preservar a aparência de documento na exportação.
 */
import { Download, Github, Languages, Linkedin, Moon, Printer, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Language = "pt" | "en";

const resumes = {
  pt: {
    pageTitle: "Matheus Rosa — Currículo",
    skipLink: "Pular para currículo",
    runningHead: "MATHEUS ROSA — CURRÍCULO PROFISSIONAL",
    documentIndex: "SISTEMAS · DADOS · EDUCAÇÃO",
    sealLabel: "Monograma Matheus Rosa",
    role: "DESENVOLVEDOR BACKEND JAVA",
    profilesLabel: "Perfis profissionais",
    location: "Brasília, DF",
    profileLabel: "PERFIL",
    profileSummary: "Desenvolvedor Backend Java com atuação na sustentação e evolução de sistemas corporativos. Conecta dados, aplicações web e processos de TI para manter operações confiáveis e apoiar decisões claras. Combina análise, código, operação e ensino; atualmente cursa Mestrado em Ciência de Dados na Universidade de Brasília.",
    sections: { experience: "Experiência profissional", education: "Formação acadêmica", skills: "Competências", languages: "Idiomas" },
    experiences: [
      { period: "2026 — atual", role: "Técnico Bancário — TI", organization: "CAIXA", entries: ["Capítulo de Codificação."] },
      { period: "2019 — atual", role: "Professor de TI", organization: "Escola Técnica de Brasília", entries: ["Ensino de Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas, conectando fundamentos e aplicação prática.", "Desenvolvimento de materiais didáticos e projetos práticos para apoiar a aprendizagem técnica."] },
      { period: "2016 — 2026", role: "Analista de TI", organization: "Universidade de Brasília", entries: ["Desenvolvimento e manutenção de sistemas corporativos em Java e SQL, com foco em continuidade e confiabilidade operacional.", "Aplicações web, processos internos, levantamento de requisitos e práticas alinhadas ao ITIL.", "Suporte em Linux e Windows; administração de Joomla e WordPress."] },
      { period: "2013 — 2014", role: "Programador", organization: "Lakes Environmental · Waterloo, Canadá", entries: ["Desenvolvimento de aplicações web com .NET, JavaScript, jQuery e ASP.NET.", "Modernização de sistemas legados e sustentação de aplicações em produção."] },
    ],
    education: [
      { degree: "Mestrado em Ciência de Dados", school: "Universidade de Brasília", date: "Em andamento" },
      { degree: "Especialização em Gestão e Desenvolvimento de Sistemas de Informação", school: "Faculdade JK", date: "2016 — 2017" },
      { degree: "Graduação Sanduíche", school: "University of Waterloo · Canadá", date: "2012 — 2013" },
      { degree: "Graduação em Computação", school: "Universidade de Brasília", date: "2009 — 2015" },
    ],
    competencyAreas: [
      { title: "Sistemas backend", description: "Java, Spring Boot, APIs REST, Hibernate/JPA, JDBC e Maven." },
      { title: "Dados e infraestrutura", description: "SQL, PostgreSQL, MySQL, Linux, Docker, Git e virtualização." },
      { title: "Produtos e métodos", description: "JavaScript, Angular, HTML/CSS, UML, metodologias ágeis e ITIL." },
    ],
    language: { name: "Inglês", proficiency: "Avançado / fluente", credential: "TOEFL" },
    footer: { description: "Matheus Rosa · Currículo digital", updated: "Atualizado em 2026" },
    controls: { dark: "Modo escuro", light: "Modo claro", print: "Imprimir / Salvar PDF", language: "Alternar para inglês", hint: "Use “Imprimir / Salvar PDF” para gerar uma cópia do documento." },
  },
  en: {
    pageTitle: "Matheus Rosa — Resume",
    skipLink: "Skip to resume",
    runningHead: "MATHEUS ROSA — PROFESSIONAL RESUME",
    documentIndex: "SYSTEMS · DATA · EDUCATION",
    sealLabel: "Matheus Rosa monogram",
    role: "JAVA BACKEND DEVELOPER",
    profilesLabel: "Professional profiles",
    location: "Brasília, Brazil",
    profileLabel: "PROFILE",
    profileSummary: "Java Backend Developer with experience maintaining and evolving enterprise systems. Connects data, web applications and IT processes to keep operations reliable and support clear decisions. Combines analysis, code, operations and teaching; currently pursuing a Master's Degree in Data Science at the University of Brasília.",
    sections: { experience: "Professional experience", education: "Education", skills: "Skills", languages: "Languages" },
    experiences: [
      { period: "2026 — present", role: "Banking Technician — IT", organization: "CAIXA", entries: ["Coding Chapter."] },
      { period: "2019 — present", role: "IT Instructor", organization: "Escola Técnica de Brasília", entries: ["Teaches Programming, Databases, IT Management and Systems Modeling, connecting foundations to hands-on implementation.", "Develops teaching materials and practical projects that support technical learning."] },
      { period: "2016 — 2026", role: "IT Analyst", organization: "University of Brasília", entries: ["Developed and maintained enterprise systems using Java and SQL, with a focus on operational continuity and reliability.", "Supported web applications and internal processes; gathered requirements and applied ITIL-aligned practices.", "Provided Linux and Windows support, plus Joomla and WordPress administration."] },
      { period: "2013 — 2014", role: "Programmer", organization: "Lakes Environmental · Waterloo, Canada", entries: ["Developed web applications using .NET, JavaScript, jQuery and ASP.NET.", "Modernized legacy systems and supported production applications."] },
    ],
    education: [
      { degree: "Master's Degree in Data Science", school: "University of Brasília", date: "In progress" },
      { degree: "Specialization in Information Systems Management and Development", school: "Faculdade JK", date: "2016 — 2017" },
      { degree: "Undergraduate Exchange Program", school: "University of Waterloo · Canada", date: "2012 — 2013" },
      { degree: "Bachelor's Degree in Computing", school: "University of Brasília", date: "2009 — 2015" },
    ],
    competencyAreas: [
      { title: "Backend systems", description: "Java, Spring Boot, REST APIs, Hibernate/JPA, JDBC and Maven." },
      { title: "Data & infrastructure", description: "SQL, PostgreSQL, MySQL, Linux, Docker, Git and virtualization." },
      { title: "Products & methods", description: "JavaScript, Angular, HTML/CSS, UML, agile methodologies and ITIL." },
    ],
    language: { name: "English", proficiency: "Advanced / fluent", credential: "TOEFL" },
    footer: { description: "Matheus Rosa · Digital resume", updated: "Updated 2026" },
    controls: { dark: "Dark mode", light: "Light mode", print: "Print / Save as PDF", language: "Switch to Portuguese", hint: "Use “Print / Save as PDF” to create a copy of this document." },
  },
} as const;

function ThemeButton({ language }: { language: Language }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const copy = resumes[language].controls;

  return <button type="button" className="document-tool" onClick={toggleTheme} aria-label={dark ? copy.light : copy.dark}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}<span>{dark ? copy.light : copy.dark}</span></button>;
}

function LanguageButton({ language, onToggle }: { language: Language; onToggle: () => void }) {
  const copy = resumes[language].controls;

  return <button type="button" className="document-tool language-tool" onClick={onToggle} aria-label={copy.language} title={copy.language}><Languages className="size-4" /><span className={language === "pt" ? "language-active" : ""}>PT</span><span className="language-separator">/</span><span className={language === "en" ? "language-active" : ""}>EN</span></button>;
}

function getInitialLanguage(): Language {
  const languageFromUrl = new URLSearchParams(window.location.search).get("lang");
  if (languageFromUrl === "en" || languageFromUrl === "pt") return languageFromUrl;
  return localStorage.getItem("resume-language") === "en" ? "en" : "pt";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = resumes[language];

  useEffect(() => {
    localStorage.setItem("resume-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = copy.pageTitle;
  }, [copy.pageTitle, language]);

  return (
    <div className="document-page">
      <a href="#curriculo" className="skip-link">{copy.skipLink}</a>
      <header className="document-toolbar">
        <div className="toolbar-actions"><LanguageButton language={language} onToggle={() => setLanguage(current => current === "pt" ? "en" : "pt")} /><ThemeButton language={language} /><button type="button" className="document-tool document-print" onClick={() => window.print()}><Printer className="size-4" /><span>{copy.controls.print}</span></button></div>
      </header>

      <main id="curriculo" className="resume-sheet">
        <div className="sheet-running-head"><span>{copy.runningHead}</span><div className="sheet-document-index"><span className="sheet-document-index-label">{copy.documentIndex}</span><span className="sheet-seal" aria-label={copy.sealLabel}>MR</span></div></div>
        <header className="resume-head">
          <div><p className="doc-kicker">{copy.role}</p><h1>Matheus <strong>Rosa</strong></h1></div>
          <div className="head-meta"><span className="profile-meta-label">{copy.profilesLabel}</span><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="meta-link-icon" /> github.com/profmatheusrosa</a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="meta-link-icon" /> linkedin.com/in/matheusrosabsb</a><p>{copy.location}</p></div>
        </header>

        <section className="profile-summary"><span>{copy.profileLabel}</span><p>{copy.profileSummary}</p></section>

        <div className="resume-layout">
          <section className="doc-section" id="experiencia"><h2>{copy.sections.experience}</h2><div className="experience-doc-list">{copy.experiences.map((item) => <article key={item.organization + item.period}><div className="experience-date">{item.period}</div><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><ul>{item.entries.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></article>)}</div></section>
          <section className="doc-section" id="formacao"><h2>{copy.sections.education}</h2><div className="education-doc-list">{copy.education.map((item) => <article key={item.degree}><div><h3>{item.degree}</h3><p>{item.school}</p></div><time>{item.date}</time></article>)}</div></section>
        </div>

        <section className="doc-section document-skills-band"><h2>{copy.sections.skills}</h2><div className="competency-panels">{copy.competencyAreas.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
        <section className="doc-section languages-section"><h2>{copy.sections.languages}</h2><div className="language-document-card"><strong>{copy.language.name}</strong><span>{copy.language.proficiency}</span><small>{copy.language.credential}</small></div></section>
        <footer className="sheet-footer"><span>{copy.footer.description}</span><span>{copy.footer.updated}</span></footer>
      </main>
      <p className="screen-hint"><Download className="size-3.5" /> {copy.controls.hint}</p>
    </div>
  );
}
