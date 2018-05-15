import { isEmpty } from 'lodash'


export const fetchMyCourses = () => {
  let courses = [
    {
      id: 1,
      instructorName: 'Shonda Rhimes',
      className: 'Teaches writing for television',
      videoId: 1,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/430/original/1502152746-1481755528-SR_ClassTile_V1_A.jpg%3F1502152746',
      currentChapter: {
        number: 1,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 2,
      instructorName: 'Christina Aguilera',
      className: 'Teaches singing',
      videoId: 2,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/340/original/1477794025-class-ca.jpg%3F1477794025',
      currentChapter: {
        number: 3,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 3,
      instructorName: 'David Mamet',
      className: 'Teaches dramatic writing',
      videoId: 3,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/579/original/1502152523-1492646475-DaMa_ClassTile_V2_A.jpg%3F1502152523',
      currentChapter: {
        number: 1,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 4,
      instructorName: 'Aaron Sorkin',
      className: 'Teaches screenwriting',
      videoId: 4,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/330/original/1477793784-class-as.jpg%3F1477793784',
      currentChapter: {
        number: 1,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 5,
      instructorName: 'Serena Williams',
      className: 'Teaches tennis',
      videoId: 5,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/324/original/1477793655-class-sw.jpg%3F1477793655',
      currentChapter: {
        number: 4,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 6,
      instructorName: 'Gordon Ramsay',
      className: 'Teaches cooking',
      videoId: 6,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/405/original/1479664523-GR_ClassTile_V1_A.jpg%3F1479664523',
      currentChapter: {
        number: 2,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 7,
      instructorName: 'Dustin Hoffman',
      className: 'Teaches acting',
      videoId: 7,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1590/original/1523378845-Class_Tile.jpg%3F1523378845',
      currentChapter: {
        number: 3,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 8,
      instructorName: 'James Patterson',
      className: 'Teaches writing',
      videoId: 8,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/347/original/1477794202-class-jp.jpg%3F1477794202',
      currentChapter: {
        number: 1,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
    {
      id: 9,
      instructorName: 'Ron Howard',
      className: 'Teaches directing',
      videoId: 8,
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/905/original/1509410953-Class_Tile.jpg%3F1509410953',
      currentChapter: {
        number: 1,
        name: 'Chapter Name',
      },
      chapters: [
        { number: 1, name: 'Chapter Name' },
        { number: 2, name: 'Chapter Name' },
        { number: 3, name: 'Chapter Name' },
        { number: 4, name: 'Chapter Name' },
        { number: 5, name: 'Chapter Name' },
        { number: 6, name: 'Chapter Name' },
        { number: 7, name: 'Chapter Name' },
        { number: 8, name: 'Chapter Name' },
        { number: 9, name: 'Chapter Name' },
        { number: 10, name: 'Chapter Name' },
      ]
    },
  ]

  return new Promise((resolve) => {
    window.setTimeout(
      () => resolve({ courses }),
      500
    )
  })
}


export const fetchRecommendedCourses = (query) => {
  let courses = [
    {
      id: 1,
      instructorName: 'Shonda Rhimes',
      className: 'Teaches writing for television',
      videoId: 1,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 20
    },
    {
      id: 2,
      instructorName: 'Christina Aguilera',
      className: 'Teaches singing',
      videoId: 2,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 18
    },
    {
      id: 3,
      instructorName: 'David Mamet',
      className: 'Teaches dramatic writing',
      videoId: 3,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 20
    },
    {
      id: 4,
      instructorName: 'Aaron Sorkin',
      className: 'Teaches screenwriting',
      videoId: 4,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 15
    },
    {
      id: 5,
      instructorName: 'Serena Williams',
      className: 'Teaches tennis',
      videoId: 5,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 22
    },
    {
      id: 6,
      instructorName: 'Gordon Ramsay',
      className: 'Teaches cooking',
      videoId: 6,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 21
    },
    {
      id: 7,
      instructorName: 'Dustin Hoffman',
      className: 'Teaches acting',
      videoId: 7,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 20
    },
    {
      id: 8,
      instructorName: 'James Patterson',
      className: 'Teaches writing',
      videoId: 8,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 20
    },
    {
      id: 8,
      instructorName: 'Reba McEntire',
      className: 'Teaches country music',
      videoId: 8,
      previewImage: 'http://lorempixel.com/320/180/people/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      lessonCount: 16
    },
  ]

  if (!isEmpty(query)) {
    courses = courses.filter(
      (course) => course.instructorName.includes(query)
    )
  }

  return new Promise((resolve) => {
    window.setTimeout(
      () => resolve({ courses }),
      500
    )
  })
}
