import { useState } from "react"
import capitalizeFirstLetter from "./utils/capitalizeFirstLetter"

function FormulairePage({ formulaire }) {
    const [formData, setFormData] = useState(formulaire)

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
            <form onSubmit={handleSubmit}>
                {Object.values(formulaire).map(champ => (
                    <div key={champ.title} className='form-group mt-2'>
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
                <button type='submit' className='bg-blue-theme text-white mt-2 p-2 rounded '>
                    Soumettre
                </button>
            </form>
        </div>
    )
}

export default FormulairePage
