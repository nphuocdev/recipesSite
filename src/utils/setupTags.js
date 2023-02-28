
const setupTags = recipes =>{
    const alltags={}


    recipes.forEach(recipes => {
        recipes.content.tags.forEach(tag=>{
            if(alltags[tag]){
                alltags[tag]=alltags[tag]+1
            }
            else{
                alltags[tag]=1
            }
        })
    });
    const newTags=Object.entries(alltags).sort((a,b)=>{
        const [firstTag] = a
        const [secondTag] = b
        return firstTag.localeCompare(secondTag)
    })
    return newTags
}

export default setupTags