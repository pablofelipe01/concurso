'use client';

import React, { useState, useEffect } from 'react';
import { questions } from '@/data/questions';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  level: number;
  htmlCode?: string;
  cssCode?: string;
  jsCode?: string;
}

export default function Home() {
  // Función para mezclar solo las opciones de respuesta (algoritmo Fisher-Yates)
  const shuffleOptions = (options: string[], correctAnswer: number) => {
    const shuffledOptions = [...options];
    const correctOption = options[correctAnswer];
    
    // Mezclar el array de opciones
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Encontrar la nueva posición de la respuesta correcta
    const newCorrectAnswer = shuffledOptions.indexOf(correctOption);
    
    return { shuffledOptions, newCorrectAnswer };
  };



  const [questionsWithShuffledOptions, setQuestionsWithShuffledOptions] = useState<Question[]>(questions);
  const [isClient, setIsClient] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [accumulatedHTML, setAccumulatedHTML] = useState('');
  const [accumulatedCSS, setAccumulatedCSS] = useState('');
  const [accumulatedJS, setAccumulatedJS] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  // Inicializar opciones aleatorias solo en el cliente
  useEffect(() => {
    setIsClient(true);
    
    const shuffledQuestions = questions.map(question => {
      const { shuffledOptions, newCorrectAnswer } = shuffleOptions(question.options, question.correctAnswer);
      return {
        ...question,
        options: shuffledOptions,
        correctAnswer: newCorrectAnswer
      };
    });
    
    setQuestionsWithShuffledOptions(shuffledQuestions);
  }, []);

  const currentQuestion = questionsWithShuffledOptions[currentQuestionIndex];

  // Mostrar loading hasta que el cliente esté listo
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-bold">Preparando tu experiencia...</p>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      
      if (currentQuestion.htmlCode) {
        setAccumulatedHTML(prev => prev + '\n' + currentQuestion.htmlCode);
      }
      if (currentQuestion.cssCode) {
        setAccumulatedCSS(prev => prev + '\n' + currentQuestion.cssCode);
      }
      if (currentQuestion.jsCode) {
        setAccumulatedJS(prev => prev + '\n' + currentQuestion.jsCode);
      }
    }
  };

  const handleNext = () => {
    if (isCorrect) {
      if (currentQuestionIndex < questionsWithShuffledOptions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameEnded(true);
      }
    } else {
      // Reiniciar el juego con opciones mezcladas nuevamente (solo si estamos en el cliente)
      if (isClient) {
        const newShuffledQuestions = questions.map(question => {
          const { shuffledOptions, newCorrectAnswer } = shuffleOptions(question.options, question.correctAnswer);
          return {
            ...question,
            options: shuffledOptions,
            correctAnswer: newCorrectAnswer
          };
        });
        setQuestionsWithShuffledOptions(newShuffledQuestions);
      }
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setAccumulatedHTML('');
      setAccumulatedCSS('');
      setAccumulatedJS('');
      setCorrectAnswers(0);
    }
  };

  const restartGame = () => {
    // Mezclar opciones nuevamente al reiniciar (solo si estamos en el cliente)
    if (isClient) {
      const newShuffledQuestions = questions.map(question => {
        const { shuffledOptions, newCorrectAnswer } = shuffleOptions(question.options, question.correctAnswer);
        return {
          ...question,
          options: shuffledOptions,
          correctAnswer: newCorrectAnswer
        };
      });
      setQuestionsWithShuffledOptions(newShuffledQuestions);
    }
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAccumulatedHTML('');
    setAccumulatedCSS('');
    setAccumulatedJS('');
    setCorrectAnswers(0);
    setGameEnded(false);
  };

  const getTopicInfo = () => {
    if (currentQuestion.level <= 2) return { name: 'HTML', color: 'bg-gradient-to-r from-red-500 to-pink-500' };
    if (currentQuestion.level <= 4) return { name: 'CSS', color: 'bg-gradient-to-r from-blue-500 to-purple-500' };
    return { name: 'JavaScript', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' };
  };

  const createPreviewContent = () => {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background: white;
      line-height: 1.6;
    }
    ${accumulatedCSS}
  </style>
</head>
<body>
  ${accumulatedHTML}
  <script>
    try {
      ${accumulatedJS}
    } catch (error) {
      console.error('Error en JavaScript:', error);
    }
  </script>
</body>
</html>`;
  };

  if (gameEnded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-glass text-center">
              <div className="mb-8">
                <div className="text-8xl mb-6">🎉</div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  ¡Increíble!
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
                <p className="text-2xl text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Has dominado HTML, CSS y JavaScript completando todos los desafíos y construyendo una página web completa
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-2xl p-6 mb-10 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                  <p className="text-emerald-200 font-bold text-xl">
                    Puntuación perfecta: {correctAnswers}/{questionsWithShuffledOptions.length} respuestas correctas
                  </p>
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>

              <div className="mb-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-glass">
                  <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-6 border-b border-white/10">
                    <span className="font-bold text-white text-xl">Tu Obra Maestra Web</span>
                  </div>
                  <div className="p-8">
                    <div className="border-2 border-white/20 rounded-2xl overflow-hidden bg-white shadow-elegant">
                      <iframe
                        srcDoc={createPreviewContent()}
                        className="w-full h-96 border-0"
                        title="Página Web Final"
                        sandbox="allow-scripts"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={restartGame}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-4 px-8 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 font-bold text-lg shadow-lg"
                >
                  🎲 Nuevo Desafío Aleatorio
                </button>
                <p className="text-slate-400 text-sm">
                  ¿Listo para otro desafío? ¡Nuevas preguntas en orden diferente!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const topic = getTopicInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>
      
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                CodeCraft Academy
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Domina HTML, CSS y JavaScript construyendo una página web interactiva paso a paso
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="text-slate-400 text-sm font-medium">Preguntas en orden aleatorio</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-glass">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-slate-300 font-medium">Progreso:</span>
                  <span className="font-bold text-white text-lg">{currentQuestionIndex + 1}/{questionsWithShuffledOptions.length}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-glass">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 font-medium">Aciertos:</span>
                  <span className="font-bold text-emerald-400 text-lg">{correctAnswers}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className={`${topic.color} p-6 text-white relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold block">Pregunta {currentQuestion.id}</span>
                      <span className="text-white/80">Nivel {currentQuestion.level}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                      <span className="font-bold text-lg">{topic.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "group w-full p-6 text-left border border-white/20 rounded-2xl transition-all duration-300 ";
                  
                  if (!showResult) {
                    buttonClass += selectedAnswer === index 
                      ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-purple-400/50 shadow-lg" 
                      : "bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm";
                  } else {
                    if (index === currentQuestion.correctAnswer) {
                      buttonClass += "bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border-emerald-400/50 shadow-lg";
                    } else if (selectedAnswer === index && !isCorrect) {
                      buttonClass += "bg-gradient-to-r from-red-500/30 to-pink-500/30 border-red-400/50 shadow-lg";
                    } else {
                      buttonClass += "bg-white/5 border-white/10 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      className={buttonClass}
                      disabled={showResult}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center">
                          <span className="font-bold text-white text-lg">
                            {String.fromCharCode(65 + index)}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <code className="text-base bg-slate-900/80 text-emerald-400 px-4 py-3 rounded-xl border border-slate-700/50 block font-mono backdrop-blur-sm">
                            {option}
                          </code>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-8">
                  {isCorrect ? (
                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 p-6 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">✓</span>
                        </div>
                        <div>
                          <span className="font-bold text-emerald-300 text-xl block">¡Excelente!</span>
                          <span className="text-emerald-200 text-sm">Respuesta correcta</span>
                        </div>
                      </div>
                      <p className="text-emerald-100 mb-6 text-lg">
                        Perfecto, el código se ha integrado a tu página web.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 p-6 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">✗</span>
                        </div>
                        <div>
                          <span className="font-bold text-red-300 text-xl block">¡Ups!</span>
                          <span className="text-red-200 text-sm">Respuesta incorrecta</span>
                        </div>
                      </div>
                      <p className="text-red-100 mb-6 text-lg">
                        Debes empezar de nuevo. La respuesta correcta era: <strong className="text-white">{String.fromCharCode(65 + currentQuestion.correctAnswer)}</strong>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleNext}
                    className={`mt-6 w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 ${
                      isCorrect 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg' 
                        : 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg'
                    }`}
                  >
                    <span className="text-lg">
                      {isCorrect ? 'Continuar al Siguiente Nivel →' : '↺ Reintentar desde el Inicio'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-glass overflow-hidden">
              <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-6 py-5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm"></div>
                      <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"></div>
                      <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <span className="font-bold text-white text-lg">Live Preview</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
                      accumulatedHTML 
                        ? 'bg-gradient-to-r from-red-500/30 to-pink-500/30 border-red-400/50 text-red-200' 
                        : 'bg-slate-700/50 border-slate-600/50 text-slate-400'
                    }`}>
                      <span className="font-medium text-sm">HTML</span>
                    </div>
                    <div className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
                      accumulatedCSS 
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400/50 text-blue-200' 
                        : 'bg-slate-700/50 border-slate-600/50 text-slate-400'
                    }`}>
                      <span className="font-medium text-sm">CSS</span>
                    </div>
                    <div className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
                      accumulatedJS 
                        ? 'bg-gradient-to-r from-yellow-400/30 to-orange-500/30 border-yellow-400/50 text-yellow-200' 
                        : 'bg-slate-700/50 border-slate-600/50 text-slate-400'
                    }`}>
                      <span className="font-medium text-sm">JS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {accumulatedHTML || accumulatedCSS || accumulatedJS ? (
                  <div className="border-2 border-white/20 rounded-2xl overflow-hidden bg-white shadow-soft">
                    <iframe
                      srcDoc={createPreviewContent()}
                      className="w-full h-96 border-0"
                      title="Vista Previa del Código"
                      sandbox="allow-scripts"
                    />
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-white/30 rounded-2xl h-96 flex flex-col items-center justify-center text-slate-300 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                    <div className="text-8xl mb-6 opacity-50">🌐</div>
                    <div className="text-center max-w-md space-y-4">
                      <h3 className="text-2xl font-bold text-white">Tu página web aparecerá aquí</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Responde correctamente las preguntas y observa cómo se construye tu sitio web paso a paso con cada acierto
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-lg font-bold text-white">
                    Pregunta {currentQuestionIndex + 1} de {questionsWithShuffledOptions.length}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <span className="text-white font-bold text-lg">
                    {Math.round(((currentQuestionIndex + 1) / questionsWithShuffledOptions.length) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full"></div>
                <div 
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-3 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                  style={{ width: `${((currentQuestionIndex + 1) / questionsWithShuffledOptions.length) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}