import Header from "./components/Header";

function App() {
  const periods = ["Pré-Descobrimento", "Colônias", "Império", "República"];

  return (
    <>
      <Header periods={periods} />
    </>
  );
}

export default App;
