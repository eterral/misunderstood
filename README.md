# Project Overview

## Project Name

[Misunderstood](https://eterral.github.io/misunderstood/)


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

![wireframe](https://i.imgur.com/nsBIZjr.png)


#### MVP 

-Use HTML, CSS, API, and Javascript to develop the app
- Remotely access the New Yorker & PoetryDB API to add elements to the app
- Pull a randomized cartoon from the API and a randomized line of poetry to display
- With user input, allow the user to suggest their own caption to display along with a randomized cartoon 
- Edit captions to better format as a caption instead of a line from a poem

#### PostMVP  

- Allow local storage for user to save favorite combination
- Allow user to send their favorite combination to the developer
- Allow more randomness toe be used in generation

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|November 5-7th| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|November 8th| Project Approval/Psuedo Code/Test Code | Complete
|November 9th | HTML/Script | Complete
|November 10th | CSS | Complete
|November 11th | Polish | Complete
|November 12th| Post-MVP | Complete

## Priority Matrix

![priority matrix](https://i.imgur.com/vVX4Bt6.jpg)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Psuedocode | H | 1hr | 1hr| 1hr |
|Axios Request| H | 1hr | 1hr | 1hr|
| Basic HTML | M | 3hrs| 2hrs | 2hrs |
| CSS | H | 4hrs| 3hrs | 3hrs |
| New Yorker API | H | 2.5hrs | 1hr | 1hr |
| PoetryDB API | H | 2.5hrs | 1hr | 1hr|
| EventListeners | H | 3hrs | 4hrs | 4hrs |
| Flex Box | H | 4hrs | 5hrs | 5hrs |
| DOM Manpiulation | H | 3hrs | 4 hrs | 4hrs |
| Local Storage| L | 3hrs | 1hr| 1hr |
| Total | H | 27hrs| 24hrs | 24hrs |


## Code Snippet

```function rdmLine(caption) {
  let rdmLineIndex = Math.round(Math.random() * caption.length);
  if (
    caption[rdmLineIndex].endsWith(",") ||
    caption[rdmLineIndex].endsWith(";") === true
  ) {
    caption[rdmLineIndex] = caption[rdmLineIndex].slice(0, -1);
  }
  if (caption[rdmLineIndex] === "") {
    rdmLine(caption);
  } else {
    renderCaption(caption[rdmLineIndex]);
  }
  favoriteForm.appendChild(setFavorite);
}```

## Change Log
 - 11/14/21
 
 Plan to add contact form in the future