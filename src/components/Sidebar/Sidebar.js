import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'

const Sidebar = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [xPosition, setXPosition] = useState(-props.width);

  useEffect(() => {
    setXPosition(0);
  }, []);

  return (
    <div style={{ width: props.width }}>
      <button>
        About Me
      </button>
      <button>
        About Me
      </button>
    </div>
  )
}

export default Sidebar;