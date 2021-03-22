/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
  if(stage === "build-html"){
    actions.setWebpackConfig({
      module:{
        rules: [
          {
            test: /cld-video-player/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
