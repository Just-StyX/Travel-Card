import moment from 'moment'

const data = [
    {
        title:'Mount Fuji',
        location:'Japan',
        description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. leap into electronic typesetting, remaining essentially unchanged',
        startDate: moment().subtract(3, 'years').format("MMM Do, YYYY"),
        endDate: moment().subtract(2.8, 'years').format("MMM Do, YYYY"),
        link:'https://en.wikipedia.org/wiki/Mount_Fuji',
        image:'images/fuji.jpg',
    },
    {
        title:'Geirangerfjord',
        location:'Norway',
        description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. leap into electronic typesetting, remaining essentially unchanged',
        startDate: moment().subtract(3.6, 'years').format("MMM Do, YYYY"),
        endDate: moment().subtract(3.5, 'years').format("MMM Do, YYYY"),
        link:'https://en.wikipedia.org/wiki/Geirangerfjord',
        image:'images/fjord.jpg',
    },
    {
        title:'Great Wall',
        location:'China',
        description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. leap into electronic typesetting, remaining essentially unchanged',
        startDate: moment().subtract(5, 'years').format("MMM Do, YYYY"),
        endDate: moment().subtract(4.9, 'years').format("MMMM Do, YYYY"),
        link:'https://en.wikipedia.org/wiki/Great_Wall_of_China',
        image:'images/greatwall.jpg',
    },
    {
        title:'Sydney Opera House',
        location:'Australia',
        description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. leap into electronic typesetting, remaining essentially unchanged',
        startDate: moment().subtract(2, 'years').format("MMM Do, YYYY"),
        endDate: moment().subtract(1.92, 'years').format("MMMM Do, YYYY"),
        link:'https://en.wikipedia.org/wiki/Sydney_Opera_House',
        image:'images/opera.jpg',
    },
    {
        title:'The Pyramid',
        location:'Egypt',
        description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. leap into electronic typesetting, remaining essentially unchanged',
        startDate: moment().subtract(10, 'years').format("MMM Do, YYYY"),
        endDate: moment().subtract(9.94, 'years').format("MMMM Do, YYYY"),
        link:'https://en.wikipedia.org/wiki/Egyptian_pyramids',
        image:'images/pyramid.jpg',
    },
]

export default data