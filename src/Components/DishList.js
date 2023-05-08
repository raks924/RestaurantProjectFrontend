// import React, { useState, useEffect } from 'react';

// const DishList = ({ categoryId }) => {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     fetch(`https://localhost:7237/api/DishTables/categoryId = ${categoryId}`)
//       .then(response => response.json())
//       .then(data => {
//         setDishes(data);
//         console.log(data);        
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return dishes.length > 0 ? (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Image</th>
//           <th>Nature</th>
//         </tr>
//       </thead>
//       <tbody>
//         {dishes.map(dish => (
//           <tr key={dish.dishId}>
//             <td>{dish.dishId}</td>
//             <td>{dish.dishName}</td>
//             <td>{dish.dishDescription}</td>
//             <td>{dish.dishPrice}</td>
//             <td>{dish.dishImage}</td>
//             <td>{dish.dishNature}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   ) : (
//     <div>Loading dishes...</div>
//   );
// };

// export default DishList;


import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const DishList = ({ categoryId }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7237/api/DishTables/categoryId = ${categoryId}`)
      .then(response => response.json())
      .then(data => {
        setDishes(data);
        console.log(data);        
      })
      .catch(error => {
        console.log(error);
      });
  }, [categoryId]);

  return dishes.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {dishes.map(dish => (
        <div key={dish.dishId} className="col">
          <Card>
            <Card.Img variant="top" src={dish.dishImage} />
            <Card.Body>
              <Card.Title>{dish.dishName}</Card.Title>
              <Card.Text>{dish.dishDescription}</Card.Text>
              <Card.Text>Price: {dish.dishPrice}</Card.Text>
              <Card.Text>Nature: {dish.nature}</Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading dishes...</div>
  );
};

export default DishList;
