# Automatización de pruebas con Playwright y TypeScript

Este proyecto tiene como objetivo automatizar pruebas funcionales de una aplicación web utilizando Playwright y TypeScript.

## Instalación

1. Clone este repositorio en su máquina local.
2. Instale las dependencias necesarias en la línea de comandos.

```bash
$ npm install
```

## Uso - Scripts disponibles

Aquí están los scripts disponibles en el proyecto:

- `smock-test`: Ejecuta las pruebas con la bandera `--grep @smock` y utiliza Google Chrome como navegador.
- `test:desktop-chromium`: Ejecuta las pruebas en Chromium.
- `test:desktop-firefox`: Ejecuta las pruebas en Firefox.
- `test:desktop-chrome`: Ejecuta las pruebas en Google Chrome.
- `test:desktop-safari`: Ejecuta las pruebas en Safari con la bandera `--grep @smock`.
- `test:desktop-edge`: Ejecuta las pruebas en Microsoft Edge.
- `test:iphone-13-pro`: Ejecuta las pruebas en iPhone 13 Pro con la bandera `--grep @smock`.
- `test:iPad`: Ejecuta las pruebas en iPad con la bandera `--grep @smock`.
- `test:S9`: Ejecuta las pruebas en un Samsung Galaxy S9.

## Dependencias

Este proyecto depende de las siguientes dependencias:

- [Playwright](https://github.com/microsoft/playwright): Una biblioteca de automatización de pruebas de software para aplicaciones web.
- [Prettier](https://github.com/prettier/prettier): Un formateador de código.

## Generación del informe de pruebas con Allure report

1. Instalación:

```bash
$ npm i -D @playwright/test allure-playwright
```
2. Generar reporte:

```bash
$ allure generate ./allure-results
```

3. Abrir Allure Report:

```bash
$ allure open allure-report
```

## Documentación técnica

Este proyecto está construido utilizando TypeScript y Playwright para la automatización de pruebas. La estructura del proyecto incluye los siguientes componentes:

Archivos de configuración de Playwright (playwright.config.ts): contienen la configuración necesaria para ejecutar las pruebas en diferentes proyectos y navegadores.

Archivos de prueba: contienen los scripts de prueba que se ejecutan utilizando los comandos de scripts de npm.

El proyecto utiliza el plugin allure-playwright para generar informes de las pruebas ejecutadas y hacer un seguimiento de los resultados.

Cada uno de los scripts de prueba se ejecuta en un entorno controlado y se realizan diferentes acciones en la página web, como navegar a una URL específica, interactuar con elementos de la página, y verificar si los resultados cumplen con las expectativas. En caso de fallar alguna prueba, el informe de allure proporcionará detalles sobre el error y la información necesaria para resolverlo.

## Estructura de archivos y carpetas

| Carpeta      | Descripción                                                                                        |
|--------------|----------------------------------------------------------------------------------------------------|
| src          | Contiene los scripts y códigos fuente que se utilizan para automatizar las pruebas.                |
| test         | Contiene los scripts de prueba.                                                                    |
| hooks        | Contiene los scripts de configuración y accesorios que se ejecutan antes y después de cada prueba. |
| task         | Contiene las tareas que se deben realizar para llevar a cabo las pruebas automatizadas.            |
| ui           | Contiene los elementos de la interfaz de usuario que se van a probar.                              |
| interactions | Contiene las interacciones que se deben realizar con los elementos de la interfaz de usuario.      |
| models       | Contiene los modelos que se utilizan para representar los datos que se van a probar.               |
| utils        | Contiene las funciones y utilidades que se utilizan en el proyecto.                                |

## Desarrolladores

Además, este proyecto utiliza las siguientes dependencias de desarrolladores:

- [@playwright/test](https://github.com/microsoft/playwright): Una biblioteca de automatización de pruebas de software para aplicaciones web.
- [allure-playwright](https://github.com/allure-framework/allure-playwright): Una integración de Playwright con Allure para la generación de informes de pruebas.

## Autor

Este proyecto está mantenido por Mauricio Gavilan.

## Licencia

Este proyecto está licenciado bajo la licencia ISC.

```

## Desarrollo

Si desea contribuir a este proyecto, por favor siga las siguientes directrices:

- Utilice un linter para mantener un estilo uniforme de código.
- Realice una revisión de código antes de hacer un pull request.

## Créditos

Agradecemos a [Playwright](https://github.com/microsoft/playwright) y [TypeScript](https://github.com/microsoft/TypeScript) por proporcionar las herramientas necesarias para llevar a cabo esta automatización de pruebas.