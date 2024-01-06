  const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

  const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(deepClone)
  } 

  const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
      Object.keys(element).map((key) => [key, deepClone(element[key])])
    )
  } 

  const deepClone = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return cloneArray(element)
      case 'object':
        return cloneObject(element)
      default:
        return element
    }
  }

  const freeze = (data) => Object.freeze(data)
  const deepCloneFreeze = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return freeze(cloneArray(element))
      case 'object':
        return freeze(cloneObject(element))
      default:
        return element
    }
  }

  const person = {
    name: 'Caique',
    age: 27,
    hobbies: [
      'movie',
      'music',
      'books'
    ]
  }
  
  const shallowClonePerson = person;
  const deepClonePerson = deepClone(person);
  const deepCloneFreezePerson = deepCloneFreeze(person);

  console.log(shallowClonePerson === person);//true
  console.log(deepClonePerson === person);//false
  console.log(deepClonePerson.hobbies === person.hobbies);//false

  deepClonePerson.name = "Julio";
  shallowClonePerson.name = "Thomas";
  deepCloneFreezePerson.name = "João";

  console.log(person.name);//Thomas
  console.log(deepClonePerson.name);//Julio
  console.log(deepCloneFreezePerson.name);//Caique