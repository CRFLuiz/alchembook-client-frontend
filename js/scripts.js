// Abrir o modal de recuperação de senha
document.getElementById("forgotPasswordLink").addEventListener("click", function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("forgotPasswordModal").style.display = "block";
});

// Fechar o modal de recuperação de senha ao clicar no "x"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("forgotPasswordModal").style.display = "none";
});

// Fechar o modal clicando fora dele
window.onclick = function(event) {
    if (event.target === document.getElementById("forgotPasswordModal")) {
        document.getElementById("forgotPasswordModal").style.display = "none";
    }
};

// Lógica de envio do formulário (pode ser personalizada com back-end)
document.getElementById("recoverPasswordForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const emailOrUsername = document.getElementById("recoverEmailOrUsername").value;

    if (emailOrUsername) {
        alert("Instruções de recuperação de senha enviadas para: " + emailOrUsername);
        document.getElementById("forgotPasswordModal").style.display = "none"; // Fechar o modal após envio
    } else {
        alert("Por favor, preencha o nome de usuário ou email.");
    }
});
