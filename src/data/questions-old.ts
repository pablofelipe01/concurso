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
  {
    id: 1,
    question: "Si quiero que se vea en la pantalla un título que diga 'Hola Mundo', uso:",
    options: [
      '<p>Hola Mundo</p>',
      '<h1>Hola Mundo</h1>',
      '<div>Hola Mundo</div>',
      '<span>Hola Mundo</span>',
      '<title>Hola Mundo</title>'
    ],
    correctAnswer: 1,
    level: 1,
    htmlCode: '<h1>Hola Mundo</h1>'
  },
  {
    id: 2,
    question: "Para crear un párrafo de texto que diga 'Este es mi primer párrafo', uso:",
    options: [
      '<h1>Este es mi primer párrafo</h1>',
      '<p>Este es mi primer párrafo</p>',
      '<div>Este es mi primer párrafo</div>',
      '<text>Este es mi primer párrafo</text>',
      '<paragraph>Este es mi primer párrafo</paragraph>'
    ],
    correctAnswer: 1,
    level: 1,
    htmlCode: '<p>Este es mi primer párrafo</p>'
  },
  {
    id: 3,
    question: "Para hacer que el título sea de color azul, agrego:",
    options: [
      'color: blue;',
      'background-color: blue;',
      'text-color: blue;',
      'font-color: blue;',
      'blue: color;'
    ],
    correctAnswer: 0,
    level: 2,
    cssCode: 'h1 { color: blue; }'
  },
  {
    id: 4,
    question: "Para centrar el texto del título, uso:",
    options: [
      'align: center;',
      'text-align: center;',
      'center: text;',
      'position: center;',
      'margin: center;'
    ],
    correctAnswer: 1,
    level: 2,
    cssCode: 'h1 { text-align: center; }'
  },
  {
    id: 5,
    question: "Para crear un botón que diga 'Haz clic aquí', uso:",
    options: [
      '<input type=\"text\" value=\"Haz clic aquí\">',
      '<button>Haz clic aquí</button>',
      '<click>Haz clic aquí</click>',
      '<btn>Haz clic aquí</btn>',
      '<link>Haz clic aquí</link>'
    ],
    correctAnswer: 1,
    level: 3,
    htmlCode: '<button>Haz clic aquí</button>'
  },
  {
    id: 6,
    question: "Para que el botón muestre una alerta cuando se haga clic, agrego:",
    options: [
      'onclick=\"alert(\'¡Hola!\')\"',
      'onpress=\"alert(\'¡Hola!\')\"',
      'click=\"alert(\'¡Hola!\')\"',
      'ontouch=\"alert(\'¡Hola!\')\"',
      'alert=\"¡Hola!\""'
    ],
    correctAnswer: 0,
    level: 3,
    jsCode: 'onclick=\"alert(\'¡Hola!\')\""'
  },
  {
    id: 7,
    question: "Para cambiar el color de fondo de toda la página a gris claro, uso:",
    options: [
      'body { background: lightgray; }',
      'html { background-color: lightgray; }',
      'page { background: lightgray; }',
      'document { background-color: lightgray; }',
      'body { color: lightgray; }'
    ],
    correctAnswer: 0,
    level: 4,
    cssCode: 'body { background: lightgray; }'
  },
  {
    id: 8,
    question: "Para crear una lista con tres elementos (Manzana, Banana, Cereza), uso:",
    options: [
      '<list><item>Manzana</item><item>Banana</item><item>Cereza</item></list>',
      '<ul><li>Manzana</li><li>Banana</li><li>Cereza</li></ul>',
      '<ol><item>Manzana</item><item>Banana</item><item>Cereza</item></ol>',
      '<menu><option>Manzana</option><option>Banana</option><option>Cereza</option></menu>',
      '<dl><dt>Manzana</dt><dt>Banana</dt><dt>Cereza</dt></dl>'
    ],
    correctAnswer: 1,
    level: 4,
    htmlCode: '<ul><li>Manzana</li><li>Banana</li><li>Cereza</li></ul>'
  },
  {
    id: 9,
    question: "Para hacer que el botón tenga un borde redondeado, uso:",
    options: [
      'border-radius: 10px;',
      'border-round: 10px;',
      'round-border: 10px;',
      'border-curve: 10px;',
      'corner-radius: 10px;'
    ],
    correctAnswer: 0,
    level: 5,
    cssCode: 'button { border-radius: 10px; }'
  },
  {
    id: 10,
    question: "Para cambiar el texto del botón cuando se hace clic, uso:",
    options: [
      'onclick=\"this.text = \'¡Clickeado!\'\"',
      'onclick=\"this.innerHTML = \'¡Clickeado!\'\"',
      'onclick=\"this.content = \'¡Clickeado!\'\"',
      'onclick=\"this.value = \'¡Clickeado!\'\"',
      'onclick=\"this.textContent = \'¡Clickeado!\'\""'
    ],
    correctAnswer: 1,
    level: 6,
    jsCode: 'onclick=\"this.innerHTML = \'¡Clickeado!\'\""'
  }
];