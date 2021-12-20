require('dotenv/config');
const axios = require('axios');
const TotalVoice = require('totalvoice-node');

const client = new TotalVoice(process.env.TOTAL_VOICE_API_KEY);

const servers = [
  {
    name: 'Server 1',
    url: 'http://localhost:3333',
    developer: {
      name: 'Geziel Elyon',
      phone: process.env.PHONE_GEZIEL_ELYON
    }
  },
  {
    name: 'Server 2',
    url: 'http://localhost:4444',
    developer: {
      name: 'Geziel Elyon',
      phone: process.env.PHONE_GEZIEL_ELYON
    }
  }
];

(async () => {
  for (const server of servers) {
    await axios({
      url: server.url,
      method: 'GET'
    }).then((response) => {
      console.log(`Server "${server.name}" it's running`);
    }).catch((error) => {
      const message = `${server.developer.name} something wrong occurred with server "${server.name}"`;
      const options = {
        velocidade: 2, 
        tipo_voz: "br-Vitoria", 
        bina: "bina_cadastrada"
      };

      client.tts.enviar(server.developer.phone, message, options).then(() => {
        console.log(`Warning message was send to ${server.developer.name}`);
      }).catch((error) => {
        console.log(error.message);
      })
    })
  }
})();