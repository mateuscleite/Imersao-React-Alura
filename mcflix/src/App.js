import React from 'react';
import Menu from './components/Menu';
import Footer from'./components/Footer';
import BannerMain from './components/BannerMain';
import CarouselGroup from './components/Carousel Group'
import Videos from './data/dados_iniciais.json'

function App() {
  let nCategory = Math.floor(Math.random() * Videos.categorias.length);
  let nVideo = Math.floor(Math.random() * Videos.categorias[nCategory].videos.length);

  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={Videos.categorias[nCategory].videos[nVideo].titulo} 
        videoDescription={Videos.categorias[nCategory].titulo.toUpperCase()} 
        url={Videos.categorias[nCategory].videos[nVideo].url} />

      <CarouselGroup videos={Videos}/>


      <Footer />

    </div>

  );
}

export default App;
