import React from "react";
import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <div className="content">
          <div className="container">

          <UploadForm />

            <div className="content-top">
              <ul className="d-flex">
                <li>Вся мебель</li>
                <li>Кухни</li>
                <li>Шкафы и тумбы</li>
              </ul>
            </div>
          </div>

          <section className="content-main">
            <div className="container">
              <ImageGrid setSelectedImg={setSelectedImg} />
              {selectedImg && (
                <Modal
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
