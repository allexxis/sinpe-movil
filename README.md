# Sinpe-Móvil

## Requerimientos previos

- Instalar [docker](https://docs.docker.com/engine/install/ubuntu/) y [docker-compose](https://docs.docker.com/compose/install/)
- Instalar [nodejs](https://nodejs.org/es/download/)
- Instalar [ngrok](https://ngrok.com/) (únicamente para pruebas)



## Configuraciones

Para configurar los headers revisar el archivo repo→api→app.js modifcar las constantes

```javascript
const key = '5Ty%ym%=}PESSVGAcLKe:Ck=k+dvh2aUpV6%5u&zu@6d(+hB=6';

const secret = 'VZx&uy8#!Ce+StDSDp]Bi3M,=.CP[n/qCKT:H62WkX;7qC-.}B';
```

## Inicar el proyecto

Entrar a la raiz del repositorio y correr el siguiente comando.

```bash
docker-compose up -d
```

