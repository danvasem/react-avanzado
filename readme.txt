Instalar Webpack:
    npm i webpack wepack-cli --save-dev
    npm install webpack-dev-server --save-dev  (Servidor de desarrollo de Webpack)

    Para compilar un archivo con webpack:
        ./node_modules/.bin/webpack [nombre_archivo]

    Instalamos los plugins para webpack:
        npm install html-webpack-plugin --save-dev

    Creamos el archivo webpack.config.js para configurar webpack

Instalar React y React-Dom
    npm i react react-dom

Instalar Babel
    npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

Instalar Styled-components
    npm install styled-components

Para soportar Intersection Observer:
    npm install intersection-observer

Para soportar async await inside hooks:
    npm install @babel/runtime @babel/plugin-transform-runtime --save-dev
    incoporar el plugin como opcion de "loader" en webpack.config

Para poder utilizar GrapQL con React:
    npm install apollo-boost react-apollo graphql

Para soportar ruteo utilizando Reach Router (NOTA: En el futuro se recomienda volver a utilizar la versión de React Router cuando esta se haya fusionado con Reach Router)
    npm install @reach/router

Instalar React-Icons
    npm install react-icons

Para utilizar react-helmet
    npm install react-helmet

Para utilizar prop types y forzar el tipo de datos de las propiedades de los componentes:
    npm install prop-types

Para crear el manifiesto y que la app sea utilizada como PWA
    npm install webpack-pwa-manifest -D
    npm install workbox-webpack-plugin -D

Utilizar NOW como servidor web
    Iniciar sesión en https://zeit.co
    instalar: npm install -g now    //Para verificar si ya está instalado entonces usar: npm list -g -p now -v
    Para que funcione se debe ubicar el archivo "now.exe" en el directorio global de npm y copiarlo a la carpeta local del proyecto donde se encuentra el archivo now.json

Para crear un Logo de texto:
    https://maketext.io/ -> para crear el logo en svg
    https://jakearchibald.github.io/svgomg/ -> para optimizar el svg y obtener el texto
    https://www.smooth-code.com/open-source/svgr/playground/ -> para obtener el componente React del svg

Para medir el performance de nuestra app:
    Primero se debe compilar el modo desarrollo: ./node_modules/.bin/webpack --mode "development"
    Para servir: npx serve dist -s
    Ahora podemos utilizar la herramienta "performance" del developer tools de Chrome.

    Adicionalmente podemos utilizar la opción 'Audit' de Developer Tools de Chrome, seteando solo la opción PWA. 
    Para esto es necesario que la compilación en webpack este en modo desarrollo: "npm run serve:dev"

Para ejecutar pruebas end to end, instalamos Cypress
    npm install cypress -D
    Ejecutar: ./node_modules/.bin/cypress open