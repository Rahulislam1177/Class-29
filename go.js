const habby ='Rahul islam';
let phone = 'Google pixel 7Plus';


function mixNumber(array = []) {
    const max =Math.max(...array);
    return max;

}

const myNodes =`I am Mojnu of ${habby} I Have a ${phone}`;
//console.log(myNodes);


const scoyre = x => x * x;
 
//console.log(scoyre(81));

const company = {
    Name:'Wabe Debolapment',
    ceo:{
        Name:'Rahul islam',
        id:'1',
        food:'Rice'
    },
    Web: {
        Work:'Web Debopment',
        Employ:'22',
        FrameWork: 'React js'
    },
    Tech: {
        first:'html',
        secend:'css',
        thard:'js'
    },
}

const myObject = {
x:2,
y:50,
z:60,
a:25,
b:70
};
const {x,b} =myObject;
//console.log(x,b);
//console.log(myObject.q?.k);




const filters = [ 45,4,78,654,23,5,78,34,98,1,55,32];

const filerResult =filters.filter(filter => filter > 20 );



const products = [ 
    {name:'glass', price:50,color:'gray'},
    {name:'shose', price:500,color:'White'},
    {name:'bag', price:2500, color:'Black'},
    {name:'shart',price:700,color:'parpel'},
    {name:'love',price:60000000,color:'Butifull'},

]
const expensive = products.filter(product =>product.price>500)


class sppourt {
    name;
    Destgtion = 'sppourt instractor';
    Address = 'BD';
    phone = 35645623;
 constructor(name,Address,phone){
    this.Name = name;
    this.Address = Address;
    this.phone = phone;
 }
 srartWark() {
    console.log(this.name,'srartWark');
 }
}

class teamMember{
name;
Address = 'Bd';
constructor(name,Address){
    this.name = name;
    this.Address = Address;

}
}

class sppourt extends teamMember{
    groupSupportTime;
    designationa = 'support Wabe Instractor';
    constructor(name,Address,time) {
        super(name,Address)
        this.groupSupportTime =time;

    }
}

const Rahul = new sppourt('Rahul',135,2)
console.log(Rahul);