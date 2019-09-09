import { Component, OnInit } from '@angular/core';

const testsArray= [
  {
    "question": "1. Есть ли аллергия на домашних животных у Вас или членов Вашей семьи?",
    "answers": [
      {
        "answer": "Да",
        "valid": false
      },
      {
        "answer": "Нет",
        "valid": true
      }
    ]
  },
  {
    "question": "2. Все ваши члены семья согласны с таким решительным шагом?",
    "answers": [
      {
        "answer": "Нет",
        "valid": false
      },
      {
        "answer": "Да",
        "valid": true
      }
    ]
  },
  {
    "question": "3. Готовы ли вы к дополнительным тратам на корм, наполнитель, мед. обслуживание?",
    "answers": [
      {
        "answer": "Да",
        "valid": true
      },
      {
        "answer": "Нет",
        "valid": false
      }
    ]
  },
  {
    "question": "4.  Сможете ли вы уделять достаточно времени и внимания для ухода и игр с новым питомцем?",
    "answers": [
      {
        "answer": "Да",
        "valid": true
      },
      {
        "answer": "Нет",
        "valid": false
      }
    ]
  },
  {
    "question": "5. Как вы считаете, обязательно ли делать прививки и периодически показывать питомца доктору?",
    "answers": [
      {
        "answer": "Нет",
        "valid": false
      },
      {
        "answer": "Да",
        "valid": true
      }
    ]
  },
  {
    "question": "6. Разрешено ли заводить домашних животных в Вашем доме/квартире?",
    "answers": [
      {
        "answer": "Да",
        "valid": true
      },
      {
        "answer": "Нет",
        "valid": false
      }
    ]
  },
  {
    "question": "7. Вы любите животных?",
    "answers": [
      {
        "answer": "Да",
        "valid": true
      },
      {
        "answer": "Нет",
        "valid": false
      }
    ]
  }
];


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  activeTest = 0;
  testLength = testsArray.length;
  tests = testsArray;
  buttonText = "Далее >";
  testIsOver = false;
  rightAnswers = testsArray.map(el=>false);
  rightAnswersValue = 0;
  precentAnswerValue = 0;
  textAdvice = "";

  constructor() { }

  ngOnInit() {
  }

  nexTestHandler = () =>{
    if (this.activeTest === this.testLength-2){

    }
    if (this.activeTest === this.tests.length-1){
      this.buttonText = "Тест окончен";
      this.testIsOver = true;


      this.rightAnswersValue = this.rightAnswers.reduce((acc, el)=>{
        if (el===true) {
          return  acc+1 }
        else return acc
      },0)
      this.precentAnswerValue = (this.rightAnswersValue / (this.testLength))*100;
      if(this.precentAnswerValue > 70){
        this.textAdvice = "Вы можете присмотреть себе нового друга в нашей галерее."
      }
      else{
        this.textAdvice = "Не стоит торопиться, Вам следует подумать еще."
      }

      return
    }
    this.activeTest=this.activeTest+1
  }

  checkAnswerHandler = (i) =>{
    if (this.tests[this.activeTest].answers[i].valid){
      this.rightAnswers[this.activeTest] = true
      return
    }
    this.rightAnswers[this.activeTest] = false;

  }

}
