# Sinpe-Móvil

## Requerimientos previos

- Instalar [docker](https://docs.docker.com/engine/install/ubuntu/) y [docker-compose](https://docs.docker.com/compose/install/)
- Instalar [nodejs](https://nodejs.org/es/download/)
- Instalar [ngrok](https://ngrok.com/) (únicamente para pruebas)



## Configuraciones

Para configurar los headers revisar el docker-compose.yml

```yaml
api:
...
    environment:
      - SECRET=<su secreto>
      - KEY=<su key>

```

Para configurar el dominio hacia donde se debe de hacer la solictud para validar la transacción modificar la variable dentro del archivo docker-compose.yml

```yaml
client:
...
- REACT_APP_DOMAIN=<modificar con el dominio dado por ngrok>

```

## Iniciar el proyecto

Iniciar ngrok en el puerto 5000 para poder dar acceso al teléfono entrando a la carpeta donde se encuentra el ejecutable.

```bash
./ngrok http 5000
```

Entrar a la raiz del repositorio y correr el siguiente comando.

```bash
docker-compose up -d
```

## Notas

El uso de ngrok es para pruebas locales en caso de tener un servidor y dominio ngrok es innecesario