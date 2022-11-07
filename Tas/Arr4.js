let people=['Greg','Mary','Devon','James']

for(let i=0;i<people.length;i++){
    console.log(people[i])
}

let a=people.indexOf('Greg')
people.splice(a,1)
console.log(people)

people.pop()
console.log(people)

people.unshift('Matt')
console.log(people)

people.push('Nisan')
console.log(people)

for(let i=0;i<people.length;i++){
    if(people[i]=='Mary'){
        break
    }
    else{
        console.log(people[i])
    }
}

let ar=[]
for(let i=0;i<people.length;i++){
    if(people[i]!='Mary' && people[i]!='Matt'){
        ar.push(people[i])
    }
}
console.log(ar)

console.log(people.indexOf('Mary'))

console.log(people.indexOf("Foo"))

let val=people[0];
 val=[]
 for(let i=0;i<people.length;i++){
    val[i]=people[i]
 }
 let ind=val.indexOf('Devon')
 val.splice(ind,1,'Elizabeth','Artie')
 console.log(val)

  let withBob=""
  val.push('Bob')
  for(let i=0;i<val.length;i++){
    withBob=withBob+val[i]+" "
  }
  console.log(withBob)

