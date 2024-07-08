# Backend de Pruebas para el Proyecto Final STI-PYC

Para empezar se debe clonar el repositorio e instalar las dependencias

```bash
npm install
```

Después crear una base de datos y guardar el nombre.  

Crear un archivo `.env` en el cuál colocar las variables del archivo `.env.example`

```env
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_HOST=
DB_DIALECT=
```

Colocar los valores correspondientes incluyendo el nombre de la base de datos y levantar el servidor:

```bash
npm run dev
```