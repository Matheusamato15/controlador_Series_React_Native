import React,{useState} from "react";
import {View, TextInput, Text, StyleSheet} from "react-native"


export default function TelaInicial(){

    const [nome, setNome] = useState("") //state para uso de variáveis atreladas ao input
    const [tipo, setTipo] = useState("") //state para uso de variáveis atreladas ao input
    const [qtdTemporadas, setQtdTemporadas] = useState("") //state para uso de variáveis atreladas ao input
    const [nota, setNota] = useState("") //state para uso de variáveis atreladas ao input
    const [terminado, setTeminado] = useState("") //state para uso de variáveis atreladas ao input
    const [genero, setGenero] = useState("") //state para uso de variáveis atreladas ao input
    const [producao, setProducao] = useState("") //state para uso de variáveis atreladas ao input

    return <>
        <View style={estilos.containerPrincipal}>
            <View style={estilos.containerNome}>
                <Text style={estilos.text}>Digite o nome: </Text>
                <TextInput style={estilos.textImputStyle} 
                value={nome}
                onChangeText={text=>setNome(text)}
                placeholder="Digite o nome:"/>
                <Text>{nome}</Text>
            </View>

            <View style={estilos.containerTipo}>
                <Text style={estilos.text}>Digite o tipo: </Text>
                <TextInput style={estilos.textImputStyle} 
                value={tipo}
                onChangeText={text=>setTipo(text)}
                placeholder="Digite o tipo:"/>
                <Text>{tipo}</Text>
            </View>

            <View style={estilos.containerQtdTemporadas}>
                <Text style={estilos.text}>Quantidade de temoradas: </Text>
                <TextInput style={estilos.textImputStyle} 
                value={qtdTemporadas}
                onChangeText={text=>setQtdTemporadas(text)}
                keyboardType="numeric"
                placeholder="Digite a quantidade de temoradas:"/>
                <Text>{qtdTemporadas}</Text>
            </View>

            <View style={estilos.containerNota}>
                <Text style={estilos.text}>Digite a sua nota: </Text>
                <TextInput style={estilos.textImputStyle} 
                value={nota}
                onChangeText={text=>setNota(text)}
                keyboardType="numeric"
                placeholder="Digite a nota:"/>
                <Text>{nota}</Text>
            </View>

            <View style={estilos.containerTerminado}>
                <Text style={estilos.text}>Programa terminado? </Text>
                <TextInput style={estilos.textImputStyle} 
                value={terminado}
                onChangeText={text=>setTeminado(text)}
                placeholder="Marque se terminou o programa"/>
                <Text>{terminado}</Text>
            </View>

            <View style={estilos.containerGenero}>
                <Text style={estilos.text}>Qual o gênero? </Text>
                <TextInput style={estilos.textImputStyle} 
                value={genero}
                onChangeText={text=>setGenero(text)}
                placeholder="Diga o gênero:"/>
                <Text>{genero}</Text>
            </View>

            <View style={estilos.containerProducao}>
                <Text style={estilos.text}>Ainda está em producão? </Text>
                <TextInput style={estilos.textImputStyle} 
                value={producao}
                onChangeText={text=>setProducao(text)}
                placeholder="O programa está em produção?"/>
                <Text>{producao}</Text>
            </View>

        </View>
  
    
    </>
}


const estilos = StyleSheet.create({

    containerPrincipal:{
        flexDirection: "column" ,
        backgroundColor: "red",
        width: 300,
        marginLeft: 10,
        marginTop: 40,
    },

    containerNome:{
        flexDirection: "row",
        backgroundColor: "green",
        marginTop: 10,
        marginLeft: 10,
    },

    text:{
        backgroundColor: "blue",
        width: 100,
        textAlign: "center",
        textAlignVertical: "center" ,
    },

    textImputStyle:{
        padding: 5,
        height: 30,
        width: 150,
        borderWidth: 2,
        borderRadius: 5    
    }
})