import React, { Component } from 'react';
import { Text, View,TouchableOpacity, } from 'react-native';
import styles from './ScreenShots/styles'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: ""
    }

  }

  calculateResult() {
    this.setState({
      calculationText: eval(this.state.resultText)
    })
    

    // parse this ex 3+33*6^5/2 ==>> [3,+,33,]
  }
  validate() {
    try { const text = eval(this.state.resultText) }
    catch (err) {
      return false;
     
    }
    return true;

  }
  buttonPressed(text) {
    if (text == '=') {
      return this.validate() && this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText + text
    });
  }

  operate(operation) {





    switch (operation) {
      case 'D':
        const text = this.state.resultText.split('')
        text.pop()
        text.join('')
        this.setState({
          resultText: text.join('')

        })
        break
      case '+':
      case '-':
      case '/':
      case '*':

        const lastChar = this.state.resultText.split('').pop()
        if (this.operations.indexOf(lastChar) > 0 || lastChar === '.') return
        if (this.state.text == "") return
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  wouldRenderNot=()=>{
    console.log("what if i am not able to perform good at my job s well as my personal aspirations ? ")
  }



  render() {
    let rows = []
    let numsrow = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={numsrow[i][j]} style={styles.btn} onPress={() => this.buttonPressed(numsrow[i][j])}>
          <Text style={styles.btntext}>{numsrow[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    this.operations = ['D', '+', '-', '*', '/']

    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
        <Text style={styles.btntextOP}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.calculationText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculations}>
          <Text style={styles.resultText}> {this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>

        </View>
      </View>

    )
  };
}



