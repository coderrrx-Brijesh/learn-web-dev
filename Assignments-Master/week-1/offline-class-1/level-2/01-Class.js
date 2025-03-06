class animal{
  constructor(name,leg_count,lang){
    this.name=name
    this.leg_count=leg_count
    this.lang=lang  
  }
  static species(){
    console.log("Animal")
  }
  // NOTE--> A normal method and variabe belongs to objects whereas a static member belongs to class.
  speak(animal){
    console.log(this.name+" speaks "+ this.lang)
  }
}
animal.species();
// animal.speaks();--->error
dog=new animal("bruno",4,"bho-bow-bho");
cat=new animal("ultima",4,"meow-mwe-meow");
dog.speak();

