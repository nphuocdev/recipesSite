import React from 'react'
import { useStaticQuery ,graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {ne: "svg"}}) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED
           transformOptions: {grayscale: false}
            width:200
            height: 200
          )
        }
      }   
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes =data.allFile.nodes
  return (
    <Wrapper>
       {nodes.map((image,index)=>{
        const {name}=image
       // const pathToimg =getImage(image)
        return (
        <article key={index} className='item'>
          <GatsbyImage image={image.childImageSharp.gatsbyImageData}  //{pathToimg}
          alt="name"
          className='gallery-img'/>
        <p> {name}</p>
        </article>
        )
       }  
       )  
       }
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item{
  margin: 1rem;
}
.gallery-img{
  border-radius: 1rem;
}
`
export default Gallery