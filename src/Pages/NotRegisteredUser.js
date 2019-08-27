import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../Components/UserForm";
import { RegisterMutation } from "../Container/RegisterMutation";
import { LoginMutation } from "../Container/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = async ({ email, password }) => {
            const input = { email: email.value, password: password.value };
            const variables = { input };
            const { data } = await register({ variables });
            activateAuth(data.signup);
          };

          const errorMsg = error && "El usuario ya existe o hay algún problema.";

          return <UserForm disabled={loading} error={errorMsg} title="Registrarse" onSubmit={onSubmit} />;
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = async ({ email, password }) => {
            const input = { email: email.value, password: password.value };
            const variables = { input };
            const { data } = await login({ variables });
            activateAuth(data.login);
          };

          const errorMsg = error && "La contraseña no es correcta o el usuario no existe";

          return <UserForm disabled={loading} error={errorMsg} title="Iniciar sesión" onSubmit={onSubmit} />;
        }}
      </LoginMutation>
    </Fragment>
  );
};
