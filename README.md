# Emprende_IA_v3
## Pasos para configurar y probar el software

## 1. Generar una API Key Groq personal
Para poder levantar el backend y que funcione el asistente de IA, se necesita tener una llave de IA.
Debemos dirigirnos a la página https://console.groq.com/keys

Nos registramos en el sitio, y una vez hecho esto, podemos generar una nueva llave en la opción: "Create API Key" Llenamos los campos, le damos un nombre a esta llave y colocamos la duración que queremos darle.

Luego copiamos la llave e inmediatemente la pegamos en un lugar seguro
Recomendación: Pegarlo en un bloc de notas

## 2. Crear el archivo .env propio a partir del .env.template
### ESTE PASO ES MUY IMPORTANTE
Primero debemos dirigirnos a la carpeta backend, la ruta es Emprende_IA_v3/backend

Dentro de esta carpeta podrémos encontrar un archivo llamado .env.template
**copiamos todo su contenido** y posteriormente, **DENTRO DE ESTA MISMA CARPETA**, creamos un archivo personal llamado .env

**Dentro del archivo .env** pegamos lo que copiamos del archivo *env.template*
y donde dice *GROQ_API_KEY=* despues del igual colocamos la api key que generamos en el paso 1.

Finalmente guardamos los cambios después de haber configurado las variables de entorno. Y así procedemos a levantar todo el proyecto a partir de Docker.

## 3. Descargar Docker Desktop y levantar un contenedor
Descargamos la aplicación para el sistema operativo que disponemos. Posteriomente de que se haya instalado, debemos ejecutarlo, para que así su servidor esté funcionando en nuestro PC.

Seguido, debemos abrir un terminal desde la raiz del proyecto, es decir, desde: Emprende_IA_v3
Allí ejecutamos el comando: 
docker-compose up -d --build

Después de haber hecho eso, y que el levantamiento sea de forma correcta, debemos dirigirnos a la dirección para ver el app funcionando.

## 4. Dirección para probar el app
Para ver la interfaz de usuario, donde normalmente utilizarémos el app, abrinos nuestro navegeador y nos dirigimos a la dirección http://localhost

Si se quiere verificar que el backend está funcionando nos dirigimos a http://localhost:8080

Nota: En caso que falle algo posiblemente se deba a que en nuestro PC hay algun servicio que está ocupando el puerto que usa este sistema. Por lo tanto, se debe apagar ese servicio que lo ocupa.