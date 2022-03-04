const startBtn=document.querySelector("#start-btn");
 const recognition=new  webkitSpeechRecognition();
 recognition.continuos=true;
 recognition.lang="en-US";
 recognition.interimResults=false;
 recognition.maxAlternative=1;

 //const synth=window.speechSynthesis;

 startBtn.addEventListener("click", () =>{
     recognition.start();
 });

/*let utter = new SpeechSynthesisUtterance("Hi, How are you?");
utter.onend = () =>{
    recognition.start();
};*/

 recognition.onresult =(e) => {
   
    const transcript= e.results[e.results.length-1][0].transcript.trim();
   
    if(transcript==="Hello")
    {
        console.log("How are you?");
        /*recognition.stop();
        utter.text =" Hi, How are you?";
        console.log("Hi");
        synth.speak(utter);*/
    }
   
};