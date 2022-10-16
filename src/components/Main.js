import React from "react";
import Sidebar from "./Sidebar";
import img1 from "./img1.png";
const Main = () => {
    return (

    <div>

  <div className="article">
    <h1>CREATE A CLASS COMPONENT FOR CHANGING THE COLOR OF THE TEXT IN REACTJS</h1>
    <p> When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.</p>
<h1>code:</h1>
<img src={img1} alt="img1" align="left"/>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
