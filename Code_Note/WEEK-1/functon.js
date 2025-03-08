let name={
    fname:"Brijesh",
    lname:"Singh",
    get fullname(){
        return this.fname+" "+this.lname;
    },
    set fullname(fullname) {
        let part_name=fullname.split(" ");
        this.fname=part_name[0];
        this.lname=part_name[1];
    }
}
console.log(name.fullname)
console.log(name.fullname="Alok yadav")
const x=5
const y=6
console.log(`x and {y} is ${x+y}` )

