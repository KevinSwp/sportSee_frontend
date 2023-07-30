class Performance {
    constructor(object) {
        this.userId = object.userId;
        this.kind = object.kind;
        this.data = this.updateData(object.data);
    }

    updateData(data) {
        return data.map(item => {
            return {
                ...item,
                subject: this.translateKind(this.kind[item.kind])
            }
        })
    }

    translateKind(kind) {
        const kindTranslate = {
            'cardio': 'Cardio',
            'energy': 'Énergie',
            'endurance': 'Endurance',
            'strength': 'Force',
            'speed': 'Vitesse',
            'intensity': 'Intensité'
        };

        // Return translate if it exists, else return the original term
        return kindTranslate[kind] || kind;
    }
}

export default Performance;
