const getBMICalculatorForm = () => {
    return document.getElementById("bmi-calculator-form")
}

const getHeight = () => {
    return document.getElementById("height").value
}

const getWeight = () => {
    return document.getElementById("weight").value
}

const getBMI = (height, weight) => {
    return Number((weight) / ((height / 100) ** 2)).toFixed(1)
}

const setBMIResult = (result) => {
    document.getElementById("bodymass").innerHTML = result
}

const getBodyTypeFromBMI = (bmi) => {
    if (bmi < 16) {
        return "Severe Thinness"
    }
    else if (bmi >= 16 && bmi <= 17) {
        return "Moderate Thinness"
    }
    else if (bmi > 17 && bmi < 18.5) {
        return "Mid Thinness"
    }
    else if (bmi >= 18.5 && bmi <= 25) {
        return "Normal"
    }
    else if (bmi > 25 && bmi < 30) {
        return "Overweight"
    }
    else if (bmi >= 30 && bmi <= 35) {
        return "Obese Class I"
    }
    else if (bmi > 35 && bmi < 40) {
        return "Obese Class II"
    }
    else {
        // over 40
        return "Obese Class III"
    }
}

const setBodyTypeResult = (result) => {
    document.getElementById("bodytype").innerHTML = result
}

getBMICalculatorForm().addEventListener("submit", (e) => {
    e.preventDefault()

    const height = getHeight()
    const weight = getWeight()

    const bmi = getBMI(height, weight)

    setBMIResult(bmi)

    const bodytype = getBodyTypeFromBMI(bmi)

    setBodyTypeResult(bodytype)
})