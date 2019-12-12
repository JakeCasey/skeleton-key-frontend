import React from "react";
import PleaseSignIn from "../components/PleaseSignIn";
import MyMonitors from "../components/special/MyMonitors";

const ProtectedPage = props => (
  <div>
    <MyMonitors />
  </div>
);

export default ProtectedPage;
