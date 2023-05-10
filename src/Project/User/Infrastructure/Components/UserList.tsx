import { useContext, useEffect, useState } from 'react'
import { WrapperContent, WrapperTitle } from '../../../../Shared/React/components/styles/Wrappers';

import { DataTableStyle } from '../../../../Shared/React/components/styles/DataTableStyle';
import { TableFilter } from '../../../../Shared/React/components/styles/Tables';

import { User } from '../../Domain/Interfaces';
import { UserDeleteService, UserListService } from '../../Domain/Services/UserApplicationServices';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { LinkPrimary } from '../../../../Shared/React/components/styles/Buttons';
import { ValidatorBox } from '../../../../Shared/React/components/field/ValidatorBox';


export const UserList = () => {
    
    const [users, setModalUser] = useState<User[]>([]);
    
    useEffect(() => {
        UserListService().then(setModalUser)
    }, [])

    const UserDelete = (id: string) => {
      UserDeleteService(id).then((resp) => { 
        if (JSON.stringify(resp.success) === 'true') {
          setModalUser(prev => prev.filter(user => user.id !== id));
          toast.info('Se ha eliminado un usuario',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    }
                )}
        else {
                toast.error('No es posible eliminar un usuario',
                    {
                    position: 'bottom-center',
                    closeButton: false,
                    theme: 'colored', hideProgressBar: true, autoClose: 2500
                    })
                }}
          )
    }

  const UserItem =
  [
    {
      name: 'username',
      selector: (row:any) => row.username,
      cell: (row:any) => row.username,
      sortable: true,
      reorder: true,
      filterable: true,
      marginBottom: '10px',
      
    },
    
    {
      name: 'Acciones',
      width: '12%',
      reorder: true,
      center: true,
      selector: (row:any) => row.name,
      cell: (row:any) =>
        <div className='flex justify-center w-full h-full'>
          <Link title='Editar un usuario' to={"edit/" + row.id}>
                    <PencilIcon className='text-primary-900' height='28px'/>
          </Link>
          {
                <button title='Eliminar un usuario' data-bs-toggle="modal" data-bs-target={"#deleteUser-"+row.id} >
                <TrashIcon className='text-primary-900' height='28px' />
                </button>
          }
          <ValidatorBox
                        id={row.id}
                        name={row.name}
                        actionname="deleteUser"
                        service={UserDelete}
                        action="deshabilitar un usuario"
                        />
        </div>
    }
  ]  
    
  return (
    <>
    <ToastContainer/>
    <WrapperTitle>
        Usuario
    </WrapperTitle>
    <WrapperContent>
      <div className='p-2 w-full rounded-lg'>
        {
            <div className='text-right mb-8 mt-2'>
                <LinkPrimary to='create'>Crear Usuario</LinkPrimary>
            </div>
            }
        <TableFilter 
              columns={UserItem}
              data={users}
              customStyles={DataTableStyle}
              pagination
              responsive
              striped
              highlightOnHover
          />
      </div>
    </WrapperContent>
    </>
        
    )
}