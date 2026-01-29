# Aira

#  Aira – Sistema Experto de Enfermería

Aira es una aplicación de escritorio multiplataforma desarrollada con Electron, que funciona como un sistema experto de enfermería. Permite evaluar síntomas, identificar enfermedades y heridas, emitir recomendaciones básicas de cuidado y aprender nuevo conocimiento de forma incremental, todo mediante reglas y lógica declarativa.

El sistema está pensado para contextos educativos y de apoyo, simulando el razonamiento de una enfermera utilizando inteligencia artificial simbólica (Prolog) y síntesis de voz con ElevenLabs para una interacción más natural.



## Características principales

*  Sistema experto basado en reglas (Prolog)
*  Aprendizaje incremental (el sistema puede aprender nuevas enfermedades o heridas)
*  Síntesis de voz con ElevenLabs
*  Detección y recomendaciones para heridas
*  Sugerencias de medicamentos y cuidados básicos
*  Interfaz gráfica moderna con Electron (HTML + CSS + JS)
*  Arquitectura desacoplada (frontend + backend)


## Arquitectura del sistema

Aira/
├── backend/
│   ├── server.js              # API Express
│   ├── prologService.js       # Motor Prolog
│   ├── conocimiento.pl        # Base de conocimiento
│   └── voz.js                 # Integración con ElevenLabs
│
├── frontend/
│   ├── index.html             # Interfaz principal
│   ├── styles.css             # Estilos
│   └── renderer.js            # Lógica del frontend
│
├── main.js                    # Proceso principal Electron
├── preload.js                 # Bridge seguro
├── package.json
└── README.md


## Inteligencia del sistema

Aira utiliza **inteligencia artificial simbólica**, implementada mediante **reglas lógicas en Prolog**. El sistema:

* Evalúa síntomas ingresados por el usuario
* Realiza inferencias basadas en reglas
* Determina enfermedades, heridas y riesgos
* Genera recomendaciones estructuradas
* Aprende nuevas reglas dinámicamente (aprendizaje incremental)

Este enfoque permite **razonamiento explicable**, a diferencia de los modelos de caja negra.


## Voz – ElevenLabs

La interacción por voz se implementa mediante la API de **ElevenLabs**, que convierte el diagnóstico generado por el sistema en audio, mejorando la experiencia del usuario.

* El backend envía el texto a ElevenLabs
* Se recibe audio en formato binario
* El frontend reproduce la respuesta


## Interfaz y experiencia de usuario

* Diseño claro en dos paneles
* Selección de síntomas mediante dropdown y buscador
* Resultados estructurados y legibles
* Botón de **“Agregar nuevo conocimiento”** tipo enlace
* Imagen ilustrativa alineada dinámicamente
* Retroalimentación visual y por voz


## Instalación

### Requisitos

* Node.js 18+
* npm
* SWI-Prolog instalado y agregado al PATH
* Electron
### Pasos

npm install
npm run backend/server.js
npm start


Para iniciar solo el backend:

npm run backend

## Construcción del ejecutable (.exe)

Se utiliza electron-builder.

Agregar en `package.json`:
"scripts": {
  "start": "electron .",
  "backend": "node backend/server.js",
  "build": "electron-builder"
}


Luego ejecutar:
npm run build


El ejecutable se generará en la carpeta `dist/`.


Este proyecto fue desarrollado como parte de la materia Sistemas Inteligentes, y cumple con los criterios de:

* Inteligencia del sistema
* Implementación técnica
* Funcionamiento y estabilidad
* Complejidad y profundidad
* Interfaz y experiencia de usuario
* Documentación clara



Aviso importante

Aira no sustituye a un profesional de la salud. Es una herramienta educativa y de apoyo.


