import { useState, useEffect } from 'react';
import axios from 'axios';
import DishList from './DishList';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const CategoryList = ({ menuItem }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [DisplayCat, setDisplayCat] = useState(true);
  const navigate = useNavigate();
  const [deletedItemId, setDeletedItemId] = useState(null);

  const handleBackCat = () => {
    setDisplayCat(true);
    setSelectedCategoryId(undefined);
  }

  useEffect(() => {
    fetch(`https://localhost:7237/api/CategoryTables/menuId=${menuItem}`)
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategoryId(category.categoryId);
    setDisplayCat(false);
  };

  const handleUpdateCategory = (category) => {
    navigate("/UpdateCategory", { state: { categoryId: category.categoryId } });
  }

  function handleCategoryDelete(item) {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.categoryName}?`);
    if (confirmDelete) {
      axios.delete(`https://localhost:7237/api/CategoryTables/${item.categoryId}`)
        .then(() => {
          console.log(`Deleted item ${item.categoryId}`);
          setDeletedItemId(item.categoryId);
          //setItems(prevItems => prevItems.filter(prevItem => prevItem.categoryId !== item.categoryId));
        })
        .catch(error => {
          console.error(`Error deleting item ${item.categoryId}:`, error);
        });
    }
    console.log(`Deleting item ${item.categoryId}`);
    // Implement delete logic here
  }

  return categories.length > 0 ? (
    <div>
      {DisplayCat && (<div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map(category => (
          <div key={category.categoryId} className="col">
            <Card>
              <Card.Img variant="top" src={category.categoryImage} />
              <Card.Body>
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Text>{category.categoryDescription}</Card.Text>
                <Button variant="primary" onClick={() => handleCategoryClick(category)}>View Dishes</Button>
                <Button variant="primary" onClick={() => handleUpdateCategory(category)}>Update</Button>
                <Button variant="primary" onClick={() => handleCategoryDelete(category)}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>)}
      {!DisplayCat && <div>
        {selectedCategoryId !== undefined && <DishList categoryId={selectedCategoryId} />}
        <Button onClick={handleBackCat}>Back to Category</Button>
      </div>}
    </div>
  ) : (
    <div>No categories available</div>
  );
};

export default CategoryList;
