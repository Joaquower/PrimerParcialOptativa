# Examen Parcial - Pipeline de GitHub Actions a AWS Fargate

Este proyecto contiene una aplicación **Next.js** profesional que se despliega automáticamente en la infraestructura creada en la **Tarea 2** mediante un Pipeline de GitHub Actions.

## Estructura del Proyecto

- `src/app/`: Código de la aplicación Next.js (Home Page con diseño premium).
- `Dockerfile`: Configuración para empaquetar la aplicación como un contenedor.
- `.github/workflows/deploy.yml`: El Pipeline de CI/CD.
- `task-definition.json`: Definición técnica de la tarea para ECS.

## El Pipeline (CI/CD)

El archivo `.github/workflows/deploy.yml` realiza las siguientes acciones automáticamente en cada `push` a la rama `main`:

cambio sexi

1.  **Checkout:** Descarga el código.
2.  **AWS Auth:** Se autentica en AWS usando Secrets de GitHub.
3.  **ECR Login:** Se conecta al registro de contenedores creado en la Tarea 2.
4.  **Build & Push:** Construye la imagen Docker de Next.js y la sube al ECR.
5.  **Render Task:** Actualiza la definición de la tarea con la nueva imagen.
6.  **Deploy:** Ordena a AWS Fargate que actualice el servicio con la nueva versión (Rolling Update).

## Requisitos para que el Pipeline funcione

Debes configurar los siguientes **Secrets** en tu repositorio de GitHub (`Settings > Secrets and variables > Actions`):

- `AWS_ACCESS_KEY_ID`: Tu llave de acceso de AWS.
- `AWS_SECRET_ACCESS_KEY`: Tu llave secreta de AWS.

## Sincronización con Tarea 2

He configurado el puerto del contenedor en `3000` (estándar de Next.js) tanto en el Pipeline como en las variables de la Tarea 2 para asegurar una conexión perfecta a través del Load Balancer.
IOSISIISIISadasjjjjjjj