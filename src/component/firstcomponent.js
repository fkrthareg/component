function Firstcomponent(prop) {
    const { addnum } = prop;
    return (
        <div>
            <button onClick={() => addnum(1)}>Increment</button>
        </div>
    );
}

export default Firstcomponent;