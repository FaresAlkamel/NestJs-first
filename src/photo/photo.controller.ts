import { Controller,Get,Post } from '@nestjs/common';

@Controller('photo')
export class PhotoController {

    @Get()
    getAllPhotos() {
        // Logic to retrieve all photos
        return "This action returns all photos";
    }

    @Post()
    createPhoto() {
        // Logic to create a new photo
        return "This action creates a new photo";
    }
}
