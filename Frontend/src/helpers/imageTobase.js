import React from 'react'

const imageTobase =  async(image) => {
 const reader = new FileReader();
 reader.readAsDataURL(image);

 const data = await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);

    reader.onerror = () => reject(reader.error);
    
 })
 return data;
}

export default imageTobase