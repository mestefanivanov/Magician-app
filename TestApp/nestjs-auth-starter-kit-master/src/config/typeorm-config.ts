import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '333',
    database: 'magician',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};