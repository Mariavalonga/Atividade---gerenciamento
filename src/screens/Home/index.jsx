import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <Title  title="Harmonia Instituto Educacional" />
        <Image
          style={styles.logoEscola}
          source={require('../../../assets/logoescola.png')}
        />

        <Text style={styles.text}>
          Bem-vindo ao Harmonia Instituto Educacional. Somos dedicados a fornecer uma educação de qualidade para nossos alunos.
        </Text>
        <Text style={styles.text}>
          Explore nossos programas educacionais e entre em contato conosco para saber mais sobre o que oferecemos.
        </Text>
        <Image
          style={styles.imagens}
          source={require('../../../assets/criancas3.jpg')}
        />
        <Text style={styles.title}>
          Sobre nossos alunos
        </Text>
        <Text style={styles.text}>
          
Os alunos do Harmonia Instituto Educacional são uma parte essencial da comunidade educacional da escola.
 Eles vêm de diversas origens e têm uma variedade de interesses, habilidades e aspirações.
  A escola se esforça para proporcionar um ambiente acolhedor e inclusivo, 
onde cada aluno se sinta valorizado e apoiado em sua jornada educacional.
        </Text>
        <Image
          style={styles.imagens2}
          source={require('../../../assets/criancas4.jpg')}
        />
        <Text style={styles.text}>
        Além disso, a escola reconhece a importância da diversidade e da inclusão,
         promovendo um ambiente onde todos os alunos são respeitados independentemente de sua origem étnica, 
         religião, orientação sexual ou capacidade física. 
         Acredita-se que a diversidade enriquece a experiência educacional 
        e prepara os alunos para viverem e trabalharem em um mundo cada vez mais globalizado.
        </Text>

        <Text style={styles.title}>
          Estrutura
        </Text>
        <Image
          style={styles.imagens3}
          source={require('../../../assets/estrutura.jpg')}
        />
        <Text style={styles.text}>
          
A estrutura escolar engloba as instalações físicas, organização administrativa, currículo educacional, clima escolar e envolvimento da comunidade. É fundamental para garantir um ambiente de aprendizado eficaz e acolhedor, promovendo o bem-estar dos alunos e o sucesso educacional.
        </Text>

        {/* <TouchButton route="Profile" title="Go to Profile" data={user} /> */}
        {/* <TouchButton route="Category" title="Go to Category" /> */}
      </View>
    </ScrollView>
  );
}

