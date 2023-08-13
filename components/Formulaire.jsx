import { useState } from "react"
import capitalizeFirstLetter from "./utils/capitalizeFirstLetter"

function FormulairePage({ formulaireParrainage }) {
    const [formData, setFormData] = useState(formulaireParrainage)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        //TODO traitement de formulaire parrainage
    }
    return (
        <div className='container mt-5'>
            <h2> Merci de remplir le formulaire ci-dessous</h2>
            <form onSubmit={handleSubmit}>
                {Object.values(formulaireParrainage).map(champ => (
                    <div key={champ.title} className='form-group'>
                        <label htmlFor={champ.title}>
                            {capitalizeFirstLetter(champ.title)} :
                        </label>
                        <input
                            type={champ.type}
                            className='form-control'
                            id={champ.title}
                            name={champ.title}
                            value={formData[champ.title].value}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type='submit' className='btn btn-primary mt-2 '>
                    Soumettre
                </button>
            </form>
        </div>
    )
}

export default FormulairePage
