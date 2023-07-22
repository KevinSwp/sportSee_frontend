import Main from '../models/Main'

export const MainFactoryType = {
    API_V1: 'api_v1'
}

class MainFactory {
    constructor(data, type) {
        if (type === MainFactoryType.API_V1)
            return new Main(data)
        else
            throw new Error('Format inconnu')
    }
}

export default MainFactory;
