import styled from "./App.module.css";
import Box from "./Box";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

function App() {
  return (
    <div className={styled.text}>
      <Box
        img={img1}
        title="상하이,중국"
        len="869km 거리"
        rate="4.96"
        date="6월 8일~14일"
        price="68.191원/박"
      />
      <Box
        img={img2}
        title="상하이,중국"
        len="870km 거리"
        rate="4.67"
        date="6월 8일~13일"
        price="177.052원/박"
      />
      <Box
        img={img3}
        title="Jeju-si,한국"
        len="466km 거리"
        rate="4.97"
        date="9월 2일~8일"
        price="720.134원/박"
      />
      <Box
        img={img4}
        title="상하이,중국"
        len="859km 거리"
        rate="NEW"
        date="6월 12일~17일"
        price="2,599,280원/박"
      />
    </div>
  );
}

export default App;
