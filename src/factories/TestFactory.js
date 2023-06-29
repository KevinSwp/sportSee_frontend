import Test from '../models/Test'

class TestFactory {
    constructor(data, type){

        if(type === 'api_v1')
            return new Test(data)
        else
            throw new Error('Format inconnu')
    }
}

export default TestFactory