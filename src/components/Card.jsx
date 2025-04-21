import React from 'react'

export default function Card() {
  return (
    <>
      <div className="card-container">
            {cardsData.map((card) => (
              <Card key={card.id} style={{ width: "18rem", margin: "10px" }}>
                {/* ✅ Different Image for Each Card */}
                <Card.Img variant="top" src={card.image} alt={card.title} />
      
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build the bulk of the card's content.
                  </Card.Text>
      
                  {/* 🔹 Flexbox Container for Dropdowns and Button */}
                  <div className="dropdown-container">
                    {/* 🔹 Number Dropdown (1 to 6) */}
                    <Form.Group className="dropdown-wrapper">
                      <Form.Select
                        className="small-dropdown"
                        value={cardStates[card.id].selectedNumber}
                        onChange={(e) =>
                          handleDropdownChange(card.id, "selectedNumber", e.target.value)
                        }
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
      
                    {/* 🔹 Size Dropdown (Half / Full) */}
                    <Form.Group className="dropdown-wrapper">
                      <Form.Select
                        className="small-dropdown"
                        value={cardStates[card.id].selectedSize}
                        onChange={(e) =>
                          handleDropdownChange(card.id, "selectedSize", e.target.value)
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
            ))}
          </div>
    </>
  )
}
