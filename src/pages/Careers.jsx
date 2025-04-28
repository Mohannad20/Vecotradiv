import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useParams } from "react-router-dom";
import Wrench from "../assets/animations/Wrench.json";
import Hammer from "../assets/animations/Hammer.json";
import Office from "../assets/animations/Office.json";
import MarqueeBanner from "../components/MarqueeBanner";

const Careers = () => {
  const [jobs] = useState([
    // ... (keep your existing jobs data)
    {
      id: 1,
      title: "Ingénieur en Mécanique",
      department: "Ingénierie",
      location: "Casablanca, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un ingénieur en mécanique passionné pour rejoindre notre équipe dynamique. Vous serez responsable de la conception et de l'analyse des systèmes mécaniques.",
      responsibilities: [
        "Concevoir des systèmes mécaniques.",
        "Effectuer des analyses de performance.",
        "Collaborer avec d'autres départements.",
      ],
      requirements: [
        "Diplôme en ingénierie mécanique.",
        "Expérience dans la conception assistée par ordinateur (CAO).",
        "Compétences en résolution de problèmes.",
      ],
      animation: "Wrench",
    },
    {
      id: 2,
      title: "Architecte",
      department: "Architecture",
      location: "Marrakech, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un architecte créatif pour concevoir des espaces innovants et fonctionnels. Vous travaillerez sur des projets variés allant de la conception résidentielle à commerciale.",
      responsibilities: [
        "Créer des conceptions architecturales.",
        "Collaborer avec les clients et les entrepreneurs.",
        "Assurer la conformité aux réglementations locales.",
      ],
      requirements: [
        "Diplôme en architecture.",
        "Expérience dans la conception de bâtiments.",
        "Compétences en logiciels de modélisation 3D.",
      ],
      animation: "Hammer",
    },
    {
      id: 3,
      title: "Gestionnaire de Projet",
      department: "Gestion de Projet",
      location: "Agadir, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un gestionnaire de projet expérimenté pour superviser nos projets de construction. Vous serez responsable de la planification, de l'exécution et du suivi des projets.",
      responsibilities: [
        "Gérer le budget et le calendrier du projet.",
        "Coordonner les équipes de travail.",
        "Assurer la qualité et la sécurité sur le site.",
      ],
      requirements: [
        "Diplôme en gestion de projet ou domaine connexe.",
        "Expérience dans la gestion de projets de construction.",
        "Excellentes compétences en communication.",
      ],
      animation: "Office",
    },
    {
      id: 4,
      title: "Technicien en Électricité",
      department: "Électricité",
      location: "Tanger, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un technicien en électricité qualifié pour installer et entretenir nos systèmes électriques. Vous travaillerez sur des projets résidentiels et commerciaux.",
      responsibilities: [
        "Installer des systèmes électriques.",
        "Effectuer des réparations et de la maintenance.",
        "Lire et interpréter des plans électriques.",
      ],
      requirements: [
        "Diplôme en électricité ou domaine connexe.",
        "Expérience dans l'installation électrique.",
        "Certifications pertinentes.",
      ],
      animation: "Wrench",
    },
    {
      id: 5,
      title: "Designer d'Intérieur",
      department: "Design",
      location: "Fès, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un designer d'intérieur créatif pour concevoir des espaces intérieurs fonctionnels et esthétiques. Vous travaillerez sur des projets résidentiels et commerciaux.",
      responsibilities: [
        "Créer des conceptions d'intérieur.",
        "Sélectionner des matériaux et des meubles.",
        "Collaborer avec les clients pour comprendre leurs besoins.",
      ],
      requirements: [
        "Diplôme en design d'intérieur.",
        "Expérience dans la conception d'espaces intérieurs.",
        "Compétences en logiciels de design.",
      ],
      animation: "Hammer",
    },
    {
      id: 6,
      title: "Responsable Marketing",
      department: "Marketing",
      location: "Rabat, Maroc",
      type: "Plein temps",
      description:
        "Nous recherchons un responsable marketing dynamique pour développer et exécuter nos stratégies marketing. Vous serez responsable de la gestion de l'équipe marketing.",
      responsibilities: [
        "Développer des stratégies marketing.",
        "Gérer les campagnes publicitaires.",
        "Analyser les performances des campagnes.",
      ],
      requirements: [
        "Diplôme en marketing ou domaine connexe.",
        "Expérience dans le marketing digital.",
        "Compétences en analyse de données.",
      ],
      animation: "Office",
    },

  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    if (jobId) {
      const job = jobs.find((j) => j.id === parseInt(jobId));
      setSelectedJob(job || jobs[0]);
    } else if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
  }, [jobId, jobs]);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    window.history.pushState({}, "", `/careers/${job.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Marquee Banner - Top */}
      <div className="font-[Monument] font-bold tracking-widest mb-10">
        <MarqueeBanner
          textColor="text-white"
          size="text-[3.5rem] md:text-[5rem]"
          position="top"
          bg="bg-amber-300"
          text="&nbsp;&nbsp;Nous recrutons • Envoyez votre CV • Devenez membre de l'équipe • Croissance professionnelle&nbsp;&nbsp;"

        />
      </div>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-200px)] px-6 py-8 md:py-12  container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* Jobs List Column (1/3) */}
          <div className="w-full md:w-1/3 h-full">
            <h2 className="font-[Monument] text-xl uppercase mb-4 border-b-2 border-black pb-2 sticky top-[80px] z-10">
              Postes Disponibles
            </h2>
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => handleJobSelect(job)}
                  className={`p-3 border border-black cursor-pointer transition-all font-[nippo] ${
                    selectedJob?.id === job.id
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <h3 className="font-bold uppercase">{job.title}</h3>
                  <p className="text-sm">
                    {job.department} • {job.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details Column (2/3) */}
          <div className="w-full md:w-2/3">
            {selectedJob ? (
              <div className="border border-black p-6 font-[nippo] h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-[Monument] text-2xl md:text-3xl uppercase mb-2">
                      {selectedJob.title}
                    </h2>
                    <p className="text-sm md:text-base">
                      {selectedJob.department} • {selectedJob.location} •{" "}
                      {selectedJob.type}
                    </p>
                  </div>
                  <div className="w-16 h-16">
                    <Lottie
                      animationData={
                        selectedJob.animation === "Wrench"
                          ? Wrench
                          : selectedJob.animation === "Hammer"
                          ? Hammer
                          : Office
                      }
                      loop
                      autoplay
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold uppercase border-b border-black mb-3 text-lg">
                    Description
                  </h3>
                  <p className="text-base">{selectedJob.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold uppercase border-b border-black mb-3 text-lg">
                      Responsabilités
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold uppercase border-b border-black mb-3 text-lg">
                      Exigences
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="border-2 border-dashed border-black py-3 px-8 uppercase font-bold hover:bg-black hover:text-white transition-colors text-lg">
                    Postuler Maintenant
                  </button>
                </div>
              </div>
            ) : (
              <div className="border border-black p-6 text-center h-full flex items-center justify-center">
                <p className="text-lg">Aucun poste sélectionné</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Marquee Banner - Bottom */}
      {/* <div className="sticky bottom-0 z-10 bg-white border-t border-black">
        <MarqueeBanner
          speed={40}
          reverse
          bg="bg-white"
          textColor="text-black"
          size="text-[2.5rem] md:text-[3.5rem]"
          text="&nbsp;&nbsp;Nous recrutons • Envoyez votre CV • Devenez membre de l'équipe • Croissance professionnelle&nbsp;&nbsp;"
        />
      </div> */}
    </div>
  );
};

export default Careers;