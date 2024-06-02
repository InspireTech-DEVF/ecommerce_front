import Nav from 'react-bootstrap/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

function NavbarCategory () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/v1/categories')
      .then((response) => {
        setCategories(response.data)
      })
      .catch(console.error)
  }, [])
  return (
    <Nav fill variant='tabs' defaultActiveKey='/home'>
      {
        categories.map((category) => {
          return (
            <Nav.Item key={category._id}>
              <Nav.Link eventKey='link-1'>{category.name}</Nav.Link>
            </Nav.Item>
          )
        })
      }

    </Nav>
  )
}

export default NavbarCategory
