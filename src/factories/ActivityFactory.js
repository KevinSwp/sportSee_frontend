import Activity from '../models/Activity'

export const ActivityFactoryType = {
    API_V1: 'api_v1'
}

class ActivityFactory {
    constructor(data, type) {

        if (type === ActivityFactoryType.API_V1)
            return new Activity(data)
        else
            throw new Error('Format inconnu')
    }
}

export default ActivityFactory