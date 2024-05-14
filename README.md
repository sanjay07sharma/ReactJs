# ReactJs

# Parcel

Dev Build
Local Server
HMR = Hot Module Replacement.
File Watching Algorithm written in c++
Caching - Faster Builds.
Image Optimization
Minification.
Bundling.
Compressing.
Consistent Hashing --- read about it parcel.com 
Code splitting
Differential Bundling. - support older browser
Diagnostics
Error Handling
HTTPs
Tree Shaking- removes unused code
Different buld for dev and prod build

# Food-Point 

/*
Componenets required":

1 Header
    - Logo
    - Nav braces
2 Body
    - Search
    - Restraunt container 
        - Restraunt cards // when there is cnace of code repating build separate component\
            - image
            - name of rest
            - star rating
            - cusinies
            - estimate time 
3 Footer
    - Copyright
    - Links
    - Adress
    - Contacts
*/



# React Hooks

Normal Js utility function.
-useSate()  - super powerful react variables.
            - when ever the state varibale update react rerenders the component.
-useEffect()

Two tpyes of routing:
1) client side
2) server side


# Bundling (All serves the same purpose to lessen the load on single JS file)

- code splitting
- chunking
- dynamic bundling
- lazy loading


# Redux Toolkit

- Intall @redux/toolkit and react-redux
- Build our store
- Connect our store to our app
- Creat (cart slice)
- dispatch(action)
- Selector


#Types of testing a developer can do
- Unit testting
- Integration testing
- End to end testing e2e


#Setting up testing in our app
- Installed react-testing libray
- Installed jest
- Installed babel depenncies
- Configure babel
- Configure parcel config file to disable default bable transplation
- To run --> npm run test
- Jest configuration
- Install jsdom library (to be installed separaely for jest 28 and above)
- Install preset-react to make Jsx work in test cases.
- Include @babel/preset-react to my babel config.
- Include @testing-library/jest-dom 
