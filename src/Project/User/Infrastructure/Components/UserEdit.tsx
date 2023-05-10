import { Formik } from "formik";
import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
import { useEffect, useState } from 'react';
import { User } from '../../Domain/Interfaces';
import { UserSearchByIdService, UserUpdateService  } from '../../Domain/Services/UserApplicationServices';
import { useNavigate, useParams } from "react-router-dom"
import { INITIAL_VALUE_USER } from "../../Domain/Types";
import { UserFieldsForm } from './UserFieldsForm';
import { UserValidationSchema } from '../Validation/UserValidationSchema';
import { ToastContainer } from 'react-toastify';
import { toastAlert } from '../../../../Shared/Toast/Alert';

export const UserEdit = () => {

  const { user_id } = useParams();

  const [User, setUser] = useState<User>(INITIAL_VALUE_USER);

  useEffect(() => {
    UserSearchByIdService(String(user_id)).then((user) => setUser(user))
  }, [user_id])

  const navigate = useNavigate();

  const onSubmitEventElement = (values:User) => {
    UserUpdateService (values).then((resp) =>{
      if (toastAlert(resp)) {
          setTimeout(function(){
                  navigate(-1);
              },2500);    
      }
  });
  }

  return (
    <>
    <div>
        <ToastContainer/>
        </div>
    <WrapperTitle>
        Editar Ejemplo
    </WrapperTitle>
    <WrapperContent>
      <Formik
        enableReinitialize={true}
        initialValues={User}
        onSubmit={ values => { onSubmitEventElement(values) }}
        validationSchema={UserValidationSchema}>
          {
            (formmik) => (
              <UserFieldsForm/>
            )
          }
      </Formik>
    </WrapperContent>
    </>
  )
}