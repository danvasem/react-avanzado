import React, { useContext, Fragment } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../Components/SubmitButton";
import { userInfo } from "os";

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Fragment>
  );
};

export default User;
