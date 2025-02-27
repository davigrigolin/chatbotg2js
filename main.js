const qrcode = require('qrcode-terminal'); 
const { Client, LocalAuth } = require('whatsapp-web.js');
//const userSessions = {};

const client = new Client({
    authStrategy: new LocalAuth()
});


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED');
    qrcode.generate(qr, {small: true});
});


client.on('message_create', message => {
    const msg = message.body.toLowerCase();
    if (['oi', 'Oi', 'OI', 'olá', 'ola', 'Ola', 'Dia', 'dia', 'Noite', 'noite', 'tarde', 'Tarde', 'Bom dia', 'Boa', 'bom dia', 'boa'].includes(msg)) {
		client.sendMessage(message.from, 'Olá, você está em contato com a Congrese Sistemas de Segurança!\nDigite o número do departamento para contato.');
        	client.sendMessage(message.from, '1️⃣ - camera e alarme.\n2️⃣ - G2 cabos.\n3️⃣ - Guardian Life.\nÉ possível digitar "menu" para voltar à essa mensagem.');
	}
});

// Start your client
client.initialize();
