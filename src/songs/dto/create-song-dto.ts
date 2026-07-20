import {
  IsArray,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSongDto {

  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  readonly artist!: string;

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate!: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly duration!: number;
}