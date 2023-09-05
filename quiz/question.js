class Question{
    constructor(question){
        this.questionElement=document.querySelector('.question');
        this.answersElements=[
            document.querySelector('#a'),
            document.querySelector('#b'),
            document.querySelector('#c'),
            document.querySelector('#d'),
        ];
        this.correctAnswer=question.correct_answer;
        this.question=question.question;
        this.isCorrect=false;
        this.allAsnwers=[this.correctAnswer, ...question.incorrect_answers];
    }
    answer(checkedAnswer){
        this.isCorrect=checkedAnswer[0].textContent===this.correctAnswer?true:false;
    }
    render(){
        this.questionElement.innerHTML=this.question;
        this.answersElements.forEach((el,index)=>{
            el.innerHTML='<input type="radio" name="radio">'+this.allAsnwers[index]
        });
    }
}
export default Question;