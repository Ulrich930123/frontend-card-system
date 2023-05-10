import { ResponseDTOBase } from "../../../Shared/Http/ResponseDTO";

export interface User{
    id                   : string,
    username             : string,
    email                : string,
    password             : string
}

export interface UserProps{
    user: User,
    fatherEvent: (id:string) => void
}

interface UsersDTO{
    data: User[],
}

interface UserDTO{
    data: User,
}

export interface UserResponseDTO extends ResponseDTOBase{
    payload: UserDTO,
}

export interface UsersResponseDTO extends ResponseDTOBase{
    payload: UsersDTO,
}