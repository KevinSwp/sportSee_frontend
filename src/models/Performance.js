class Performance {
    constructor(object) {
        this.userId = object.userId;
        this.data = this.exempleUpdateData(object.data, object.kind)
        // this.data = data.data.map(item => ({
            // subject: this.translateKind(item.kind),
            // value: item.value,
        // }));
    }

    exempleUpdateData (data, kind){
        return data.map(item => {
            return {
                ...item,
                subject : kind[item.kind]
            }
        })
    }
    /*
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
    }*/
}

export default Performance;
