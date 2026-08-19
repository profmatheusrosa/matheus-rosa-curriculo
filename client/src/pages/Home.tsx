/**
 * Direção visual: Monocromático Editorial — conteúdo, tipografia e espaço em branco.
 * A página elimina a metáfora de terminal e qualquer ornamentação que não apoie a leitura do currículo.
 */
import { ArrowUpRight, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const experiences = [
  {
    years: "2026 — atual",
    role: "Técnico Bancário — TI",
    company: "CAIXA",
    place: "Brasília, DF",
    detail: ["Capítulo de Codificação."],
  },
  {
    years: "2019 — atual",
    role: "Professor de TI",
    company: "Escola Técnica de Brasília",
    place: "Brasília, DF",
    detail: ["Disciplinas de Programação, Banco de Dados, Gestão de TI e Modelagem de Sistemas.", "Desenvolvimento de materiais didáticos e projetos práticos."],
  },
  {
    years: "2016 — 2026",
    role: "Analista de TI",
    company: "Universidade de Brasília",
    place: "Brasília, DF",
    detail: ["Desenvolvimento e manutenção de sistemas corporativos em Java e SQL.", "Melhorias em aplicações web, processos internos e sustentação de plataformas.", "Levantamento de requisitos, ITIL, suporte Linux/Windows e administração de Joomla e WordPress."],
  },
  {
    years: "2013 — 2014",
    role: "Programador",
    company: "Lakes Environmental",
    place: "Waterloo, Canadá",
    detail: ["Aplicações web utilizando .NET, JavaScript, jQuery e ASP.NET.", "Modernização de sistemas legados e sustentação de aplicações."],
  },
];

const education = [
  { date: "Em andamento", title: "Mestrado em Ciência de Dados", school: "Universidade de Brasília" },
  { date: "2016 — 2017", title: "Pós-graduação em Gestão e Desenvolvimento de Sistemas de Informação", school: "Faculdade JK" },
  { date: "2009 — 2015", title: "Graduação em Computação", school: "Universidade de Brasília" },
  { date: "2012 — 2013", title: "Graduação Sanduíche", school: "University of Waterloo · Canadá" },
];

const skillGroups = [
  { label: "Backend", items: "Java, Spring Boot, APIs REST, Hibernate/JPA, JDBC, Maven" },
  { label: "Dados", items: "SQL, PostgreSQL, MySQL" },
  { label: "Infraestrutura", items: "Git, Linux, Docker, Virtualização" },
  { label: "Web", items: "JavaScript, Angular, HTML/CSS" },
  { label: "Processos", items: "UML, Metodologias Ágeis, ITIL" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return <button type="button" className="minimal-theme" onClick={toggleTheme} aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}>{isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}<span>{isDark ? "Claro" : "Escuro"}</span></button>;
}

function SectionTitle({ index, title }: { index: string; title: string }) {
  return <div className="minimal-section-title"><span>{index}</span><h2>{title}</h2></div>;
}

export default function Home() {
  return (
    <div className="minimal-page">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <header className="minimal-nav">
        <a href="#inicio" className="minimal-wordmark" aria-label="Início — Matheus Rosa">
          <svg className="minimal-mark" viewBox="0 0 42 36" fill="none" aria-hidden="true">
            <path d="M3.5 31.5V5.5L12.1 18.2L20.7 5.5V31.5" />
            <path d="M25.5 31.5V5.5H31.2C35.2 5.5 37.5 7.7 37.5 11.5C37.5 15.3 35.2 17.4 31.2 17.4H25.5M31.1 17.4L38.2 31.5" />
            <circle cx="21" cy="18.2" r="2.1" fill="currentColor" stroke="none" />
          </svg>
          <span>Matheus Rosa</span>
        </a>
        <nav aria-label="Navegação principal"><a href="#experiencia">Experiência</a><a href="#formacao">Formação</a><a href="#competencias">Competências</a><a href="#contato">Contato</a></nav>
        <ThemeToggle />
      </header>

      <main id="conteudo" className="minimal-main">
        <section id="inicio" className="minimal-hero">
          <div className="minimal-hero-intro"><p>Desenvolvedor Backend Java</p><span>Brasília, DF</span></div>
          <h1>Matheus<br /><em>Rosa</em></h1>
          <div className="minimal-hero-bottom">
            <p>Backend Java para sistemas corporativos, dados e continuidade operacional. Atualmente, mestrando em Ciência de Dados pela Universidade de Brasília.</p>
            <div><a href="mailto:matheusltr@gmail.com" className="minimal-contact">Entrar em contato <ArrowUpRight className="size-4" /></a><span>Disponível para conexões profissionais.</span></div>
          </div>
        </section>

        <section className="minimal-statement" aria-label="Resumo profissional">
          <p>Sistemas estáveis dependem de decisões claras e manutenção responsável.</p>
        </section>

        <section id="experiencia" className="minimal-section">
          <SectionTitle index="01" title="Experiência" />
          <div className="experience-list-minimal">
            {experiences.map((experience) => <article className="minimal-experience" key={experience.company + experience.years}><p className="experience-years">{experience.years}</p><div className="experience-company-min"><h3>{experience.role}</h3><p>{experience.company} <span>·</span> {experience.place}</p></div><div className="experience-detail-min">{experience.detail.map((item) => <p key={item}>{item}</p>)}</div></article>)}
          </div>
        </section>

        <section id="formacao" className="minimal-section split-section">
          <div><SectionTitle index="02" title="Formação" /><p className="section-note">Aprendizado contínuo como parte do trabalho.</p></div>
          <div className="education-list-minimal">{education.map((item) => <article key={item.title}><p>{item.date}</p><div><h3>{item.title}</h3><span>{item.school}</span></div></article>)}</div>
        </section>

        <section id="competencias" className="minimal-section skills-minimal">
          <div><SectionTitle index="03" title="Competências" /><p className="section-note">Tecnologia é escolha de contexto, não uma lista isolada.</p></div>
          <div className="skill-groups-minimal">{skillGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><p>{group.items}</p></div>)}<div className="language-row"><h3>Idiomas</h3><p>Inglês avançado / fluente <span>· TOEFL</span></p></div></div>
        </section>

        <section id="contato" className="minimal-contact-section">
          <span>04</span>
          <div><p>Próximo passo</p><h2>Vamos conversar.</h2><a href="mailto:matheusltr@gmail.com">matheusltr@gmail.com <ArrowUpRight className="size-4" /></a></div>
          <div className="minimal-socials"><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer">LinkedIn</a><span>Brasília, DF</span></div>
        </section>
      </main>

      <footer className="minimal-footer"><span>© 2026 Matheus Rosa</span><a href="#inicio">Voltar ao topo</a></footer>
    </div>
  );
}
