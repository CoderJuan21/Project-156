AFRAME .registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#coins1"}
    },

    init:function(){
    var duration = 120;
    var timerel = document.querySelector("#timer")  
    this.startTimer(duration,timerel)
    },

    update:function(){
  this.isCollided(this.data.elementId)
    },

    startTimer:function(duration,timerel){
      var minutes
      var seconds
      setInterval(()=>{
        minutes=parseInt(duration/60);
        seconds=parseInt(duration%60);

        if(minutes<10){
          minutes = "0"+minutes;
        }
        if(seconds<10){
          seconds = "0"+seconds;
        }
        timerel.setAttribute("text",{
          value:minutes+":"+seconds
        });
        duration-=1
      },1000)
    },
    isCollided:function(elementId){
      var element = document.querySelector(elementId)
      element.addEventListener("collide",(e)=>{
        if(elementId.includes("#coins")){
          element.setAttribute("visible",false)
        //  this.updateTargets()
          this.updateScore()
        }
        else{
          this.gameOver()
        }
      })
    },
    updateTargets:function(){
      var element = document.querySelector("#target")
      var count = element.getAttribute("text").value
      var currentTargets = parseInt(count)
      currentTargets -= 1
      element.setAttribute("text",{
        value:currentTargets
      })
    },
    updateScore:function(){
      var element = document.querySelector("#score")
      var count = element.getAttribute("text").value
      var currentScore = parseInt(count)
      currentScore += 50
      element.setAttribute("text",{
        value:currentScore
      })
    },
    gameOver:function(){
      var planeel=document.querySelector("#diver")
      var element = document.querySelector("#game_over_text")
      element.setAttribute("visible",true)
      planeel.setAttribute("dynamic-body",{mass:1})
    }
  })