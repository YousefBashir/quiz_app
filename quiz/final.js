class Final{
    constructor(correctAnswer,totalAmount){
        this.scoreElement=document.querySelector(".source");
        this.againBtn=document.querySelector('#again');
        this.render(correctAnswer,totalAmount);
        this.againBtn.addEventListener('click',this.startAgain);
    }
    render(correctAnswer,totalAmount){
        this.scoreElement.innerHTML=`You answered ${correctAnswer} out of ${totalAmount}`;
    };
    startAgain=()=>{
        location.reload();
    }
}
export default Final;