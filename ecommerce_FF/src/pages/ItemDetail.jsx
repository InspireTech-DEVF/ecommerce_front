import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneItemService } from '../services/itemServices';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardFooter, MDBCardSubTitle, MDBCardImage } from 'mdb-react-ui-kit';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
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
  }, [id]);

  if (!product) {
    return <div></div>;
  }

  return (
    <div className="text-center pt-5">
      <h3>Detalle del producto</h3>
      <div className='d-flex row row-cols-2 row-cols-md-4 g-4 my-3 px-5 justify-content-center custom-no-gutter-x'>
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="no-gutters">
              <MDBCol md="6">
                <MDBCardImage src={product.image} alt={product.name} fluid />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody>
                  <MDBCardTitle tag="h4">{product.name}</MDBCardTitle>
                  <MDBCardSubTitle tag="h5" className="mb-2 text-muted">Precio: ${product.price}</MDBCardSubTitle>
                  <MDBCardText>Descripción: {product.description}</MDBCardText>
                  <ItemCount count={count} setCount={setCount} />
                  <div className='d-flex justify-content-center'>
                    <MDBBtn color="primary" className="my-3" onClick={() => addToCart({ ...product, quantity: count })}>
                      Añadir al Carrito
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
            <MDBCardFooter>
              <Link to="/">Volver</Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
};

export default ItemDetail;