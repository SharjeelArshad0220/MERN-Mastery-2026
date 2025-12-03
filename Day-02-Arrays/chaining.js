const candidates = [
    { name: "Ali", skill: "React", exp: 3 },
    { name: "Saad", skill: "Node", exp: 1 },
    { name: "Hamza", skill: "React", exp: 5 },
    { name: "Bilal", skill: "React", exp: 1 },
    { name: "Ayesha", skill: "Angular", exp: 4 }
];

let passed = candidates
.filter(candidate => 
    { 
        return candidate.skill === "React" && candidate.exp > 2; 
    })
    .map(hired => 
        {
             return `HIRED:${hired.name}`; 
        });
console.log(passed);
