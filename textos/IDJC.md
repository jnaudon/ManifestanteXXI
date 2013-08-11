# Manual de uso IDJC[¶](#Manual-de-uso-IDJC)

## Introducción a IDJC[¶](#Introducción-a-IDJC)

Internet DJ Console es una herramienta poderosa, flexible y dinámica que permite crear programación radial vía Internet.

> ![image](https://we.riseup.net/assets/70383/main-window.hq_large.png)

Es el lugar donde se crea la secuencia musical que se utilizará en el programa. Además, puede tener algunos controles adicionales que 
veremos más adelante. Puedes arrastrar carpetas y/o archivos a esta zona para agregarlos a la lista. Haciendo doble click sobre una 
canción, ésta comenzará a reproducirse.

> ![image](https://we.riseup.net/assets/70461/playlist_large.png)

### Monitor Mix

Permite cambiar entre los modos de mezcla para quien transmite:

- **Stream** es el audio de lo que se transmite (al presionar los botones de dos estados “Stream” indicados en el punto anterior se activa o desactiva el audio que sale en la transmisión). 
- **DJ** es otro canal de audio, que permite poder escuchar otra cosa mientras se transmite (al presionar los botones de dos estados “DJ” se activa o desactiva el audio que sale en el modo DJ). 
- El **Metadata Source** define desde donde se obtiene la metadata para la transmisión, del reproductor derecha, del reproductor izquierdo, del **Crossfader**, o simplemente no utilizar metadatos.

> **Nota:** Después de varias pruebas, encontramos un **error** de la mayoría de los reproductores de OGG, que no permiten el envío de 
> la metadata, asi que recomendamos sacarla: ![Tipo de metadatos](/attachments/download/37/metadata_fade.png "Tipo de metadatos") poner 
> el tipo de metadata en "None" o Nada
> 
> ![Salida de metadatos](IDJC/metadata_out.png "Salida de metadatos") y en las salidas "OUTs" (Salidas) borrarlos y 
> apretar "Update" (Actualizar)

- El **Crossfader** permite pasar el control de una Lista de temas a otra, de varias maneras: Los botones **L** y **R** pasan de 
inmediato, sin transición. La **barra del crossfader** permite hacerlo manualmente.

![image](https://we.riseup.net/assets/70468/mixer_large.png)

- Los botones **Middle** colocan la barra justo al medio, el primer botón con la metadata de la lista de la izquierda, el segundo con la metadata de la lista de la derecha.
- El control **Response** permite controlar de que manera es el crossfade, si cruzado o excluyente.
- El **Time** permite ingresar un tiempo de crossfade, que se cuenta en segundos.
- Por último, el botón **Pass** realiza la transición automática con los valores antes definidos.

### Indicador de volumen de la Lista de temas[¶](#Indicador-de-volumen-de-la-Lista-de-temas)

Este indicador gráfico entrega el estado del volumen de la reproducción actual en la Lista de temas.

## Indicador de volumen del Micrófono[¶](#Indicador-de-volumen-del-Micrófono)

> ![image](https://we.riseup.net/assets/70464/mic_large.png)

Este indicador gráfico entrega el estado del volumen del Micrófono.

## Control del Micrófono[¶](#Control-del-Micrófono)

![image](https://we.riseup.net/assets/70467/mic%20boton_large.png)

Este botón activa y desactiva el Micrófono. También puedes activar y desactivar éste control, presionando la tecla "m".

## Configurar la estación (Streaming)

**IDJC** es el operador de la radio que se conecta a un servidor de streaming para hacer la transmisión. 
Antes que nada vamos a necesitar un servidor podes conseguir un servidor Icecast en [giss.tv](http://giss.tv/addmount.html)

![Vista general del programa](IDJC/main-window.hq_large.png "Vista general del programa")

La configuración de servidores de streaming en **IDJC** se hace en la ventana de **"Salidas" (Output)**, al que se 
accede desde la ventana principal de **IDJC**. Para configurar el servidor de streaming al que **IDJC** se conecta primero hay que 
conocer los siguientes datos:

> **Servidor de streaming:** [http://giss.tv](http://giss.tv) \
**Número de puerto:** 8000 \
**Punto de montaje (nombre de la radio):** /nuestraradio.ogg \
**Nombre de usuario:** nuestraradio \
**Contraseña:** hackeame

La unión de servidor, puerto y punto de montaje dan la dirección de la radio:
[http://giss.tv:8000/nuestraradio.ogg](http://giss.tv:8000/nuestraradio.ogg)

### Configuración en IDJC

En la ventana de "Salidas" hay seis solapas, cada una representando la configuración de seis 
tipos de salidas distintas. Cada una se configura para un tipo de streaming distinto, por ejemplo para distintas calidades de salida, y 
como mínimo deben tener un servidor de streaming al que conectarse (los demás sirven de respaldo). Para agregar un servidor, dentro de la 
sección **"Configuración" (Configuration)**, usar el botón **"Nuevo" (New)**

![Configuración del servidor](IDJC/metadatos.png "Configuración del servidor")
> Poner los metadatos en blanco, los reproductores todavia no soportan metadatos en **OGG**

Luego corresponde configurar el formato de salida. Si la colección de temas se encuentra en diferentes formatos, IDJC lo convierte todo 
al formato y calidad seleccionados. 

![Datos de la conexión al servidor](IDJC/datos.png "Datos de la conexión al servidor")
> Dentro de la ventana siguiente se escriben los datos del servidor.

Si bien se pueden seleccionar varios formatos, muchos servidores de streaming prefieren usar el formato libre OGG, 
porque a diferencia de [mp3](https://es.wikipedia.org/wiki/MP3) no está [restringido por 
patentes](https://es.wikipedia.org/wiki/Vorbis#Historia).

![Opciones de formato](IDJC/format.png "Opciones de formato")
	
**¡Importante!:** a menor calidad, mayor ancho de banda disponible. Si la conexión es lenta (3G por ejemplo) conviene bajar la calidad de 
salida y de muestreo.

## Monitoreo del streaming

Los círculos de color en cada solapa representan el estado de la conexión: 

- **gris:** desconectado 
- **rojo:** corto la transmissión
- **amarillo:** conectando
- **verde:** conectado

En el encabezado de la ventana, seleccionar el grupo de salidas a las que **conectarse (Group controls)** y presionar el botón 
**Conectar (Connect)**. Abrir **preferencias (prefs)** y poner reconexión automática y sin mostrar el cartel de dialogo.

Mientras se realiza la transmisión es posible monitorear la calidad de la conexión y la cantidad de usuarios conectados en la ventana 
principal de **IDJC**. Si la conexión está andando la barra se ve completamente verde. Si se mueve hacia el rojo significa que la conexión 
es lenta y hay retraso.
