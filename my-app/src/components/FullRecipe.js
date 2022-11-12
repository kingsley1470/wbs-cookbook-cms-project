import React from 'react';
import {useParams} from 'react-router-dom';
import { marked } from "marked";
import '../App2.css';
import Post from './Post';

function FullRecipe({articles}) {
    const {recipe} =useParams();
    console.log(articles);
    
    const results =articles.filter(element => {
      return (element.fields.name.includes(recipe)
      );
    });

    console.log("results " ,results[0].fields )
     
   // const result=results[0].fields;
   const result=results[0];
    const { name, featuredImage, description } = result.fields;
    const postDescription = marked(description);

  return (
    <div>
          <div className="post">
          <h2 className="title">{name}</h2>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
     <section dangerouslySetInnerHTML={{ __html: postDescription }} />

</div>
    </div>
  )
}

export default FullRecipe
