class ActivityV2 {
    constructor(data){
        this.id = data.user_id;
        this.sessions = data.autreSessions;
        this.data = [];
        this.processData();
    }

    // Get those 10 first sessions
    get sanitizeData() {
        return this.sessions.slice(0, 10).map((session, index) => ({ name: index + 1, kg: session.kilogram, kCal: session.calories }));
    }

    // Fill the array with 0 if necessary
    fillerDataWithZero(length) {
        return Array.from({ length: length }, (_, i) => ({ name: i + length + 1, kg: 0, kCal: 0 }));
    }

    // Get max weight
    get maxKilogram() {
        return Math.max(...this.data.map(item => item.kg));
    }

    // Process data
    processData() {
        const userData = this.sanitizeData;
        const fillerData = this.fillerDataWithZero(10 - userData.length);
        this.data = [...userData, ...fillerData];
    }
}

export default ActivityV2;
