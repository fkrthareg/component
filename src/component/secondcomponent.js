function SecondComponent(data) {
    const { minusnum } = data;
    return (
        <div>
            <button onClick={() => minusnum(-1)}>decrement</button>
        </div>
    );
};
export default SecondComponent;