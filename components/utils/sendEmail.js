export const sendEmail = async (formData) => {
    const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: "test-mail-fitiavana",
            message: formData,
        }),
    });

    if (res.status === 200) {
        console.log('Email envoyé avec succès');
    } else {
        console.log('Échec de l\'envoi de l\'e-mail');
    }
}