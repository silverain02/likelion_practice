import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {
  const props = {
    first : {
              location : "상하이, 중국",
              len : "869km 거리",
              date : "6월8일~14일",
              price : "68,191원/박",
              rate : "4.96"
            },
    arr : ["상하이, 중국","869km 거리","6월8일~14일","68,191원/박","4.96"],
    second : {
              location : "상하이, 중국",
              len : "870km 거리",
              date : "6월8일~13일",
              price : "177,052원/박",
              rate : "4.67"
            },
    third : {
              location : "Jeju-si, 한국",
              len : "466km 거리",
              date : "9월2일~8일",
              price : "720,134원/박",
              rate : "4.97"
            },
    fourth : {
              location : "상하이, 중국",
              len : "디자인: Alexis Dornier",
              date : "6월12일~17일",
              price : "2,599,280원/박",
              rate : "NEW"
            },
  }

  return (
    <div className="App">
      <Box data={props.arr}/>
    </div>
  );
}

export default App;
