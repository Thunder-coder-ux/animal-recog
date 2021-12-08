function startClassification(){
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/84tK5v5S7/model.json', modelReady);
  console.log("Mic ready")
}

function modelReady(){
    classifier.classify(gotResults);
}