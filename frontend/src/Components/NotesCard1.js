import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/notescard.css";
import axios from "axios";

const NotesCard1 = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pdf/note/")
      .then((response) => setNote(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //   ! Added the open pdf which is responsible for iframe
  const openPdf = (pdfUrl) => {
    const iframeContent = `<iframe src="${pdfUrl}" width="100%" height="100%" frameBorder="0"></iframe>`;
    document.querySelector(".visit").innerHTML = iframeContent;
  };

  return (
    // ! Added a page which is divided into 2
    <div className="page-wrapper">
      <div className="wrapper">
        {note.map(
          (
            item //! Using the same map to traverse among the file
          ) => (
            <Card key={item.id} note={item} openPdf={openPdf} /> //! The card function component is taken from the lower fxn
          )
        )}
      </div>
      <div className="visit">{/* IFRAME CONTENT HERE */}</div>
    </div>
  );
};

function Card({ note, openPdf }) {
  // ! Trigger the download by creating an invisible link and clicking it
  const handleDownloadClick = async (e) => {
    // Prevent the default behavior of the anchor element
    e.preventDefault();
    try {
      const response = await axios.get(note.note, { responseType: "blob" });
      //! Created a Blob from the PDF data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      //! Created a download link and trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(pdfBlob);
      downloadLink.download = note.note.split("/").pop(); // Extracting the filename from the URL
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  return (
    // ! All the card data are added here which is taken from your given data format in NotesCard
    <div className="card">
      <div className="card__body">
        <h2 className="card__title">{note.name}</h2>
        <p className="card__description">Prof: {note.prof_name}</p>
        <p className="card__description">Ideal index: {note.ideal_index}</p>
        <p className="card__description">Subject Code: {note.sub_code}</p>
      </div>

      <div className="card__btn1" onClick={() => openPdf(note.note)}>
        <span>
          <p className="btn_txt">View Note</p>
        </span>
      </div>
      <div className="card__btn2" onClick={handleDownloadClick}>
        <span>
          <p className="btn_txt">Download Note</p>
        </span>
      </div>
    </div>
  );
}

ReactDOM.render(<NotesCard1 />, document.getElementById("root"));
export default NotesCard1;
