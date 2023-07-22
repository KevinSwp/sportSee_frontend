class Session {
    constructor(data) {
        this.userId = data.userId;
        this.sessions = this.convertDayNumbersToNames(data.sessions);
    }

    convertDayNumbersToNames(sessions) {
        const dayNames = [null,'L', 'M', 'M', 'J', 'V', 'S', 'D'];

        return sessions.map(session => ({
            ...session,
            day: dayNames[session.day]
        }));
    }
}

export default Session;
