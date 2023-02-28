//rafce
import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import RecipeList from'../components/RecipesList'
import SEO from "../components/SEO"

const about = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout >
      <SEO title="About" />
     <main className="page">
      <section className="about-page">
        <article>
          <h2>
          I'm baby coloring book poke taxidermy
          </h2>
          <p>
          Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
          </p> 
          <p>
          Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
          </p>
          <Link to="/contact" className="btn">contact</Link>
        </article>
        <StaticImage src="../assets/images/about.jpeg"
        alt="person Pouring Salt in Bowl"
        className="about-img"
        placeholder="blurred"
        />
         
      </section>
      <section className="featured-recipes">
        <h5>look at this  PPPPPPPPPPPPPPPP </h5>
        <RecipeList recipes={recipes}/>
      </section>
     </main>
     
    
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe( sort: {title: ASC},
      filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        cookTime
      }
    }
  }
`
export default about