import Button from "@/src/components/Button/Button";
import Header from "@/src/components/Header/Header";
import { Pressable, ScrollView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { questionsBySession } from '../../questions/questions';
import { RelativePathString, router } from "expo-router";

export default function Quiz() {
  const [respostas, setRespostas] = useState([]);
  const [sessionU, setSession] = useState(0);
  const [levelU, setLevel] = useState(0);
  const [listQuestions, setListQuestions] = useState([]);
  const [questionAtual, setQuestionAtual] = useState(0);

  // Função para carregar os dados de sessão e nível
  const getP = async () => {
    const session1 = await AsyncStorage.getItem('session');
    const level1 = await AsyncStorage.getItem('level');
    if (session1) setSession(parseInt(session1));
    if (level1) setLevel(parseInt(level1));
  };

  // Usar useEffect para chamar getP uma vez quando o componente for montado
  useEffect(() => {
    getP();
  }, []);

  // Verificar se sessionU e levelU foram definidos e buscar as perguntas
  useEffect(() => {
    if (sessionU > 0 && levelU > 0) {
      const sessionData = questionsBySession[sessionU - 1];
      if (sessionData && sessionData.questions) {
        const questionList = sessionData.questions.filter(
          question => question.level === levelU
        );
        setListQuestions(questionList);
      } else {
        console.log('Erro: Dados de sessão ou perguntas não encontrados.');
      }
    }
  }, [sessionU, levelU]);



  const handleClick = (isTrue) => {
  const updatedRespostas = [...respostas, isTrue];
  setRespostas(updatedRespostas);

  const respostasString = JSON.stringify(updatedRespostas);

  if (listQuestions.length === questionAtual + 1) {
    router.push(`./resultado?respostas=${encodeURIComponent(respostasString)}`);
  } else {
    setQuestionAtual(questionAtual + 1);
  }
};

  return (
    <View className="flex flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="h-[calc(100%-76px)] px-6">
        {/* Marcador de questões + Botão de dica */}
        <View className="flex flex-row justify-between">
          <ScrollView className="flex flex-row flex-grow-0 items-center rounded-full px-2 py-2 bg-[#333333]" horizontal>
            {respostas.map((valor, id) => 
              <span 
                key={id} 
                className="w-[33px] h-[33px] rounded-full mx-1" 
                style={{ backgroundColor: valor ? "#41FF8A" : valor === undefined ? "#8D8D8D" : "#FF7C7C" }}>
              </span>
            )}
          </ScrollView>

          {/* Botão da dica */}
          <Pressable>
            <Text className="w-[44px] text-base font-medium color-[#81D2E2] rounded-full px-4 py-2 border-2 border-[#81D2E2] bg-[#333333]">?</Text>
          </Pressable>
        </View>

        {/* Imagem Ilustrativa (? talvez nem precise) */}
        <View className="w-full h-5 bg-[#333333] rounded-2xl my-4"></View>

        <Text className="text-base text-center color-slate-50 mb-4">
          <Text className="text-base text-center color-slate-50 mb-4">
              {listQuestions.length > 0 ? listQuestions[questionAtual].question : "Carregando a pergunta..."}
          </Text>

        </Text>

        <View className="gap-4">
          {listQuestions.length > 0 && listQuestions[questionAtual].choices && listQuestions[questionAtual].choices.map((choice, index) => (
            <Pressable 
                onPress={()=>handleClick(choice.isTrue)}
                className="w-full rounded-2xl px-6 py-3 bg-[#81D2E2]"
                >
                  <Text className="text-center text-base font-semibold ">{choice.text}</Text>
                </Pressable>
            ))}
        </View>

      </View>
    </View>
  );
}
