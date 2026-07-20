import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { PhotoModule } from './photo/photo.module';


@Module({
  imports: [SongsModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
