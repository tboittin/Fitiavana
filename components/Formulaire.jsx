import { useState } from "react";

function FormulairePage() {
    const [formData, setFormData] = useState({
      nom: '',
      email: '',
      adress: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      //TODO traitement de formulaire parrainage
    };
  
    return (
      <div className="container mt-5">
        <h2> Merci de remplir le formulaire ci-dessous</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom :</label>
            <input 
              type="text" 
              className="form-control" 
              id="nom" 
              name="nom" 
              value={formData.nom} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="adress">Adresse :</label>
            <input 
              type="adress" 
              className="form-control" 
              id="adress" 
              name="adress" 
              value={formData.adress} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2 ">Soumettre</button>
        </form>
      </div>
    );
  }
  
  export default FormulairePage