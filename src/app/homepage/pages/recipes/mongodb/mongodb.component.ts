import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BasePageComponent } from '../../page/page.component';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MongodbComponent extends BasePageComponent {
  get dependencies() {
    return `
$ npm install --save mongoose
$ npm install --save-dev @types/mongoose`;
  }

  get dependenciesJs() {
    return `
$ npm install --save mongoose`;
  }

  get databaseProviders() {
    return `
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/nest'),
  },
];`;
  }

  get databaseModule() {
    return `
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}`;
  }

  get catSchema() {
    return `
import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});`;
  }

  get catsProviders() {
    return `
import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';

export const catsProviders = [
  {
    provide: 'CatModelToken',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DbConnectionToken'],
  },
];`;
  }

  get catsProvidersJs() {
    return `
import { CatSchema } from './schemas/cat.schema';

export const catsProviders = [
  {
    provide: 'CatModelToken',
    useFactory: (connection) => connection.model('Cat', CatSchema),
    inject: ['DbConnectionToken'],
  },
];`;
  }

  get catsService() {
    return `
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CatModelToken')
    private readonly catModel: Model<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}`;
  }

  get catsServiceJs() {
    return `
import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
@Dependencies('CatModelToken')
export class CatsService {
  constructor(catModel) {
    this.catModel = catModel;
  }

  async create(createCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll() {
    return await this.catModel.find().exec();
  }
}`;
  }

  get catsModule() {
    return `
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}`;
  }
  
  get catInterface() {
    return `
import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}`;
  }
}
