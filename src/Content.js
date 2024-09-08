let data=[
    {
        title:"React",
        definition: "React is a JavaScript library for building user interfaces, developed and continues to be maintained by Facebook, designed to work on single-page-application and it is fully based on reusable pieces of code referred to as COMPONENTS .React optimizes performance by using a virtual DOM, which updates only the parts of the DOM that have changed instead of modifying the entire DOM.",
        why: `React was needed even when JS was doing everrything because 
        1. React is declarative while JS is imperative.
        2. React re-utilizes code, JS doesn't.
        3. React does not re-renders DOM everytime a change is made, JS does leading to poor performance.
        4. React is ideal for SPA(single page application).`,
        components:`Components are reusable pieces of code, They are created either in the same folder or separate and exported from there and imported to a common place from where they are rendered.

        Exporting can be done in 2 ways-:
         1. Named Export -: Allows Modular level export.
         2. Export Default -: Single file export.`,
     
            gettingStarted:`Step-1:  Install Node.js from nodejs.org.
        Step-2: Create a new React project by using Create React App (npx create-react-app foldername)
        Step-3: Command line- npm start (to open react app in browser) `   ,
        structure : `In a React project, there are primarily two main working folders: src and public.
                          =>Public Folder: Contains the index.html file, which is the entry point for the entire UI. The root element in this
                         HTML file is where  we mount our React components.
                          =>Src Folder: Where all the React components are created. These components have either a .jsx or .js extension.
        Within the src folder, there are two key files:
        =>App.js: This file is responsible for rendering all the components.
        =>Index.js: This file renders the App component into the root element defined in index.html.`                 
    }
  
]

export default data