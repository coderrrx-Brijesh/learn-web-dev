import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProductDataHandler(productData){
        console.log("   i    am inside NewProduct.js")
        console.log(productData);
        props.printProductData(productData);
    }
    return (
        <div className='new-product'>
            <ProductForm onSaveProductData={saveProductDataHandler}/>
        </div>
    )
}

export default NewProduct;