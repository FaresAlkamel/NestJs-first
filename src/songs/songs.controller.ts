import { Controller, Get, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}
    @Get()
    getAllSongs() {
        // Logic to retrieve all songs
        return this.songsService.findallSongs();
    }
    @Post()
    createSong(@Body() createSongDto: CreateSongDto) {
        
        return  this.songsService.createSong(createSongDto);
    }
}