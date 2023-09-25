import { useState } from "react"
import capitalizeFirstLetter from "./utils/capitalizeFirstLetter"

function FormulairePage({ propFormData, initialState }) {
    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        //TODO traitement de formulaire parrainage
    }

    const selectInput = champ => (
        <>
            <label
                className='block text-gray-700 text-sm font-bold mt-2'
                htmlFor={champ.title}
            >
                {champ.title} :
            </label>
            <div className='inline-block relative w-64 mt-2'>
                <select
                    className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                    onChange={handleChange}
                    name={champ.title}
                    defaultValue={champ.value[0]}    
                >
                    {champ.value.map(selectValue => (
                        <option key={selectValue} value={selectValue} required={champ.required}>
                            {selectValue}
                        </option>
                    ))}
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                    >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </div>
            </div>
        </>
        //TODO faire un tooltip expliquant parrainage simple ou double
    )

    const generalInput = champ => (
        <div key={champ.title} className='form-group content-center mt-3'>
            <label
                className='block text-gray-700 text-sm font-bold'
                htmlFor={champ.title}
            >
                {capitalizeFirstLetter(champ.title)} :
            </label>
            <input
                type={champ.type}
                className='form-control shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id={champ.title}
                name={champ.title}
                onChange={handleChange}
                required={champ.required}
            />
        </div>
    )

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                {Object.values(propFormData).map(champ => (
                    <div key={champ.title}>
                        {champ.type === "select" && selectInput(champ)}
                        {champ.type !== "select" && generalInput(champ)}
                    </div>
                ))}
                <button
                    type='submit'
                    className='bg-blue-theme text-white mt-5 p-2 rounded '
                >
                    Soumettre
                </button>
            </form>
        </div>
    )
}

export default FormulairePage
