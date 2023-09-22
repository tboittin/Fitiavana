import FormulairePage from "../components/Formulaire";
import Layout from "../components/Layout";
import ParrainagePresentation from "../components/Parrainage/ParrainagePresentation";

export default function Parrainages() {
  const videoInfos = {
    urlYoutubeLink: "WO7SRf5PCE0",
    title: "Comment Parrainer",
  };
  const formulaireParrainage = {
    nom: {
      title: "nom",
      type: "text",
      value: "",
    },
    email: {
      title: "email",
      type: "email",
      value: "",
    },
    adresse: {
      title: "adresse",
      type: "adress",
      value: "",
    },
    parrainageType: {
      title: "Type de parrainage",
      type: "select",
      value: ["Parrainage simple", "Parrainage double"],
    },
  };
  return (
    <Layout>
      <div className="container h-100">
        <div className="row">
          <ParrainagePresentation videoInfos={videoInfos} />
        </div>
      </div>
      <div className="mb-5 px-5 container h-100">
        <div className="row">
          <div className="col">
            <h2>Formulaire de Parrainage</h2>
            <FormulairePage formulaire={formulaireParrainage} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
