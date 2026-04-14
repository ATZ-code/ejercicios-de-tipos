type EmailNotificacion = {
  tipo: "email";
  email: string;
  asunto: string;
  mensaje: string;
};

type SMSNotificacion = {
  tipo: "sms";
  telefono: string;
  mensaje: string;
};

type PushNotificacion = {
  tipo: "push";
  dispositivoId: string;
  titulo: string;
  mensaje: string;
};


type Notificacion = EmailNotificacion | SMSNotificacion | PushNotificacion;


function enviarNotificacion(notificacion: Notificacion): void {
  console.log("\n--- Nueva Notificación ---"); 

  if (notificacion.tipo === "email") {
    console.log("Enviando EMAIL...");
    console.log(`Para: ${notificacion.email}`);
    console.log(`Asunto: ${notificacion.asunto}`);
    console.log(`Mensaje: ${notificacion.mensaje}`);
  } 
  else if (notificacion.tipo === "sms") {
    console.log("Enviando SMS...");
    console.log(`Teléfono: ${notificacion.telefono}`);
    console.log(`Mensaje: ${notificacion.mensaje}`);
  } 
  else if (notificacion.tipo === "push") {
    console.log("Enviando PUSH...");
    console.log(`Dispositivo: ${notificacion.dispositivoId}`);
    console.log(`Título: ${notificacion.titulo}`);
    console.log(`Mensaje: ${notificacion.mensaje}`);
  }
}


const email: EmailNotificacion = {
  tipo: "email",
  email: "test@gmail.com",
  asunto: "Bienvenido",
  mensaje: "Gracias por registrarte"
};

const sms: SMSNotificacion = {
  tipo: "sms",
  telefono: "3001234567",
  mensaje: "Tu código es 1234"
};

const push: PushNotificacion = {
  tipo: "push",
  dispositivoId: "abc123",
  titulo: "Nueva alerta",
  mensaje: "Tienes una notificación"
};


console.log("Iniciando envío de notificaciones...");

enviarNotificacion(email);
enviarNotificacion(sms);
enviarNotificacion(push);