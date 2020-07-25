import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import ROCKS from '../../assets/rocks.jpeg';
import PLANE from '../../assets/plane.jpeg';
import { Input } from '../../components/Fields';
import { Button } from '../../components/Button';
import './index.css';
import FetchedImages from '../../components/FetchedImages';

let imageBasedOnId = [];

const ScoreTasks = () => {
  let img = JSON.parse(localStorage.getItem('img'));
  const [showImg, setShowImg] = useState(false);
  const [id, setId] = useState(null);
  const handleChange = (e) => {
    setId(e.target.value);
  };
  let sampleImages = [
    {
      taskId: img.id,
      desc: img.desc,
      uri: img.uri
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '5',
      desc: 'Planes',
      uri: PLANE
    },
    {
      taskId: '13',
      desc: 'ROCKS',
      uri: ROCKS
    }
  ];
  const handleSubmit = () => {
    console.log(id, sampleImages);
    imageBasedOnId = sampleImages.filter((imgObj) => {
      return imgObj.taskId === id;
    });
    setId('');
    setShowImg(true);
  };
  return (
    <div className="score-tasks-container">
      <h1>Fetch Image by TaskId</h1>
      <div>
        <Input placeholder="Enter Task ID" onChange={handleChange} value={id} />
        <Button onClick={handleSubmit} label="Fetch" type="primary" />
      </div>
      {showImg && <FetchedImages imageBasedOnId={imageBasedOnId} />}
    </div>
  );
};

export default withRouter(ScoreTasks);
