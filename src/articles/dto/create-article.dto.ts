import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateArticleDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @IsOptional()
  description?: string = 'Article'

  @IsNotEmpty()
  @IsString()
  body: string

  @IsBoolean()
  @IsOptional()
  published?: boolean = false

}
