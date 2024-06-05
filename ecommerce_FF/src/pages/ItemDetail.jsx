import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneItemService } from '../services/itemServices';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const { id } = useParams();
    const [product,setProduct] = useState(null)
    const [count, setCount] = useState(1);

    useEffect(()=>{
        const fetchItemDetail = async () => {
            try {
              const response = await getOneItemService(id);
              if (response.status === 200) {
                setProduct(response.data);
              }
            } catch (error) {
              console.error('Error fetching item details:', error);
            }
          };

          fetchItemDetail();
    } ,[id])
    
    if (!product) {
        return <div>Loading...</div>;
      }
  return (
    <>
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
          <p>{product.description}</p>
          <ItemCount count={count} setCount={setCount}/>
          <Button variant="primary" className="my-3">
            Añadir al Carrito
          </Button>
        </Col>
      </Row>
     
    </Container>
    </>
  )
}

export default ItemDetail