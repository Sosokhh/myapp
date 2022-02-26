
const upper = (text) => text.toUpperCase();
const list = ['ერთი', 'ერთი', 'სამი'];

export default  function MyComponent(props) {
    const {bool, children = 'sosila tesli kacia'} = props;
    return (<div style={{background: 'red'}}>
        {children}
        <p>{bool ? 'true' : 'false'}</p>
        <ul>
            {list.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
    </div>)
};
