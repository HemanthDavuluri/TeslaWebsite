import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-itemsContainer">
        <Item
          title="Lowest Cost Solar Pannels"
          desc="Money-Back gurantee"
          backgroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="EXISTING INVENTORy"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          leftBtnText="CUSTOM NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          leftBtnText="CUSTOM NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          leftBtnText="CUSTOM NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          backgroundImg={Accessories}
          leftBtnText="SHOP NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
