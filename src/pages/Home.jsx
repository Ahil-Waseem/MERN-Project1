import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../styles/Home.css";

export default function Home() {
  const [foodData, setFoodData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cardStates, setCardStates] = useState({});

  useEffect(() => {
    const getFoodData = async () => {
      try {
        // const response = await fetch("http://localhost:5000/api/foodData", {
          const response = await fetch("https://mern-project1-zusa.onrender.com/api/foodData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setFoodData(data[0]); // food items
        setCategories(data[1]); // categories
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    getFoodData();
  }, []);

  // 🛠️ Handle dropdown change
  const handleDropdownChange = (itemId, field, value) => {
    setCardStates((prevState) => ({
      ...prevState,
      [itemId]: {
        ...prevState[itemId],
        [field]: value,
      },
    }));
  };

  return (
    <div>
      {categories.length > 0 && foodData.length > 0 ? (
        categories.map((cat) => {
          const normalizedCategoryName = cat.CategoryName.trim().toLowerCase();

          // Filter food items by category
          const items = foodData.filter((item) =>
            item.CategoryName.trim().toLowerCase() === normalizedCategoryName
          );

          return (
            <div key={cat._id} className="category-section">
              <h2>{cat.CategoryName}</h2>

              <div className="row">
                {items.length > 0 ? (
                  items.map((item) => {
                    if (!cardStates[item._id]) {
                      cardStates[item._id] = {
                        selectedNumber: 1,
                        selectedSize: "Half",
                      };
                    }

                    return (
                      <div key={item._id} className="col-md-12 col-lg-3">
                        <Card style={{ width: "100%", marginBottom: "20px" }}>
                          <Card.Img variant="top" src={item.img} alt={item.name} />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>

                            <div className="dropdown-container">
                              <Form.Group className="dropdown-wrapper">
                                <Form.Select
                                  className="small-dropdown"
                                  value={cardStates[item._id].selectedNumber}
                                  onChange={(e) =>
                                    handleDropdownChange(item._id, "selectedNumber", e.target.value)
                                  }
                                >
                                  {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className="dropdown-wrapper">
                                <Form.Select
                                  className="small-dropdown"
                                  value={cardStates[item._id].selectedSize}
                                  onChange={(e) =>
                                    handleDropdownChange(item._id, "selectedSize", e.target.value)
                                  }
                                >
                                  <option value="Half">Half</option>
                                  <option value="Full">Full</option>
                                </Form.Select>
                              </Form.Group>

                              <Button variant="primary" className="small-btn">
                                Buy Now
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })
                ) : (
                  <p>No items found for this category.</p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading categories and food items...</div>
      )}
    </div>
  );
}
