//helper functions to keep code clean and readable

function setPriority(tag){
    let pri = -1
    if(tag === 'high')
      pri = 0
    else if(tag === 'medium')
      pri = 1
    else if(tag === 'low')
      pri = 2
    else if(tag === 'reminder')
      pri = 3
    else if(tag === 'grocery')
      pri = 4
    else
      pri = 5
    
    return pri
}

function setColor(tag){
    let color = ''
      if(tag === 'low')
        color = 'blue'
      if(tag === 'medium')
        color = 'yellow'
      else if(tag === 'high')
        color = 'volcano'
      else if(tag === 'grocery')
        color = 'green'
      else if(tag === 'reminder')
        color = 'purple'
    return color
}

//find freeKey availible in dataSets passed
//return freeKey
function freeKey(data) {
  data.sort((a,b) => { return a.key - b.key })
  let k
  data.some((e,i,a) => {
    if(e.key - i > 1 ){
      k = i
      return true
    }
    if(i === (a.length - 1)){
      k = e.key+1
      return true
    }
    if(e.key+1 != (a[i+1].key)){
      k = e.key+1
      return true
    }
  })
  console.log("freeKey: ", k)
  return k
}

const priorityFilters = [
    {
      text: 'High',
      value: 'high'
    },
    {
      text: 'Medium',
      value: 'medium'
    },
    {
      text: 'Low',
      value: 'low'
    },
    {
      text: 'Reminder',
      value: 'reminder'
    },
    {
      text: 'Grocery',
      value: 'grocery'
    },
  ]

export { setPriority, setColor, priorityFilters, freeKey }