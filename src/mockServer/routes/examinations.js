import patientExaminationDTO from "../fixtures/patientExaminationDTO";

export const examinationsRoutes = (server) => {
    server.namespace("/examinations/byPatientId", () => {
        server.get("/:patId").intercept((req, res) => {
            const code = req.params.code;
            switch (code) {
                case "1":
                    res.status(400);
                    break;
                case "2":
                    res.status(204);
                    res.body = null;
                    break;
                default:
                    res.status(200).json([patientExaminationDTO,
                        patientExaminationDTO, patientExaminationDTO, patientExaminationDTO
                    ]);
            }
        });
    });
};
