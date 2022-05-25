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
              {q:'things you are able to do well', a:'skill'},
              {q:'likely to cause harm or injury ', a:'dangerous'},
              {q:'having imagination and artistic ability', a:'creative'},
              {q:'to share information with other', a:'communicate'},
              {q:'to go to different places and learn about thing', a:'explore'},
              {q:'an exciting time or event', a:'adventure'},
              {q:'preferred, most like ', a:'favorite'},
              {q:'causing laughter or pleasure', a:'amusing'},
              {q:'a person who studies or investigates something scientifically', a:'researcher'},
              {q:'directed, showed the way', a:'led'},
              {q:'made an audio or written copy of something', a:'recorded'},
              {q:'a noise; something that can be heard', a:'sound'},
              {q:'the sound of happiness or amusement', a:'laughter'},
              {q:'great pleasure', a:'happiness'},
              {q:'a thing that someone says to make people laugh', a:'joke'},
              {q:'how things are at certain times and places', a:'situation'},
              {q:'a funny movie, play, show, or story', a:'comedy'},
              {q:'a period when you are not working', a:'free time'},
              {q:'advantages; good results of doing something', a:'benefits'},
              {q:'to get pleasure or satisfaction from something', a:'enjoy'},
              {q:'to spend time doing something calm and peaceful', a:'relax'},
              {q:'a negative point; something that can create a', a:'disadvantage'},
              {q:'to give support to or help to develop', a:'encourage'},
              {q:'well-liked', a:'popular'},
              {q:'a piece or part of', a:'section'},
              {q:'anything that is produced or made with materials and labor', a:'product'},
              {q:'animals or people used in advertising or in a book or movie', a:'characters'},
              {q:'to promote, or make a product or service known', a:'advertise'},
              {q:'people or businesses that buy from other people or businesses', a:'customers'},
              {q:'to remember someone or something when you see it', a:'recognize'},
              {q:'anything that is produced or made with materials and labor', a:'quality'},
              {q:'to direct something at someone', a:'aim'},
              {q:'an effect or outcome', a:'result'},
              {q:'to reach a goal', a:'archive'},
              {q:'to solve, discover', a:'figure out'},
              {q:'the art of deciding how something will look or work using a plan, model, or drawing', a:'design'},
              {q:'a picture or image used to explain something', a:'visual'},
              {q:'to draw in, interest', a:'attract'},
              {q:'difficult to understand or explain', a:'complicated'},
              {q:'the power to do work; a quality of being active', a:'energy'},
              {q:'to be easily seen or noticed', a:'stand out'},
              {q:'to associate with, become part of a group', a:'join'},
              {q:'repeated way in which something happen', a:'pattern'},
              {q:'mathematically normal', a:'average'},
              {q:'to develop, become large', a:'grow'},
              {q:'a high temperature', a:'heat'},
              {q:'changing from ice to water', a:'melting'},
              {q:'in place of', a:'instead'},
              {q:'a little', a:'slightly'},
              {q:'to be present', a:'exist'},
              {q:'to go up, become higher or large', a:'rise'},
              {q:'land near the ocean', a:'coast'},
              {q:'the covering or submerging of normally dry land with a large amount of water', a:'flooding'},
              {q:'a prediction or estimate of future events, especially coming weather or a financial trend', a:'forecast'},
              {q:'a violent disturbance of the atmosphere with strong winds and usually rain, thunder, lightning, or snow', a:'storm'},
              {q:'a prolonged period of abnormally low rainfall, leading to a shortage of water', a:'drought'},
              {q:'an event that can occur when wind moves over loose sticky snow, causing it to move', a:'snow roller'},
              {q:'a whirling cloud like a tornado that forms over water', a:'water spout'},
              {q:'a beautiful crystal formed by very low temperatures and dry air moving over water', a:'ice flower'},
              {q:'a round shape in sky; can be red, orange, or blue', a:'ball lightning'},
              {q:'a tight whirling cloud of fire', a:'fire tornado'},
              {q:'the latest time or date by which something should be completed', a:'deadline'},
              {q:'to refuse to accept, use, or believe something or someone', a:'reject'},
              {q:'a person or organization using the services of other professional person or company', a:'client'},
              {q:'a permit from an authority to own or use something, do a particular thing', a:'license'},
              {q:'inspect someone or something in detail to determine their nature or condition; investigate thoroughly', a:'examine'},
              {q:'a general direction in which something is developing or changing', a:'trend'},
              {q:'fix or attach something firmly so that it cannot be moved or lost', a:'secure'},
              {q:'estimate or forecast something on the basis of present trends or data', a:'project'},
              {q:'the reason for which something is done or created or for which something exists', a:'purpose'},
              {q:'make something more modern or up to date', a:'update'},
              {q:'help, typically of a practical nature', a:'aid'},
              {q:'the arrangement of and relations between the parts or elements of something complex', a:'structure'},
              {q:'send the subject to a particular process, treatment, or condition', a:'submit'},
              {q:'a shaped piece of metal, wood, card, plastic, or other material used as a pattern for processes such as painting, coding website', a:'template'},
              {q:'examine methodically and in detail the constitution or structure of something, typically for purposes of explanation and interpretation', a:'analyze'},
              {q:'find something by looking or otherwise seeking carefully and thoroughly', a:'search'},

  
  ])
  