import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,  // use SSL
        auth: {
          user: process.env.MAIL_USER,  // Ton adresse e-mail OVH
          pass: process.env.MAIL_PASSWORD  // Ton mot de passe
        }
        // TODO alimenter avec les bonnes infos dans un .env.local
    });

    const mailData = {
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        text: JSON.stringify(message),  // Converti en chaîne de caractères
        html: `<div>${JSON.stringify(message)}</div>`
    };

    console.log('mailData >>>>>>>')
    console.log(mailData)
    await transporter.sendMail(mailData);

    res.status(200).send("Email envoyé avec succès");
}
