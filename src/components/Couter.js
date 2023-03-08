import { Component } from "react"
import { Button, Text, View, StyleSheet, TextInput } from "react-native"


export default class Couter extends Component {
    state = {
        count: 0,
        step: 2,
    }
    incremetar() {

        this.setState({
            count: this.state.count + this.state.step
        })
    }
    decremetar() {
        if (this.state.count > this.props.min) {
            this.setState({
                count: this.state.count - 1

            })
        }
    }
    alteraStep(Text) {
        this.setState({ step: parseInt(Text) })
    }
    render() {
        return (<View style={Styles.contador}>
            <TextInput
                value={this.state.step.toString()}
                onChange={(e) => {
                    this.alteraStep(e.nativeEvent.text)
                }}
            />

            <TextInput
                defaultValue={this.state.step.toString()}
                onChangeText={(valor) => {
                    this.alteraStep(valor)
                }}
            /> 


            <Text>Contador: {this.state.count}</Text>
            <Button onPress={() => this.incremetar()} title="+" />
            <Button onPress={() => this.decremetar()} title="-" />
        </View>

        )
    }


}
const Styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alignItems:
            'center',
    }
})