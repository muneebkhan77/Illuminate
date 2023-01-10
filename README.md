# Illuminate
Abstract— This report is based on the development of the survey service platform Illuminate. This main audience for this platform is the young and emerging talents in the field of computer science who are struggling to find which skills are in demand for the recent job market. The professionals who are well versed in the computer science field are asked to fill in a questionnaire. The data that we collect from the professionals are then visualized in the form of bar charts, pie charts and stacked plots etc. The data dashboard will help the students decide on which skills, language or platforms to choose. The platform also presents all the jobs related to the field and the relative job descriptions to give an idea of what the employers require for specific job roles. 

I. INTRODUCTION 
 
A. Problem Statement 
 
     The field of computer science is ever emerging and continuously changing. To track which programming languages and platforms etc. are in demand is quite a task these days, especially for those who are breaking into this field as fresh graduates. For this students and recent graduates have to remain up to date with the newer technologies introduced. For example, Kubernetes is a new technology that was introduced in 2015 which provides the automation of operational tasks of container management. This technology is getting popular with every passing day. Furthermore, there is a large gap between all the skills that are available and the skills that are highly demanded and appreciated by the employers 
 
B. Objectives 
 This is where Illuminate comes in to rescue the students from the difficult journey that lies ahead of them 
 
•	Illuminate bridges the gap between the skills that are available and the skills that the employers or companies highly require from their prospective employees 
•	The platform analyzes the data received from the working professionals and visualize these statistics in a manner that is understandable, and value added for the students 
•	The students are also able to search jobs and the relative job roles to understand more about the companies thought process and what they desire from 
them 
 
C. MVC Architecture 
 ![image](https://user-images.githubusercontent.com/64001052/211506682-b616d5a3-61fa-43f3-95b4-6d99e110e550.png)

  
Figure 1: MVC Architecture Diagram 
     The Model view controller (MVC) shown in Fig (1) for our application is a software design pattern used for developing user interfaces. It divides the program logic into three interrelated elements. i.e.  
 
●	Model 
●	View 
●	Controller 
 
     MVC separates the architecture component and is designed to handle specific development aspects of an application. MVC separates the business logic and presentation layer from each other. Nowadays, MVC architecture is used for both web development and designing mobile applications. 
 
D. Restful Architectural Style 
 
     Communication between the client and server is done using the rest architectural style. Express.js takes care of the restful API architecture. The method POST is used to submit data typically used to create new entities and edit already existing new entities, whereas the GET method by which we are reading the data from the external web service.[7] 
 <img width="519" alt="image" src="https://user-images.githubusercontent.com/64001052/211507207-c6ddbe59-e1ef-428c-8010-12cb9b1f6b5e.png">

 
E.    Illuminate, the survey service platform was an extensive project with a lot of milestones to achieve and a lot of new technologies to implement. Therefore, to plan and execute the entire project we used the Agile Scrum methodology to effectively complete the project within the due date. We have defined product backlogs for each of our sprint cycle. The priority tasks are given preference in the product backlogs. Usually, a sprint cycle can cover up to two to four weeks but to cover our deadlines we have set them to two weeks. 
 
F. Scrum Timeline: 
 
     The daily meeting that takes place to prioritize and track progress is known as scrum. We will have these meetings to cover any bottleneck that we encounter in the development  
     Review meeting: At the end of each sprint, a review meeting where we make a reflection on our performance and review the sprint backlog (work done during that sprint), if for any reason an item of 
the backlog is not covered it is added to the next sprint cycle  
 
Sprint Cycles: 
 
We have added four scrum cycles for our project 
 
Sprint Cycle 	Timeline 
Sprint Cycle 1 	27 September-11 October 
 
Sprint Cycle 2 	11 October-25 October 
 
Sprint Cycle 3 	25 October-08 November 
 
Sprint Cycle 4 	08 November-22 November 
 
 
 
G. Schedule 
 
II.  PROJECT DESCRIPTION AND DISCUSSION 
 
A.	Function provided by the service: 
 
     The Illuminate web service has few functions which are useful to the students from Concordia who are interested in programming and want to take their career towards the programming field. The main function that is provided by Illuminate is the dashboard which contains the data analytics of data sets collected using the survey form. This dashboard has all the data visualized in different graphs which helps students to make their choice accordingly. As this project collects data on various programming languages, frameworks and cloud technologies from the survey form provided to the IT professionals and companies, all this data is perfectly visualized in the dashboard for each category there is a graph that represents the data. 
      This project also provides students to search for the jobs available in the market and they can also view the technologies and programming languages required for the roles available in the market. All this data of jobs collected are from the Canada location. These jobs are for roles like software developer, the role in which different companies use different technologies and programming languages which can be viewed here. As the time changes new technologies and programming languages come into the market as well as many companies will also get updated with these technologies and expect their workers to have those skills. As students are unaware of these things Illuminate will help them with these dashboard and job search functions to be updated and choose what they like. 
 
 
B.	Architectural Design: 
 
1) Data Model Design 
 
All the system data stored in NoSQL database with the models are shown in Figure 1. 
 
 ![image](https://user-images.githubusercontent.com/64001052/211507423-967dfb9b-ecc7-47e1-aaf7-b4ef7a4b0c08.png)

  	 
Figure 4: Data Model 
The data model is a model that defines the attributes and the respective data types. In user the attributes are mentioned with the string as a data type, and it is same defined as for the job search and forms and these are all the data schemes. 
 
2) Use-case Diagram: 
 
     As we see in the use case diagram, the application is accessible for a regular user and a professional. The professional here refers to the senior IT employees, who fills the survey form for the project which is used in data visualization.  
     The professional employees were asked to complete the form which has a set of questions about the technologies and programming languages, and they are required to choose the options provided for each question. 
     Users can access the application and services provided by the application. Users need to initially register to the application in order to use the services provided by the application and then login using the login credentials. Users can also reset the password if at all they forget it. Users have access to the dashboard which has the data analytics of datasets collected from the forms filled by the professional employees. In the dashboard the data is visualized in different graph formats which will be more convenient to the user. Users can also access the job search function which lists the jobs available in Canada in the IT market. This job search function also provides the data of which programming language and technologies are required for each position and helps in better understanding of the job market and their requirements. 
     The forms completed by the professional employees are collected and stored in NoSQL format in the database. All the user data is collected in the database including registration information and login information. Database is used to provide the data analytics and data visualization which is shown in the dashboard. 
 
3) Activity Diagram 
 
     As Illuminate provides just a couple of services, the activity diagram is just according to that. When a user enters the application initially, they need to enter the login credentials to use the services provided by the application. 
 
 
![image](https://user-images.githubusercontent.com/64001052/211508144-c1c00e1e-5216-494d-bf4b-c504589a9514.png)

	Figure 5: Use case Diagram 	
	
![image](https://user-images.githubusercontent.com/64001052/211507700-67575767-0bb2-4d53-87c8-d493d79e773a.png)
	
	Figure 6: Activity Diagram 
 
 
     Then users can access services like dashboard and job search. The dashboard provides the information about survey analytics and job search will give the information about the current job requirements about programming languages and technologies. Users can log out of the application when they are finished with the services. 
 
4) Sequence Diagram 
 
   The sequence diagram provides the information about the communication between the user and the database. When a user enters the login credentials the database validates the username and password entered by the user, if the login information is provided correctly then the database sends a message of login verified and the user can enter the application to use the services. 
 
 ![image](https://user-images.githubusercontent.com/64001052/211508191-7503be12-3413-4e90-8ab0-cda937415867.png)


Figure 7: Sequence Diagram 
 
 
     If the user enters wrong credentials, then the database sends a message of invalid credentials and asks the user to re-enter the credentials. If at all they forget the credentials they can go to the forget password and change the password. After entering the application, if they request the data about the dashboard or job search then the database responds to it by displaying the data which is regularly updating based on the inputs.  
 
 
5) Technical Implementation Details 
 
a)	Frontend 
 
      To make a responsive and extensible frontend design we have used the ReactJS library as it offers a virtual DOM and server-side rendering it is best suitable for this project and it runs over NodeJS.[8] It designs simple views for each state. It updates and renders the right components whenever the data updates. We opted for ReactJS for frontend because it provides high quality user interfaces through its declarative components. 
     The styling of our web application is done using Bootstrap and Material-UI frameworks because they provide high quality visuals by adding classes to the elements. 
 
b)	Backend 
 
     For backend we used NodeJS which is a runtime environment based on JavaScript that executes code and communicates with the operating system. The NodeJS ecosystem has many resources with more than one million packages in the npm and every week there will be publications over 10,000. It also has a larger developer community so that if we get stuck somewhere we can easily get solved.  
     ExpressJS is a backend development JavaScript library which is used for developing RESTful APIs, responsible for accepting requests from the frontend and sending appropriate responses. We have several HTTP methods and middleware functions we can use, which helps in creating APIs with ease.
 
c)	MongoDB 
 
     As we must store a lot of data in NoSQL format, 
MongoDB is best to manage the NoSQL data. We don’t need to predefine the schema when we use NoSQL. As it uses a JSON like format to store the documents, we do not need to normalize the data. 
     For defining database schema, we are using Mongoose JS library which acts as a MongoDB object modeling for NodeJS. With Mongoose, we can easily define schemas for databases on NodeJS and we can apply constraints on our collections, as well as translate the code and represent from Mongo to NodeJS. 
d)	Cloud Implementation 
 
     The web application created should be available on the internet so that users from anywhere can access our application and use the services. So, the application is hosted on AWS EC2. As the setup of an instance is easy and it is 
scalable if required.  
 
     A free-tier EC2 instance is selected which has 1GB RAM, 30GB memory and 1 vCPU to host the application which has all the basic requirements. Security groups are selected such that it opens the ports 3000 as the frontend of our application is running on port 3000 and port 27017 is also provided for MongoDB. The source code is in S3 as well as in GitHub. The code is imported, and all the frameworks are downloaded to the instance. Running the code on the instance will allow access to the application from the internet using the public IP address of the instance. 
e)	Docker 
 
     Docker allows us to build, test and deploy the application quickly. So, docker is used to create the containerized image. As the application has frontend and backend, there are two images one for frontend and other for backend. There is an image for Mongo in docker hub which can be used for free. There are different versions of Mongo images available in the docker hub according to our project the required image is downloaded. To keep all these images in the same network a YML file is used. 
