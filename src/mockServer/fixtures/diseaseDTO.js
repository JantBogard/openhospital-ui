const disease1DTO = {
    code: Math.floor(Math.random() * 100 + 1),
    description: "Abortions",
    diseaseType: {
        code: "MP",
        description: "3.MATERNAL AND PERINATAL DISEASES"
    },
    opdInclude: true,
    ipdInInclude: true,
    ipdOutInclude: true
}

export default disease1DTO
