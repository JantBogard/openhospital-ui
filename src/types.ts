import { IExaminationsState } from "./state/examinations/types";
import { IMainState } from "./state/main/types";
import { IPatientsState } from "./state/patients/types";

export interface IState {
  main: IMainState;
  patients: IPatientsState;
  examinations: IExaminationsState;
}

// WARN: keep in sync with fixtures in ./mockServer/fixtures/permissionList.js
export type TPermission =
  | "odp.read"
  | "odp.create"
  | "odp.update"
  | "odp.delete"
  | "summary.read"
  | "summary.create"
  | "summary.update"
  | "summary.delete"
  | "examination.read"
  | "examination.create"
  | "examination.update"
  | "examination.delete"
  | "admission.read"
  | "admission.create"
  | "admission.update"
  | "admission.delete"
  | "therapy.read"
  | "therapy.create"
  | "therapy.update"
  | "therapy.delete"
  | "vaccine.read"
  | "vaccine.create"
  | "vaccine.update"
  | "vaccine.delete"
  | "exam.read"
  | "exam.create"
  | "exam.update"
  | "exam.delete";
