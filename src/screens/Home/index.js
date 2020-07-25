import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FloatingButtons } from '../../components/Button';
import TakePhoto from '../../containers/TakePhoto';
import BACKGROUND_IMAGE from '../../assets/home.jpeg';
import './index.css';

const Home = ({ history }) => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const uploadPhotoModal = () => {
    setOpenUploadModal(!openUploadModal);
  };
  const scoreTasks = () => {
    setOpenUploadModal(false);
    history.push('/scoretasks');
  };
  return (
    <div className="home-container">
      {openUploadModal && <TakePhoto />}
      <FloatingButtons clickPhoto={uploadPhotoModal} scoreTasks={scoreTasks} />
    </div>
  );
};

export default withRouter(Home);
