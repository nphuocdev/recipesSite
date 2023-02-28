import React from 'react'
import styled from 'styled-components'
//import big from '../assets/images/big.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
  return (
    <Wrapper>
       <article>
        <h4> constrained / default</h4>
      
        <StaticImage src="../assets/images/recipes/recipe-1.jpeg" alt='food'
        height={400}
        placeholder="tracedSVG"
        layout="constrained"
        className="exame-img"
        as="section"/> 
      {/* section trong as để làm gì */}
        </article>
        <article>
        <h4>fixed</h4>
      
        <StaticImage src="../assets/images/recipes/recipe-1.jpeg" alt='food'
        width={200}
        placeholder="blurred"
        layout="fixed"
        className="exame-img"
        as="div"/> 
      {/* section trong as để làm gì */}
        </article>
        <article>
        <h4> constrained / default</h4>
      
        <StaticImage src="../assets/images/recipes/recipe-1.jpeg" alt='food'
        height={400}
        placeholder="dominantColor"
        layout="fullWidth"
        className="exame-img"
        as="article"/> 
      {/* section trong as để làm gì */}
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.section `
width: 70vw;
margin: 0 auto;
display:grid;
text-align: center;
gap:2rem;
article{
  border:2px solid red;
}
.example-img{
    border-radius :1rem;
  }
@media (min-width:992px){
  grid-template-columns: 1fr 1fr 1fr;
}
`

export default Images
