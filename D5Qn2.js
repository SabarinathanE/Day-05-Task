// Resume data in JSON Format/ iterate over all lopes (for,for in, for of, forEach)?

let resume = [{
    "Profile"    : {
        "Name"   : "Sabarinathan",
        "Age"    : "25",
        "city"   : "Thiruvarur",
        "Degree" : "B.E Aeronautical",
    },
     
        "Expertise" : {
            "Software" : ["CATIA", "AUTOCAD", "JS" , "Node.Js"],
        },

        "SocialHandle" : {
             "LinkedIn" : "hdgh",
        },

        "Contact" : {
            "Mobile" : "7094192047",
            "E-mail" : "sabarielangovan13@gmail.com",
        },

        "Experience" : [{
                "Intern" : "Engineer",
                "CompanyName" : "BaeHaL",
                "Position" : "Engineer",
                "Year" : "Mar - Oct 2022",
                "Work" : "Worked as a design Engineer in 'Hindustan Aeronautics Limited' as a Intern to create Cockpit design, Fuselage design",
            },
            {
                "Professional" : "Senior Engineer",
                "CompanyName" : "BaeHAL",
                "Year"        : "Oct - Aug 2022/2023",
                "Work"        : "Designed Parts for Fighter Aircraft (mirage), using Catia V5 Software",
            }],

            "Education" : {
               "College" : {
                "Passed Out" : "2016 - 2020",
                "Institution" : "Jeppiaar Engineering College",
                "Degree"      : "B.E Aeronautical Engineering",
                "Percentage"  : "74%",
               },
            
               "HigherSec" : {
                "PassedOut" : "2014 - 2016",
                "School"   : "S.R.V",
                "Major"    : "Maths Biology",
                "Percentage" : "92%"
               },
               
               "School" : {
                "PassedOut" : "2014",
                "School" : "Neelan",
                "Percentage" : "94"
               },
            },

            "Language" : {
                "Tamil" : "Both Writing and Speaking",
                "English" : "Good in Writing"
            },
}]

//for
for (i = 0; i < resume.length; i++){
    console.log(resume[i]);
}

//for in
for (let key in resume) {
  console.log(resume[key]);
 }

 //for of
for (let res of resume){
    console.log(res);
}

// forEach
 resume.forEach(function(res1, index, array) {
    console.log(res1)
 }
 )