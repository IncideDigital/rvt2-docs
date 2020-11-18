# Manual de usuario Analyzer

El analizador de RVT2 proporciona una interfaz web para realizar análisis forense en fuentes previamente indexadas en un servidor ElasticSearch. Utilizando el analizador de RVT2, un analista puede ejecutar consultas complejas sobre el contenido de documentos y metadatos, y etiquetar o comentar documentos.

![](https://hackmd.incide.es/uploads/upload_ed0c291cd785b93f858c4c6b84def5e7.png)

El analizador es compatible con todos los navegadores modernos: Google Chrome, Mozilla Firefox, Microsoft Edge y Safari 10+. No es compatible con Internet Explorer o Safari 9 y versiones anteriores.

## ¿Qué hace y qué no hace un indexador?
El analizador RVT2 busca el contenido indexado en ElasticSearch, que utiliza la indexación de motores de búsqueda. Se puede encontrar una buena introducción al tema en https://en.wikipedia.org/wiki/Search_engine_indexing.

El plugin de indexación RVT2 analiza los documentos en una fuente, extrae el contenido y los metadatos de estos documentos e indexa la salida en ElasticSearch. Se pueden configurar muchas opciones diferentes, por ejemplo, para especificar los metadatos exactos a indexar o el idioma del contenido. Las opciones por defecto deben ser suficientes para la mayoría de los casos.

### Contenido
El contenido de un documento se parsea utilizando Tika, se analiza utilizando el [analizador estándar de Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-standard-analyzer.html) y se indexa como texto. Esto quiere decir que:

* Sólo se pueden buscar ficheros soportados por [Tika](https://tika.apache.org/1.19/formats.html).
* El contenido se convertirá a texto en minúsculas y se tokenizará utilizando algunos signos de puntuación como separadores.
* Los signos de puntuación no están indexados.
* Los analizadores de idiomas son opcionales y no se utilizan en la configuración predeterminada de RVT2. Como consecuencia, utilizando la configuración por defecto:
    * Las *Stopwords* (palabras comunes en un idioma) también se indexan.  
    * Los verbos y los sustantivos no están normalizados: los términos en singular no coinciden con los términos en plural.
    * En algunos tipos de consulta, se puede intentar añadir `*` al final del término.
    * El indexador RVT2 soporta varios tipos de consulta según lo definido por ElasticSearch. Actualmente: `match`, `simple_query` y `query_string`. Véase debajo.

![](https://hackmd.incide.es/uploads/upload_76c24526527e33e11e48a12b6abad836.png)

Estos son algunos ejemplos:
* El contenido `The 2 QUICK Brown-Foxes jumped over the lazy dog's bone`. Será tokenizado e indexado como `[ the, 2, quick, brown, foxes, jumped, over, the, lazy, dog's, bone ]`.
    * Notar que las siguientes consultas **no coincidirán** con el contenido porque los términos de las consultas no están presentes en el contenido tokenizado: `fox`, `dog`. Sin embargo, `fox*` y `dog*` podrían coincidir con el contenido.
* El contenido `jhony@someserver.com` se tokeniza y se indexa como `[johny, someserver.com]`.
    * Estas consultas coincidirán:
        * Consulta tipo *match*: `johny@someserver.com`, `johny someserver.com`, `someserver.com`, `"someserver.com johny"` (este tipo interpretará las frases como simples términos OR).
        * Consulta tipo *query_string*: `johny@someserver.com`, `johny someserver.com`, `someserver.com`, `someserver*`, `someserver?com`, `someserver.com johny`, `johny@sameserver.com`.
    * Estas consultas **no coincidirán** porque los términos de las consultas no estarán presentes en el documento tokenizado:
        * Consulta tipo *match*: `someserver`, `johny@someserver` (`someserver.com` se indexa, `someserver` no se indexa), `someserver*` (el tipo *match* no soporta el carácter comodín).
        * Consulta tipo *query_string*: `someserver`, `johny@someserver*`, `"someserver.com johny"` (esta es una frase con orden incorrecto).
* `http://world.com/hello` se tokeniza y se indexa como `[http, world.com, hello]`.

### Metadatos
Los documentos se parsean utilizando Tika, y sus campos de metadatos se asignan de acuerdo al archivo de configuración `tika-mapping.cfg`. Estos campos se analizan utilizando tanto el analizador estándar de Elastic como el [analizador de palabras clave](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-keyword-analyzer.html), y la mayoría de ellos se indexan como texto analizado (campo *content_type*, por ejemplo) y como texto de palabra clave sin procesar (campo *content_type.keyword*, por ejemplo).

Los campos específicos pueden configurarse específicamente para cada caso. No obstante, tratamos de utilizar estos campos en todos los casos:
* *embedded_path*: Si un documento está dentro de otro, esta es la ruta del documento dentro del documento raíz. Los documentos raíz no tienen un *embedded_path*. Por ejemplo:
    * Si el documento es una imagen dentro de un zip, el *embedded_path* es la ruta de la imagen de acuerdo con el archivo zip.
    * Si el documento es un archivo adjunto a un correo electrónico, el *embedded_path* es el nombre del archivo adjunto.
* *path*: La ruta al documento raíz, relativa al directorio de casos. Esta es la ruta del archivo zip o del archivo de correo electrónico en los ejemplos anteriores.
* *filename*: El nombre de archivo del documento raíz.
* *extension*: La extensión del documento raíz. Hay que tener en cuenta que un usuario puede cambiar la extensión de cualquier archivo.
* *content_type*: El tipo de contenido del documento, según el analizador Tika.
* *content*: El contenido del documento, si lo hubiera.
* *author*: El autor del documento según los metadatos, si los hubiera.
* *last_modified*: Cuándo el documento fue modificado de acuerdo a sus metadatos (no al sistema de archivos), si los hubiera.
* *comment*: Un comentario de un analista.
* *tags* (etiquetas): Una lista de etiquetas para este documento.
* *analyst*: El nombre del analista que comentó o etiquetó un documento.
* *blindsearches*: Si está presente, el documento es el resultado de estas búsquedas.

## Iniciando sesión en el sistema

Cuando un analista entra por primera vez en el sistema, introduce su nombre y la URL del servidor ElasticSearch que indexa los documentos.

* El nombre del analista se utiliza para marcar al último analista que comentó o etiquetó un documento. De esta manera, si un analista diferente explora el mismo caso y no entiende por qué un documento se etiqueta como importante, se puede contactar con el analista original.
* Puede haber diferentes servidores de *ElasticSearch* para diferentes casos en la red.

Después de introducir un nombre y una URL de ElasticSearch, se proporciona una lista de índices almacenados en el servidor. Seleccione el índice que le interesa e inicie su análisis.

## Tags y comentarios
Los analistas pueden utilizar texto arbitrario para etiquetar documentos con etiquetas (tags). Algunas etiquetas están clasificadas por color para ayudar durante las inspecciones visuales:

* Color rojo: importante y relevante. Utilice estas etiquetas para documentos de importancia para los objetivos del proceso de investigación.
* Color amarillo: advertencia y comprobación. Utilice estas etiquetas para indicar a otro analista que compruebe sus hallazgos.
* Color verde: visto e irrelevante. Utilice estas etiquetas para marcar un documento como no importante o ya visto.

:::warning
Las etiquetas deben contener sólo letras minúsculas. No se deben utilizar caracteres especiales o espacios.
:::

Los comentarios son texto plano y no tienen sintaxis especial, pero se recomienda el uso de *Markdown*.

## Tipos de consultas
Actualmente, el *analizador del RVT2* proporciona plantillas para tres tipos de consulta diferentes: *query_string*, *simple_query* y *match*. Estos tipos de consulta se describen en profundidad en la documentación de ElasticSearch. A continuación, le ofrecemos algunos ejemplos de su uso.

#### Query String
Las consultas *query_string* utilizan la [sintaxis de Lucene](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) . Por defecto, se buscan todos los campos.

* `*` devuelve todos los documentos. Útil para conocer el tamaño del índice.
* `dog cat` es equivalente a `dog OR cat`. Esta consulta busca documentos que incluyan *dog* o *cat* (ambos términos).
* `dog cat^2` busca documentos que incluyan cualquiera de estos términos, pero considera que *cat* es dos veces más relevante a la hora de ordenar los resultados.
* `dog AND cat` busca documentos que incluyen tanto *dog* como *cat*.
* `dog NOT cat` busca documentos que incluyen *dog* pero no *cat*.
* `(dog OR cat) AND mouse` es un ejemplo de una consulta compleja.
* `ni?o` coincide tanto con *niño* como con *nino*.
* `nina~` corresponde a palabras similares a *nina*, como *niña* o *mina*.
* `"computer virus"~5` busca `computer` y `virus` separados por, como máximo, otras 5 palabras.
* `extension:.pdf AND path:*dog*` busca documentos con la extensión *.pdf* y la palabra *dog* en su ruta (ya sea carpeta o nombre de archivo).
* `last_modified:[2016-01-01 A 2017-12-31]` busca documentos modificados entre el 1 de enero de 2016 y el 31 de diciembre de 2017.
* `tags:important` busca documentos etiquetados como *important*.

#### Simple queries (Consultas simples)
Las consultas simples (*simple_query*) utilizan una [sintaxis simplificada](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html). Por defecto, se buscan todos los campos.
* `*` devuelve todos los documentos. Útil para conocer el tamaño del índice.
* `dog cat` es equivalente a `dog | cat`. Esta consulta busca documentos que incluyan *dog* o *cat* (los dos términos).
* `dog cat^2` busca documentos que incluyan cualquiera de estos términos, per considera a *cat* dos veces más importante cuando ordena los resultados.
* `dog + cat` busca documentos que incluyan *dog* y *cat*.
* `dog + -cat` busca documentos que incluyan *dog* pero no *cat*.
* `(dog | cat) + mouse` es un ejemplo de una consulta compleja.
* `ni?o` coincidirá con *niño* y con *nino*.
* `nina~` buscará palabras que coincidan con *nina*, como *niña* o *mina*.
* `"computer virus"~5` busca `computer` y `virus` separados por, como máximo, otras 5 palabras.

#### Match
Las consultas de tipo *Match* son consultas simples que buscan únicamente en el campo *content*. El texto se busca tal cual, sin ninguna sintaxis especial.

