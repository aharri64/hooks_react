import { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.initialNumber)
    const [name, setName] = useState('Jame')

    const updateByFive = () => {
        setCount(count + 5)
    }

    function subtract() {
        setCount(count -1)
    }

    useEffect(() => {
        console.log('hello')
        // alert('hello')
    });
    
    //* if you pass an empty array it acts like ComponentDidMount
    //* just runs once
    useEffect(() => {
        console.log('only on the Mount')
        // alert('hello')
    }, []);
    return(
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount( count + 1)}>Add</button>
            <button onClick={updateByFive}>Add Five</button>
            <button onClick={subtract}>Subtract</button>
        </>
    )
}

export default Counter;
