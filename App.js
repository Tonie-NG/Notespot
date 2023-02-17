import { StatusBar } from "expo-status-bar";
import { styles } from "./appStyles";
import Footer from "./src/components/footer/Footer";
import Edit from "./src/pages/edit/Edit";
import Home from "./src/pages/homepage/Home";
import Note from "./src/pages/note/Note";
import Write from "./src/pages/writeNote/Write";

function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <Home /> */}
      {/* <Write /> */}
      {/* <Edit /> */}
      <Note />
      <Footer />
    </>
  );
}

export default App;
