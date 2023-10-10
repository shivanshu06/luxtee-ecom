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

export const detailById=async(id)=>{
    try{
        const response=await fetch(`${BASE_URL}/collections/${id}`)
        const data=await response.json()
        return data
    }
    catch(error){
        console.log("something went wrong",error)
        throw error
    }
}

export const contactUs = async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/contactus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error, "Something went wrong");
      throw error;
    }
  };