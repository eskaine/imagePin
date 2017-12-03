import React from 'react';
import Img from 'react-image';
import { Image } from 'semantic-ui-react';

const NewImage = ({ src, className }) => {

  const handleError = (e) => e.target.src = '/assets/placeholder.png';

  const handleClass = () => 'ui centered image ' + className;

  const srcOptions = [src, '/assets/placeholder.png'];

  if(className === undefined) {
    return (
      <Img className={handleClass()} src={srcOptions} />
    );
  } else {
    return (
      <Image src={src} onError={handleError.bind(this)} centered />
    );
  }

}

export default NewImage;
