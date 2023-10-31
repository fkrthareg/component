function ThirdComponent(prop) {
    const { name, department, date } = prop.post;
    return (
        <div>
            <p>{name}</p>
            <p>{department}</p>
            <p>{date}</p>
        </div>
    );
};
export default ThirdComponent;