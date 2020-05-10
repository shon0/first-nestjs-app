import { Controller, Get, Post, Redirect, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This actions returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
