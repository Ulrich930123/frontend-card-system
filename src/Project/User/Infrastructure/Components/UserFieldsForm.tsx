
import { useNavigate} from "react-router-dom";
import { InputField } from "../../../../Shared/React/components/field"
import {ButtonPrimary} from "../../../../Shared/React/components/styles/Buttons";
import { Form } from "formik";



export const UserFieldsForm = () => {
    
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate( -1 );
    }

    return (
        <Form>
        <InputField
        label='Nombre Usuario'
        name='username'
        type='text'>
        </InputField>
        
        <InputField
        label='email'
        name='email'
        type='text'>
        </InputField>

        <InputField
        label='password'
        name='password'
        type='text'>
        </InputField>

        <div className='text-right mt-2'>
            <ButtonPrimary type='submit'>Guardar</ButtonPrimary>
            <ButtonPrimary type='button' onClick={handleReturn}>Atrás</ButtonPrimary>
        </div>
    </Form> 
    )
}