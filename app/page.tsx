import { InteractiveEffects } from "./components/InteractiveEffects";

const stats = [
  { number: "30K+", label: "users in 60 days" },
  { number: "100K", label: "followers, twice" },
  { number: "25+", label: "partnerships closed" },
];

const work = [
  {
    company: "PNP Exchange",
    role: "Growth and Social Media",
    date: "2025-2026",
    description:
      "Wrote and managed all content on X. Grew the account 4K+ followers organically. Posts hit 84K+ impressions. Ran token incentive campaigns that drove real spikes in trading activity. Closed 6+ integrations through cold outreach.",
    tags: ["Content", "Growth", "Partnerships", "Web3"],
  },
  {
    company: "Stack'em (Eclipse)",
    role: "Player Growth and Community",
    date: "2024-2025",
    description:
      "Onboarded 30,000+ players in 60 days with zero ad spend. Built the distribution strategy from scratch: meme-native content on X, farming campaigns, community activation. Tracked on-chain metrics throughout to understand real retention vs farming behavior.",
    tags: ["User Acquisition", "Community", "Gaming", "On-chain"],
  },
  {
    company: "Instagram Theme Pages",
    role: "Content and Growth",
    date: "2022-2024",
    description:
      "Built two separate theme pages to 100K+ followers each from zero, purely organic. Reached 10M+ impressions per month at peak. Ran both simultaneously while managing posting schedules, engagement, and content strategy.",
    tags: ["Instagram", "Organic Growth", "Content"],
  },
];

const writing = [
  {
    title: "PNP Exchange - X Content",
    sub: "Product announcements, integration launches, campaign copy - live on X",
    href: "https://x.com/predictandpump",
  },
  {
    title: "KnowSelf - Personality App",
    sub: "Built a personality quiz app covering Big Five and Dark Triad - live on Vercel",
    href: "https://know-self.vercel.app/",
  },
  {
    title: "GitHub - Projects",
    sub: "Three deployed Next.js projects including ShieldScore and PayBridge",
    href: "https://github.com/Sakibimam",
  },
];

const skills = [
  {
    title: "Growth",
    items: [
      "Organic acquisition",
      "Token incentive campaigns",
      "Community-led distribution",
      "Meme-native content",
      "X and Instagram growth",
    ],
  },
  {
    title: "Writing",
    items: [
      "Social copy",
      "Product announcements",
      "Ghostwriting",
      "Technical docs",
      "Campaign storytelling",
    ],
  },
  {
    title: "BD and Outreach",
    items: [
      "Cold outreach",
      "Partnership closing",
      "Lead qualification",
      "Apollo sequences",
      "Founder communication",
    ],
  },
  {
    title: "AI Tools",
    items: [
      "ChatGPT, Claude",
      "Midjourney, Canva AI",
      "Higgsfield, Seedance",
      "CapCut, Perplexity",
      "AI-assisted research",
    ],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <InteractiveEffects />

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#" className="nav-name">
          Sakib Imam
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#writing">Writing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-tag">Marketer & Ghostwriter</p>
        <h1 id="hero-title">
          Growth, words,
          <br />
          <em>and the internet.</em>
        </h1>
        <p className="hero-bio">
          I work with early-stage products on{" "}
          <strong>user growth, content, and distribution</strong>. Onboarded
          30,000+ users in 60 days with zero ad spend. Grew two Instagram pages
          to 100K+ followers. Write content that travels. Based in India,
          working everywhere.
        </p>
        <div className="hero-cta">
          <a href="mailto:hisakibimam@gmail.com" className="btn-primary">
            Get in touch
          </a>
          <a href="#work" className="btn-secondary">
            See my work
          </a>
        </div>
      </section>

      <section className="stats" aria-label="Growth highlights">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section id="work" className="content-section">
        <h2 className="section-label">Selected Work</h2>
        {work.map((item) => (
          <article className="work-item reveal-on-scroll" key={item.company}>
            <div>
              <h3 className="work-company">{item.company}</h3>
              <p className="work-role">{item.role}</p>
              <p className="work-desc">{item.description}</p>
              <div className="work-tags" aria-label={`${item.company} skills`}>
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <time className="work-date">{item.date}</time>
          </article>
        ))}
      </section>

      <section id="writing" className="content-section">
        <h2 className="section-label">Writing Samples</h2>
        {writing.map((item) => (
          <a
            className="writing-item reveal-on-scroll"
            href={item.href}
            key={item.href}
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <span className="writing-title">{item.title}</span>
              <span className="writing-sub">{item.sub}</span>
            </span>
            <span className="writing-arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ))}
      </section>

      <section className="content-section">
        <h2 className="section-label">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-block" key={skill.title}>
              <h3 className="skill-block-title">{skill.title}</h3>
              <p className="skill-list">
                {skill.items.map((item, index) => (
                  <span key={item}>
                    {item}
                    {index < skill.items.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>
          Let&apos;s work
          <br />
          <em>together.</em>
        </h2>
        <p className="contact-sub">
          Open to marketing, ghostwriting, growth, and BD roles.
        </p>
        <div className="contact-links">
          <a href="mailto:hisakibimam@gmail.com" className="contact-link">
            hisakibimam@gmail.com
          </a>
          <a
            href="https://x.com/hisakibimam"
            className="contact-link"
            rel="noreferrer"
            target="_blank"
          >
            @hisakibimam
          </a>
          <a
            href="https://linkedin.com/in/sakib-imam"
            className="contact-link"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sakibimam"
            className="contact-link"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p className="footer-copy">Sakib Imam &copy; 2026</p>
        <p className="footer-status">
          <span className="status-dot" />
          Open to work
        </p>
      </footer>
    </main>
  );
}
