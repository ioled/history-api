# API History

Esta aplicación consulta la telemetría de los dispositivos alojados en el espacio de "IoT Core" de Google Cloud dependiendo de la configuración del usuario. La salida esperada tiene el formato que necesita el paquete de javascript **Chart.js**

## Configuración del usuario

La configuración que debe realizar el usuario debe ser especificar la variable de entorno correspondiente al nombre de la tabla de **Big Query**

## Rutas en funcionamiento

- Entrega la telemetría disponible del último día

```
    /day/:device
```

- Entrega la telemetría disponible de la última semana

```
    /week/:device
```

- Entrega la telemetría disponible del último mes

```
    /month/:device
```
