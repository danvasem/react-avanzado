# curso-platzi-react-avanzado ⚛️

# Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)

# react-avanzado

Aplicación avanzada de React.JS

## Pasos para descargar y ejecutar el proyecto:

1. Clonar el proyecto

2. Actualizar las dependencias
   `npm install`

3. Si no tienes Now, instalarlo:
   `npm install -g now`

4. Ir a la carpeta 'api' y actualizar el archivo 'now.json' con tus datos. Esta carpeta contiene un pequeño proyecto de backend para utilizarlo en la aplicación, este backend deberá estar publicado para que la aplicación funcione.

5. Ir a la carpeta 'api' y ejecutar 'now' para publicar el backend. Toma nota de la uri de publicación.

6. En el archivo './src/index.js' actualizar la uri por la uri del punto anterior (url del backend), esta es la ruta donde se encuentra publicado el servidor GraphQL:

`const client = new ApolloClient({ uri: "https://petgram-server-XXXXXXXXX.now.sh/graphql",`

7. Cambiar también la uri del archivo './src/Components/ListOfCategories/index.js' con la uri del punto 5. Este archivo muestra como realizar un fetch a un punto REST:

`useEffect(() => { setLoading(true); const getCategories = async () => { let response = await fetch("https://petgram-server-XXXXXXXX.now.sh/categories"); response = await response.json(); setCategories(response); setLoading(false); }; getCategories(); }`

8.  Actualizar las rutas de chaching en el archivo './webpack.config.js' con la uri del punto 5:

          `urlPattern: new RegExp("https://petgram-server-XXXXXXXXX.now.sh"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api"
          }
        }`

9.  Ya puedes ejecutar el proyecto, y si lo deseas publicar también puedes utilizar 'now'.
