
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';



function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>

      <h1 className='text-center text-2xl'>Coffes {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
