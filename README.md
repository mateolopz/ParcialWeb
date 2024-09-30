# Como ejecutar el proyecto

Clona el proyecto:

```
git clone https://github.com/mateolopz/ParcialWeb.git
```

Dirigete a la carpeta en la que clonaste el repositorio y cambia de directorios con estos comandos:

```
cd ParcialWeb
cd parcial1
```

Instala las dependencias:

```
npm install
```

Corre el proyecto:

```
npm start
```

**OPCIONAL:**

En el release 2 agregué routing para mayor comodidad en la navegacion de componentes. El componente de login corresponde a la página principal **/** y el componente del perfil se puede acceder con la ruta **/profile**, si se usa el primer release será necesario comentar ({/* */}) y descomentar los componentes en el archivo App.js de acuerdo al que se quiera ver 
para ejecutarlos

# Reporte de decisiones

Decidí usar dos componentes para resolver el parcial, el primero sería dedicado a la página de login y el segundo al perfil principal, para el primero implemente hooks de estado para guardar la informacion que el usuario ingrese en los campos de correo y contraseña y así poder realizar verificaciones sobre esta. Para ello use el atributo onChange
de los elementos <input> con el objetivo de llamar  a la función set de los hooks de estado previamente definidos y guardar la información. 

Adicionalmente implemente un botón de Login que al ser oprimido ejecutaria una función que verifica tanto el correo como la contraseña y en caso de ser incorrectos lanzaria una alerta de navegador. Las verificaciones
de la contraseña revisaban que esta tuviera una longitud de 8 caracteres y las del correo se realizaron mediante una expresion regular y revisaban que simplemente tuviera la forma "texto@texto.texto"

En cuanto al segundo componente se usaron tanto hooks de efecto para hacer llamados al mock del backend en Mockaroo como hooks de estado para guardar la informacion que traian estos llamados. Con los datos en uno de los hooks de estado creé el footer en el que muestro cosas como el nombre del usuario y sus mejores tiempos en los tres deportes. En cuanto a
la información central me decidí por mostrar Cards de bootstrap que se generarian dinamicamente por medio de el método map de Javascript con base en la informacion traida en uno de los hooks de estado, sin embargo el tiempo no me alcanzó y en el proyecto se verá incompleto.

Como últimos detalles también usé elementos como <Row> y <Col> de Bootstrap para organizar el contenido así como el paquete de react-intl para internacionalizar el proyecto
