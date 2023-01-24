import profile1 from '../assets/profile1.png'

export let TestimonialsData = [];


export const setReviews = (array) => {
    for (let review of array) {
        review.image = profile1;
    }

    TestimonialsData = array;
}