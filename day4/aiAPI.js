
async function getDATA(){
    let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer paste your api key',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tngtech/deepseek-r1t2-chimera:free',
          messages: [
            {
              role: 'user',
              content: 'tell joke',
            },
          ],
        }),
      });

    let data = await response.json();
    console.log(data);
    console.log(data.choices[0].message.content)
    document.querySelector('p').textContent = data.choices[0].message.content;
}

getDATA();



/*
{
    "id": "gen-1761891982-Al6LKPRlnlevZ1B9QR2E",
    "provider": "Chutes",
    "model": "tngtech/deepseek-r1t2-chimera:free",
    "object": "chat.completion",
    "created": 1761891983,
    "choices": [
        {
            "logprobs": null,
            "finish_reason": "stop",
            "native_finish_reason": "stop",
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\n\nHello! How can I assist you today? 😊",
                "refusal": null,
                "reasoning": "\nOkay, the user just said \"hello\". That's pretty straightforward. They're probably just starting a conversation. I should respond in a friendly and welcoming way to set a positive tone. Maybe add a bit of enthusiasm to make them feel comfortable. Also, it's good to invite them to ask something or share what they need help with, so the conversation can move forward. Let's keep it simple but warm.\n",
                "reasoning_details": [
                    {
                        "type": "reasoning.text",
                        "text": "\nOkay, the user just said \"hello\". That's pretty straightforward. They're probably just starting a conversation. I should respond in a friendly and welcoming way to set a positive tone. Maybe add a bit of enthusiasm to make them feel comfortable. Also, it's good to invite them to ask something or share what they need help with, so the conversation can move forward. Let's keep it simple but warm.\n",
                        "format": "unknown",
                        "index": 0
                    }
                ]
            }
        }
    ],
    "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 99,
        "total_tokens": 103,
        "prompt_tokens_details": null
    }
}
*/