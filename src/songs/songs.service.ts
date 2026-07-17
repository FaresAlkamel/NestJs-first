import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs:string[] = [];

    createSong(song: string) {
        this.songs.push(song);
        return this.songs;
    }

    findallSongs() {
        return this.songs;
    }
}
