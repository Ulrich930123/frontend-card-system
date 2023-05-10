    import { INITIAL_VALUE_USER } from "../../Domain/Types";
    import { UserFieldsForm } from './UserFieldsForm';
    import { UserValidationSchema } from '../Validation/UserValidationSchema';
    import { UserCreateService } from '../../Domain/Services/UserApplicationServices';
    import { User } from '../../Domain/Interfaces';
    import { Formik } from "formik";
    import { WrapperContent, WrapperTitle } from "../../../../Shared/React/components/styles/Wrappers";
    import { useNavigate } from 'react-router-dom';
    import { v4 as uuidv4 } from 'uuid'
    import { toastAlert } from '../../../../Shared/Toast/Alert';
    import { toast, ToastContainer } from 'react-toastify';
    

export const UserCreate = () => {
    
    const navigate = useNavigate();

    
    const onSubmitEventElement = (User:User) => {
        User.id = uuidv4();
        UserCreateService(User).then((resp) =>{
            if (JSON.stringify(resp.success) === 'false')  {
                toast.error('Hay un conflicto al momento de crear',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    })
                }
            else if (toastAlert(resp)) {
                setTimeout(function(){
                        navigate(-1);
                   },2500);    
                }
            }
          
        );
    }

  
    return (
        <>
        <ToastContainer/>
        <WrapperTitle>
            Crear Ejemplo
        </WrapperTitle>
        <WrapperContent>
            <Formik
                initialValues={INITIAL_VALUE_USER}
                onSubmit={ (values) => { onSubmitEventElement(values) }}
                validationSchema={UserValidationSchema}
                >
                {
                    (formmik) => (
                        <UserFieldsForm />
                    )
                }
            </Formik>
        </WrapperContent>
        </>
    )
}
