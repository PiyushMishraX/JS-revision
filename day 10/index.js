let questions = [
    {
        Heading: "HTML Ka Full Form Kya Hai?",
        Options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperText Marking Language",
            "HyperTotal Management Language"
        ],
        answer: 0
    },
    {
        Heading: "CSS Ka Full Form Kya Hai?",
        Options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    // {
    //     Heading: "JavaScript file ka extension kya hota hai?",
    //     Options: [
    //         ".java",
    //         ".js",
    //         ".script",
    //         ".html"
    //     ],
    //     answer: 1
    // },
    // {
    //     Heading: "HTML me sabse bada heading tag kaun sa hai?",
    //     Options: [
    //         "<h6>",
    //         "<heading>",
    //         "<h1>",
    //         "<head>"
    //     ],
    //     answer: 2
    // },
    // {
    //     Heading: "HTML page me JavaScript add karne ke liye kis tag ka use hota hai?",
    //     Options: [
    //         "<script>",
    //         "<javascript>",
    //         "<js>",
    //         "<scripting>"
    //     ],
    //     answer: 0
    // },
    // {
    //     Heading: "JavaScript me variable declare karne ke liye kis keyword ka use hota hai?",
    //     Options: [
    //         "string",
    //         "v",
    //         "let",
    //         "constant"
    //     ],
    //     answer: 2
    // },
    // {
    //     Heading: "CSS me background color change karne ke liye kaun si property use hoti hai?",
    //     Options: [
    //         "color",
    //         "background-color",
    //         "bg-color",
    //         "text-color"
    //     ],
    //     answer: 1
    // },
    // {
    //     Heading: "Programming me arrays ka index kis number se start hota hai?",
    //     Options: [
    //         "1",
    //         "-1",
    //         "0",
    //         "2"
    //     ],
    //     answer: 2
    // },
    // {
    //     Heading: "HTML me hyperlinks create karne ke liye kaun sa tag use hota hai?",
    //     Options: [
    //         "<a>",
    //         "<link>",
    //         "<href>",
    //         "<url>"
    //     ],
    //     answer: 0
    // },
    // {
    //     Heading: "WWW ka full form kya hai?",
    //     Options: [
    //         "World Wide Web",
    //         "World Web Wide",
    //         "Web World Wide",
    //         "World Wide Website"
    //     ],
    //     answer: 0
    // }
];

let timerInterval;

let score =document.querySelector("#scoreChange")
let time = document.querySelector("#timeChange")
let QN = document.querySelector("#questionNumber")

let QHead = document.querySelector("#headingQuestion")


let OP0 = document.querySelector("#op-0")
let OP1 = document.querySelector("#op-1")
let OP2 = document.querySelector("#op-2")
let OP3 = document.querySelector("#op-3")


let nextBtn = document.querySelector(".nextButton")
const optionButtons = document.querySelectorAll('.option-button');



let queNum = 0;
let scoreCount = 0;


Timer()


nextBtn.disabled = true
score.innerText = `${scoreCount}`;

 optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        nextBtn.disabled = false
    });
});      


function loadData(question) {

    QHead.innerText = question.Heading;

    OP0.innerText = question.Options[0];
    OP1.innerText = question.Options[1];
    OP2.innerText = question.Options[2];
    OP3.innerText = question.Options[3];


    // console.log(quetion.Heading);
    // // OP1 = questions
    
    if(queNum < questions.length ) queNum = queNum +1;
    else console.log(score);
    
}

loadData(questions[queNum])


function next() {
     if(queNum<questions.length){
        QN.innerText = queNum+1;
    }

    optionButtons.forEach((btn)=>{
        if(btn.classList.contains('selected')){
            let selectedText = btn.querySelector('div').innerText;
            // console.log(selectedText);

            if( selectedText === questions[queNum-1].Options[ questions[queNum-1].answer] ) 
            {
                scoreCount = scoreCount+1;
                score.innerText = `${scoreCount}`;
            }
            
        }
    })
    
    optionButtons.forEach(btn => btn.classList.remove('selected'));

    nextBtn.disabled = true;
    
    

    if(queNum<questions.length){
        loadData(questions[queNum] )
        Timer()
    } else{
        timeOver()
    }

    
}

nextBtn.addEventListener("click", ()=>{
    next()
   
})



function Timer() {

    clearInterval(timerInterval)

    let cTime = 3;
    time.innerText = cTime;
    
    
    timerInterval = setInterval(() => {
        cTime = cTime -1;
        time.innerText = cTime;

        if (cTime <= 0) {
            clearInterval(timerInterval); 
            timeOver();
        }
    }, 1000);
    
}

function timeOver() {
    next()
}