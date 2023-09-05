import Quiz from "./quiz.js";
class Settings{
    constructor(){
        this.quizDom=document.querySelector('.quiz');
        this.settingsDom=document.querySelector('.setting');
        this.category=document.querySelector('#category');
        this.questionNum=document.querySelector('#questions-num');
        this.startBtn=document.querySelector('.start')
        this.difficlity=[
            document.querySelector('#easy'),
            document.querySelector('#medium'),
            document.querySelector('#hard'),
        ];
        this.quiz={};
        this.startBtn.addEventListener('click',this.startQuiz);
    }
    startQuiz= async()=>{
        try{
        const nQuestion=this.getAmount();
        const categoryQId=this.category.value;
        const difficlity=this.getDifficlity();
        const url=`https://opentdb.com/api.php?amount=${nQuestion}&category=${categoryQId}&difficulty=${difficlity}`;
        let {results}=await this.fetchData(url);
        console.log(results);
        this.quiz= new Quiz(this.quizDom,nQuestion,results);
        this.togelledElements();
        }
        catch(error){
            console.log(error)
        }   
    };
    togelledElements=()=>{
        this.quizDom.style.display='block';
        this.settingsDom.style.display='none';
    }
    getDifficlity=()=>{
        const difficulity=this.difficlity.filter((el)=>el.checked);
        if(difficulity.length===1){
            return difficulity[0].id;
        }
        else 
        alert("please select difficulty");
    };
    fetchData=async(url)=>{
       const response=await fetch(url)
        const results=await response.json();
        return results;
    };
    getAmount=()=>{
        const amount= this.questionNum.value;
        if(amount>0&&amount<20)
        return amount;
    else
    alert("enter a number of questions");
    };
    
}
export default Settings;