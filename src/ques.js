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
              {q:'strong and well; not sick', a:'healthy'}
  
  ])
  