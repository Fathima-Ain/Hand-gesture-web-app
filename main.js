Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' )

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_JJLrv4wC//model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}



function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML =results[0].label;
       
        prediction_1 = results[0].label;
        
        speak();
        if (prediction_1 == "good")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513;";
        }
        else if (prediction_1 == "bad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128577;"; 
        }
        else if(prediction_1 == "peace")
        {
            document.getElementById("update_emoji").innerHTML = "&#128545;";
        }
        else if(prediction_1 == "crossed fingers")
        {
            document.getElementById("update_emoji").innerHTML = "&#128518;";
        }
        else if(prediction_1 == "valcan salute")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        else(prediction_1 == "mini heart")
        {
            document.getElementById("update_emoji").innerHTML = "&#128534;"; 
        }
        speak();
    }
    }
    function speak()
    {
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is" + prediction_1;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis)
    }
    