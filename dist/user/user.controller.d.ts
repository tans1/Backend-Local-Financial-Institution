import { UserService } from './user.service';
import { Response, Request } from 'express';
import { AuthService } from '../auth/auth.service';
import { SignUpDTO } from '../DTO/userDTO/signUpDTO/signUp.dto';
import { changePasswordDTO } from '../DTO/userDTO/updateDTO/changepassword.dto';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    signUp(signupdto: SignUpDTO, response: Response): Promise<import("../typeorm/entities/user.entity").User[]>;
    changePassword(changepassworddto: changePasswordDTO, req: Request): Promise<import("../typeorm/entities/user.entity").User>;
    getUserInfo(username: string): Promise<import("../typeorm/entities/user.entity").User>;
}
