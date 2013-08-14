# Qué es Markdown

> Markdown es un lenguaje de marcado ligero creado originalmente por [John Gruber](http://daringfireball.net/) y [Aaron 
> Swartz](http://es.wikipedia.org/wiki/Aaron_Swartz) que trata de conseguir la máxima legibilidad y "publicabilidad" tanto en sus forma 
> de entrada como de salida, usando texto plano. Markdown convierte el texto marcado en documentos XHTML bien formados.

Lo interesante de este *lenguaje* es que permite leer documentos en su forma original o convertirlo facilmente en otros formatos como 
HTML, siendo mucho más fácil su edición comparado con escribir directamente en HTML, otra ventaja es que es muy rápido escribir en 
MarkDown puesto que no tenemos que quitar las manos del teclado, por lo que considero que el uso de este tipo de lenguajes es la mejor 
opción para escribir contenidos para la WEB. 

## Sintaxis de Markdown

Existen varias versiones de MarkDown, después de su publicación en 2004, Michel Fortin desarrolló una versión extendida en PHP: 
MarkDown PHP Extra, que permitió agregar algunos elementos. En este artículo revisaré ambas, ya que la versión de Fortin ha sido 
ampliamente aceptada, por ejemplo en [MultiMarkDown](http://fletcherpenney.net/multimarkdown/), 
[GFM](http://github.github.com/github-flavored-markdown/) y sitos como [stackOverflow](http://stackoverflow.com/). Las características 
que están disponibles solamente en MarkDown Extra están marcadas con asterisco.

### Párrafos

Por su principio de legibilidad, para escribir párrafos en MarkDown no necesitamos conocer ninguna sintaxis, es simplemente cuestión de 
escribir, la única regla es que cada nueva línea se argegará un nuevo bloque de párrafo `<p>`. La ventaja es que pueden incluirse 
dentro de los párrafos algunas etiquetas, como `<a>`, `<q>`, `<sub>`, `<sup>`, `<abbr>` entre otras.

### Itálicas `<em>`

Dentro de cualquier línea de texto podemos agregar negritas o itálicas, para hacerlo, debemos incluir un asterisco `+` o guión bajo 
`_`, antes y después de la palabra o palabras que se quieran resaltar.

    En este texto, _estas palabras llevan itálicas_. 

### Negritas `<strong>`

Par convertir el texto en negritas, a diferencia de las itálicas, debemos agregar dos caracteres, ya sean asteriscos o guiones bajos.

    En este otro texto **marcamos estas palabras con negritas**.

### Líneas Horizontales `<hr />`

Para crear una línea horizontal podemos utilizar una secuencia de astericos `*` o guiónes medios `-`, y tenemos varias opciones, todas 
ellas muy gráficas.

    * * *
    
    ***
    
    *********
    
    - - -
    
    ---------

### Abreviaturas

En MarkDown extra es posible crear abreviaturas, para ello es necesario declararlas, y cada vez que se utilice la palabra MarkDown 
automáticamente creará un abreviatura

    <abbr title="Hyper Text Markup Language">HTML</abbr>

La sintaxis para definir la abreviatura es la siguiente:

    *[HTML]: Hyper Text Markup Language

Y despues, en cualquier parte del texto, simplmente utilizamos la palabra sin tener que preocuparnos por escribirla con alguna sintaxis 
específica.

### Encabezados

Para escribir un encabezado debemos escribir el signo de número `#` tantas veces como el nivel que desamos de encabezado, por ejemplo:

    # Este es un encabezado con nivel 1 
    #### Este es un encabezado con nivel 4

Alternativamente podemos escribir encabezados `h1` y `h2` agregando cualquier cantidad de signos de igual `=` o menos `-` 
respectivamente en la siguiente línea:

    Encabezado 1
    ===
    Encabezado 2
    ---

### Encabezados con `id`

En PHP Extra también podemos incluir el *id* si lo incluimos después del título entre llaves y anteponiendo el signo de número `{#id}`

    Encabezado1 {#id}
    -------

Y si queremos hacer una tabla de contenidos o simplemente regresar al encabezado, podemos crear un enlace de l siguiente manera:

    [Enlace al Título](#idEncabezado1)

### Citas de Bloque `blockquote`

Para incluir estos elementos, sólo debemos anteponer a cada línea el signo de mayor que `>`. Acepta también citas de bloque anidadas, 
para lo cual agregamos un signo por cada nivel. Y también otros listas, código y encabezados en MarkDown, ejemplo:

    > Comienzo de la cita
    > > Cita Anidada
    > ##Encabezado dos
    > 
    > 1. Lista Numerada
    > 1. Lista numerada, segundo elemento
    >
    >    código....

### Hipervínculos

Los hipervínculos son parte esencial del hipertexto, y me parece que MarkDown tiene una sintaxis muy sencilla e intuitiva para 
agregarlos, podemos decir que existen dos estilos: *en línea* y *por referencia*.

### En línea

Los enlaces se declaran dentro del mismo párrafo, el texto del enlace se escribe entre corchetes `[ ]` mientras que la URL se escribe 
inmediatamente después entre paréntesis `()`, adicicionalmente se puede agregar el atributo `title`, si se escribe inmediatamente 
después de la URL entre comillas `""`.

    [Texto del Enlace](http://example.com "Mensaje del Atributo Título")

El inconveniente es que se puede perde un poco el hilo de la lectura y para evitarlo podemos utilizar el siguiente estilo.

### Por referencia

Funciona parecido a las notas al pié y la sintaxis es muy parecida al estilo *en línea*. En cualquier párrafo se agrega el texto del 
enlace entre corchetes `[ ]` y seguido, también entre corchetes un identificador, generalmente un número:

    [Texto del Enlace][6]

Y al final del documento, agregamos el *id* entre corchetes `[ ]`, seguido de dos puntos `:`. Después incluimos la URL y el atributo 
`title`. Opcionalmente podemos delimitar la URL entre signos de mayor que `<` y menor que `>`.

    ...va al final del texto, 
    [1]: http://example.com "Mensaje del Atributo Título"

Si queremos omitir el id, podemos hacerlo y se utilizar el texto
entre corchetes como id:

    [Ejemplo][]

Y se define después como:

    [Ejemplo]: http://example.com "Mensaje del título"

### Notas al Pie

Las notas al pie son tratadas como hipervínculos, pero dentro del mismo documento, en MarkDown Extra, ponemos dentro del texto nuestra 
referencia con un identificador, generalmente número, precedido por un acento circunflejo y encerrado entre corchetes: `[^]`. La 
definición puede ir en cualquier parte del documento y es muy similar a los enlaces, lleva el identificador, seguido por dos puntos y 
la definición, la cual puede contener elementos de bloque de MarkDown, pero para ello es necesario indentar el texto con cuatro 
espacios.

    [^1]: Este es el texto de mi primer nota al pie.
    [^ref1]:
        En esta segunda referencia, como es más extensa, utilizamos esta otra sintaxis.
        La cual permite que este párrafo también sea incluido dentro de la referencia.

### Imágenes

Las imágenes tienen una sintaxis similar a los hipervínculos, y al
igual que ellos pueden declararse *en línea* o *por referencia*. De
hecho, lo único que se agrega es un signo de exclamación al
inicio.

Ejemplo *en línea*:

    ![Texto Alternativo](/ruta/de/imagen.jgp "Título Opcional")

Ejemplo *por referencia*:

    ![Texto Alternativo][id]
    ...
    [id]: /ruta/de/imagen.jgp "Título Opcional"

### Listas Numeradas y de Viñeta

Las listas de viñetas `ul` y numeradas `ol` tienen la misma
sintaxis lo único que cambia es símbolo inicial. Para las listas de
viñetas se pueden utilizar de manera indistinta los asteriscos `+`,
signos de más o guiones medios `-`. Es importante tomar en cuenta
que para que se pueda interpretar mejor es recomendable agregar una
línea en blanco al incio y al final de la lista.

    * Rojo
    + Verde
    - Azul

Mientras que las listas numeradas llevan un número seguido de un
punto, pueden ser consecutivos o simplemente repetir el mismo:

    1. Rojo
    2. Verde
    5. Azul
    1. Anaranjado

Los elementos de las listas pueden contener código, citas o
párrafos, el único aspecto importante es respetar el carácter con
que comienza cada línea. Información más detallada en la
[documentación oficial](http://daringfireball.net/projects/markdown/syntax).

### Listas de Definición

Un gran aporte de MarkDwon Extra son las listas de definición
`<dl>`, que nos permiten definir palabras frases parecido a un
diccionario. Para escribirla debemos agregar la palabra, después un
retorno de carro, y cada línea que corresponda a ese concepto, debe
comenzar con dos puntos. Y aunque no lo dice la
[documentación oficial](http://michelf.com/projects/php-markdown/extra/#def-list),
creo que indentar es opcional. Para iniciar otra definición debemos
crear una línea en blanco extra.

    MarkDown
    : Es un lenguaje de marcado ligero creado originalmente por John Gruber y Aaron Swartz que trata de conseguir la máxima legibilidad y "publicabilidad" tanto en sus forma de entrada como de salida.
    : Aqí podríamos poner otra definición de MarkDown.

### Código

Para escribir bloques de código, encapsulados en las etiquetas
`<pre>`y `<code>` debemos escribir el texto indentado, al menos por
cuatro espacios o un tabulador:

    <?php
       //El código va aquí
    ?>

Pero si solamente deseamos escribir texto dentro de la etiqueta
`code`, lo podemos escribir en cualquier parte del documento,
envuelto en acentos `` ` ``.

    En este texto, por ejemplo, las etiquetas como `blockquote` y `em`, cuando se interpretan van dentro de la etiqueta "code".

### Código en MarkDown Extra

En MarkDown Extra no tenemos que preocuparnos por indentar el
código de bloque con cuatro espacios, puesto que nos ofrece otra
alternativa, una línea antes y después del bloque utilizar al menos
tres tildes `~~~`. De esta manera, ademá podemos incluir líneas
antes y después del código, sin que MarkDown las elimine.

    ~~~
    <?php
    /*
    * Aquí podemos poner cualquier código, si necesidad de indentarlo
    */
    echo ('es más fácil');
    ~~~

### Tablas

MarkDown Extra, nos permite crear tablas sencillas. La sintaxis me
parece muy acertada pues visualmente tenemeos una tabla, con lo que
se apega a la filosofía de MarkDown.

    | Columna 1     | Columna 2     |
    | ------------- | ------------- |
    | Celda 1, col1 | Celda 2, col2 |
    | Celda 3, col1 | Celda 3, col2 |

La tabulación para que queden las columnas alineadas no es un
requisito, tampoco lo es la pipa al inicio o al final de la cada
fila, por lo que también esta tabla también sería válida.

    Día | Ingresos | Egresos
    --- | --- | ---
    1 | $25000 | $50
    2 | $200 | $320
    3 | $5 | $50000

Adicionalmente, se pueden agregar elementos MarkDown que no sean de bloque, como negritas, énfasis, enlaces, imágenes, etc.

### Elementos HTML

Las etiquetas que pueden ir dentro de párrafos o elementos de bloque, simplemente se escriben dentro del texto, pueden ser `<a>`, 
`<img>`, `<sub>`, `<sup>`, `<code>`, etcétera.

    Si no queremos utilizar la sintaxis de MarkDown, podemos incluir imágenes o enlaces como si se tratara de HTML, o incluso podríamos escribir <code> código entre etiquetas</code>

En MarkDown podemos agregar etiquetas HTML como `<div>`, `<p>`, `<table>`, o incluso etiquetas de HTML5 como `<section>`, `<header>`, 
`<footer>`, que nos permiten enriquecer el formato, para ello sólo es necesario seguir la siguiente regla: *Debe de existir una 
separación antes y después del texto de al menos una línea*.

### Elementos HTML en MarkDown Extra

Aunque con MarkDown es posible agregar etiquetas, el texto que queda dentro no es interpretado, pero en MarkDown Extra no existe esta 
restricción, siempre y cuando se agregue el atributo `markdown=1`, y en el caso del plugin de WordPress, es necesario incluir 
`markdown="block"`. Al respecto creo que como los atributos `required=required`, también se pueden escribir `required`, me parece que 
debería de aceptarse como válido el atributo `markdown`.

    <section class="excerpt" markdown="1">
    Este texto también puede interpretarlo MarkDown, podemos escribir __negritas__, o algún otro elemento no de bloque. El artibuto `markdown="1"`se elemina y se mantiene la clase.
    </section>

El texto anterior nos da como resultado:

Este texto también puede interpretarlo MarkDown, podemos escribir \*\*negritas\*\*, o algún otro elemento no de bloque. El artibuto 
\`markdown="1"\`se elemina y se mantiene la clase.

### Aspectos a considerar

En ocasiones MarkDown se pueden confundir los distintos elementos
de bloque, para evitarlo es recomendable incluir líneas en blanco
antes y después de cada elemento, sobre todo cuando se trata de
listas. Si queremos mostrar algún carácter reservado para MarkDown,
debemos anteponer una diagonal invertida `\`. Los caracteres
especiales son:


Carácter | Escribir
-------- | ---------
Nombre | \\
Diagonal Invertida | \`
Acento Invertido (backt tick) | \_
Guión bajo | \*
Asterisco | []
Corchetes | {}
Curly braces | ()
Paréntesis | !
Signo de Exclamación | \#
Signo de número | +
Signo de más | -
Guión o signo de menos | .
Punto? | : 
Dos Puntos | 

## Herramientas

* Pandoc
* Plugin para Wordpress: [WP Markdown](http://wordpress.org/extend/plugins/wp-markdown/).
