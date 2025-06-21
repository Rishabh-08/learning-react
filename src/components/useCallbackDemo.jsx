import { CircleChevronRight } from "lucide-react";
import { useCallback, useState, useEffect, memo } from "react";

// Child component that's expensive to render
const ExpensiveList = memo(({ items, onItemClick }) => {
  console.log("ExpensiveList rendered!");
  return (
    <div className="expensive-list">
      <h3>Expensive List Component</h3>
      <p className="subtitle">
        Check console - this should only render when items change
      </p>
      <ul className="results-list">
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemClick(item)}>
            <CircleChevronRight
              size={16}
              style={{ marginRight: 8, color: "var(--primary)" }}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default function UseCallbackDemo() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [counter, setCounter] = useState(0);
  const [useCallbackEnabled, setUseCallbackEnabled] = useState(true);

  // WITHOUT useCallback - creates new function on every render
  const handleItemClickBad = (item) => {
    alert(`Clicked: ${item.name}`);
  };

  // WITH useCallback - memoizes the function
  const handleItemClickGood = useCallback((item) => {
    alert(`Clicked: ${item.name}`);
  }, []); // Empty dependency array means function never changes

  const addItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, name: `Item ${newId}` }]);
  };

  return (
    <div className="hook-demo">
      <h2>useCallback Demo</h2>
      <p>
        The <code>useCallback</code> is used to useCallback memoizes callback
        functions to prevent unnecessary re-renders.
      </p>
      <div className="counter-example">
        <div className="controls">
          <button onClick={() => setCounter(counter + 1)}>
            Force Re-render (Counter: {counter})
          </button>
          <button onClick={addItem}>Add Item</button>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={useCallbackEnabled}
              onChange={(e) => setUseCallbackEnabled(e.target.checked)}
            />
            Use useCallback
          </label>
        </div>
        {/* The actual expensive component */}
        <ExpensiveList
          items={items}
          onItemClick={
            useCallbackEnabled ? handleItemClickGood : handleItemClickBad
          }
        />
        {/* Explanation */}
        <div className="info-box">
          <p className="info-title">What's happening:</p>
          <p className="info-box-point">
            • With useCallback: ExpensiveList only re-renders when items
            actually change.
          </p>
          <p className="info-box-point">
            • Without useCallback: ExpensiveList re-renders every time parent
            re-renders.
          </p>
          <p className="info-box-point">
            • Click "Force Re-render" to see the difference.
          </p>
          <p className="info-box-point">
            • The child component is wrapped in React.memo() to prevent
            unnecessary renders.
          </p>
        </div>
      </div>
    </div>
  );
}
