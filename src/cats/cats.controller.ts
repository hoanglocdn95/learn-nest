import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UseFilters,
  Query,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { HttpExceptionFilter } from 'src/http-exception.filter';

import { CreateCatDto, ListAllEntities } from 'src/cats/dto/create-cat.dto';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Post()
  // @Header('Cache-Control', 'none')
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  // @Post('create2')
  // @Header('Cache-Control', 'none')
  // create2(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();

  //   console.log('create2 ~ res.json()', res.json());
  //   // return res.json();
  // }

  // @Post('meo/:id')
  // async createMeow(@Body() createCatDto: CreateCatDto) {
  //   console.log('createMeow ~ createCatDto', createCatDto);
  // }

  // @Get(':id/dogs/:dogId')
  // findOne(@Param() params): string {
  //   console.log('findOne ~ params', params);
  //   return `This action returns a #${params.id} cat`;
  // }

  // @Get('all')
  // findAll1(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items, page: ${query.page})`;
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get(':name')
  async findOne(@Param('name', ParseIntPipe) name: string) {
    return this.catsService.findOne(name);
  }
}
