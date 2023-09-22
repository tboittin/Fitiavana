import FormulairePage from "../Formulaire"
export const ParrainageFormulaire = ({ formulaireParrainageData }) => {
    return (
        <div className='w-10/12 mx-auto my-5'>
            <h3 className='flex justify-center text-2xl p-5 mt-5 lg:hidden'>
                Formulaire de Parrainage
            </h3>
            <FormulairePage formulaire={formulaireParrainageData} />
        </div>
    )
}
