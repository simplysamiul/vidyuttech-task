import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import sizeList from '../../assets/size_list.jpg';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <img style={{width:"100%"}} src={sizeList} alt="" />
      </Modal.Body>
    </Modal>
  );
}

export default function SizeModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button style={{
        fontSize: "20px",
        color: "#898787",
        background: "none",
        border: "none", 
        borderBottom: "2px solid grey",
        marginTop: "30px"
      }} onClick={() => setModalShow(true)}>
        Size Guide
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}