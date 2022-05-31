import styles from "../styles/article.module.scss";

const Article = (props) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.name}>
          <h1>
            <a href="https://blog.jackcrane.rocks">Jack Crane</a>
          </h1>
        </div>
        <div className={styles.nav_links}>
          <a href="#">Portfolio</a>
          <a href="#" className={styles.blacked}>
            Contact me 🚀
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.title}>
          <span>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </span>
        </div>
        <div className={styles.contentShadow}></div>
        <div className={styles.pattern1}></div>
        <div className={styles.pattern2}></div>
        <article className={styles.content}>
          <div className={styles.quick}>
            <img
              src={props.image}
              alt="Preview image"
              className={styles.image}
            />
            <div className={styles.quick_text}>
              {props.links.map((link, i) => (
                <div key={i} className={styles.res}>
                  <span className={styles.label}>{link.label}</span>
                  <a className={styles.link} href={link.url}>
                    {link.text ? link.text : link.url}
                  </a>
                </div>
              ))}
              <div className={styles.res}>
                <span className={styles.label}>Tech Stack</span>
                <div className={styles.stack}>
                  {props.stack.map((tech, i) => (
                    <img
                      key={i}
                      className={styles.tech}
                      src={`https://unpkg.com/simple-icons@v7/icons/${tech}.svg`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.article}>{props.children}</div>
        </article>
        <div className={styles.socials}>
          <span className={styles.social}>
            <img
              src="https://unpkg.com/simple-icons@v7/icons/twitter.svg"
              alt="Twitter"
            />
            <a href="https://twitter.com/howdyitsjack">@howdyitsjack</a>
          </span>
          <span className={styles.social}>
            <img
              src="https://unpkg.com/simple-icons@v7/icons/github.svg"
              alt="Twitter"
            />
            <a href="https://github.com/jackcrane">jackcrane</a>
          </span>
          <span className={styles.social}>
            <img
              src="https://unpkg.com/simple-icons@v7/icons/buymeacoffee.svg"
              alt="Twitter"
            />
            <a href="https://buymeacoffee.com/jackcrane">jackcrane</a>
          </span>
          <span className={styles.social}>
            <img
              src="https://unpkg.com/simple-icons@v7/icons/gmail.svg"
              alt="Twitter"
            />
            <a href="mailto:jack@jackcrane.rocks">jack@jackcrane.rocks</a>
          </span>
        </div>
      </main>
    </>
  );
};

export default Article;
