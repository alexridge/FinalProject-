# FinalProject-

# Today in History [![Code Climate](https://codeclimate.com/repos/54031e06e30ba06e940095e2/badges/543991ade3cec0100898/gpa.svg)](https://codeclimate.com/repos/54031e06e30ba06e940095e2/feed) [![Test Coverage](https://codeclimate.com/repos/54031e06e30ba06e940095e2/badges/543991ade3cec0100898/coverage.svg)](https://codeclimate.com/repos/54031e06e30ba06e940095e2/feed)
## [http://bunch-ldn.herokuapp.com/](http://bunch-ldn.herokuapp.com/)


###What is Today in History?

**Today in History** Gives you 43 events that happened on today's date in the past. It also gives you the opportunity to save your favourites events on you personal profile and filter them through characteristics. And if is not enought, you can change the date for anyone you want!

---

###Screenshots

![Bunch Home](/app/assets/images/screenshots/bunch-home.png?raw=true "Bunch main page")

![Bunch Map](/app/assets/images/screenshots/bunch-map.png?raw=true "Bunch map results")

---

###Development

**Today in History** was built in less than two weeks as part of the 12-week [Makers Academy] coding curriculum.

#### Meet the team:
  + [Alex Ridgeway](https://github.com/alexridge)
  + [Naomi Starr]()
  + [Matthew Barber]()
  + [Leon Peterkin]()
  + [Valerio Franchi](https://github.com/Mahasiddha95)

####Technologies
Combining front-end mapping and back-end algorithm work, **Today in History** gave us the opportunity to use all the tools we'd learned in the previous 10 weeks at Makers Academy.


**Coding tools:** JavaScript, React, Mongodb, Express

**Testing tools:** Jest & Cypress

####APIs
**Today in History** uses Axos to fetch datas from a Wikipedia API.

During the research phase we also investigated various Google APIs and we found the Wikipedia one to be perfect suit for the project.

####Agile
**Today in History** was managed, designed and built using agile methodologies.
- We determined our MVP and prioritised tasks to achieve it within the first three days.
- We held standups at the beginning and end of every day to discuss issues and adjust the code.
- We pair-programmed at all times, with the team's odd number allowing for a trio or a roving member as required. Pairs were changed regularly to maximise code understanding.
- We used Github for version control, using multiple branches and merging regularly to minimise conflicts.
- We ended every day with a short refactoring session to keep the code clean.

####Next steps
With further development time we would add the following features to **Today in History**:
- Adding Videos and more content for the user.
- Add an onsite chat.
- Incorporate Foursquare check-in data to better filter events and content based on the preferencies of each user.
- Includes likes and comments. 

---

####How to run tests

```shell
git clone https://github.com/thejennywang/bunch.git
cd FinalProject-
rspec
cucumber
open spec/jasmine/specrunner.html ???
```

[Makers Academy]:http://www.makersacademy.com/
[Google Maps Distance Matrix API]:https://developers.google.com/maps/documentation/distancematrix/
[Wikipedia APIs]: https://www.mediawiki.org/wiki/API:Main_page

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Dependencies installed

Run the following command within the Server and Client folders of the project:

```
npm install
```

Otherwise you can install them using the following command in the Server folder:

```
npm install mongodb express cors dotenv
```

Install Cypress for testing: 

```
npm install cypress
```
