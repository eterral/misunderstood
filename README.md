# Project Overview

## Project Name

Misunderstood

## Project Description

A page that displays a random New Yorker cartoon from its API without its original caption. The caption is replaced with a random line of poetry from the PoetryDB API.
Users will also have the option to enter their own caption without seeing a cartoon and having their caption applied to a random cartoon.

## API and Data Sample

New Yorker Cartoon Random API
```
{
"id": "2907075",
"pn": "a18662",
"date": "11/20/2014 14:18",
"src": "https://www.newyorker.com/wp-content/uploads/2014/12/141201_a18662-600.jpg",
"caption": "&ldquo;There can be no peace until they renounce their Rabbit God and accept our Duck God.&rdquo;",
"cartoon_bank_url": "http://www.condenaststore.com/-sp/_i12925627_.htm"
}
```
PoetryDB
```

  {
    "title": "A London Plane-Tree",
    "author": "Amy Levy",
    "lines": [
      "Green is the plane-tree in the square,",
      "The other trees are brown;",
      "They droop and pine for country air;",
      "The plane-tree loves the town.",
      "",
      "Here from my garret-pane, I mark",
      "The plane-tree bud and blow,",
      "Shed her recuperative bark,",
      "And spread her shade below.",
      "",
      "Among her branches, in and out,",
      "The city breezes play;",
      "The dun fog wraps her round about;",
      "Above, the smoke curls grey.",
      "",
      "Others the country take for choice,",
      "And hold the town in scorn;",
      "But she has listened to the voice",
      "On city breezes borne."
    ],
    "linecount": "16"
  }
]
```

## Wireframes

![wireframe](https://i.imgur.com/eIQizA4.png)


#### MVP 

- Find 2 external APIs to use
- Pull a random cartoon on the page with a correspond random line of poetry
- Allow user to suggest their own caption for a random cartoon 

#### PostMVP  

- Allow local storage for user to save favorite combination
- Allow user to send favorite combination to me
- Generate more randomness into the caption & image

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|November 5-7th| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|November 8th| Project Approval | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  