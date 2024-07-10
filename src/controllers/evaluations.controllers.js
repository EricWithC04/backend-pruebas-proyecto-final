export const evaluation = (req, res) => {
    const { answers } = req.body

    let total = 0

    answers.forEach(answer => {
        if (answer) {
            total += 20
        }
    })

    res.status(200).send({ approved: total >= 60, points: total })
}

export const unitEvaluation = (req, res) => {
    const { answers } = req.body

    let total = 0

    answers.forEach(answer => {
        if (answer) {
            total += 10
        }
    })

    res.status(200).send({ approved: total >= 60, points: total })
}