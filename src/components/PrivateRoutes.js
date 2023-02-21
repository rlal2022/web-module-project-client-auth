import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ Component: component, ...rest }) => {
  let navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem("token") ? (
          <Element {...props} />
        ) : (
          navigate("/login")
        );
      }}
    />
  );
};

export default PrivateRoutes;
