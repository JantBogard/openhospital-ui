import React, { FC, useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../types";
import { AdmissionTransitionState } from "./types";
import { AdmissionDTO, PatientDTOStatusEnum } from "../../../generated";
import PatientAdmissionTable from "./admissionTable/AdmissionTable";
import { getCurrentAdmissionByPatientId } from "../../../state/admissions/actions";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

const PatientAdmissions: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const [shouldUpdateTable, setShouldUpdateTable] = useState(false);

  const patient = useSelector(
    (state: IState) => state.patients.selectedPatient.data
  );

  useEffect(() => {
    dispatch(getCurrentAdmissionByPatientId(patient?.code));
  }, [patient, dispatch]);

  return (
    <>
      {patient?.status === PatientDTOStatusEnum.I ? (
        <div className="patientAdmission">
          <PatientAdmissionTable shouldUpdateTable={shouldUpdateTable} />
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};

export default PatientAdmissions;
