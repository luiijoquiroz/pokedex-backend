<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar
```bash
$ npm install
```

3. Tener Nest CLI Instalado
```bash
$ npm i -g @nestjs/cli
```
4. Levantar la base de datos

```bash
$ podman-compse up -d 
```

5. Clonar el archivo __.env.template__ y renombrar la copia a
```
.env
```

6. Llenar las variables de entorno definidas en el ```env```

7. Levantar la aplicacion en de:
```
npm run start:dev

```

8. Reconstruir la base de datos

```
localhost:3001/api/v2/seed
```

## Stack
* Mongo
* Nest
