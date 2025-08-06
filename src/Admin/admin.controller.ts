import { 
  Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors, 
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminDto } from './admin.dto';
import { diskStorage } from 'multer';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('all')
  getAdmin() {
    return this.adminService.getAdmin();
  }

  @Get('search')
  getAdminbyNameandID(@Query('name') name: string, @Query('id') id: number) {
    return this.adminService.getAdminByNameandID(name, id);
  }

  @Delete('delete/:id')
  deleteAdmin(@Param('id') id: number) {
    return this.adminService.deleteAdmin(id);
  }


  @Put('edit/:id')
  editAdmin(@Param('id') id: number, @Body() updatedData: Partial<AdminDto>) {
    return this.adminService.editAdmin(id, updatedData);
  }

  @Post('addadmin')
   @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('nidImagePath', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
      },
    }),
    limits: { fileSize: 2 * 1024 * 1024 }, 
    fileFilter: (req, file, callback) => {
      if (!file.mimetype.startsWith('image/')) {
        return callback(new Error('Only image files are allowed!'), false);
      }
      callback(null, true);
    },
  }))
  async createUser(
    @Body() adminDto: AdminDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.adminService.addAdmin({
      ...adminDto,
      nidImagePath: file?.path ?? null, 
    });
  }

  /*
    @Delete('delete/:id')
    deleteAdmin(@Param('id') id: number): String {
        return this.adminService.deleteAdmin(id);
    }
     @Put('edit/:id')
    editAdmin(@Param('id') id: number, @Body() updatedData: object): String {
        return this.adminService.editAdmin(id, updatedData);
    }
    */
    
    @Delete('deleteAll')
    declareAllAdmins(@Param('id')id :number): String {
        return "checking delete all admins";
    }

   

}
