document.getElementById('check').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    console.log("==============");

    inputText = inputText + " " + "can you tell me what are the grammar mistakes exists above paragraph or sentence?";
    console.log(inputText);

    console.log("==============");
    CallAPI(inputText);

});

document.getElementById('correct').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    console.log("==============");

    inputText = inputText + " " + "can you correct grammar of above paragraph or sentence?";
    console.log(inputText);

    console.log("==============");
    CallAPI(inputText);

});

document.getElementById('pro').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    console.log("==============");

    inputText = inputText + " " + "can rewrite above paragraph or sentence more professionally?";
    console.log(inputText);

    console.log("==============");
    CallAPI(inputText);

});


function CallAPI(input)
{


    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'

        },
        body: JSON.stringify({
            'prompt':input,
            'max_tokens': 3000,
            // 'model':'gpt-3.5-turbo',
            // 'messages':[{"role":"user", "content":"$1"}],
            'temperature':0.1
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let outputText = data.choices[0].text;
            document.getElementById('outputText').value = outputText;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
