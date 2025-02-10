import Card from "./Card";
import "./App.css";


function App() {
  const data = [
    {
      img: "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bartek",
      description: "This is Bartek, he likes to party :)."
    },
    {
      img: "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Marcin",
      description: "This is Bartek's shy best friend."
    }
  ];

  return (
    <div className="app">
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default App;


