import {useState} from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Button } from '@mui/material';

const Pdffile = () => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfError, setPdfError]=useState('');

  const allowedFiles = ['application/pdf'];
  const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e)=>{
          setPdfError('');
          setPdfFile(e.target.result);
        }
      }
      else{
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else{
      console.log('please select a PDF');
    }
  }

  return (
    <div style={{padding:'2vw'}}>
      <form>
        <br></br>
        <div style={{display:'flex', justifyContent:'space-between',width:'50vw' }}>

        <Button variant="contained" component="label">
            Select File
            <input type="file" hidden onChange={handleFile} />
		</Button>
        <Button variant="contained" component="label">
            Upload File
		</Button>
        </div>
        {pdfError&&<span className='text-danger'>{pdfError}</span>}

      </form>
      <div style={{marginTop:'5vh', width:'50vw', height:'80vh'}} className="viewer">
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer style={{border:'greeen solid 2px'}} fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}
        {!pdfFile&&<>No file is selected yet</>}

      </div>

    </div>
  );
}

export default Pdffile;