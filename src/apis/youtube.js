import axios from 'axios';

// const KEY='AIzaSyC0uiP7egnV8m8Jp2ml9jYPd_irXg-D6jI'
const KEY='AIzaSyBxhPYrWeaqBGzKAHq8NR2pvJk-42Ob2QE'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})