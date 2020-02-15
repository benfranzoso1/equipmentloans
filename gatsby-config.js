/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      // resolve: `gatsby-plugin-typography`,
      // options: {
      //   pathToConfigModule: `src/utils/typography`,
      //   omitGoogleFont: true,
      // },
      // resolve: `gatsby-plugin-postcss`,
      // options: {
      //   postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      // },
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,500,700` // you can also specify font weights and styles
        ],
      },
      resolve: `typeturajs`,
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
}
