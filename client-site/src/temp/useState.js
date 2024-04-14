import React, { useState } from 'react';

const ExampleComponent = () => {
  // Define state variables and their setters
  const [count, setCount] = useState(0); // State variable for count
  const [text, setText] = useState('Hello, world!'); // State variable for text
  const [isVisible, setIsVisible] = useState(true); // State variable for visibility
  const [user, setUser] = useState({ name: 'John', age: 30 }); // State variable for user
  const [items, setItems] = useState(['apple', 'banana', 'orange']); // State variable for items

  // Event handler to increment count
  const incrementCount = () => {
    setCount(count + 1); // Update count using setCount
  };

  // Event handler to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Update isVisible using setIsVisible
  };

  // Event handler to update user age
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 }); // Update user using setUser
  };

  // Event handler to add an item to the list
  const addItem = () => {
    setItems([...items, 'new item']); // Update items using setItems
  };

  return (
    <div>
      {/* Render state values */}
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <p>Is visible? {isVisible ? 'Yes' : 'No'}</p>
      <p>User: {user.name}, Age: {user.age}</p>
      <ul>
        {/* Render list items */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Buttons to trigger state updates */}
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <button onClick={updateUser}>Update User</button>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ExampleComponent;
