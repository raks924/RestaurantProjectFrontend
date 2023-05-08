import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';
import '../../src/styles.css';

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [DisplayMenu, setDisplayMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:7237/api/MenuTables')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.log(error));
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem.menuId);
    setDisplayMenu(false);
  }

  const handleUpdateClick = (menuItem) => {
    navigate("/UpdateMenu", { state: { menuId: menuItem.menuId } });
  }

  const handleMenuBack = () => {
      setDisplayMenu(true);
      setSelectedMenuItem(undefined);
  }

  const handleDeleteClick = (menuItem) => {
    // Send a DELETE request to delete the selected menu item
    fetch(`https://localhost:7237/api/MenuTables/${menuItem.menuId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Update the menu items list by filtering out the deleted item
        const updatedMenuItems = menuItems.filter(item => item.menuId !== menuItem.menuId);
        setMenuItems(updatedMenuItems);

      })
      .catch(error => console.log(error));
  }

  return (
    <div className='menuList'>
      <h2 className='mlHead'>Daily Menu</h2>
      {DisplayMenu && (<div className="d-flex flex-wrap">
        {menuItems.map((menuItem) => (
          <Card key={menuItem.menuId} className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={menuItem.menuImage} />
            <Card.Body>
              <Card.Title>{menuItem.menuName}</Card.Title>
              <Card.Text>{menuItem.menuDescription}</Card.Text>
              <Button className='pri-button' style={{backgroundColor: '#d2b48c', color: 'white',margin : '10 px' ,padding: '10px 10px', textAlign: 'center', onHover : '#218838' , boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={() => handleMenuItemClick(menuItem)}>Select</Button>
              <Button className='sec-button' style={{backgroundColor: '	#9370db', color: 'white',margin : '10 px', padding: '10px 10px', textAlign: 'center', onHover : '#218838' , boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}variant="info" onClick={() => handleUpdateClick(menuItem)}>Update</Button>
              <Button className='ter-button' style={{backgroundColor: '	#800000', color: 'white',margin : '10 px', padding: '10px 10px', textAlign: 'center', onHover : '#218838' , boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}variant="danger" onClick={() => handleDeleteClick(menuItem)}>Delete</Button>
            </Card.Body>
          </Card>))}
         </div>)}
      {!DisplayMenu && (
      <div>
        {selectedMenuItem !== undefined && <CategoryList menuItem={selectedMenuItem} />}
        <hr />
        <Button onClick={handleMenuBack}>Go back to Menu.</Button>
      </div>)}
    </div>
  )
};

export default MenuList;
