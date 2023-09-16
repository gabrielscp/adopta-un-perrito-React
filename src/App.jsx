import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyCard from './components/MyCard';

function App() {
  return (
    <div className='body'>
      <div className='Hed'>
      <Header enca="Página de adopción de perritos" />
      <hr />
      </div>
      <div className='galeria'>
        <div className='card'>
          <MyCard imagen="https://placedog.net/201/300?random"
          titulo="Hermoso perrito"
          badgeColor="secondary"
          textButton="Adóptame porfavorcito" />
        </div>
        <div className='card'>
          <MyCard imagen="https://placedog.net/202/300?random"
          titulo="Perrito aún más hermoso"
          badgeColor="warning"
          textButton="Adóptame porfavorcito" />
        </div>
        <div className='card'>
          <MyCard imagen="https://placedog.net/203/300?random"
          titulo="Perrito hyper maravilloso"
          badgeColor="danger"
          textButton="Adotame porfavorcito" />
        </div>
        <div className='card'>
          <MyCard imagen="https://placedog.net/204/300?random"
          titulo="Uber perro increible"
          badgeColor="success"
          textButton="Adóptame porfavorcito" />
        </div>
        
      </div>
      <hr />
      <div className='foot'>
        <Footer foo="Página creada solo como demostración, las imágenes y templates fueron obtenidos de webs que no poseen copyright."/>
      </div>
      <hr />
    </div>
  );
}
export default App;
