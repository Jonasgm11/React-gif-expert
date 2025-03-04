import { useState } from "react"
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        // console.log(newCategory)
        // categories.push('Naruto');
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
   
            <h1>GifExpertApp</h1>
        <AddCategory 
           
            onNewCategory = {onAddCategory}
        />  
              
        {
        categories.map( (category) => (
                <GifGrid 
                    key={category} 
                    category={category}/>
            )
        )
        }
        

          
        </>
    )
}