const BACKEND_URL = 'http://127.0.0.1:8080/UniWin'

const MOCK_BACKEND_URL = 'http://localhost:8081/mock'

const MOCK_POST = '/test/post'

module.exports = {
    backend_url: BACKEND_URL,

    addMaterial: BACKEND_URL + MOCK_POST,
    addVendor: BACKEND_URL + MOCK_POST,

    addTechnique: BACKEND_URL + MOCK_POST,
    getAllTechnique: MOCK_BACKEND_URL + '/getAllTechnique.json',

    addSampleInput: BACKEND_URL + MOCK_POST,
    getAllSample: MOCK_BACKEND_URL + '/getAllSample.json' 
}