import './Item.css'
function Item(props) {
    return(<div>
         <p className="item">Ultra Brijesh Day</p>
         {props.children}
    </div>)
}
export default Item;
