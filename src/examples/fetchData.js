
// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           person {
//             name
//             age
//           }
//           simpleData
//           complexData {
//             name
//             age
//           }
//         }
//       }
//     }
//   `)
 
//   return (
//   <div>
//      <h2> {data.site.siteMetadata.person.name}
//      </h2>
//      <div>
//         {data.site.siteMetadata.complexData.map((item, index) => {
//             return<p key={index}>
//                 {item.name}:{item.age}
//             </p>
            
// })}
//      </div>
//     </div>
// )
// }

// export default ComponentName


import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'

const getData =graphql`
{
    site{
     info: siteMetadata{
      title
      description
      author
      person{
        name
        age
      }
      simpleData
      complexData{
        name
        age
      }
    }
  }
}
`

const FetchData = () => {

    const {
        site:{
           info: {title},
            // siteMetadata:{author},
        },
    } = useStaticQuery(getData)
  return (  
    <div>
       <h2> 
        {/* Name:{data.site.siteMetadata.person.name} */}
       site title is : {title}
       </h2>
       <h2> 
          {/* Name:{data.site.info.person.name} */}
       {/* author: {author} */}
       </h2>
    </div>
  )
}

export default FetchData