/**
 * Direção visual: Relational Data Studio — perfil técnico apresentado por consultas, tabelas e relações de dados.
 * A interface prioriza leitura de informação, estrutura de banco e uma paleta analítica nos temas claro e escuro.
 */
import { ArrowUpRight, Braces, Code2, Database, Github, GitBranch, GraduationCap, Linkedin, Mail, Menu, Moon, Network, Server, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const experience = [
  ["2026 — atual", "Técnico Bancário — TI", "CAIXA", "Codificação e sistemas corporativos", "ativo"],
  ["2019 — atual", "Professor de TI", "Escola Técnica de Brasília", "Programação, banco de dados e modelagem", "ativo"],
  ["2016 — 2026", "Analista de TI", "Universidade de Brasília", "Java, SQL, sustentação e operações", "concluído"],
  ["2013 — 2014", "Programador", "Lakes Environmental · Canadá", ".NET, JavaScript e modernização legada", "concluído"],
];

const stack = [
  { icon: Server, name: "backend_services", note: "Aplicações corporativas", items: ["Java", "Spring Boot", "APIs REST", "Hibernate / JPA", "JDBC", "Maven"] },
  { icon: Database, name: "data_layer", note: "Persistência e consulta", items: ["SQL", "PostgreSQL", "MySQL", "Modelagem de dados"] },
  { icon: Network, name: "platform_ops", note: "Ambientes e operação", items: ["Linux", "Docker", "Git", "Virtualização", "ITIL"] },
  { icon: Braces, name: "web_interface", note: "Camada de interação", items: ["JavaScript", "Angular", "HTML / CSS", "Joomla", "WordPress"] },
];

const education = [
  ["01", "Mestrado em Ciência de Dados", "Universidade de Brasília", "em curso"],
  ["02", "Pós em Gestão e Desenvolvimento de Sistemas", "Faculdade JK", "2016 — 2017"],
  ["03", "Graduação em Computação", "Universidade de Brasília", "2009 — 2015"],
  ["04", "Graduação Sanduíche", "University of Waterloo · Canadá", "2012 — 2013"],
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return <button type="button" className="data-theme" onClick={toggleTheme} aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}>{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}<span>{isDark ? "Claro" : "Escuro"}</span></button>;
}

function BrandMark() {
  return <svg className="data-mark" viewBox="0 0 42 36" fill="none" aria-hidden="true"><path d="M3.5 31.5V5.5L12.1 18.2L20.7 5.5V31.5" /><path d="M25.5 31.5V5.5H31.2C35.2 5.5 37.5 7.7 37.5 11.5C37.5 15.3 35.2 17.4 31.2 17.4H25.5M31.1 17.4L38.2 31.5" /><circle cx="21" cy="18.2" r="2.1" fill="currentColor" stroke="none" /></svg>;
}

function QueryBar({ children }: { children: React.ReactNode }) { return <div className="query-bar"><TerminalLabel /><code>{children}</code></div>; }
function TerminalLabel() { return <span className="query-prompt">SQL</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["Experiência", "#experiencia"], ["Competências", "#competencias"], ["Formação", "#formacao"], ["Contato", "#contato"]];
  return (
    <div className="data-page">
      <a className="skip-link" href="#conteudo">Pular para conteúdo</a>
      <header className="data-nav">
        <a href="#inicio" className="data-brand"><BrandMark /><span>matheus.rosa<span>/dados</span></span></a>
        <nav>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="data-nav-actions"><ThemeToggle /><a href="mailto:matheusltr@gmail.com" className="data-nav-contact">Falar com Matheus <ArrowUpRight className="size-3.5" /></a><button className="data-menu" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button></div>
        {menuOpen && <div className="data-mobile-nav">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>}
      </header>

      <main id="conteudo">
        <section id="inicio" className="data-hero">
          <div className="data-hero-left"><div className="hero-label"><BrandMark /><span className="status-dot" /> perfil.validado <span>·</span> Brasília, DF</div><QueryBar><span className="syntax-key">SELECT</span> perfil <span className="syntax-key">FROM</span> profissionais <span className="syntax-key">WHERE</span> foco = <span className="syntax-string">'backend + dados'</span>;</QueryBar><h1>Dados que<br /><span>viram sistema.</span></h1><p>Matheus Rosa é Desenvolvedor Backend Java com experiência em sistemas corporativos, bancos de dados, aplicações web e processos de TI.</p><div className="data-hero-actions"><a className="data-primary" href="mailto:matheusltr@gmail.com"><Mail className="size-4" /> Iniciar conversa</a><a className="data-text-link" href="#experiencia">Consultar trajetória <ArrowUpRight className="size-4" /></a></div></div>
          <div className="schema-card"><div className="panel-title"><span><Database className="size-4" /> schema.matheus_rosa</span><span className="panel-live">LIVE</span></div><div className="schema-map"><svg viewBox="0 0 520 370" aria-hidden="true"><path d="M123 101 C196 101 204 86 250 86" /><path d="M129 244 C196 244 206 274 256 274" /><path d="M312 103 C386 103 386 141 422 141" /><path d="M316 273 C392 273 386 232 422 232" /><circle cx="124" cy="101" r="5" /><circle cx="129" cy="244" r="5" /><circle cx="250" cy="86" r="5" /><circle cx="256" cy="274" r="5" /><circle cx="422" cy="141" r="5" /><circle cx="422" cy="232" r="5" /></svg><div className="schema-node profile-node"><span>profile</span><strong>Matheus Rosa</strong><small>backend_engineer</small></div><div className="schema-node career-node"><span>career</span><strong>10+ anos</strong><small>sistemas &amp; ensino</small></div><div className="schema-node backend-node"><span>service</span><strong>Java</strong><small>APIs · regras</small></div><div className="schema-node data-node"><span>dataset</span><strong>SQL</strong><small>modelos · dados</small></div><div className="schema-node ops-node"><span>ops</span><strong>ITIL</strong><small>continuidade</small></div></div><div className="schema-footer"><span><i /> conexão disponível</span><span>5 relações ativas</span></div></div>
        </section>

        <section className="data-metrics"><article><span>tempo_de_atuacao</span><strong>+10</strong><p>anos em tecnologia</p></article><article><span>linguagem_principal</span><strong>Java</strong><p>backend e sistemas</p></article><article><span>estado_atual</span><strong>UnB</strong><p>mestrado em dados</p></article><article><span>idioma</span><strong>C1</strong><p>inglês · TOEFL</p></article></section>

        <section id="experiencia" className="data-section">
          <div className="data-section-heading"><div><p>01 / EXPERIÊNCIA</p><h2>Resultados de uma consulta longa.</h2></div><p>Uma trajetória conectada por desenvolvimento, sustentação, ensino e evolução de processos.</p></div>
          <div className="query-window"><QueryBar><span className="syntax-key">SELECT</span> * <span className="syntax-key">FROM</span> experiencia <span className="syntax-key">ORDER BY</span> periodo <span className="syntax-key">DESC</span>;</QueryBar><div className="results-meta"><span>4 registros retornados</span><span>última sincronização: 2026</span></div><div className="experience-table"><div className="table-head"><span>período</span><span>função</span><span>organização</span><span>entrega</span><span>estado</span></div>{experience.map(([period, role, org, delivery, state]) => <article key={org}><span className="period-cell">{period}</span><strong>{role}</strong><span>{org}</span><p>{delivery}</p><span className={`state-cell ${state}`}><i />{state}</span></article>)}</div></div>
        </section>

        <section id="competencias" className="data-section data-stack-section">
          <div className="data-section-heading"><div><p>02 / COMPETÊNCIAS</p><h2>Um modelo para entregar com consistência.</h2></div><p>Camadas técnicas que conectam código, dados, infraestrutura e a necessidade de quem usa o sistema.</p></div>
          <div className="data-stack-grid">{stack.map((item, index) => { const Icon = item.icon; const next = stack[index + 1]?.name ?? "experience"; return <article key={item.name} className="stack-data-card"><div className="stack-card-top"><Icon className="size-5" /><span>{item.name}</span></div><p>{item.note}</p><ul>{item.items.map((skill) => <li key={skill}>{skill}</li>)}</ul><div className="relation-key"><span>JOIN</span><i /> <code>{next}</code></div><span className="card-index">{item.name === "backend_services" ? "A" : item.name === "data_layer" ? "B" : item.name === "platform_ops" ? "C" : "D"}</span></article>; })}</div>
        </section>

        <section id="formacao" className="data-section education-data-section"><div className="education-data-layout"><div className="education-sidebar"><p>03 / FORMAÇÃO</p><h2>Conhecimento<br />em camadas.</h2><p>Uma base em computação, gestão de sistemas e ciência de dados.</p><GraduationCap className="size-7" /></div><div className="education-path"><QueryBar><span className="syntax-key">MATCH</span> (formação) <span className="syntax-key">RETURN</span> caminho;</QueryBar><div className="path-list">{education.map(([index, degree, school, date]) => <article key={degree}><span>{index}</span><div><h3>{degree}</h3><p>{school}</p></div><time>{date}</time></article>)}</div></div></div></section>

        <section id="contato" className="data-contact"><div className="contact-code"><span className="line-no">01</span><code><span className="syntax-key">const</span> próximoPasso = <span className="syntax-string">'conversar'</span>;</code><span className="line-no">02</span><code><span className="syntax-key">await</span> contato.<span className="syntax-method">iniciar</span>();</code></div><div className="contact-content"><p>04 / CONTATO</p><h2>Vamos analisar<br />o próximo desafio.</h2><a className="data-primary" href="mailto:matheusltr@gmail.com"><Mail className="size-4" /> matheusltr@gmail.com <ArrowUpRight className="size-4" /></a></div><div className="contact-links"><a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub <ArrowUpRight className="size-3.5" /></a><a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" /></a><span><GitBranch className="size-4" /> Brasília, DF</span></div></section>
      </main>
      <footer className="data-footer"><div><BrandMark /><span>© 2026 Matheus Rosa</span></div><span>relational data studio</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </div>
  );
}
