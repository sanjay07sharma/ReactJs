
const ItemList = (items) => {
    console.group(items)
    //TODO: items.map is not function datat is wronfg investiagte it 
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}>
                    
                </div>
            ))}
        </div>
    );
}

export default ItemList;
