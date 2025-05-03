document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simulação de validação de cadastro
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    if (username && email && password) {
        alert("Cadastro realizado com sucesso!");
        // Redireciona para o login ou dashboard
        // window.location.href = "/login";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
