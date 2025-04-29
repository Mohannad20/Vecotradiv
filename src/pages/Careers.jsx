import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useParams } from "react-router-dom";
import Wrench from "../assets/animations/Wrench.json";
import Hammer from "../assets/animations/Hammer.json";
import Office from "../assets/animations/Office.json";
import MarqueeBanner from "../components/MarqueeBanner";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:3002/jobs`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchJobs();
  }, []);

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
    <div className="min-h-screen flex flex-col">
      <div className="font-[Monument] font-bold tracking-widest mb-10">
        <MarqueeBanner
          textColor="text-white"
          size="text-[2.5rem] md:text-[5rem]"
          position="top"
          bg="bg-amber-300"
          text="&nbsp;&nbsp;Nous recrutons • Envoyez votre CV • Devenez membre de l'équipe • Croissance professionnelle&nbsp;&nbsp;"
        />
      </div>

      <div className="min-h-[calc(100vh-200px)] px-6 py-8 md:py-12 mt-40 container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 h-full">
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
                  <h3 className="font-bold uppercase border-b border-black border-dashed w-fit mb-3 text-lg">
                    Description
                  </h3>
                  <p className="text-base">{selectedJob.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold uppercase border-b border-black border-dashed w-fit mb-3 text-lg">
                      Responsabilités
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold uppercase border-b border-black border-dashed w-fit mb-3 text-lg">
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
                  <a
                  href="mailto:vecotradiv.34@gmail.com"
                   className="border-2 border-dashed border-black py-3 px-8 uppercase font-bold hover:bg-black hover:text-white transition-colors duration-300 text-lg">
                    Postuler Maintenant
                  </a>
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
    </div>
  );
};

export default Careers;
