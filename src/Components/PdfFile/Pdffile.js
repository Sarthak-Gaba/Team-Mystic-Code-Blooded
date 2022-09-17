import { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@mui/material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import classes from "./PdfFile.module.css";

const Pdffile = ({ user, setuser }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");
  const [url, seturl] = useState("");
  const allowedFiles = ["application/pdf"];
  const [File, setFile] = useState();
  const [extractedData, setExtractedData] = useState([]);
  const [extractedImageUrl, setExtractedImageUrl] = useState([]);

  const handleFile = async (e) => {
    let selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("please select a PDF");
    }
  };
  const handleUpload = async () => {
    const selectedFile = File;
    console.log(File);
    const storage = getStorage();
    var storagePath = "uploads/" + selectedFile.name;
    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          console.log("File Available at " + downloadUrl);
          const data = {
            url: downloadUrl,
          };
          await setDoc(doc(db, "users", `${user.email}`), data);
          const response = await fetch(
            "https://d07e-2409-4055-7-2348-a9d3-875e-3784-dead.in.ngrok.io/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                credentials: "include",
              },
              body: JSON.stringify(downloadUrl),
            }
          );

          const res = await response.json();
          console.log(res);
          let imageURLs = [];
          let imageData = [];
          for (const id in res) {
            imageURLs.push(res[id].image_url);
            imageData.push(res[id].image_data);
          }
          console.log(imageData);
          setExtractedData(imageData[0]);
          setExtractedImageUrl(imageURLs);
          seturl(downloadUrl);
        });
      }
    );
  };
  const extractedSpans = extractedData?.map((ele, id) => (
    <span className={classes.tags}>{ele[11]}</span>
  ));
  console.log(extractedData);
  return (
    <div style={{ padding: "2vw" }}>
      <form>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50vw",
          }}
        >
          <Button variant="contained" component="label">
            Select File
            <input type="file" hidden onChange={handleFile} />
          </Button>
          <Button
            variant="contained"
            component="label"
            onClick={() => handleUpload()}
          >
            Upload File
          </Button>
        </div>
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>
      <div
        style={{ marginTop: "5vh", width: "50vw", height: "80vh" }}
        className="viewer"
      >
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer
              style={{ border: "greeen solid 2px" }}
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}
        {!pdfFile && <>No file is selected yet</>}
        {extractedSpans}
      </div>
    </div>
  );
};

export default Pdffile;
