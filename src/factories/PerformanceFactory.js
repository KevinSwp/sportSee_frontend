import Performance from '../models/Performance'

export const PerformanceFactoryType = {
    API_V1: 'api_v1'
}

class PerformanceFactory {
    constructor(data, type) {
        if (type === PerformanceFactoryType.API_V1)
            return new Performance(data)
        else
            throw new Error('Format inconnu')
    }
}

export default PerformanceFactory;
