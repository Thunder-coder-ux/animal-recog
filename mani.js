function startClassification(){
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/84tK5v5S7/model.json', modelReady);
  console.log("Mic ready")
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    rs_no_r = Math.floor(Math.random() * 255) + 1;
    rs_no_g = Math.floor(Math.random() * 255) + 1;
    rs_no_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("animal_label").innerHTML = " Animal voice I can hear - " + results[0].label;
    document.getElementById("animal_acu").innerHTML = "How sure I am - " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("animal_acu").style.color = "rgb(" + rs_no_r + "," + rs_no_g + "," + rs_no_b + ")";
    document.getElementById("animal_label").style.color = "rgb(" + rs_no_r + "," + rs_no_g + "," + rs_no_b + ")";
   
    img = document.getElementById("hear?");
    
    if (results[0].label == "bark") {
      img.src = 'dog.png'; 
    }
    if (results[0].label == "meow") {
      img.src = 'cat.png'; 
    }
    if (results[0].label == "moo") {
      img.src = 'cow.png'; 
    }
    if (results[0].label == "roar") {
      img.src = 'lion.png'; 
    }
    
  }
}