/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from 'react'
import { getAllItemsServices } from './services/itemServices.js'
import NavLink from 'react-bootstrap/esm/NavLink'
import Item from '../../../../ecommerce_back/models/Item'

function Home () {
  // Estado para guardar la info de los productos
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getAllItemsServices()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('error', error.message)
      }
    }
    getUserData()
  }, [])

  return (
    <>
      <h1>Aqui deben imprimirse los Items</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={Item.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={Item.image} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{Item.name}</h5>
              <p className='card-text'>{Item.description}</p>
              <NavLink to='carrito' href='#' className='btn btn-primary'>Agregar al carrito</NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
