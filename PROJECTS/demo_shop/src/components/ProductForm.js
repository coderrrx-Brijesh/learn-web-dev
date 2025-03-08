import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props) {
    // const [fullProductInput , setFullProductInput] = useState({
    //     title:'',
    //     date:''
    // });
    // function setFullProductInputHandler(event) {
    //     return {}
    // }
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        const newProduct = {
            title: newTitle,
            date: newDate
        }
        props.onSaveProductData(newProduct);
        console.log(newProduct);
        setTitle('');
        setDate('');

    }
    return(
        <form>
            <div className='new-product_title'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product_date'>
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler} min="2022-01-01" max="2024-12-31"></input>
            </div>
            <div className='new-product_button'>
                <button type='submit' onClick={submitHandler}>Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;