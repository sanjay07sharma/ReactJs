
const ItemList = ({...items}) => {
    return (
        <div>
            {items.item.map((item) => {
                return (
                    <div key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        <p>{item.card.info.price}</p>
                        <p>{item.card.info.description}</p>
                        <img src={item.card.info.image} alt={item.card.info.title} />
                    </div>
                )
            })}  
        </div>
    )
    
}

export default ItemList;
