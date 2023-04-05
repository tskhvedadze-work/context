import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

import { Modal } from "@/components/Modal";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";

import { HeaderContext } from "@/components/Header/Header";

function App() {
  const { visible, setVisible } = useContext(GlobalContext);

  const { count, setCount } = useContext(HeaderContext);

  console.log(setCount);
  return (
    <div className="App">
      <Header />
      <Modal visible={visible} onClose={() => setVisible(false)}>
        This is modal
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
