import Score from '../models/Score'

export const ScoreFactoryType = {
    API_V1: 'api_v1'
}

class ScoreFactory {
    constructor(data, type) {
        if (type === ScoreFactoryType.API_V1)
            return new Score(data)
        else
            throw new Error('Format inconnu')
    }
}

export default ScoreFactory;
