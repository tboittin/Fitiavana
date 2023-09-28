import FormulairePage from '../Formulaire'
import { sendEmail } from '../utils/sendEmail'

export const ContactFormulaire = () => {
    const formulaireContactData = {
        nom: {
            title: 'nom',
            type: 'text',
            value: '',
            required: true,
        },
        email: {
            title: 'email',
            type: 'email',
            value: '',
            required: true,
        },
        adresse: {
            title: 'adresse',
            type: 'adress',
            value: '',
            required: true,
        },
        message: {
            title: 'Votre message',
            type: 'textArea',
            required: true,
            value: '',
        },
    }

    const contactInitialState = {
        nom: '',
        email: '',
        adresse: '',
        message: '',
    }

    return (
        <div className="w-10/12 mx-auto my-auto lg:w-4/12 lg:my-[10vh]">
            <h3 className="flex justify-center text-2xl p-5 mt-5">
                Formulaire de Contact
            </h3>
            <FormulairePage
                propFormData={formulaireContactData}
                initialState={contactInitialState}
                onSubmitAction={sendEmail}
            />
        </div>
    )
}
