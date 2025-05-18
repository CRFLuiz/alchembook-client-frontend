let conversation = [];
let isWaitingResponse = false;

document.getElementById('message-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isWaitingResponse) return;
    isWaitingResponse = true;
    
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        // Renderiza a mensagem do usuário
        renderMessage(message, 'user');
        input.value = '';
        
        // Prepara o payload para o endpoint
        conversation.push({ role: 'user', content: message });
        // const payload = conversation.length === 0 ? message : conversation;
        const response = await fetch('http://localhost:8080/api/cco/talk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: conversation })
            // body: JSON.stringify({ message: payload })
        });
        
        if (!response.ok) {
            renderMessage('Erro ao enviar mensagem. Tente novamente!', 'bot');
            isWaitingResponse = false;
            conversation.pop();
            return;
        }
        
        const data = await response.json();
        const botResponse = data.response;
        renderMessage(botResponse, 'bot');
        
        // Atualiza a conversa
        conversation.push(
            // { role: 'user', content: message },
            { role: 'assistant', content: botResponse }
        );
        isWaitingResponse = false;
    }
});

function renderMessage(text, type) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll para baixo
}
