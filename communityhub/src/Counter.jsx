import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect ran! Count is:', count);
    });

    useEffect(() => {
        console.log('Component mounted!');
    }, []);

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;