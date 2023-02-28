//rafce
import React from 'react'
import Layout from '../components/Layout'
import { graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import RecipeList from'../components/RecipesList'
import SEO from "../components/SEO"
const Contact = ({data}) => {
  const recipes=data.allContentfulRecipe.nodes
  return (
    <Layout >
      <SEO title="Contact"/>
      <main className='page'>

        <section className='contact-page'>
          <article className='contact-info'>
          <h3> Want To Get In Touch? </h3>
          <p>
             Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>
              Cardigan prism bicycle rights put a bird on it deep v.
          </p>
          <p>
           Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
          </article>
          <article>
            <form className='form form-contact'
            
            action="https://formspree.io/f/mrgvkepk"
            method="POST"
          >
              <div className='form-row'>
                <label htmlFor='name'>Your name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Your email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Your message</label>
                <input type="text" name="message" id="message"/>
              </div>
              <button className='btn lock' type='submit'>
                submit
              </button>
              
            </form>
          </article>
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

export default  Contact 
