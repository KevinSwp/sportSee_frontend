class Score {
    constructor(data) {
        this.userId = data.userId;
        this.todayScore = data.todayScore * 100;
        this.keyData = data.keyData;
    }
}

export default Score;
