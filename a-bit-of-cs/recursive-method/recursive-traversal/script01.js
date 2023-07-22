let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };


  function sumSalaries(department){
    // if Array then base case
    if(Array.isArray(department)){
        return department.reduce((accuSum, current) => accuSum + current.salary, 0);
    }
    /// if not Array i.e. if object then go for obj's values 
    else{
        let sum = 0;
        for(let subDep of Object.values(department)){
            sum += sumSalaries(subDep);
        }
        return sum;
    }
  }

  console.log(sumSalaries(company))