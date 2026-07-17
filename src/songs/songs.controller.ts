import { Controller,Get,Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    getAllSongs() {
        // Logic to retrieve all songs
        return this.songsService.findallSongs();
    }

    @Post()
    createSong() {
        return this.songsService.createSong('fares songs');
    }

}
