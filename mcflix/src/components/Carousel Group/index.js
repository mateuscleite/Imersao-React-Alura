import React from 'react';
import Carousel from '../Carousel';

function CarouselGroup({videos}){
    
    return(
        <div className="CarouselGroup">
        {videos.categorias.map(function(category, index){
            return <div key={ index }><Carousel ignoreFirstVideo={0} category={category}/></div>;
        })}
        </div>

    );

}

export default CarouselGroup;
