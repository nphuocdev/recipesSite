import React from 'react'


import { useStaticQuery,graphql } from 'gatsby'

// const getDaBa =graphql`
// {
//     site{
//      info: siteMetadata{
//       title
//       description
//       author
//       person{
//         name
//         age
//       }
//       simpleData
//       complexData{
//         name
//         age
//       }
//     }
//   }
// }
// `

const getvnb =graphql`
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
const Fetcher = () => {
    const data=useStaticQuery(getvnb)
    
    // const ggg=useStaticQuery(getDaBa)
  return (
    
    <div>
        <h1> {data.site.info.person.age}</h1>
    </div>
  )
}

export default Fetcher