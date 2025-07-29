import {
    BadRequestException,
    Body, Controller, Delete, Get, Param, Post, Put, UploadedFile,
    UseInterceptors, UsePipes, ValidationPipe,

} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { userDTO } from './user.entityDTO';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MulterError } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(':id')
    getUser(@Param('id') id: string): string {
        return this.userService.getUser(id);
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/\.(pdf)$/i)) {
                    cb(null, true);
                } else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'file'), false);
                }
            },
            limits: { fileSize: 3000000 },
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueName = `${Date.now()}-${file.originalname}`;
                    cb(null, uniqueName);
                },
            }),
        }),
    )

    @UsePipes(new ValidationPipe())
    createUser(
        @Body() data: userDTO,
       @UploadedFile() file: Express.Multer.File,
    ): any {
        if (!file) {
            throw new BadRequestException('File is required and must be PDF');
        }
        return {
            message: 'User created and file uploaded successfully',
            filename: file.filename,
            user: data,
        };
    }

    @Put()
    updateUser(@Body() data: any): string {
        return this.userService.updateUser(data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): string {
        return this.userService.deleteUser(id);
    }
}
