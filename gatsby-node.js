


//const { log } = require('console')
const path = require('path')
const slugify = require('slugify')
exports.createPages = async({graphql,actions}) =>{
    const{createPage}=actions 
    const result = await graphql(`
    query GetRecipes {
        allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }
    `)

    // console.log("#################")
    
    // console.log(result)
    
    // console.log("#################")
    result.data.allContentfulRecipe.nodes.forEach(repice => {
        repice.content.tags.forEach(tag=>{
            const tagSlug=slugify(tag,{lower:true})
          
          createPage({
               path:`/tags/${tagSlug}` ,
               component:path.resolve(`src/template/tag-template.js`),
               context:{
                tag: tag,
               }
            })
        })
    });
}