import Article from "../../components/article.jsx";

const Page = (props) => {
  return (
    <Article
      title="Og-Image"
      subtitle="Technical Discussion"
      image="https://jackcrane.rocks/images/og.png"
      links={[
        {
          label: "Live URL",
          url: "https://og-image.xyz",
        },
        {
          label: "Github",
          url: "https://github.com/jackcrane/og-image",
          text: "jackcrane/og-image",
        },
      ]}
      stack={[
        "html5",
        "nodedotjs",
        "javascript",
        "express",
        "mysql",
        "react",
        "kubernetes",
        "digitalocean",
      ]}
    >
      <h1>The idea</h1>I was inspired by Vercel's opengraph image generator but
      didn't want to paste their logo over everything (especially because I dont
      use vercel), and I was not happy with their options for images, so I
      decided to clone it. It provides a simple endpoint (called data.png) with
      not GET arguments so it will always work with social media platforms.
      <h1>The Features (or planned features)</h1>
      <ul>
        <li>Simple generator UI</li>
        <li>Several selectable backgrounds</li>
        <li>Input for title, subtitle, URL, and URL Protocol</li>
        <li>Live preview with image and code sample</li>
      </ul>
      <h1>Tech stack</h1>
      The frontend is a combination of vanilla HTML and Javascript mixed with a
      little bit of React. The backend is a little more interesting, running an
      Express.js server on Node.js platform. It is hosted on DigitalOcean's
      Kubernetes service and uses MySql for analytics tracking and Cloudflare
      for image caching and optimization.
      <h1>Considerations</h1>
      Like most all of my projects, this was put together in a weekend. I was
      worried about the rendering performance of running the node canvas
      implementation on a single shared CPU core as it has been noted there is a
      CONSIDERABLE performance bump when a GPU is availible, but upon testing I
      was happy with the performance (200-400ms when requesting a new image and
      a shocking 30-40ms when requesting a cached image (thanks Cloudflare!))
      <h1>The Result</h1>
      At the moment, (May 30, 2022) og-image serves a little over 200,000 images
      per month and is slowly on the rise. It has gotten me recognition by
      several startups and a few large companies.
    </Article>
  );
};

export default Page;
