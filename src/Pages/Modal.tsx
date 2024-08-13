import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import html2pdf from 'html2pdf.js';

interface stateProps{
  isOpen:boolean,
  toggle:()=>void,
  data:any,
}

const Popup:React.FC<stateProps> = ({ isOpen, toggle, data }) => {
  if (!data) return null; 

  // const contentRef = useRef(null)

  // const convertToPdf = () =>{
  //   const content = contentRef.current
  

  // const options = {
  //   filename:'patient.pdf',
  //   margin: 1,
  //   image: { type: 'jpeg', quality: 0.98 },
  //   html2canvas: { scale: 2 },
  //   jsPDF: {
  //     unit: 'in',
  //     format: 'letter',
  //     orientation: 'portrait',
  //   },
  // };

  // html2pdf().set(options).from(content).save();
  // }

  return (
    <Modal show={isOpen} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div >
        <p><strong>Date-Time:</strong> {data.date_time}</p>
        <p><strong>Note Type:</strong> {data.notetype}</p>
        <p><strong>Provider:</strong> {data.provider}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={toggle}>
          Close
        </Button>
        <Button variant="success">
          DownloadPdf
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;


