https://teachablemachine.withgoogle.com/models/WOY9gVFCe/
Webcam.set({
    width:300, height:300,image_format:"png",png_quality:90
})
camera=document.getElementById("webcam")
Webcam.attach('#webcam')
function take(){
Webcam.snap(function(data_uri){
    document.getElementById("photo").innerHTML="<img id='captured_image'src='"+data_uri+"'>"
})
}
console.log("ml5version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bdKe4io2t/model.json",modelloaded)
function modelloaded(){
    console.log("modelloadedsucessfully")
}
function identify(){
    img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error)
        {console.log(error)
    }else {console.log(result)
        document.getElementById("Object").innerHTML = "Person:"+result[0].label;
        document.getElementById("Accuracy").innerHTML = "accuracy:"+Math.floor(result[0].confidence*100)+"%"
    }
    
}
