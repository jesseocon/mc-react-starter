export const fetchCourses = () => {
  const courses = [
    {
      id: 1,
      instructorName: 'Shonda Rhimes',
      className: 'Teaches writing for television',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/430/original/1502152746-1481755528-SR_ClassTile_V1_A.jpg%3F1502152746',
      selected: true
    },
    {
      id: 2,
      instructorName: 'Christina Aguilera',
      className: 'Teaches singing',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/340/original/1477794025-class-ca.jpg%3F1477794025',
      selected: false
    },
    {
      id: 3,
      instructorName: 'David Mamet',
      className: 'Teaches dramatic writing',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/579/original/1502152523-1492646475-DaMa_ClassTile_V2_A.jpg%3F1502152523',
      selected: false
    },
    {
      id: 4,
      instructorName: 'Aaron Sorkin',
      className: 'Teaches screenwriting',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/330/original/1477793784-class-as.jpg%3F1477793784',
      selected: false
    },
    {
      id: 5,
      instructorName: 'Serena Williams',
      className: 'Teaches tennis',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/324/original/1477793655-class-sw.jpg%3F1477793655',
      selected: false
    },
    {
      id: 6,
      instructorName: 'Gordon Ramsay',
      className: 'Teaches cooking',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/405/original/1479664523-GR_ClassTile_V1_A.jpg%3F1479664523',
      selected: false
    },
    {
      id: 7,
      instructorName: 'Chris Hadfield',
      className: 'Teaches space exploration',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1590/original/1523378845-Class_Tile.jpg%3F1523378845',
      selected: false
    },
    {
      id: 8,
      instructorName: 'James Patterson',
      className: 'Teaches writing',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/347/original/1477794202-class-jp.jpg%3F1477794202',
      selected: false
    },
    {
      id: 9,
      instructorName: 'Ron Howard',
      className: 'Teaches directing',
      previewImage: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/905/original/1509410953-Class_Tile.jpg%3F1509410953',
      selected: false
    },
  ]

  return new Promise((resolve) => {
    window.setTimeout(
      () => resolve({ courses }),
      500
    )
  })
}


export const bookmarkCourse = (course) => (
  Promise.resolve(course)
)
