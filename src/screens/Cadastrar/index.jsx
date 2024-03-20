import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { Filiais } from "../../models/Filiais";
import Filiais from "../../models/Filiais/Filiais";
import { FiliaisList } from "../../models/Filiais/FiliaisList";
import { useNavigation } from "@react-navigation/native";

const filiaisList = new FiliaisList();

let filiaisId = 1;

export default function Filiais() {
    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [fundacao, setFundacao] = useState("");
    const [quantidadeFuncionarios, setQuantidadeFuncionarios] = useState("");
    const [quantidadeTurmas, setQuantidadeTurmas] = useState("");
    const [enderecoBairro, setEnderecoBairro] = useState("");
    const [enderecoCidade, setEnderecoCidade] = useState("");
    const [enderecoCep, setEnderecoCep] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [responsavelNome, setResponsavelNome] = useState("");
    const [responsavelEmail, setResponsavelEmail] = useState("");
    const [responsavelCargo, setResponsavelCargo] = useState("");

    const [allFiliais, setAllFiliais] = useState([]);

    const createFiliais = () => {
        const newFiliais = new Filiais(filiaisId++, nome, fundacao,
            quantidadeFuncionarios, quantidadeTurmas, enderecoBairro,
            enderecoCidade, enderecoCep, telefone, email,
            responsavelNome, responsavelEmail, responsavelCargo );

            filiaisList.add(newFiliais);
            setAllFiliais(filiaisList.getAllFiliais());

            clearInputs();

            return newFiliais;
    };
    const clearInputs = () => {
        setNome("");
        setFundacao("");
        setQuantidadeFuncionarios("");
        setQuantidadeTurmas("");
        setEnderecoBairro("");
        setEnderecoCidade("");
        setEnderecoCep("");
        setTelefone("");
        setEmail("");
        setResponsavelNome("");
        setResponsavelEmail("");
        setResponsavelCargo("");
   };

}
