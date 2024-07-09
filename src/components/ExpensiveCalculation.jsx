// use memo
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ count }) {
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]);

  return <div>Result: {result}</div>;
}

function AppWithExpensiveCalculation() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation count={count} />
    </div>
  );
}

export default AppWithExpensiveCalculation;