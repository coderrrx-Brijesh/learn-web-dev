import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Date from './Components/Dates';
import Card from './Components/Card';
function App() {
  const response=[{
    day: "Monday",
    date: "29",
    month: "July",
    year: "2024"
  },
  {
    day: "Monday",
    date: "01",
    month: "July",
    year: "2003"
  }]
  return (
    <Card>
      <div>
        <Date day={response[0].day} date={response[0].date} month={response[0].month} year={response[0].year}></Date>
        <Date day={response[1].day} date={response[1].date} month={response[1].month} year={response[1].year}></Date>
        <Item>Children Inside Items</Item>
        <div className="App">Hello! Brijesh Singh</div>
      </div>
    </Card>
  );
}

export default App;
