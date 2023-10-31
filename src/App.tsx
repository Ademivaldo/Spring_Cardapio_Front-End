import { useState } from 'react';
import './App.css'
import { Card } from './componets/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './componets/card/create-modal/Create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleOpenModal = () => {
    setIsModalOpen(prev => ! prev)
  }

  return (

    <div className='container'>
     <h1>Cardápio</h1>
     <div className="card-grid">
        {data?.map((FoodData: { price: number; title: string; image: string;  }) => 
        <Card 
          key={self.crypto.randomUUID()} //gerando key randomica
          price={FoodData.price} 
          title={FoodData.title} 
          image={FoodData.image}
          />
        )}
     </div>
     {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
     <button onClick={handleOpenModal}>NOVO</button>
    </div>
  )
}

export default App
