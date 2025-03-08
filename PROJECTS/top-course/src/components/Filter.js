import React from "react";
import './Filter.css';
const Filter = (props) => {
    let filterData=props.filterData;
    let set_category=props.set_category;
    let category=props.category;
    function filterHandler(title){
        set_category(title);
    }
    return (
        <div>
            {filterData.map((data)=>{
               return (<button key={data.id} className={`${category === data.title ? "bordered-filter-btn" : "borderless-filter-btn"}`}
                onClick={()=> filterHandler(data.title)}>{data.title}</button>)
            })}
        </div>
    )
}
export default Filter