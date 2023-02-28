

//------------PAGE QUERY------------
// import React from 'react'
// import {graphql} from 'gatsby'

// const testing = ({data}) => {
//    const author=data.site.info.author
//   return (
//     <div>
//         <h2 >author:{author}  </h2>
//     </div>
//   )
// }

// export const data = graphql`
// query FirstQuery{
// site{
//     info: siteMetadata{
//      title
//      description
//      author
//      person{
//        name
//        age
//      }
//      simpleData
//      complexData{
//        name
//        age
//      }
//    }
//  }
// }
// `

// export default testing


//------------GALLERY IMAGE------------
import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'
const testing = () => {
   
    return (
      <Layout>
        <main className="page">

        <Gallery/>
        </main>
         
      </Layout>
    )
  }
  
  export default testing  