import { ProjectsData } from "./types";
import { albertSemillas } from "./albert-semillas";
import { incorCentroMedico } from "./incor-centro-medico";
import { miRankingTenis } from "./mi-ranking-tenis";
// import { himalayaSaas } from "./himalaya-saas";

export const projectsData: ProjectsData = {
  "albert-semillas": albertSemillas,
  "incor-centro-medico": incorCentroMedico,
  "mi-ranking-tenis": miRankingTenis,
  // "himalaya-saas": himalayaSaas, // TODO: Descomentar cuando esté listo
};

export * from "./types";
