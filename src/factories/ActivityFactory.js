import Activity from '../models/Activity'
import ActivityV2 from '../models/ActivityV2'

export const ActivityFactoryType = {
    API_V1: 'api_v1',
    API_V2: 'api_v2',
}

class ActivityFactory {
    constructor(data, type) {

        if (type === ActivityFactoryType.API_V1)
            return new Activity(data)
        else if (type === ActivityFactoryType.API_V2)
            return new ActivityV2(data)
        else
            throw new Error('Format inconnu')
    }
}

export default ActivityFactory