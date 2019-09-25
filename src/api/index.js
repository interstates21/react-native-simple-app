import { getData } from './get'
import { postData } from './post'


const testPATH = "https://ghibliapi.herokuapp.com"
const testURL = "species/603428ba-8a86-4b0b-a9f1-65df6abef3d3/"

export const getCreatureAPI = () => {
    return getData(testURL, testPATH);
}