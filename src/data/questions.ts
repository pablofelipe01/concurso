export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  level: number;
  htmlCode?: string;
  cssCode?: string;
  jsCode?: string;
}

export const questions: Question[] = [
  // HTML Básico (Niveles 1-5)
  {
    id: 1,
    question: "Si quiero que se vea en la pantalla un título que diga 'Hola Mundo', uso:",
    options: [
      '<p>Hola Mundo</p>',
      '<h1>Hola Mundo</h1>',
      '<div>Hola Mundo</div>',
      '<span>Hola Mundo</span>',
    ],
    correctAnswer: 1,
    level: 1,
    htmlCode: '<h1>Hola Mundo</h1>'
  },
  {
    id: 2,
    question: "Para agregar un párrafo explicativo debajo del título, uso:",
    options: [
      '<h2>Este es mi primer sitio web</h2>',
      '<p>Este es mi primer sitio web</p>',
      '<div>Este es mi primer sitio web</div>',
      '<span>Este es mi primer sitio web</span>',
    ],
    correctAnswer: 1,
    level: 1,
    htmlCode: '<p>Este es mi primer sitio web</p>'
  },
  {
    id: 3,
    question: "Para crear una lista de elementos, uso:",
    options: [
      '<list><item>Elemento 1</item></list>',
      '<ul><li>Elemento 1</li></ul>',
      '<ol><item>Elemento 1</item></ol>',
      '<menu><option>Elemento 1</option></menu>',
    ],
    correctAnswer: 1,
    level: 2,
    htmlCode: '<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>'
  },
  {
    id: 4,
    question: "Para agregar una imagen a mi página, uso:",
    options: [
      '<image src="foto.jpg" />',
      '<img src="foto.jpg" />',
      '<picture src="foto.jpg" />',
      '<photo src="foto.jpg" />',
    ],
    correctAnswer: 1,
    level: 2,
    htmlCode: '<img src="https://via.placeholder.com/200x100/4f46e5/ffffff?text=Mi+Imagen" alt="Mi imagen" />'
  },
  {
    id: 5,
    question: "Para crear un enlace a otra página, uso:",
    options: [
      '<link href="https://google.com">Google</link>',
      '<a href="https://google.com">Google</a>',
      '<url href="https://google.com">Google</url>',
      '<goto href="https://google.com">Google</goto>',
    ],
    correctAnswer: 1,
    level: 2,
    htmlCode: '<a href="https://google.com" target="_blank">Visitar Google</a>'
  },

  // CSS Básico (Niveles 6-10)
  {
    id: 6,
    question: "Para hacer que mi título sea de color azul, uso:",
    options: [
      'h1 { color: red; }',
      'h1 { color: blue; }',
      'h1 { background: blue; }',
      'h1 { font-color: blue; }',
    ],
    correctAnswer: 1,
    level: 6,
    cssCode: 'h1 { color: blue; }'
  },
  {
    id: 7,
    question: "Para centrar el texto en la página, uso:",
    options: [
      'body { text-align: left; }',
      'body { text-align: right; }',
      'body { text-align: center; }',
      'body { align: center; }',
    ],
    correctAnswer: 2,
    level: 6,
    cssCode: 'body { text-align: center; }'
  },
  {
    id: 8,
    question: "Para cambiar el fondo de la página a un color claro, uso:",
    options: [
      'body { background-color: #333; }',
      'body { background-color: #f0f0f0; }',
      'body { color: #f0f0f0; }',
      'body { background: dark; }',
    ],
    correctAnswer: 1,
    level: 7,
    cssCode: 'body { background-color: #f0f0f0; }'
  },
  {
    id: 9,
    question: "Para agregar espacio interno alrededor del contenido, uso:",
    options: [
      'body { margin: 20px; }',
      'body { padding: 20px; }',
      'body { space: 20px; }',
      'body { gap: 20px; }',
    ],
    correctAnswer: 1,
    level: 7,
    cssCode: 'body { padding: 20px; }'
  },
  {
    id: 10,
    question: "Para hacer que las imágenes sean más pequeñas, uso:",
    options: [
      'img { size: 150px; }',
      'img { width: 150px; }',
      'img { scale: 150px; }',
      'img { dimension: 150px; }',
    ],
    correctAnswer: 1,
    level: 8,
    cssCode: 'img { width: 150px; height: auto; }'
  },

  // CSS Intermedio (Niveles 11-15)
  {
    id: 11,
    question: "Para cambiar la fuente del texto, uso:",
    options: [
      'p { font: Arial; }',
      'p { font-family: Arial, sans-serif; }',
      'p { typeface: Arial; }',
      'p { text-font: Arial; }',
    ],
    correctAnswer: 1,
    level: 11,
    cssCode: 'p { font-family: Arial, sans-serif; }'
  },
  {
    id: 12,
    question: "Para hacer que el texto sea más grande, uso:",
    options: [
      'h1 { font-size: 24px; }',
      'h1 { text-size: 24px; }',
      'h1 { size: 24px; }',
      'h1 { font-scale: 24px; }',
    ],
    correctAnswer: 0,
    level: 12,
    cssCode: 'h1 { font-size: 28px; }'
  },
  {
    id: 13,
    question: "Para hacer que el párrafo cambie de color cuando pase el mouse, uso:",
    options: [
      'p:click { color: red; }',
      'p:hover { color: red; }',
      'p:mouse { color: red; }',
      'p:over { color: red; }',
    ],
    correctAnswer: 1,
    level: 13,
    cssCode: 'p:hover { color: red; cursor: pointer; }'
  },
  {
    id: 14,
    question: "Para agregar una sombra al texto, uso:",
    options: [
      'h1 { shadow: 2px 2px 4px gray; }',
      'h1 { text-shadow: 2px 2px 4px gray; }',
      'h1 { box-shadow: 2px 2px 4px gray; }',
      'h1 { font-shadow: 2px 2px 4px gray; }',
    ],
    correctAnswer: 1,
    level: 14,
    cssCode: 'h1 { text-shadow: 2px 2px 4px #888; }'
  },
  {
    id: 15,
    question: "Para hacer que los elementos de la lista no tengan puntos, uso:",
    options: [
      'ul { list-style: none; }',
      'ul { bullets: none; }',
      'ul { points: none; }',
      'ul { markers: none; }',
    ],
    correctAnswer: 0,
    level: 15,
    cssCode: 'ul { list-style: none; }'
  },

  // CSS Avanzado (Niveles 16-17)
  {
    id: 16,
    question: "Para agregar un borde alrededor de las imágenes, uso:",
    options: [
      'img { outline: 2px solid blue; }',
      'img { border: 2px solid blue; }',
      'img { frame: 2px solid blue; }',
      'img { edge: 2px solid blue; }',
    ],
    correctAnswer: 1,
    level: 16,
    cssCode: 'img { border: 3px solid #333; border-radius: 10px; }'
  },
  {
    id: 17,
    question: "Para hacer que el enlace no esté subrayado, uso:",
    options: [
      'a { underline: none; }',
      'a { text-decoration: none; }',
      'a { decoration: none; }',
      'a { line: none; }',
    ],
    correctAnswer: 1,
    level: 17,
    cssCode: 'a { text-decoration: none; color: #007bff; }'
  },

  // JavaScript Básico (Niveles 18-22)
  {
    id: 18,
    question: "Para que aparezca un mensaje de alerta cuando se carga la página, uso:",
    options: [
      'console.log("¡Bienvenido!");',
      'alert("¡Bienvenido!");',
      'print("¡Bienvenido!");',
      'message("¡Bienvenido!");',
    ],
    correctAnswer: 1,
    level: 18,
    jsCode: 'alert("¡Bienvenido a mi sitio web!");'
  },
  {
    id: 19,
    question: "Para cambiar el contenido del título cuando se carga la página, uso:",
    options: [
      'document.querySelector("h1").text = "¡Página Cargada!";',
      'document.querySelector("h1").innerHTML = "¡Página Cargada!";',
      'document.querySelector("h1").content = "¡Página Cargada!";',
      'document.querySelector("h1").value = "¡Página Cargada!";',
    ],
    correctAnswer: 1,
    level: 19,
    jsCode: 'document.querySelector("h1").innerHTML = "¡Página Cargada!";'
  },
  {
    id: 20,
    question: "Para agregar un botón que muestre la hora actual, uso:",
    options: [
      '<button onclick="showDate()">Ver Hora</button>',
      '<button onclick="showTime()">Ver Hora</button>',
      '<button click="showTime()">Ver Hora</button>',
      '<button onpress="showTime()">Ver Hora</button>',
    ],
    correctAnswer: 1,
    level: 20,
    htmlCode: '<button onclick="showTime()">¿Qué hora es?</button>',
    jsCode: 'function showTime() { alert("Son las: " + new Date().toLocaleTimeString()); }'
  },
  {
    id: 21,
    question: "Para mostrar un mensaje en la consola del navegador, uso:",
    options: [
      'alert("Mensaje de prueba");',
      'console.log("Mensaje de prueba");',
      'print("Mensaje de prueba");',
      'display("Mensaje de prueba");',
    ],
    correctAnswer: 1,
    level: 21,
    jsCode: 'console.log("¡Hola desde la consola!");'
  },
  {
    id: 22,
    question: "Para cambiar el color de fondo con JavaScript, uso:",
    options: [
      'document.body.backgroundColor = "lightblue";',
      'document.body.style.backgroundColor = "lightblue";',
      'document.body.background = "lightblue";',
      'document.body.color = "lightblue";',
    ],
    correctAnswer: 1,
    level: 22,
    jsCode: 'document.body.style.backgroundColor = "lightblue";'
  },

  // JavaScript Intermedio (Niveles 23-25)
  {
    id: 23,
    question: "Para crear un contador que se incremente cada segundo, uso:",
    options: [
      'setInterval(contador, 1000);',
      'setTimeout(contador, 1000);',
      'setTimer(contador, 1000);',
      'setCounter(contador, 1000);',
    ],
    correctAnswer: 0,
    level: 23,
    htmlCode: '<div id="contador">Contador: 0</div>',
    jsCode: 'let count = 0; setInterval(() => { count++; document.getElementById("contador").innerHTML = "Contador: " + count; }, 1000);'
  },
  {
    id: 24,
    question: "Para agregar un elemento nuevo a la página dinámicamente, uso:",
    options: [
      'document.add("<p>Nuevo párrafo</p>");',
      'document.createElement("p"); element.innerHTML = "Nuevo párrafo"; document.body.appendChild(element);',
      'document.insert("<p>Nuevo párrafo</p>");',
      'document.write("<p>Nuevo párrafo</p>");',
    ],
    correctAnswer: 1,
    level: 24,
    jsCode: 'const newElement = document.createElement("p"); newElement.innerHTML = "¡Elemento creado dinámicamente!"; document.body.appendChild(newElement);'
  },
  {
    id: 25,
    question: "Para hacer que un elemento desaparezca y aparezca al hacer clic, uso:",
    options: [
      'element.style.visible = element.style.visible === "hidden" ? "visible" : "hidden";',
      'element.style.display = element.style.display === "none" ? "block" : "none";',
      'element.toggle();',
      'element.show() || element.hide();',
    ],
    correctAnswer: 1,
    level: 25,
    htmlCode: '<button onclick="toggleElement()">Mostrar/Ocultar</button><div id="toggleDiv" style="margin-top: 10px;">¡Ahora me ves, ahora no!</div>',
    jsCode: 'function toggleElement() { const div = document.getElementById("toggleDiv"); div.style.display = div.style.display === "none" ? "block" : "none"; }'
  }
];