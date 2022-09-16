const aCar = {
    owner : "Joe Bloggs",
    type : {
      make: "Toyota",
      model: "Corolla",
      CC: 1.8
    },
    registration : { 
      year: 201,
      countyCode: "WD",
      number: 1058
  }
  };
  
  aCar.mileage = 10000;
  aCar.colour = {
    exterior: "red",
    interior: {
      texture: "Leather",
      shade: "cream"
    }
  }
  console.log(aCar.owner + ' drives a ' + aCar.type.make);
  console.log(aCar.owner + "' car registration number is " + aCar.registration.year + "-" + aCar.registration.countyCode + "-" + aCar.registration.number);
  console.log("It is a red car, " + aCar.mileage + " mileage, with a " + aCar.colour.interior.texture + " interior.")