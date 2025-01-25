# Proyecto Documentado con JSDoc

Este proyecto incluye la documentación del código fuente utilizando JSDoc.

## Pasos realizados

1. **Instalación de dependencias**:
   - Node.js y JSDoc fueron instalados.
   - `npm install --save-dev jsdoc`

2. **Documentación del código**:
   - Se añadieron comentarios usando la sintaxis de JSDoc.

3. **Automatización con npm**:
   - Se creó un script en `package.json` para ejecutar JSDoc: `npm run doc`.

4. **Generación de documentación**:
   - La documentación fue generada y almacenada en la carpeta `docs`.

## Nota importante

- **node_modules** y la carpeta **docs** están en el archivo `.gitignore` y no se subirán al repositorio.

## Comandos útiles

- Generar la documentación:
  ```bash
  npm run doc