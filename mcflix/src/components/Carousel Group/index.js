import React from 'react';
import Carousel from '../Carousel';

function CarouselGroup({videos}){
    
    return(
        <ul className={"CarouselGroup"} list-style-type={"none"}>
        {videos.categorias.map(function(category, index){
            return <li  key={ index }><Carousel ignoreFirstVideo={0} category={category}/></li>;
            
          })}
        </ul>

    );

}

export default CarouselGroup;
