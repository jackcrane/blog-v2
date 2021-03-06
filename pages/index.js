import styles from "../styles/article.module.scss";

const Article = (props) => {
  const articles = [
    {
      title: "Og-Image",
      subtitle: "Technical Discussion",
      snippet:
        "Read about the tech and ideas behind my ultra-successful open graph image service",
      link: "/posts/og-image",
    },
    {
      title: "DigitalOcean app",
      subtitle: "Technical Discussion",
      snippet:
        "Learn about the wild ride behind the app that (might) get me an internship at DigitalOcean",
      link: "/posts/digitalocean-app",
    },
  ];

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
            <h1>Technical Blog</h1>
            <h2>home</h2>
          </span>
        </div>
        <div className={styles.contentShadow}></div>
        <div className={styles.pattern1}></div>
        <div className={styles.pattern2}></div>
        <article className={styles.content}>
          <div className={styles.articles}>
            {articles.map((article, i) => (
              <div className={styles.article} key={i}>
                <div className={styles.article_title}>
                  <h1>{article.title}</h1>
                  <h2>{article.subtitle}</h2>
                </div>
                <p>{article.snippet}</p>
                <a href={article.link}>Continue reading</a>
              </div>
            ))}
          </div>
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
