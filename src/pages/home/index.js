import React from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import CarouselGroup from '../../components/Carousel Group'
import Videos from '../../data/dados_iniciais.json'

function Home() {
  let nCategory = Math.floor(Math.random() * Videos.categorias.length);
  let nVideo = Math.floor(Math.random() * Videos.categorias[nCategory].videos.length);

  return (
    <PageDefault>

      <BannerMain 
        videoTitle={Videos.categorias[nCategory].videos[nVideo].titulo} 
        videoDescription={Videos.categorias[nCategory].titulo.toUpperCase()} 
        url={Videos.categorias[nCategory].videos[nVideo].url} />

      <CarouselGroup videos={Videos}/>

    </PageDefault>

  );
}

export default Home;
