import React from 'react';
import homeLogo from '../../assets/img/pharmacyhomelogo.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-slate-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem Vindes à Farmácia Gen</h2>
              <p className='text-xl'>Aqui você encontra Medicamentos e Cosméticos. </p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
  
            <div className="flex justify- ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;