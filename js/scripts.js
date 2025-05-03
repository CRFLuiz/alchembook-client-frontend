document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de validação de login
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        // Redireciona para a próxima página
        // window.location.href = "/dashboard";
    } else {
        alert("Usuário ou senha inválidos.");
    }
});
