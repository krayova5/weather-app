import React from 'react';

//styles
import '../../assets/styles/components/loader.scss';

function Loader() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader;