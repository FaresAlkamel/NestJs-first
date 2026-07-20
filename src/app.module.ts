import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import {SongsController} from './songs/songs.controller';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';


@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
    //ther is too many options for the routes, you can use the following options:
    //forRoutes('songs') // for all routes that start with 'songs'
    //forRoutes({path: 'songs', method: RequestMethod.GET}) // for specific route and method
    //forRoutes({path: 'songs', method: RequestMethod.POST}) // for specific route and method
  }
}
