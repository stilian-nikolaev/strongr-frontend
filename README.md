
<img src="https://user-images.githubusercontent.com/74594156/177553319-ad7ebdc1-936b-4596-ac44-e5f8fdaf2d66.jpg" align="left" alt="strongr-logo" width="100">
<h1>Strongr / frontend</h1> 

<br/>

[App link](https://strongr-workout-planner.netlify.app/)

## Project Description
- Frontend part of the complete application - clients create an account and compose their workouts as desired
- Uses the Strongr api
- All CRUD operations for workouts, exercises and sets
- Intuitive user experience
- Clean and reusable components
- Notifications and error handling
- Customizable profile and color theme
- Simple and understandable project architecture

## Tech stack
- React - framework of choice
- React query - optimal data synchronization
- MobX - global state management
- Mantine - component library
- formik - form processing
- yup - validate form data
- axios - simplify http requests

## Functionality
- On the guest home page users can log in / sign up
- After being authenticated users can start creating their workouts
- There is a page all workouts(users home page) and a page for each workout showing all of the exercises and sets associated with it
- When hovered over an exercise a menu button shows up, containing different actions such as adding sets, editing exercise or deleting it
- On profile page users can change their avatar and background color or edit their name and activity
- On the settings page users can change their password, delete their account or change the color theme
- When changing workouts, profile data, passwords or deleting account or a workout an appropriate notification is shown and a confirmation modal if necessary
