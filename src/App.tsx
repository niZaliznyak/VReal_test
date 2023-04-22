import { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import AddPathModal from "./components/AddPathModal";

export default function App() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="App">
      <Header onAddPathClick={() => setOpenAddModal(true)} />
      <Content />
      <AddPathModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
    </div>
  );
}
