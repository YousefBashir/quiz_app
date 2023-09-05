import Final from "./final.js";
import Question from "./question.js";
class Quiz{
    constructor(quizElement,amount,questions){
        this.quizElement=quizElement;
        this.currentElement=document.querySelector('.current');
        this.totalElement=document.querySelector('.total');
        this.finalElement=document.querySelector('.final');
        this.nextBtn=document.querySelector('#next');
        this.totalAmount=amount;
        this.answerdAmount=0;
        this.questions=this.setQuestion(questions);
        this.nextBtn.addEventListener('click',this.nextQuestion);
        this.renderQuestion();
    }
    setQuestion=(questions)=>{
        return questions.map(question=>new Question(question));
    }
    renderQuestion(){
        this.questions[this.answerdAmount].render();
        this.currentElement.innerHTML=this.answerdAmount;
        this.totalElement.innerHTML=this.totalAmount
    }
    nextQuestion=()=>{
        const checkedElement=this.questions[this.answerdAmount].answersElements.filter(ele=>ele.firstChild.checked);
        if(checkedElement.length==0){
            alert("cheack elemnt");
        }
        else{
            this.questions[this.answerdAmount].answer(checkedElement);
            this.answerdAmount++;
            this.answerdAmount<this.totalAmount?this.renderQuestion():this.endQuiz();
        }
    }
    endQuiz(){
        this.quizElement.style.display='none';
        this.finalElement.style.display='block';
        const correct=this.countCorrectAnswer();
        new Final(correct,this.totalAmount)
    }
    countCorrectAnswer(){
        let count=0;
        this.questions.forEach(element => {
            if(element.isCorrect){
                count++;
            }
            else{}
        });
        return count;
    }

}
export default Quiz;