import {v4 as uuidv4} from "uuid";
import {User} from "./Interfaces";

export const INITIAL_VALUE_USER: User = {
    id                   : uuidv4(),
    username             : '',
    email                : '',
    password             : '' 
}