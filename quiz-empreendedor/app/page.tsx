"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Sparkles, Heart, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function QuizPage() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(""))
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const quizData = [
    {
      phase: 1,
      title: "🌅 Desafios do Empreendedorismo",
      question: "Como você se sente ao acordar sabendo das responsabilidades do seu negócio?",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      options: [
        {
          text: "Ansioso, sempre preocupado com o que pode dar errado.",
          emoji: "😰",
          color: "from-red-400 to-red-600",
        },
        {
          text: "Nervoso, mas confiante de que posso resolver os problemas.",
          emoji: "😤",
          color: "from-orange-400 to-orange-600",
        },
        {
          text: "Tranquilo, gosto do que faço e sei que tudo vai se resolver.",
          emoji: "😌",
          color: "from-green-400 to-green-600",
        },
        {
          text: "Apático, não tenho certeza do que esperar do meu dia.",
          emoji: "😐",
          color: "from-gray-400 to-gray-600",
        },
      ],
      explanation:
        "A maneira como você lida com o começo do dia reflete o seu nível de ansiedade. Empreendedores tendem a experimentar diferentes níveis de preocupação com suas responsabilidades.",
    },
    {
      phase: 2,
      title: "🎁 Bônus Especial",
      question:
        "Como um pequeno empreendedor, é normal sentir-se sobrecarregado com tantas tarefas. O que mais te preocupa no dia a dia?",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
      options: [
        { text: "Gestão financeira e fluxo de caixa", emoji: "💰", color: "from-emerald-400 to-emerald-600" },
        { text: "Captação de clientes e vendas", emoji: "📈", color: "from-blue-400 to-blue-600" },
        { text: "Gerenciamento de equipe", emoji: "👥", color: "from-purple-400 to-purple-600" },
        { text: "Equilíbrio entre vida pessoal e profissional", emoji: "⚖️", color: "from-pink-400 to-pink-600" },
      ],
      bonus:
        "Lembre-se, todos os empreendedores enfrentam desafios. O importante é saber que você não está sozinho nesse caminho. Respire fundo e lembre-se de que cada pequeno passo conta para o seu crescimento!",
    },
    {
      phase: 3,
      title: "⚡ Lidar com o Estresse",
      question: "Quando surge um imprevisto no seu negócio, qual é sua primeira reação?",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      options: [
        {
          text: "Fico muito estressado e começo a me preocupar excessivamente.",
          emoji: "😱",
          color: "from-red-400 to-red-600",
        },
        { text: "Tento manter a calma e buscar soluções práticas.", emoji: "🧘", color: "from-green-400 to-green-600" },
        {
          text: "Me sinto frustrado, mas tento não demonstrar para a equipe.",
          emoji: "😤",
          color: "from-orange-400 to-orange-600",
        },
        {
          text: "Acredito que imprevistos fazem parte e me adapto rapidamente.",
          emoji: "🚀",
          color: "from-blue-400 to-blue-600",
        },
      ],
      explanation:
        "Como um empreendedor, sua capacidade de lidar com o estresse de imprevistos é essencial. Isso pode afetar diretamente a sua produtividade e saúde mental.",
    },
    {
      phase: 4,
      title: "💎 Bônus Especial",
      question:
        "A ansiedade pode ser desgastante para um empreendedor. Qual é o seu maior desafio emocional ao administrar seu negócio?",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      options: [
        { text: "Medo de fracassar e perder tudo", emoji: "😨", color: "from-red-400 to-red-600" },
        {
          text: "Sensação constante de que não estou fazendo o suficiente",
          emoji: "😔",
          color: "from-orange-400 to-orange-600",
        },
        {
          text: "Dificuldade para desligar do trabalho e relaxar",
          emoji: "😵",
          color: "from-purple-400 to-purple-600",
        },
        {
          text: "Comparação com outros empreendedores mais bem-sucedidos",
          emoji: "😞",
          color: "from-gray-400 to-gray-600",
        },
      ],
      bonus:
        "Lembre-se de que suas emoções são uma parte natural do processo. Cada dificuldade que você enfrenta é uma oportunidade para crescer e fortalecer seu negócio. Você está indo bem!",
    },
    {
      phase: 5,
      title: "🤝 Conexões e Rede de Apoio",
      question: "Como você costuma buscar apoio quando sente que a pressão está demais?",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      options: [
        {
          text: "Busco conselhos de outros empreendedores ou mentores.",
          emoji: "🎯",
          color: "from-blue-400 to-blue-600",
        },
        { text: "Falo com minha família ou amigos para desabafar.", emoji: "❤️", color: "from-pink-400 to-pink-600" },
        {
          text: "Tento resolver sozinho, mesmo sabendo que isso pode me desgastar.",
          emoji: "🤔",
          color: "from-gray-400 to-gray-600",
        },
        {
          text: "Participo de grupos de apoio para empreendedores para trocar experiências.",
          emoji: "👥",
          color: "from-green-400 to-green-600",
        },
      ],
      explanation:
        "A rede de apoio de um empreendedor pode fazer toda a diferença no combate à ansiedade. Compartilhar experiências e desafios é uma ótima forma de se sentir mais equilibrado e menos solitário.",
    },
  ]

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option.text)
    const newAnswers = [...answers]
    newAnswers[currentPhase] = option.text
    setAnswers(newAnswers)

    // Reproduzir som
    const audio = document.getElementById("clickSound") as HTMLAudioElement
    if (audio) {
      audio.play()
    }

    // Mostrar confetti nas fases de bônus
    if (currentPhase === 1 || currentPhase === 3) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
    }

    // Avançar automaticamente após delay
    setTimeout(() => {
      setSelectedOption(null)
      if (currentPhase < quizData.length - 1) {
        setCurrentPhase(currentPhase + 1)
      } else {
        setShowResult(true)
      }
    }, 1200)
  }

  const handleRestart = () => {
    setCurrentPhase(0)
    setAnswers(Array(5).fill(""))
    setShowResult(false)
    setSelectedOption(null)
  }

  const currentQuestion = quizData[currentPhase]
  const progress = ((currentPhase + 1) / quizData.length) * 100

  // Componente de confetti
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 10,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {showConfetti && <Confetti />}

      <div className="relative z-10 min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {!showResult ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {/* Header com progresso */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-center items-center mb-4">
                    <motion.div
                      className={`p-4 rounded-full bg-gradient-to-r ${currentQuestion.gradient} text-white shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentQuestion.icon}
                    </motion.div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentQuestion.title}</h1>

                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <span className="text-white/80">
                      Fase {currentQuestion.phase} de {quizData.length}
                    </span>
                    {(currentPhase === 1 || currentPhase === 3) && (
                      <motion.div
                        className="flex items-center bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        BÔNUS
                      </motion.div>
                    )}
                  </div>

                  <div className="max-w-2xl mx-auto">
                    <Progress value={progress} className="h-3 bg-white/20 rounded-full overflow-hidden" />
                  </div>
                </motion.div>

                {/* Card principal */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                  <div className="p-8">
                    <motion.h2
                      className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentQuestion.question}
                    </motion.h2>

                    {/* Opções */}
                    <div className="grid gap-4 md:gap-6">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                            selectedOption === option.text
                              ? `bg-gradient-to-r ${option.color} shadow-2xl scale-105`
                              : "bg-white/10 hover:bg-white/20 hover:scale-102"
                          }`}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className={`text-4xl ${selectedOption === option.text ? "scale-125" : ""}`}
                              animate={selectedOption === option.text ? { rotate: [0, 10, -10, 0] } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              {option.emoji}
                            </motion.div>
                            <div className="flex-1">
                              <p
                                className={`text-lg font-medium ${
                                  selectedOption === option.text ? "text-white" : "text-white/90"
                                }`}
                              >
                                {option.text}
                              </p>
                            </div>
                            {selectedOption === option.text && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                              >
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </motion.div>
                            )}
                          </div>

                          {/* Efeito de brilho */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                      ))}
                    </div>

                    {/* Bônus */}
                    {(currentPhase === 1 || currentPhase === 3) && (
                      <motion.div
                        className="mt-8 p-6 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl border border-yellow-400/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="flex items-start space-x-3">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                          </motion.div>
                          <p className="text-white/90 leading-relaxed">{currentQuestion.bonus}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Explicação */}
                    {currentQuestion.explanation && (
                      <motion.div
                        className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        <p className="text-white/80 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Parabéns!</h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl p-6 mb-8"
                  >
                    <p className="text-xl text-white/90 leading-relaxed">
                      O fato de você estar se dedicando a entender sua ansiedade e os desafios que enfrenta no
                      empreendedorismo já é um grande passo. Continue se cuidando e busque apoio sempre que necessário.
                      O caminho do empreendedor não é fácil, mas com paciência e autoconhecimento, você vai conseguir
                      prosperar!
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <Button
                      onClick={handleRestart}
                      className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    >
                      🎁 Resgatar sua Recompensa
                    </Button>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <Button
                        onClick={handleRestart}
                        variant="outline"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 py-2 rounded-full text-sm"
                      >
                        🔄 Fazer Quiz Novamente
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Introdução */}
          {!showResult && currentPhase === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-8"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  🚀 Você está preparado para os desafios de um empreendedor?
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Descubra como a ansiedade e as preocupações impactam o seu processo de empreendedorismo. Este quiz tem
                  5 partes e foi criado para entender como você lida com as dificuldades de ser um pequeno empreendedor.
                  Não se preocupe, nas fases 2 e 4 você ganhará bônus, independentemente das suas respostas!
                </p>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      <audio id="clickSound" src="/sounds/click-sound.mp3" preload="auto"></audio>
    </div>
  )
}
