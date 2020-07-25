import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Fab from '@material-ui/core/Fab';
import CameraIcon from '@material-ui/icons/Camera';
import UploadIcon from '@material-ui/icons/CloudUpload';
import ImagePreview from '../ImagePreview';
import { Input, Textarea } from '../../components/Fields';
import { LinkButton } from '../../components/Button';
import './index.css';

const TakePhoto = () => {
  const [dataUri, setDataUri] = useState('');

  const [open, setOpen] = useState(false);

  const [details, setDetails] = useState({
    name: '',
    id: '',
    desc: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const { name, id, desc } = details;
  const toggleOptions = () => {
    setOpen(!open);
  };

  const upload = () => {
    var element = document.createElement('a');
    var file = new Blob([dataUri], { type: 'image/*' });
    element.href = URL.createObjectURL(file);
    element.download = 'image.jpg';
    element.click();
    console.log(details);
    var picDetails = details;
    Object.assign(picDetails, {
      uri: dataUri
    });
    localStorage.setItem('img', JSON.stringify(picDetails));
  };

  const handleTakePhoto = (dataUri) => {
    setDataUri(dataUri);
    setOpen(false);
  };

  return (
    <div className="take-photo-container">
      <div className="camera-icon">
        {!open && !dataUri && (
          <Fab color="secondary" aria-label="edit">
            <CameraIcon onClick={toggleOptions} />
          </Fab>
        )}
      </div>
      {open && !dataUri && (
        <div className="opened-camera">
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        </div>
      )}
      {dataUri && (
        <div>
          <ImagePreview dataUri={dataUri} />
          <div className="enter-details">
            <div>
              <Input
                placeholder="Task Name"
                onChange={handleChange}
                name="name"
                value={name}
              />
              <Input
                placeholder="Task Id"
                onChange={handleChange}
                name="id"
                value={id}
              />
            </div>
            <div>
              <Textarea
                placeholder="Description"
                onChange={handleChange}
                name="desc"
                value={desc}
                rows={6}
              />
              <LinkButton
                onClick={upload}
                download={true}
                href={dataUri}
                label="UPLOAD">
                <UploadIcon />
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakePhoto;
