import React, {useEffect, useState} from "react";
import Card from "./Card";




export default function CounterFn(props) {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('sosila');
    const [error, setError] = useState(null);

    const clickHandler = () => {
        setCount((prevState) => (prevState + 1))
        if(count+1>10) {
            setError('Counter exceeded maximum allowed value!')
        }
    }
    useEffect( () => {
        console.log('component did mount');
        return () => console.log('component is destroyed')
        }, [] )



    return(
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle('babucuna')}>Change Name</button>

            {count>0 ? (<p>Counter is active</p>) : null}
            <p>
                Counter Value: {count}
            </p>
            <button onClick={clickHandler}>increase </button>

            {error&& <div>{error}</div>}

            <Card title={title} subtitle={'sgsdgsdgsg'}> sgsgsgd</Card>
        </div>


    )
}