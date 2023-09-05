const BASE_URL="http://localhost:5000"

export const getfullcollection=async(category)=>{
    
    try{
        const response=await fetch(`${BASE_URL}/collections/${category}`,{method:'POST',
    headers:{
        'Content-Type': 'application/json',
    }})
        const data=await response.json()
        return data
    }
    catch(error){
        console.log("something went wrong",error)
        throw error
    }
}