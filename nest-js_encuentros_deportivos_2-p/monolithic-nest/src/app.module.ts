import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { TorneosModule } from './torneos/torneos.module';
import { PartidosModule } from './partidos/partidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts:10
    }),EquiposModule, TorneosModule, PartidosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
