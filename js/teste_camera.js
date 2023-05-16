if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Solicita permissão para acessar a câmera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // Permissão concedida, a câmera está disponível
      // Você pode usar o stream para exibir a câmera em um elemento de vídeo, por exemplo:
      var videoElement = document.getElementById('videoElement');
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      // O usuário negou a permissão ou ocorreu um erro
      console.error('Erro ao acessar a câmera: ', error);
    });
} else {
  // O navegador não suporta a API do MediaDevices
  console.error('O navegador não suporta a API do MediaDevices');
}
