const path = require("path");
const { title, keywords, description, author, defaultLang, trackingId } = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: "gatsby-remark-videos",
      options: {
        pipelines: [
          {
            name: 'vp9',
            transcode: chain =>
              chain
                .videoCodec('libvpx-vp9')
                .noAudio()
                .outputOptions(['-crf 20', '-b:v 0']),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'webm',
          },
          {
            name: 'h264',
            transcode: chain =>
              chain
                .videoCodec('libx264')
                .noAudio()
                .addOption('-profile:v', 'main')
                .addOption('-pix_fmt', 'yuv420p')
                .outputOptions(['-movflags faststart'])
                .videoBitrate('1000k'),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'mp4',
          },
        ],
      }
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Patchchain",
        start_url: "/",
        background_color: "#0a192f",
        theme_color: "#08b987",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "core.scss";`,
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/style")],
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Nunito",
            file: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
