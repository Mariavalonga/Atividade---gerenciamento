import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButtom";

export default function Desenvolvedor() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
  <Text style={styles.title2}>
    Desenvolvedor
  </Text>
         <Image
          style={styles.logoEscola}
          source={require('../../../assets/euu.jpg')}
        /> 

        <Text style={styles.text}>

        </Text>
        <Text style={styles.text}>
    Me Chamo Maria Eduarda Valonga, nasci em 01/01/2007, sou do signo de
    capricórnio e curso Desenvolvimento de Sistemas no Senai de Valinhos
        </Text>
       
        <Text style={styles.title}>
          Um Pouco mais sobre mim
        </Text>
        <Image
          style={styles.imagens}
          source={require('../../../assets/computador.jpg')}
        />
   
        <Text style={styles.text}>
            Gosto de ir ao shopping com os meus amigos, goto de ler e ouvir música,
            amo ir em shows, gosto de escutar The Weekend e Taylor Swift,
            eu tenho uma cachorra que se chama Kika. E eu adoro comer doces. E amo viajar


        </Text>
     
        <Image
          style={styles.imagens2}
          source={require('../../../assets/euu2.jpg')}
        />
   

        <Text style={styles.title}>
        Projetos
        </Text>
        <Image
          style={styles.imagens}
          source={require('../../../assets/image (1).png')}
        />
   
        <Text style={styles.text}>
        Como estudante de Técnico em Desenvolvimento de Sistemas no SENAI Valinhos, eu estou imersa em uma
      jornada educacional que visa proporcionar uma compreensão abrangente e prática do mundo da tecnologia
       da informação. Durante o curso, estou adquirindo habilidades sólidas em programação,
      análise de sistemas e outras áreas essenciais para o desenvolvimento de softwares. 
A estrutura escolar engloba as instalações físicas, organização administrativa, currículo educacional, clima escolar e envolvimento da comunidade. É fundamental para garantir um ambiente de aprendizado eficaz e acolhedor, promovendo o bem-estar dos alunos e o sucesso educacional.
        </Text>

        

          <TouchButton route="Home" title="Ir para a Home" />  
      </View>
    </ScrollView>
  );
}

