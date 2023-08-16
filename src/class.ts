class Student {
  name: string
  id: string | number
  address: string

//contructor ditei hobe 
  constructor(name: string, id: string | number, address: string) {
    this.name = name
    this.id = id
    this.address = address
  }
  getData(){
    console.log(`Name: ${this.name}\nId: ${this.id}\nAddress: ${this.address}`)
  }
}

let std1 = new Student("Adnan",478,"Mohammadpur")
std1.getData()
