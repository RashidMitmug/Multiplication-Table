var input1;
var input2;
var counter1;
var counter2;
var output1;
var output2;
function getValue(){
    input1=document.getElementById("input1").value;
    input2=document.getElementById("input2").value;

   
    if(2>input1 || input1>10 || 2>input2 || input2>10){
        alert("Pleas enter a number between 2 and 10! >:(");
     }
     else{
        for(counter1=1;counter1<=10;counter1++){
            for(counter2=1;counter2<=10;counter2++){
                output2= counter2+"cell"+counter1;
                document.getElementById(output2).style.border ="#000000";
                output1="";
                document.getElementById(output2).innerText=output1;
            }
            
        }
        for(counter1=1;counter1<=input1;counter1++){
            for(counter2=1;counter2<=input2;counter2++){
                
                output1=counter1*counter2;
                output2= counter2+"cell"+counter1;
                document.getElementById(output2).innerHTML=output1;
                document.getElementById(output2).style.border = "solid #000000";
            }
            
        }
        
     }
}
