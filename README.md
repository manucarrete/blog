# Estructura del Proyecto Blog CRUD

El proyecto se organiza en carpetas específicas para facilitar la gestión y el desarrollo de los componentes y servicios:

- **`post`**: Carpeta destinada a alojar los componentes y servicios relacionados con las publicaciones del blog
- **`shared`**: Carpeta para almacenar componentes, servicios y modelos que son compartidos y reutilizables en diferentes partes de la aplicación

## Componentes

Los componentes se generan para manejar específicamente las funcionalidades del CRUD de las publicaciones del blog:

1. **Páginas de la Aplicación:**

    - **Post List Page**: Lista todas las publicaciones disponibles
    - **Post Detail Page**: Muestra los detalles de una publicación específica
    - **Post Create Page**: Permite la creación de una nueva publicación
    - **Post Edit Page**: Habilita la edición de una publicación existente

2. **Post Components:** 

    Componentes creados para cada acción del CRUD dentro de la gestión de publicaciones:
    ```
    ng generate component post/components/post-list
    ng generate component post/components/post-detail
    ng generate component post/components/post-create
    ng generate component post/components/post-edit
    ```

## Enrutamiento

La configuración del enrutamiento se realiza en `app-routing.module.ts`, definiendo rutas específicas para facilitar la navegación entre las distintas páginas y componentes relacionados con el módulo CRUD

## Servicios y Modelos

1. **Servicio `PostService`**: Encargado de consumir la API REST de JSONPlaceholder para realizar las operaciones CRUD sobre las publicaciones

2. **Interfaz `Post`**: Define la estructura de datos de una publicación, mejorando el manejo de estas dentro de la aplicación

## Componente externo

Uso de NgxPaginationModule para la paginacion, este modulo carga todo los datos y los va pasando de 10 en 10. Extraído de **https://www.npmjs.com/package/ngx-pagination**
Otra opción es usar desde la API:

```
GET /posts?_page=1&_per_page=10
```

Por errores que no pude hacer funcionar, encontré la otra solución y la verdad, es un buen componente muy personalizable

## Detalle de Publicación

Se implementa una funcionalidad para visualizar los detalles de una publicación seleccionada, utilizando enlaces en la lista de publicaciones para acceder a sus detalles específicos, pasando el ID de la publicación por URL


---