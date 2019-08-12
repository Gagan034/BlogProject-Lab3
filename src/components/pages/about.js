import React from "react";



const divStyle = {
  margin: '60px',
  border: '10px double LightCoral'
  
};

const style = {
  backgroundColor: 'DarkSlateGrey',
  padding: '10px 105px 10px 105px'
};

const cStyle = {
  fontSize: '20px',
  textAlign: 'center',
  color: 'white'
};



function About() {
  return (
    <header>
      <br/><br/><div style = {style}>
      <div style={divStyle}>        
      <p style={cStyle}> Gagandeep Kaur <br />My name is Gagandeep Kaur. I am 21 years old. I immigrated to Canada about 2 years ago. Here, I am enrolled in Computer Programming at Georgian College. I enjoy designing Websites and playing around with code along with reading books. I work as a Coop Ambassador in Coop and Career department in Georgian College to help fellow students with their job search strategies and to get their Resume and Cover Letter tailored. </p>
      </div>
      <div style={divStyle}>
        <p  style={cStyle}> Dhruvi Tank <br/> My name is Dhruvi Tank. I am 19 years old, originally from India. About 2 years ago I came to Canada to study Computer Programmer Analyst at Georgian College. Besides learing new Computer languages and new technologies I enjoy reading Books, and solving reasoning questions. I work as Customer Service Representative at Rogers. I also enjoy helping people to get what they want.  </p>
      </div>
      <div style={divStyle}>
        <p style={cStyle}> Dante <br/> My name is Dante Coelho Cerqueira Santos. I am 34 years old, originally from Brazil. I moved to Canada about 2 years ago. I am enrolled in Computer Programming at Georgian College and this is the best experience I have been having. I really like to play musical instruments,  watch movies and having different challenges in programming, specially in ASP.NET.
        </p>
      </div>
      <div style={divStyle}>
        <p style={cStyle}> Thoung Tran <br/> I am Thoung Tran, student of Computer Programming at Georgian College. An international student,moves here about 2 years ago to learn new computer languages and enahnce computer skills with new living place and people. I love working with new technologies and knowing how it works. 

        </p>
        
      </div>
      </div>
      </header>
   )
  };

export default About;




// function Home() {
//   return (
//     <header className="home-cta">
//       <h1>
//         The Adventure of a Lifetime
//         <br />
//         <small>It was a rainy day in Pizzaville...</small>
//       </h1>
//     </header>
//   );
// }