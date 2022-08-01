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

export { setPriority, setColor, priorityFilters }