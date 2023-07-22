import Session from '../models/Session'

export const SessionFactoryType = {
    API_V1: 'api_v1'
}

class SessionFactory {
    constructor(data, type) {
        if (type === SessionFactoryType.API_V1)
            return new Session(data)
        else
            throw new Error('Format inconnu')
    }
}

export default SessionFactory;
