export const shuffle = (array) =>  {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

    export const qa = shuffle([{q:'Action that is againist the law', a:'crime'},
              {q:'In the open air; Outside a building', a:'outdoor'},
              {q:'Physical activity that keep you fit', a:'exercise'},
              {q:'usual; happening often', a:'common'},
              {q:'strong and well; not sick', a:'healthy'},
              {q:'Common, regular', a:'ordinary'},
              {q:'a chance to do something', a:'opportunity'},
              {q:'things you do or that happen to you', a:'experiences'},
              {q:'things you are able to do well', a:'skills'},
              {q:'likely to cause harm or injury ', a:'dangerous'},
              {q:'having imagination and artistic ability', a:'creative'},
              {q:'to share information with other', a:'communicate'},
              {q:'to go to different places and learn about thing', a:'explore'},
              {q:'an exciting time or event', a:'adventure'},
              {q:'preferred, most like ', a:'favorite'},
              {q:'causing laughter or pleasure', a:'amusing'},
  
  ])
  