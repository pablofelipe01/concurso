# Plataforma de Aprendizaje HTML/CSS/JS

Una plataforma interactiva de aprendizaje donde los estudiantes aprenden HTML, CSS y JavaScript a través de preguntas de selección múltiple progresivas.

## 🎯 Características

- **Aprendizaje Progresivo**: Las preguntas aumentan en dificultad gradualmente
- **Vista Previa en Tiempo Real**: Los estudiantes ven cómo su código se construye paso a paso
- **Sistema de Retroalimentación**: Respuestas inmediatas con explicaciones
- **Reinicio Automático**: Si una respuesta es incorrecta, el juego reinicia desde el principio
- **Interfaz Responsiva**: Funciona en desktop y móviles

## 🚀 Tecnologías

- **Next.js 15**: Framework de React para aplicaciones web
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de CSS para diseño rápido
- **React**: Biblioteca para interfaces de usuario

## 📋 Requisitos Previos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repo>
cd examen
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🎮 Cómo Funciona

1. **Pregunta Inicial**: Comienza con preguntas básicas de HTML
2. **Selección Múltiple**: 5 opciones por pregunta, solo 1 correcta
3. **Retroalimentación Inmediata**: 
   - ✅ **Correcta**: El código se agrega a la vista previa
   - ❌ **Incorrecta**: Muestra "Sales de la fila" y reinicia
4. **Progresión**: HTML → CSS → JavaScript
5. **Finalización**: Al completar todas las preguntas, muestra la página web final

## 📚 Estructura de Preguntas

### Nivel 1-2: HTML Básico
- Títulos (`<h1>`)
- Párrafos (`<p>`)
- Listas (`<ul>`, `<li>`)
- Botones (`<button>`)

### Nivel 3-4: CSS Básico
- Colores (`color: blue`)
- Alineación (`text-align: center`)
- Fondos (`background-color`)

### Nivel 5+: JavaScript Básico
- Eventos (`onclick`)
- Alertas (`alert()`)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Directorio de rutas (Next.js 13+)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página de inicio
├── components/            # Componentes React
│   ├── LearningPlatform.tsx  # Componente principal
│   ├── QuestionCard.tsx      # Tarjeta de pregunta
│   └── PreviewPanel.tsx      # Panel de vista previa
└── data/
    └── questions.ts       # Base de datos de preguntas
```

## 🔧 Comandos Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar versión de producción
- `npm run lint` - Verificar código con ESLint

## 🎨 Personalización

### Agregar Nuevas Preguntas

Edita el archivo `src/data/questions.ts`:

```typescript
{
  id: 9,
  question: "Tu nueva pregunta aquí",
  options: ["Opción A", "Opción B", "Opción C", "Opción D", "Opción E"],
  correctAnswer: 1, // Índice de la respuesta correcta (0-4)
  level: 5,
  htmlCode: "<div>Código HTML opcional</div>",
  cssCode: "div { color: red; }",
  jsCode: "console.log('Hola');"
}
```

### Modificar Estilos

Los estilos usan Tailwind CSS. Modifica las clases en los componentes o agrega estilos personalizados en `globals.css`.

## 🐛 Resolución de Problemas

- **Puerto ocupado**: Cambia el puerto con `npm run dev -- -p 3001`
- **Errores de TypeScript**: Ejecuta `npm run build` para ver errores detallados
- **Problemas de estilo**: Verifica que Tailwind CSS esté configurado correctamente

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, abre un issue en el repositorio.# concurso
