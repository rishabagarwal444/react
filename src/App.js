import React, { useState } from 'react';
import './App.css'; // Optional: For custom styling if you have a CSS file

function App() {
    // State for Task 1
    const [array, setArray] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [showElement, setShowElement] = useState(true);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [text, setText] = useState('');
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [sum, setSum] = useState(null);

    // State for Task 2
    const [counter, setCounter] = useState(0);

    // State for Task 3
    const [filterText, setFilterText] = useState('');
    const searchArray = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'];

    // Handlers for Task 1
    const toggleElement = () => setShowElement(!showElement);
    const addNewItem = () => setArray([...array, `Item ${array.length + 1}`]);
    const calculateSum = () => {
        if (number1 !== '' && number2 !== '') {
            setSum(parseFloat(number1) + parseFloat(number2));
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>React Tasks - Single Page</h1>

            {/* Task 1: Small Programming Learning Tasks */}
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Task 1: Small Programming Learning Tasks</h2>
                
                {/* Simple JSX */}
                <h3>Simple JSX Element</h3>
                <p>This is a simple JSX element.</p>

                {/* Display an array of records */}
                <h3>Array of Records</h3>
                <ul>
                    {array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* Show/Hide Element */}
                <h3>Show/Hide Element</h3>
                <button onClick={toggleElement}>
                    {showElement ? 'Hide' : 'Show'} Element
                </button>
                {showElement && <p>This element is shown/hidden.</p>}

                {/* Enable/Disable a Button */}
                <h3>Enable/Disable Button</h3>
                <button onClick={() => setButtonEnabled(!buttonEnabled)}>
                    {buttonEnabled ? 'Disable' : 'Enable'} Button
                </button>
                <button disabled={!buttonEnabled}>I'm {buttonEnabled ? 'Enabled' : 'Disabled'}</button>

                {/* 2-way Data Binding */}
                <h3>2-way Data Binding</h3>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Type something..." 
                />
                <p>{text}</p>

                {/* Dynamically Add Child Components */}
                <h3>Dynamically Add Child Components</h3>
                <button onClick={addNewItem}>Add New Item</button>

                {/* Sum of Two Numbers */}
                <h3>Sum of Two Numbers</h3>
                <input
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    placeholder="Enter second number"
                />
                <button onClick={calculateSum} disabled={!buttonEnabled}>Calculate Sum</button>
                {sum !== null && <p>Sum: {sum}</p>}
            </div>

            {/* Task 2: Create a Counter */}
            <div style={{ padding: '20px', backgroundColor: '#d0f0c0', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Task 2: Create a Counter</h2>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                <span style={{ margin: '0 20px' }}>{counter}</span>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
            </div>

            {/* Task 3: Build Search Filter */}
            <div style={{ padding: '20px', backgroundColor: '#c0e0f0', borderRadius: '8px' }}>
                <h2>Task 3: Build Search Filter</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <ul>
                    {searchArray.filter(item => item.toLowerCase().includes(filterText.toLowerCase())).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

