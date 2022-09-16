const aCar = {
    owner : "Joe Bloggs",
    address : "3 Walkers Lane",
    previous_owners: [ {
      name: "Pat Smith",
      address: "1 Main Street",
    }, {
      name: "Sheila Dwyer",
      address: "2 High Street"
    }
    ],
    type : {
      make: "Toyota",
      model: "Corolla",
      CC: 1.8
    },
    features: ["Parking assist", "Alarm", "Tow-bar"],
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
  console.log("It is a red car, " + aCar.mileage + " mileage, with a " + aCar.colour.interior.texture + " interior.");
  console.log("First owner : " + aCar.previous_owners[0].name);

  
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]);
  }

  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
  }

  for (let p in aCar.type) {
    console.log(p.toUpperCase() + " = " + aCar.type[p]);
  }