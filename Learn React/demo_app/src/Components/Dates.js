import './Dates.css'
function Dates(props){
    let day=props.day;
    let date=props.date
    let month=props.month
    let year=props.year
    return (<div>
        <h1 className='date'>{day} {date} {month} {year}</h1>
    </div>)
}
export default Dates;