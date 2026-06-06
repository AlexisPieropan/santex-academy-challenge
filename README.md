# FIFA Players Manager - Challenge Santex

## Autor

**Alexis Pieropan**

Challenge Técnico - Santex Academy

---

# Descripción

Aplicación web desarrollada para la gestión de jugadores de FIFA utilizando:

* Angular
* NestJS
* MySQL
* Sequelize ORM
* JWT Authentication
* Docker
* Angular Material
* Chart.js

La aplicación permite consultar, crear y editar jugadores, además de proteger la información mediante autenticación JWT.

---

# Arquitectura

## Frontend

Desarrollado con Angular utilizando Standalone Components.

Componentes principales:

* Login
* Register
* Player List
* Player Detail
* Player Create
* Player Edit

## Backend

Desarrollado con NestJS organizado por módulos:

* Auth
* Users
* Players

Patrón Repository para acceso a datos.

ORM utilizado:

* Sequelize
* sequelize-typescript

## Base de Datos

* MySQL

---

# Funcionalidades Implementadas

## Autenticación

* Login mediante JWT.
* Registro de usuarios.
* Protección de endpoints mediante JwtAuthGuard.
* Persistencia de usuarios en base de datos.

## Jugadores

### Listado

* Consulta paginada.
* Búsqueda por nombre.
* Navegación entre páginas.

### Detalle

* Vista individual de jugador.
* Información completa.
* Visualización de habilidades mediante Radar Chart.

### Crear jugador

* Formulario de creación.
* Persistencia en MySQL.

### Editar jugador

Permite modificar:

* Nombre
* Club
* Posición
* Nacionalidad
* Rating
* Speed
* Shooting
* Passing
* Dribbling

---

# Endpoints Disponibles

## Auth

### Login

POST /auth/login

Body:

{
"username": "usuario",
"password": "password"
}

### Registro

POST /auth/register

Body:

{
"username": "usuario",
"password": "password"
}

---

## Players

### Obtener jugadores

GET /api/players?page=1&limit=20&search=

### Obtener jugador

GET /api/players/:id

### Crear jugador

POST /api/players

### Editar jugador

PUT /api/players/:id

---

# Cómo Ejecutar el Proyecto

## Requisitos

* Docker
* Docker Compose

## Clonar repositorio

git clone <url-del-repositorio>

cd <repositorio>

## Levantar aplicación

docker-compose up

o

docker-compose up --build

## Frontend

Disponible en:

http://localhost:4200

## Backend

Disponible en:

http://localhost:3000

---

# Credenciales de Prueba

Usuario:

test

Contraseña:

123456

También es posible crear nuevos usuarios desde la pantalla de registro.

---

# Validaciones Implementadas

## Backend

* DTOs de NestJS.
* Validaciones mediante class-validator.
* Manejo de errores HTTP.
* ParseIntPipe para validación de parámetros.

## Frontend

* Formularios con validaciones básicas.
* Manejo de errores de autenticación.
* Mensajes de error en creación y edición.

---

# Decisiones Técnicas

## JWT

Se utilizó JWT para proteger todos los endpoints relacionados con jugadores.

## Angular Material

Se utilizó Angular Material para mejorar la presentación visual y reutilizar componentes.

## Chart.js

Se utilizó Radar Chart para representar visualmente las habilidades de los jugadores.

## Sequelize

Se eligió Sequelize para facilitar el acceso a MySQL mediante ORM.

---

# Historial de Desarrollo y Checkpoints

## Checkpoint 1

Implementación del listado inicial de jugadores consumiendo el backend.

## Checkpoint 2

Implementación de búsqueda y paginación.

## Checkpoint 3

Implementación de pantalla de detalle con Radar Chart.

## Checkpoint 4

Implementación del endpoint y pantalla para creación de jugadores.

## Checkpoint 5

Implementación del endpoint y pantalla para edición de jugadores.

## Checkpoint 6

Implementación de autenticación JWT y protección de endpoints.

## Checkpoint 7

Implementación de registro de usuarios persistidos en MySQL.

## Checkpoint 8

Mejoras visuales generales:

* Login
* Registro
* Crear jugador
* Editar jugador
* Home

---

# Problemas Encontrados y Soluciones

## Error de rutas Angular

Se detectaron errores de importación por referencias incorrectas a servicios.

Solución:

* Corrección de imports.
* Reorganización de estructura de carpetas.

## Error de parámetro NaN

La vista de detalle intentaba cargar:

/api/players/NaN

Solución:

* Corrección de rutas.
* Validación correcta del parámetro id.

## Error de autenticación

Los endpoints devolvían 401 Unauthorized.

Solución:

* Implementación completa de JWT.
* Persistencia de usuarios.
* Login conectado a base de datos.

## Error de permisos Docker + Git

Algunos archivos fueron creados como root por Docker.

Esto impedía:

* git checkout
* git merge
* git clean

Solución:

sudo chown -R $USER:$USER football-api

---

# Funcionalidades Pendientes (Extras)

No implementadas por limitación de tiempo:

* Exportación CSV.
* Importación CSV.
* Línea temporal de evolución de habilidades.
* Integración con IA para análisis narrativo de evolución de jugadores.

---

# Conclusión

La aplicación cumple con los requisitos funcionales principales solicitados en el challenge:

* Login autenticado.
* Registro de usuarios.
* Listado de jugadores.
* Búsqueda y paginación.
* Detalle con gráfico.
* Creación de jugadores.
* Edición de jugadores.
* Backend protegido mediante JWT.
* Persistencia en MySQL.
* Ejecución mediante Docker.
