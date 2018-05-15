## The Assignment
* Create the following page: https://www.figma.com/file/KQr5QmLmvKzpOaxp8oEBoXE6/Logged-In-HP
* Only do the following view: LIHP 2 - This is the first view
* (Read the readme at:) [https://github.com/jesseocon/mc-react-starter/tree/master/src] . This is how we structure our apps. Use this format to extend the app to have the LIHP 2 view. This should be located at '/' You will have to adjust the router.js file as currently '/' point to the CoursesView

* You will be stubbing all the api calls. Please see how this is done for the courses view and match that format
* Assume the top half of the view under the heading my classes will be using /api/v2/{userId}/user_courses to retrieve the user_courses and that this will retrieve the last_chapter_number, along with the course information. Assume that the first piece of text under the image comes from the chapter. Assume that you will be making a separate api call to /api/v2/chapters with an array of chapter ids that you aggregate from each last_chapter_id from the previous api call. 
* Assume that the lower half of the view under the heading Explore Classes will come from /api/v2/users/{userId}/recommended_courses and will return an array of courses in the format show below for courses.

## UserCourse Description
The user course is a mapping table between courses and users. Each user course will include the course nested within. For brevity we abbreviate this as an object in the data structure shown below
### Typical data structure return for api/v2/{userId}/user_courses
```json
[
  {
    "id": 1,
    "course_id": 10,
    "user_id": 50,
    "last_watched_chapter": 5,
    "course": {},
  }
]
```

## Chapter Description
The chapter is analogous to a Lesson and is sometimes referred to as a lesson on the site. The model in our database is Chapter.

### Typical data structure returned from /api/v2/chapters
```json
[
  {
    "id": 1,
    "number": 1,
    "duration": "2:47",
    "title": "Introduction",
    "video_id": "vypq2zl8cj",
    "course_id": 1,
    "slug": "introduction",
    "abstract": "Your instructor, James Patterson—currently the best-selling author in the world—lets you know what he has planned for your class and what you'll need to learn to start writing your own best-sellers.",
    "position": 1,
    "end_screen_type": "workbook",
    "is_example_lesson": false,
    "video_vendor": "wistia",
    "video_thumb_url_file_name": "4c1462848f009575f6d37546a506ecbea174d7df.jpg",
    "brightcove_video_id": "5551789260001",
    "wistia_video_id": "vypq2zl8cj",
    "workbook_page_number": null,
    "topic": "Welcome to MasterClass"
  }
]
```

## Course Description
The course is the building block for the masterclass site. To keep the response manageable we return only what is necessary to build an average page on the site but the course also has related models such as chapters that will not be returned in the response.

### Typical data structure returned for a course
```json
[
  {
    "id": 10,
    "title": "Aaron Sorkin Teaches Screenwriting",
    "slug": "aaron-sorkin-teaches-screenwriting",
    "status": "available",
    "start_date": "2016-08-09",
    "other_courses": [
      19,
      16,
      6,
      9,
      53,
      55,
      8,
      14,
      12,
      52
    ],
    "vanity_name": "as",
    "is_generic": false,
    "is_blacklisted": false,
    "brightcove_video_id": "",
    "wistia_video_id": "ciim4lsleo",
    "mobile_ready": true,
    "instructor": {
    "id": 43,
    "name": "Aaron Sorkin",
    "slug": "aaron-sorkin",
    "created_at": "2016-06-20T16:14:15.699-07:00",
    "updated_at": "2017-10-31T11:19:37.072-07:00",
    "first_name": "Aaron"
    },
    "images": [
      {
        "kind": "cm_col_2_icon",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/278/original/1466552318-icons-stats-jp-2.svg?1466552318"
      },
      {
        "kind": "class_skills",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/280/original/1466552318-AS_class_skills_V1_A.jpg?1466552318"
      },
      {
        "kind": "fb_image",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/281/original/1466552318-AS_FBOG_V1_A.jpg?1466552318"
      },
      {
        "kind": "cart",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/282/original/1466552319-AS-cart_V1_B.jpg?1466552319"
      },
      {
        "kind": "headshot",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/285/original/1466552319-AS_Headshot_V1_B.jpg?1466552319"
      },
      {
        "kind": "banner",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/286/original/1466552319-AS-banner-V1_B.jpg?1466552319"
      },
      {
        "kind": "enrolled_hero",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/294/original/1491419067-AS_EnrolledHero_V6.jpg?1491419067"
      },
      {
        "kind": "class_hero",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/283/original/1466562962-AS_class_hero_V2_A_%282%29.jpg?1466562962"
      },
      {
        "kind": "office_hours",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/295/original/1469211897-AS_OfficeHours_V1_A.jpg?1469211897"
      },
      {
        "kind": "class_review",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/296/original/1469218979-AS-class_review_V1_B.jpg?1469218979"
      },
      {
        "kind": "",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/279/original/1466552318-AS-TW-OG.jpg?1466552318"
      },
      {
        "kind": "class_portrait",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/287/original/1492119620-AS_ClassPortrait_Final.jpg?1492119620"
      },
      {
        "kind": "cm_mobile_hero",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/315/original/1476475309-1475016518-as-hero.jpg?1476475309"
      },
      {
        "kind": "cm_mobile_bio",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/316/original/1476475309-1475016518-about-as.jpg?1476475309"
      },
      {
        "kind": "cm_mobile_faq",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/317/original/1476475439-1475016518-faq-header.jpg?1476475439"
      },
      {
        "kind": "cm_mobile_lesson_plan",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/318/original/1476475440-1475016665-lp-header.jpg?1476475440"
      },
      {
        "kind": "cm_mobile_explore_1",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/319/original/1476475440-1475016665-office-hours.jpg?1476475440"
      },
      {
        "kind": "cm_mobile_explore_3",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/320/original/1476475440-1475016665-workbook.jpg?1476475440"
      },
      {
        "kind": "cm_mobile_explore_2",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/321/original/1476475440-1475016665-community.jpg?1476475440"
      },
      {
        "kind": "hp_slide_thumb",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/329/original/1477793784-as-tile.jpg?1477793784"
      },
      {
        "kind": "hp_tile",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/330/original/1477793784-class-as.jpg?1477793784"
      },
      {
        "kind": "hp_slide",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/328/original/1495557720-hero-as-v3.jpg?1495557720"
      },
      {
        "kind": "hp_featured_tile",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/498/original/1489514339-AS_FeaturedImage_V1_A.jpg?1489514339"
      },
      {
        "kind": "class_hero_no_gradient",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/564/original/1489515043-AS_CM_Hero_V1_A.jpg?1489515043"
      },
      {
        "kind": "start_banner_wide",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/723/original/1498095173-MasterClass-Class-Overview-Hero-AS-Desktop.jpg?1498095173"
      },
      {
        "kind": "start_banner_normal",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/724/original/1498095174-MasterClass-Class-Overview-Hero-AS-Tablet.jpg?1498095174"
      },
      {
        "kind": "start_banner_mobile",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/725/original/1498095174-MasterClass-Class-Overview-Hero-AS-Mobile.jpg?1498095174"
      },
      {
        "kind": "abandoned_cart_header_image",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/840/original/1506990363-AS-9f56b3d4-4040-4437-a5a1-c63ef627e713.jpg?1506990363"
      },
      {
        "kind": "cm_col_1_icon",
        "image_url": "https://masterclass-jocon.s3-us-west-1.amazonaws.com/images/277/original/1466552318-icons-stats-dh-1.svg?1466552318"
      }
    ]
  }
]
```
