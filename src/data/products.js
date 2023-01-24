import webapps from '../assets/webapps.png';
import csharp from '../assets/csharp.png';
import python from '../assets/python.png';

export let SliderProducts = []


export const setProducts = (array) => {

    for (let card of array) {
        if (card.img === "mobile.png") {
            card.img = webapps;
        } else if (card.img === "csharp.png"){
            card.img = csharp;
        } else if (card.img === "python.png") {
            card.img = python;
        }
    }
    SliderProducts = array;

}