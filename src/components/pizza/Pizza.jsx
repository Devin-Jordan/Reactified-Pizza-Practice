export default function Pizza ({pizza}) {
    return(
        <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
            <h2>{pizza.name}</h2>
            <img src={pizza.photoName} alt=""></img>
            <p>{pizza.ingredients}</p>
            <p>{pizza.soldOut ? "SOLD OUT" : `$${pizza.price}`}</p>
        </li>
    )
}