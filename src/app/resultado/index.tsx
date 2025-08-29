import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Resultado() {
  const { respostas: respostasParam } = useLocalSearchParams<{ respostas?: string }>();
  const [respostas, setRespostas] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");


  useEffect(() => {
    if (respostasParam) {
      try {
        const parsedRespostas = JSON.parse(respostasParam);
        setRespostas(parsedRespostas);
      } catch (e) {
        console.warn("Erro ao parsear respostas:", e);
      }
    }
    setLoading(false);
  }, [respostasParam]);

 
  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("nome");
        if (savedUser) {
          setUser(savedUser);
        }
      } catch (e) {
        console.warn("Erro ao carregar nome:", e);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  const countTrue = respostas.filter(v => v === true).length;

  return (
    <View>
      <Text>
        Olá {user || "visitante"}, você acertou {countTrue} de {respostas.length}
      </Text>
    </View>
  );
}
