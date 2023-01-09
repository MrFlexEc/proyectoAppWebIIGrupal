//Se importa la libreria DataSource para crear la conexión de la base de datos
import { DataSource } from 'typeorm';

export const DatabaseED = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '34.72.45.125',
        port: 5432,
        username: 'Xavier', 
        password: 'admin',
        database: 'encuentros_deportivos2P',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true
        
      });

      return dataSource.initialize();
    },
  },
];