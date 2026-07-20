import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs: any[] = [];

    createSong(song:any) {
        this.songs.push(song);
        return this.songs;
    }

    findallSongs() {
        return this.songs;
    }
}
