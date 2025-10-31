let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let para = document.querySelector('#content');

btn.addEventListener('click', function(){

let inputValue = inp.value;

async function getDATA(){
    let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer paste your apikey',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: [
            {
              role: 'user',
              content: inputValue,
            },
          ],
        }),
      });

    let data = await response.json();
    // console.log(data);
    console.log(data.choices[0].message.content)
    para.textContent = data.choices[0].message.content;

    inp.value = "";
}

getDATA();

})