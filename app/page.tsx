import { InteractiveEffects } from "./components/InteractiveEffects";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { ThemeToggle } from "./components/ThemeToggle";

const stats = [
  { number: 26000, suffix: "+", label: "users onboarded" },
  { number: 120, suffix: "K", label: "volume generated" },
  { number: 200, suffix: "K+", label: "followers grown" },
];

const work = [
  {
    company: "PNP Exchange",
    role: "Product Marketing & Growth",
    date: "2025-2026",
    description:
      "Drove $50K USDC in prediction market volume through launch copy and token campaigns. Top post hit 84K impressions. Closed 6+ integrations through cold outreach on X.",
    tags: ["Launch Copy", "Volume Growth", "Web3"],
    metric: "$50K USDC",
  },
  {
    company: "Stack'em (Eclipse)",
    role: "Growth & Community",
    date: "2024-2025",
    description:
      "Onboarded 26,000 players and drove $70K USDT in volume with zero ad spend. Built distribution from scratch: meme-native content, farming campaigns, community activation.",
    tags: ["User Acquisition", "Volume", "Gaming"],
    metric: "26K users",
  },
  {
    company: "Instagram Theme Pages",
    role: "Organic Growth",
    date: "2022-2024",
    description:
      "Built @makeupviewz and @makeupshall to 100K+ followers each from zero, purely organic. 10M+ monthly impressions at peak. Managed content strategy, posting schedules, engagement simultaneously.",
    tags: ["Instagram", "Organic Growth", "Content"],
    metric: "200K+ followers",
  },
];

const launchCopy = [
  {
    title: "DefiLLama Integration",
    description: "Product launch that hit 84K impressions",
    tweetUrl: "https://x.com/predictandpump/status/1972788039325028527",
    views: "84K",
  },
  {
    title: "YouTube Prediction Markets",
    description: "New feature announcement",
    tweetUrl: "https://x.com/predictandpump/status/2044098367492440066",
    views: "16K",
  },
  {
    title: "1000x Launchpad Analysis",
    description: "Industry thought leadership",
    tweetUrl: "https://x.com/predictandpump/status/1979561560109445358",
    views: "5.9K",
  },
  {
    title: "Turbotap Meme",
    description: "Community-driven viral content",
    tweetUrl: "https://x.com/stackem_xyz/status/1910022107460682026",
    views: "5.6K",
  },
  {
    title: "Community Milestone",
    description: "Engagement-driven growth post",
    tweetUrl: "https://x.com/stackem_xyz/status/1899874899155656826",
    views: "1.1K",
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
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#proof">Proof</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-tag">Marketer for Crypto & Tech Products</p>
        <h1 id="hero-title" className="hero-title-animated">
          I grow products
          <br />
          <span className="gradient-text">organically.</span>
        </h1>
        <p className="hero-bio">
          Social growth. Community building. Launch copy. Zero ad spend, real traction.
        </p>
        <div className="hero-stats-inline">
          <div className="stat-inline">
            <span className="stat-inline-number">26K+</span>
            <span className="stat-inline-label">users</span>
          </div>
          <div className="stat-inline">
            <span className="stat-inline-number">$120K</span>
            <span className="stat-inline-label">volume</span>
          </div>
          <div className="stat-inline">
            <span className="stat-inline-number">200K+</span>
            <span className="stat-inline-label">followers</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="mailto:hisakibimam@gmail.com" className="btn-primary">
            Get in touch
          </a>
          <a href="#work" className="btn-secondary">
            See proof
          </a>
        </div>
      </section>

      <section className="stats" aria-label="Growth highlights">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="stat-number">
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section id="work" className="content-section">
        <h2 className="section-label">Selected Work</h2>
        <div className="work-grid">
          {work.map((item, index) => (
            <article
              className="work-card reveal-on-scroll"
              key={item.company}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="work-card-header">
                <div>
                  <h3 className="work-company">{item.company}</h3>
                  <p className="work-role">{item.role}</p>
                </div>
                <div className="work-metric">{item.metric}</div>
              </div>
              <p className="work-desc">{item.description}</p>
              <div className="work-tags" aria-label={`${item.company} skills`}>
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <time className="work-date">{item.date}</time>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="content-section">
        <h2 className="section-label">Launch Copy That Performed</h2>
        <div className="launch-grid">
          {launchCopy.map((item, index) => (
            <div
              className="launch-card reveal-on-scroll"
              key={item.tweetUrl}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="launch-header">
                <div>
                  <h3 className="launch-title">{item.title}</h3>
                  <p className="launch-description">{item.description}</p>
                </div>
                <div className="launch-views">{item.views} views</div>
              </div>
              <div className="tweet-embed">
                <a
                  href={item.tweetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tweet-link"
                >
                  View on X ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="services">
        <h2 className="section-label">What I Do</h2>
        <div className="services-grid">
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">📱</div>
            <h3 className="service-title">Social Growth</h3>
            <p className="service-desc">
              X, Instagram, TikTok. Organic reach, viral content, meme-native strategy. Built 200K+ followers across platforms.
            </p>
          </div>
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">👥</div>
            <h3 className="service-title">Community Building</h3>
            <p className="service-desc">
              Community activation, engagement loops, token incentives. Onboarded 26K users with zero ad spend.
            </p>
          </div>
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">🚀</div>
            <h3 className="service-title">Launch Copy</h3>
            <p className="service-desc">
              Product announcements, integration launches, campaign copy. 84K impressions on top post.
            </p>
          </div>
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">💰</div>
            <h3 className="service-title">Token Campaigns</h3>
            <p className="service-desc">
              Incentive design, volume generation, trading activity. Drove $120K in volume through campaigns.
            </p>
          </div>
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">🤝</div>
            <h3 className="service-title">Partnership & BD</h3>
            <p className="service-desc">
              Cold outreach, integration closing, founder communication. Closed 6+ high-value partnerships.
            </p>
          </div>
          <div className="service-card reveal-on-scroll">
            <div className="service-icon">📈</div>
            <h3 className="service-title">Growth Strategy</h3>
            <p className="service-desc">
              Distribution planning, on-chain metrics, retention analysis. Built growth systems from zero.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>Let&apos;s work together.</h2>
        <p className="contact-sub">
          Open to: Product marketing, growth content, launch copy, and
          ghostwriting.
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
