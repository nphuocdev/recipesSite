import  React  from "react"
import Layout from "../components/Layout"
//import Images from "../examples/images"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"
import Fetcher from "../examples/fetcher"
import Allrecipes from "../components/Allrecipes"
import SEO from "../components/SEO"

export default function Home(){
  return (
  <Layout> 
    <SEO title="Home" />
   <main className="page">
    <header className="hero">
      <StaticImage src="../assets/images/main.jpeg"
      alt="eggs" className="hero-img" placeholder="tracedSVG"
      layout="fullWidth"></StaticImage>
      <div className="hero-container">
        <div className="hero-text">
          <h1>simply recipes</h1>
          <h4>No Fluff, Just Recipes</h4>
        </div>
      </div>
    </header>
    {/* <FetchData />
    <Fetcher/> */}
    <Allrecipes/>
   </main>
   
  </Layout>

  )
}





