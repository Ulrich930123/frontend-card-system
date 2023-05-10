import { http } from '../../../../Shared/Http/http';
import { User, UserResponseDTO, UsersResponseDTO } from '../Interfaces';

export const UserListService = async () => {
  const user = await http.get<UsersResponseDTO>('user/search');
  return user.payload.data.map((user): User => ({
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
  }));
};

export const UserCreateService = async (user: User | any) => {
  return await http.post<UserResponseDTO>('user/create', JSON.stringify(user));
};

export const UserSearchByIdService = async (id: string) => {
  const ModuleUser = await http.get<UserResponseDTO>('user/search/' + id);
  return ModuleUser.payload.data;
};

export const UserUpdateService = async (user: User | any) => {
  return await http.post<UserResponseDTO>('user/update/' + user.id, JSON.stringify(user));
};

export const UserDeleteService = async (id: string) => {
  return await http.delete<UserResponseDTO>('user/delete/' + id);
};