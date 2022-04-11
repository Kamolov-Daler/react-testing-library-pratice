

const List = (props) => {
    const {items} = props;

    if (!items?.length) return null;

    return (
        <ul className="list">
            {items.map((item,idx) => 
                <li key={idx}>{item}</li>
            )}
        </ul>
    )
}

export default List;