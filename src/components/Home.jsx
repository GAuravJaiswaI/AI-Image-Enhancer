import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import React, { useState } from 'react';
import {enhanceImageAPI} from '../utils/enhanceImageAPI';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null); // undefined instead of null
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
   

    try {
      const enhancedURL = await enhanceImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error enhancing image: please try again later.");
    } 
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePreview 
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
      
    </>
  );
};

export default Home;
